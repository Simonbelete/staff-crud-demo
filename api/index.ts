import { Router } from "express";
import deomRouter from "./demo";

const router = Router();

router.use("/", deomRouter);

export default router;
