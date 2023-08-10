import Crypto from '../../utils/crypt.js';
import userModel from '../../models/userModel.js';
import GetDate from "../../utils/date.js";

async function loginController(req, res){
    const getDate = new GetDate();
    const date = getDate.getDate();
    try {
        const email = req.body.userEmail;
        const pass = req.body.password;
        const crypt = new Crypto();

        if(!email){
            return res.status(422).json({code: "Failure", message: 'Email obrigatório!' });
        }
        if(!pass){
            return res.status(422).json({code: "Failure", message: 'Senha obrigatório!' });
        }

        const user = await userModel.findOne({ 'userEmail': email});

        if(!user || user == null){
            return res.status(404).json({code: 'Failure', message: "Usuário não encontrado!"});
        }
        const checkPass = crypt.checkPassWord(pass, user.password);
        if (checkPass == false) {
            return res.status(422).json({code: 'Failure', message: "Usuário ou senha inválidos!"});
        }

        if(user.userEmail == email && checkPass == true){
            const token = crypt.createToken(user, 900);
            const timeExpiration = crypt.expirationToken(token);
            return res.status(200).json({message: "Login feito com sucesso", "user":user,"token":token, "tempo de expiração": timeExpiration});
        }

    } catch (error) {
        console.log(date + ':' + error);
        return res.status(500).json({code: "Failure", message: "Não foi possível fazer o login" }); 
    }
}

export default loginController;