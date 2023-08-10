import blacklistModel from '../../models/blacklistModel.js';
import GetDate from "../../utils/date.js";

async function logout(req, res) {
  const getDate = new GetDate();
  const date = getDate.getDate();
  
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];

    if (token) {
      const tokenExists = await blacklistModel.findOne({ 'token': token });

      if (tokenExists) {
        return res.status(422).json({ code: "Failure", message: "Você já deslogou." });
      }
      const blacklistItem = new blacklistModel({ token });
      const responseBlacklist = await blacklistItem.save();
      res.status(201).json({ code: "success", responseBlacklist, message: "Token enviado com sucesso!" });

    } else {
      return res.status(404).json({ code: 'Failure', message: 'Token não encontrado' });
    }

  } catch (error) {
    console.log(date + ':' + error);
    return res.status(500).json({code: "Failure", message: "Erro interno do servidor" });
  }


}

export default logout;