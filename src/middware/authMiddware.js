import jwt from "jsonwebtoken";
import blacklistModel from '../models/blacklistModel.js';

async function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];
  console.log(token);

  try {
    if (!token) {
      return res.status(401).json({ msg: "Sem permissão para acesso! Token não fornecido" });
    }

    const tokenExists = await blacklistModel.findOne({ token }).exec();

    console.log(tokenExists);
    if (tokenExists) {
      return res.status(401).json({ msg: "Sem permissão para acesso! Logue novamente!" });
    }

    const secret = process.env.SECRET;

    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        return res.status(401).json({ msg: "Sem permissão para acesso!", err });
      }
      req.userId = decoded.userId;
      next();
    });
  } catch (error) {
    return res.status(500).json({ msg: "Erro ao verificar o token", error });
  }
}



export default verifyToken;