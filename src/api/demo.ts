import { Router, NextFunction, Request, Response } from "express";

const router = Router();

router.get("/", (request: Request, response: Response, next: NextFunction) => {
  return response.status(200).send({ message: "hello" });
});

export default router;
