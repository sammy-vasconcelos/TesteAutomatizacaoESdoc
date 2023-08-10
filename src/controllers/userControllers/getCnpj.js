import cnpjModel from "../../models/cnpjModel.js"

async function getCnpjController (req, res){
    
    try {
        const cnpj = await cnpjModel.find();
        res.status(201).json({message: cnpj});
    } catch (error) {
        return res.status(500).json({ message: "Erro interno do servidor" });
    }
}

export default getCnpjController;