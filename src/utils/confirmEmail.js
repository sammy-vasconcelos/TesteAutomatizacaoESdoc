import userModel from "../models/userModel.js";
import ticketPdf from "./puppeteerPdf.js";
import templateEmailConfirm from "./templateEmailConfirm.js";

async function sendConfirmEmail(userId, password){
  
    try {
        const pdf = await ticketPdf(userId);  
        const attachments = []
        for (let i = 0; i < pdf.length; i++){
            const attach = {
                filename: `Ingresso_dia_${27 + i}.pdf`,
                content: pdf[i]
            }
            attachments.push(attach)
        }

        const user = await userModel.findById(userId);
        const userEmail = user.userEmail;
        const name = user.userName.split(" ");
        const userName = name[0].charAt(0).toUpperCase() + name[0].slice(1);
        
        let options = {
            from: process.env.EMAILACCOUNT, 
            to: userEmail,
            subject: "Confirmação de inscrição",
            html: templateEmailConfirm(userName, password),
            attachments
        };    
        return options
       
     
    } catch (error) {
        return console.log("Error: " + error) 
    }
}   

export default sendConfirmEmail;

