import { Router } from "express";

import paymentController from "../controllers/paymentControllers/index.js";
const paymentRouter = Router()
const controller = new paymentController()
paymentRouter.post("/charge",controller.CreateCharge.bind(controller))
paymentRouter.get("/list", controller.listChargesController.bind(controller))
paymentRouter.get("/status/:txid", controller.getPaymentStatus.bind(controller))
export default paymentRouter