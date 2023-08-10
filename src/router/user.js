import { Router } from "express";
import userController from "../controllers/userControllers/index.js";
import verifyToken from "../middware/authMiddware.js";

const registerRouter = Router();
const controller = new userController();

registerRouter.post("/register",controller.createUserController.bind(controller));
registerRouter.post("/registerCnpj",controller.createCnpjController.bind(controller));
registerRouter.get("/listUser",controller.getUserController.bind(controller));
registerRouter.get("/listCnpj",controller.getCnpjController.bind(controller));
registerRouter.get("/listUser/:userId", verifyToken, controller.getByIdController.bind(controller));
registerRouter.delete("/deleteUser/:userId", controller.deleteUserController.bind(controller));


export default registerRouter;