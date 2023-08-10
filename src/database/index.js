import { connect } from "mongoose";

async function connectionDB(){
    try {
        const atlas = process.env.ATLAS;
        await connect(atlas);
        console.log("Conectado ao Banco de Dados");
    } catch (error) {
        console.log(`Erro: ${error}`);
    }
}

export default connectionDB;