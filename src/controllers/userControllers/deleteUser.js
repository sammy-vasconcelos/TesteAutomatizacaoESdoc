import userModel from "../../models/userModel.js"
import payModel from "../../models/payModel.js"

async function deleteUserController(req, res){
    const id = req.params.userId
    const user = await userModel.findById(id).populate("payStatus")
    
    
    try{
        
        if(!user){
           return res.status(404).json({code: "Failure", message: "Usuário não encontrado."})
        }
        if(id == null || id == undefined){
            return res.status(404).json({code: "Failure", message: "Usuário não encontrado."})
        }
        if(user.payStatus == null){
            return res.status(422).json({code: "Failure", message: "Pagamento não solicitado."})
        }
        if(user.payStatus.status !== "aprovado"){
            return res.status(422).json({code: "Failure", message: "Pagamento não efetuado."})
        } else {
            const payId = user.payStatus._id
            const payment = payId.toString();
            const deletedPayment = await payModel.findByIdAndDelete(payment)
            const deleteUser = await userModel.findByIdAndDelete(id)
            return res.status(200).json({code: "Success", message: "Usuário deletado com sucesso", deleteUser})
        }

    }catch(err){
        console.log(err)
        res.status(500).json({code: "Failure", message: "Erro interno do servidor"})
    }
}
export default deleteUserController