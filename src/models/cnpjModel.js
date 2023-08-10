import mongoose from "mongoose";

const {Schema} = mongoose;

const object = {
    type:String,
    required:true,
    lowercase:true,
}

const userId ={
    type: String,
    required: true,
}

const createdAt = {
    type:Date,
    default:Date.now,
}

const CnpjSchema = new Schema({
    userId: userId,
    cnpjName: object,
    cnpj: object,
    cnpjPhone: object,
    cnpjAddress:object,
    cnpjEmail: object,
    createdAt: createdAt,
    }, 
    {timestamps: true}
);

const cnpjModel = mongoose.model("cnpjModel", CnpjSchema);

export default cnpjModel;
