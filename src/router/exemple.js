import { Router } from "express";
import exemple from "../controllers/exempleControllers/index.js";

const exempleRouter = Router();
const controller = new exemple();

exempleRouter.get("/exemple", controller.getExempleController.bind(controller))

export default exempleRouter