import { Router } from "express";
import deomRouter from "api/demo";
import staffsRouter from "api/staffs";

const router = Router();

router.use("/", deomRouter);
router.use("/staffs", staffsRouter);

export default router;
