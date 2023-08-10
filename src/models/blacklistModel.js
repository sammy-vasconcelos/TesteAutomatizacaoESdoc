import mongoose from "mongoose";

const {Schema} = mongoose;
const token ={
    type: String,
    required: true,
}
const createdAt = {
    type:Date,
    default:Date.now,
}

const BlacklistSchema = new Schema({
    token: token,
    createdAt: createdAt,
    }, 
    {timestamps: true}
);

const blacklistModel = mongoose.model("blacklistModel", BlacklistSchema);

export default blacklistModel; 
 