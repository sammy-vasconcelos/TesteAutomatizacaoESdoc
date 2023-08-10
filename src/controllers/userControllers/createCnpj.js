import cnpjModel from "../../models/cnpjModel.js";

async function createCnpjController(req, res) {

    try {
        
        const cnpj = {
            userId: req.body.userId,
            cnpjName: req.body.cnpjName,
            cnpj: req.body.cnpj,
            cnpjPhone: req.body.cnpjPhone,
            cnpjAddress:req.body.cnpjAddress,
            cnpjEmail: req.body.cnpjEmail,
        }
        
        if(!cnpj.cnpjName){
            return res.status(422).json({code: "Failure", message: 'Nome da instituição obrigatório!' });
        }
        if(!cnpj.cnpjEmail){
            return res.status(422).json({code: "Failure", message: 'Email da instituição obrigatório!' });
        }
        if(!cnpj.cnpj){
            return res.status(422).json({code: "Failure", message: 'CNPJ da instituição obrigatório!' });
        }
        if(!cnpj.cnpjAddress){
            return res.status(422).json({code: "Failure", message: 'Endereço da instituição obrigatório!' });
        }
        if(!cnpj.cnpjPhone){
            return res.status(422).json({code: "Failure", message: 'Telefone da instituição obrigatório!' });
        }
        
        const cnpjExists = await cnpjModel.findOne({ 'cnpjEmail': cnpj.cnpjEmail });
        const userIdExists = await cnpjModel.findOne({ 'userId': cnpj.userId });
        if (cnpjExists) {
            return res.status(422).json({code: "Failure", message: "Esse e-mail já está cadastrado, por favor, tente outro." });
        }
        if (userIdExists) {
            return res.status(422).json({code: "Failure",message: "Esta pessoa já tem uma instituição cadastrada." });
        }
        
        const responseCnpj = await cnpjModel.create(cnpj);
        res.status(201).json({code: "success", responseCnpj, message: "Usuário com instituição criado com sucesso!" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({code: "Failure", message: "Erro interno do servidor" });
    }

};

export default createCnpjController;