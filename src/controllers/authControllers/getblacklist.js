import { now } from "mongoose";
import blacklistModel from "../../models/blacklistModel.js";
import GetDate from "../../utils/date.js";

async function getBlackList(req, res) {
    const getDate = new GetDate();
    const date = getDate.getDate();
    
    try {
        const blacklist = await blacklistModel.find();
        res.status(201).json({ code: "success", message: blacklist });
    } catch (error) {
        console.log(date + ':' + error);
        res.status(500).json({ code: "Failure", message: "Internal server error", error })
    }
}

export default getBlackList;