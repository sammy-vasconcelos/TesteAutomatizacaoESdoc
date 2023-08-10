import userModel from "../../models/userModel.js";
import GeneratePass from "../../utils/passRandom.js";
import Crypto from "../../utils/crypt.js";
import transporter from "../../config/nodemailerConfig.js";
import GetDate from "../../utils/date.js";

/**
 * Essa função pe feita para que o user consiga receber um email para efetuar a troca de senha
 * @param {string} req 
 * @param {string} res 
 * @returns Um email para trocar a senha
 * @throws #### Resposta de Sucesso
![SUCCESS](https://img.shields.io/static/v1?label=STATUS&message=200%20OK&color=<COLOR>)

Retorno esperado:

```json 
{
	"message": {
		"user": {
			"_id": "646f8fb49554966f60357b74",
			"userName": "flavia sousa",
			"userCpf": "01234567890",
			"userAddress": "rua das cerejeiras, 123",
			"userPhone": "85987654321",
			"userEmail": "flavia@email.com",
			"userGender": "feminino",
			"userEthnicity": "outro",
			"howFindOut": "instagram",
			"userCategory": "associação",
			"password": "pass",
			"payStatus": [],
			"createdAt": "2023-05-25T16:41:24.640Z",
			"updatedAt": "2023-05-25T16:41:24.640Z",
			"__v": 0
		},
		"cnpj": {
			"_id": "646f8ff19554966f60357b78",
			"userId": "646f8fb49554966f60357b74",
			"cnpjName": "associacao",
			"cnpj": "12315164648494",
			"cnpjPhone": "85123456789",
			"cnpjAddress": "rua da associacao",
			"cnpjEmail": "associacao@email.com",
			"createdAt": "2023-05-25T16:42:25.770Z",
			"updatedAt": "2023-05-25T16:42:25.770Z",
			"__v": 0
		}
	}
}
```
#### Resposta de Erro
![SUCCESS](https://img.shields.io/static/v1?label=STATUS&message=500&color=red)

Retorno esperado:
```json
{ 
	"message":  "Erro ao buscar usuário" 
}
```
 *  @throws res.status(404).json({ code: "Failure", message: "Usuário não encontrado!" });
*/
async function forgotPassController(req, res) {
    /**
     * @type {any}
     */
    const getDate = new GetDate();
    const date = getDate.getDate();
    try {
        const userEmail = req.body.userEmail;

        const generatePass = new GeneratePass();
        const password = await generatePass.generatePass();

        const user = await userModel.findOne({ 'userEmail': userEmail });
        if (!user) {
            
            res.status(404).json({ code: "Failure", message: "Usuário não encontrado!" });
        }
        const emailString = String(userEmail);

        let options = {
            from: "flavicastelocc@gmail.com",  //TODO: Colocar o email oficial
            to: emailString,
            subject: "Solicitação de mudança de senha",
            html: `<h1>Sua nova senha</h1> <br> ${password}`,

        };

       transporter.sendMail(options, async function (error, info) {
            if (error) {
                console.log(date + ':' + error);
                res.status(490).json({ code: "Failure", message: "Erro ao enviar o email", error })
            }
            const crypt = new Crypto();
            const passwordHash = await crypt.cryptPass(password);
    
            const responseForgotPass = await userModel.findByIdAndUpdate(user.id, {
                $set: {
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
                }
            });
            res.status(201).json({ code: "Success", responseForgotPass, message: "Senha alterada com sucesso!", info });
        })
        

       

    } catch (error) {
        console.log(date + ':' + error);
        return res.status(500).json({ code: "Failure", message: "Erro interno do servidor" });
    }


}

export default forgotPassController;