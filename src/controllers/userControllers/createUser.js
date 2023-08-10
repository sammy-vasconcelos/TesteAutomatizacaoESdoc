import userModel from "../../models/userModel.js";
import Crypto from "../../utils/crypt.js";
import GeneratePass from "../../utils/passRandom.js";
import GetDate from "../../utils/date.js";
import sendConfirmEmail from "../../utils/confirmEmail.js";
import transporter from "../../config/nodemailerConfig.js";

async function createUserController(req, res) {
    const generatePass = new GeneratePass();
    const password = await generatePass.generatePass();

    const getDate = new GetDate();
    const date = getDate.getDate();

    try {
        const user = {
            userName: req.body.userName,
            userCpf: req.body.userCpf,
            userAddress: req.body.userAddress,
            userPhone: req.body.userPhone,
            userEmail: req.body.userEmail,
            userGender: req.body.userGender,
            userEthnicity: req.body.userEthnicity,
            howFindOut: req.body.howFindOut,
            userCategory: req.body.userCategory,
            password: password,
        };

        if (!user.userName) {
            return res.status(422).json({ code: "Failure", message: 'Nome obrigatório!' });
        }
        if (!user.userCpf) {
            return res.status(422).json({ code: "Failure", message: 'CPF obrigatório!' });
        }
        if (!user.userAddress) {
            return res.status(422).json({ code: "Failure", message: 'Endereço obrigatório!' });
        }
        if (!user.userPhone) {
            return res.status(422).json({ code: "Failure", message: 'Telefone obrigatório!' });
        }
        if (!user.userEmail) {
            return res.status(422).json({ code: "Failure", message: 'Email obrigatório!' });
        }
        if (!user.userGender) {
            return res.status(422).json({ code: "Failure", message: 'Gênero obrigatório!' });
        }
        if (!user.userEthnicity) {
            return res.status(422).json({ code: "Failure", message: 'Grupo étnico obrigatório!' });
        }
        if (!user.howFindOut) {
            return res.status(422).json({ code: "Failure", message: 'Como achou o evento obrigatório!' });
        }
        if (!user.userCategory) {
            return res.status(422).json({ code: "Failure", message: 'Categoria obrigatório!' });
        }


        const userExists = await userModel.findOne({ 'userEmail': user.userEmail });
        if (userExists) {
            return res.status(422).json({ code: "Failure", message: "Esse e-mail já está cadastrado, por favor, tente outro." });
        }
        const crypt = new Crypto();

        const passwordHash = await crypt.cryptPass(user.password);

        const userHash = new userModel({
            userName: user.userName,
            userCpf: user.userCpf,
            userAddress: user.userAddress,
            userPhone: user.userPhone,
            userEmail: user.userEmail,
            userGender: user.userGender,
            userEthnicity: user.userEthnicity,
            howFindOut: user.howFindOut,
            userCategory: user.userCategory,
            password: passwordHash,
        })

        const responseUser = await userModel.create(userHash);
        const options = await sendConfirmEmail(responseUser._id, password);
           transporter.sendMail(options,
              async function (error, info) {
                    try {
                        if(error){
                            const deleteUser = await userModel.findByIdAndDelete(responseUser._id)
                            return res.status(422).json({code: "Failure", message: "Erro ao enviar email, tente novamente.", error});
                          
                        }
                        res.status(201).json({ code: "Success", responseUser, message: "Usuário criado com sucesso e email enviado!" });
                    } catch (error) {
                       return res.status(500).json({code: "Failure", message: "Erro interno do sevidor", error});
                    }
                })
            
    } catch (error) {
        console.log(date + ':' + error);
        return res.status(500).json({ code: "Failure", message: "Erro interno do servidor" });
    }

};

export default createUserController;