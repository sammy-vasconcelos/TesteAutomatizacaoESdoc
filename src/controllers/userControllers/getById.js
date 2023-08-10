import cnpjModel from "../../models/cnpjModel.js";
import userModel from "../../models/userModel.js";

async function getByIdController(req, res) {
  const userId = req.params.userId; 

  try {
    const user = await userModel.findById(userId);
    const cnpj = await cnpjModel.findOne({ userId: userId });
    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }
    res.status(200).json({ message: {user, cnpj}});
  } catch (error) {
    return res.status(500).json({ message: "Erro ao buscar usuário" });
  }
}

export default getByIdController;