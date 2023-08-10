import transporter from "../config/nodemailerConfig.js";


class Transporter{
    /**
   * this is constructor description.
   * @param {string} userEmail this is arg1 description.
   * @param {string} password this is arg2 description.
   * @param {string} res this is arg2 description.
   */ 
    transporterForgotPass(userEmail, password, res){

        /**
         * @emits options
         */
        let options = {
            from: "flavicastelocc@gmail.com",  //TODO: Colocar o email oficial
            to: userEmail,
            subject: "Solicitação de mudança de senha",
            html: `<h1>Sua nova senha/h1> <br> ${password}`,
           
        };    
        
        /**
         * @returns {number}
         */
        transporter.sendMail(options, function (error, info) {
            if (error) {
                console.log(error);
                /**
                 * @throws error when não dá
                 */
                res.status(500).json({code: "Failure", message: "Erro ao enviar o email"})
            }

            console.log("Sent: " + info);
            res.status(200).json({code: "Success", message: "Email enviado com sucesso", userEmail})
            
            })
    }
}
export default Transporter;