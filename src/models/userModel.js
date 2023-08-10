                                                                                                                                                                                                            import mongoose from "mongoose";

const {Schema} = mongoose;

const object = {
    type:String,
    required:true,
    lowercase:true,
}

const pass = {
    type:String,
    required:true,
}

const createdAt = {
    type:Date,
    default:Date.now,
}

const UserSchema = new Schema({
    userName: object,
    userCpf: object,
    userAddress: object,
    userPhone: object,
    userEmail: object,
    userGender: object,
    userEthnicity: object,
    howFindOut: object,
    userCategory: object,
    password: pass,
    createdAt:createdAt,
    payStatus: {
        type: Schema.Types.ObjectId,
        ref: 'payModel'
      }
    }, 
    {timestamps: true}
);

const userModel = mongoose.model("userModel", UserSchema);

export default userModel;