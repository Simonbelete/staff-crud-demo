import { NextFunction, Request, Response } from "express";
import { CreateStaffDto } from "dto";
import { getAll, create, updateById, deleteById } from "services/staffService";

/**
 * Display list of all staffs
 * @param request
 * @param response
 * @param next
 */
const staffList = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const result = await getAll();
  return response.status(200).send({ data: result });
};

/**
 * Create staff from POST
 * @param request
 * @param response
 * @param next
 */
const staffCreate = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const payload: CreateStaffDto = request.body;
  const result = await create(payload);
  if (!result) return response.status(500).send({});
  return response.status(201).send({ data: result });
};

/**
 * Update Staff from PUT
 * @param request
 * @param response
 * @param next
 */
const staffUpdate = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const id: number = Number(request.params.id);
  const payload: CreateStaffDto = request.body;
  const result = await updateById(id, payload);
  if (!result) return response.status(500).send({});
  return response.status(200).send({ data: result });
};

/**
 * Delete Staff from DELETE
 * @param request
 * @param response
 * @param next
 */
const staffDelete = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const id: number = Number(request.params.id);
  const result = await deleteById(id);
  if (!result) return response.status(500).send({});
  return response.status(200).send({ data: result });
};

export { staffList, staffCreate, staffUpdate, staffDelete };
