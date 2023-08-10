import Gerencianet from "gn-api-sdk-node"
import options from "../../config/paymentConfig/PaymentAPIConfig.js"
import paymentStatus from "../../enum/paymentStatusEnum.js"
import payModel from "../../models/payModel.js"
import userModel from "../../models/userModel.js"
async function CreateCharge (req,res){
    try{
        const gerencianet = new Gerencianet(options)
        const {id, name, cpf, value} = req.body
        
        if(!id) return res.status(422).json({code: "Failure", message: "id is missing"})
        if(!name) return res.status(422).json({code: "Failure", message: "name is missing"})
        if(!cpf) return res.status(422).json({code: "Failure", message: "cpf is missing"})
        if(!value) return res.status(422).json({code: "Failure", message: "value is missing"})
        const chargeBody = {
            calendario: {
                expiracao: 10368000
            },
            devedor: {
                cpf: cpf.replace(/\D/g, ''),
                nome: name
            },
            valor: {
                original: parseFloat(value).toFixed(2)
            },
            chave: process.env.CHAVE_PIX,

        }

       const response = await gerencianet.pixCreateImmediateCharge([], chargeBody)
       const params = {
        id: response.loc.id
       }
       const qrcodepix = await gerencianet.pixGenerateQRCode(params)
       const paymentData = {
        userId: id,
        pixId: response.loc.id,
        QRCodeImage: qrcodepix.imagemQrcode,
        txid: response.txid,
        copiaecola: qrcodepix.qrcode,
        status: paymentStatus.notPaid,
        value: value,
    }   

        const userDoesntExists = await userModel.findById(id)
        if(userDoesntExists === null || userDoesntExists === undefined){
            return res.status(400).json({code: "Failure", message: "User doenst exists."})
        }
        const paymentAlreadyExists = await payModel.findOne({'userId': id})
        if(paymentAlreadyExists !== null && paymentAlreadyExists !== undefined){
           return res.status(400).json({code: "Failure", message: "user already has a linked payment"})
        }
        const payment = await payModel.create(paymentData)
        const user = await userModel.findOneAndUpdate({_id: id}, {payStatus: payment._id})
        return res.status(201).json({
              code: "success",
              message: payment,
              test: qrcodepix
              })
    }catch(error){
        console.log(error)
        res.status(500).json({code: "Failure", message: error})
    }


}
export default CreateCharge