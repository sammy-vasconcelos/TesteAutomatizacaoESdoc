import forgotPassController from "./forgotPassController.js";
import getBlackList from "./getblacklist.js";
import loginController from "./loginController.js";
import logoutController from "./logoutController.js";
class authController {
    loginController = loginController;
    logoutController = logoutController;
    getBlackList = getBlackList;
    forgotPassController = forgotPassController;
} 
export default authController