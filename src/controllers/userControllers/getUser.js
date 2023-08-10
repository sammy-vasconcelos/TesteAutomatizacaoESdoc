import userModel  from "../../models/userModel.js";

async function getUserController (req, res){
    
    try {
        const user = await userModel.find().populate('payStatus');
        res.status(201).json({code: "success", message: user});
    } catch (error) {
        console.log(error);
        res.status(500).json({code: "Failure", message: "Internal server error"})
    }
}

export default getUserController;