import { Application } from "express";
import expressLoader from "./express";
const loaders = async (app: Application): Promise<void> => {
  await expressLoader(app);
};

export default loaders;
