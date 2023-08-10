import nodemailer from 'nodemailer';
import dotenv from 'dotenv'
dotenv.config()
/**
 * Essa é a descrição do Transporter
 * @example
 * transporter = enviarnodemailer
 */
class Transporter{
  constructor(){

    function transporter(params) {
      transporter = nodemailer.createTransport({
        host: process.env.EMAILACCOUNT, // TODO: Colocar email oficial na env
        service: 'hotmail',
        auth: {
          user: process.env.EMAILACCOUNT, // TODO: Colocar email oficial na env
          pass: process.env.EMAILPASS // TODO: Colocar senha na env
        }
      });
    }
     
  }


}

export default Transporter;