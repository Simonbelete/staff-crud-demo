import { Router, NextFunction, Request, Response } from "express";
import {
  staffList,
  staffCreate,
  staffUpdate,
  staffDelete,
} from "controllers/staffController";

const router = Router();

router.get("/", staffList);

router.post("/", staffCreate);

router.put("/:id", staffUpdate);

router.delete("/:id", staffDelete);

export default router;
