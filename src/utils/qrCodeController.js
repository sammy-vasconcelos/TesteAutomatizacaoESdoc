import qrimage from "qr-image"
import QrcodeConfig from "../config/qrCodeConfig.js"

 async function qrCodeController(id){
    const cfg = new QrcodeConfig
    const path = cfg.localhost
    const idUser = id.toString();
    const URL = `${path}/validate/${idUser}`
    const qrCode = qrimage.imageSync(URL, {type: 'png'})
    return qrCode.toString("base64");
}
export default qrCodeController