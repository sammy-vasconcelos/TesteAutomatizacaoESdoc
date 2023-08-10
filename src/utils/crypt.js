import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class Crypto {

    async cryptPass(password) {
        const salt = await bcrypt.genSalt(12);
        const passwordHash = await bcrypt.hash(password, salt);
        return passwordHash;
    }

    createToken(user, timer) {
        const secret = process.env.SECRET;
        const token = jwt.sign({
            id: user._id.toString(),
        },
            secret,
            { expiresIn: timer },
        );
        return token;

    }

    expirationToken(token) {
        const secret = process.env.SECRET;
        const decoded = jwt.verify(token, secret);
        const expirationTime = new Date(decoded.exp * 1000);
        const currentTime = new Date();
        const timeDiff = expirationTime - currentTime;
        const minutesRemaining = Math.floor(timeDiff / (1000 * 60));

        return minutesRemaining;
    }

    checkPassWord(password, userPassword) {
        return bcrypt.compareSync(password, userPassword);
    }

    logoutToken(idUser) {
        try {
            const secret = process.env.SECRET;
            const deleteToken = jwt.sign({ id: idUser }, secret, { expiresIn: 2 },);

            console.log("Token expirado com sucesso");

            return deleteToken;

        } catch (error) {
            console.log(error);
            return res.status(500).json({ code: "Failure", message: "Erro interno do servidor" });
        }
    }
}

export default Crypto;