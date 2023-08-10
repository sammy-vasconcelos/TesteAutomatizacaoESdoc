import payModel  from "../../models/payModel.js";
async function listChargesController (req, res){
    
    try {
        const pay = await payModel.find().populate('userId');
        return res.status(200).json({code: "success", message: pay});
    } catch (error) {
        console.log(error);
        return res.status(500).json({code: "Failure", message: error});
    }
}

export default listChargesController;