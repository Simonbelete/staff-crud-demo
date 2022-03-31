import { Router } from "express";
import deomRouter from "api/demo";

const router = Router();

router.use("/", deomRouter);

export default router;
