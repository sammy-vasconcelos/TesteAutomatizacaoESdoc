import Gerencianet from 'gn-api-sdk-node'
import options from '../../config/paymentConfig/PaymentAPIConfig.js'
import payModel from '../../models/payModel.js'
import paymentStatus from '../../enum/paymentStatusEnum.js'
import responseStatus from '../../enum/responseStatusEnum.js'


async function getPaymentStatus(req, res){
try{
    let params = {
        txid: req.params.txid,
    }
    
    const gerencianet = new Gerencianet(options)
    
    const response = await gerencianet.pixDetailCharge(params)
    switch(response.status){
        case responseStatus.paid:
            await payModel.findOneAndUpdate(params, {status: paymentStatus.paid})
            break;
        case responseStatus.notPaid:
            await payModel.findOneAndUpdate(params, {status: paymentStatus.notPaid})
            break;
        default:
            await payModel.findOneAndUpdate(params, {status: paymentStatus.expired})
            break;
    }
        
    res.status(200).json({message: response})
}
    catch(err){
        res.status(500).json({code: "Failure", error: err}) 
    }
}
export default getPaymentStatus