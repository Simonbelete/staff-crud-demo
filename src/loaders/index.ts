import { Application } from "express";
import expressLoader from "loaders/express";
import sequelize from "loaders/sequelize";
import initdb from "loaders/initdb";
import { exit } from "process";

const loaders = async (app: Application): Promise<void> => {
  await expressLoader(app);
  try {
    await sequelize.authenticate();
    console.log("Connected to Databse");
  } catch (err) {
    console.error("Failed to connect", err);
    exit();
  }

  // Init db
  await initdb();
};

export default loaders;
