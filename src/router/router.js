import { Router } from "express";
import  exempleRouter from "./exemple.js";
import registerRouter from "./user.js";
import paymentRouter from "./paymentRouter.js";
import authRouter from "./authRouter.js";

const router = Router();
router.use('/user', registerRouter);
router.use('/exemple', exempleRouter);
router.use("/pay", paymentRouter);
router.use("/auth", authRouter);

export default router;
