import { Router } from "express";
import authController from "../controllers/authControllers/index.js";
import verifyToken from "../middware/authMiddware.js";

const authRouter = Router();
const controller = new authController();

authRouter.post("/login",controller.loginController.bind(controller));
authRouter.post("/logout", verifyToken, controller.logoutController.bind(controller));
authRouter.get("/blacklist", controller.getBlackList.bind(controller));
authRouter.post("/forgotpass", controller.forgotPassController.bind(controller));

export default authRouter;