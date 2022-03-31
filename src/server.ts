import "module-alias/register";
import "source-map-support/register";
import express, { Application } from "express";
import loader from "loaders";
import router from "api";

const startServer = async () => {
  const app: Application = express();
  await loader(app);

  app.use(router);
};

startServer();
