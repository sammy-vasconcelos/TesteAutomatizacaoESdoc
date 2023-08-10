import mongoose from "mongoose";

const {Schema} = mongoose;
const object = {
    type:String,
    required:true,
    lowercase:true,
}

const createdAt = {
    type:Date,
    default:Date.now,
}

const PaySchema = new Schema({
    pixId: object,
    status: object,
    value: object,
    txid: object,
    QRCodeImage: {type:String, required: true},
    copiaecola: {type:String, required: true},
    createdAt: createdAt,
    userId: { type: Schema.Types.ObjectId, ref: "userModel" },
    }, 
    {timestamps: true}
);

const payModel = mongoose.model("payModel", PaySchema);

export default payModel;