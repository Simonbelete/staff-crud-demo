import dotenv from "dotenv";
import morgan from "morgan";
import express, { Application, Request, Response, NextFunction } from "express";
import compression from "compression";

import * as http from "http";
// eslint-disable-next-line import/no-extraneous-dependencies
import * as bodyparser from "body-parser";

const onListening = () => {
  // eslint-disable-next-line no-template-curly-in-string
  const bind = process.env.PORT || "4000";
  console.log("Listening on " + bind);
};

function onError(error: any) {
  if (error.syscall !== "listen") {
    throw error;
  }

  var bind =
    typeof process.env.PORT === "string"
      ? "Pipe " + process.env.PORT
      : "Port " + process.env.PORT;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

const expressLoader = (app: Application): void => {
  // Configs/Loader
  dotenv.config();
  const server: http.Server = http.createServer(app);

  // ENV
  const port = process.env.PORT || "5000";

  // Express uses
  app.use(compression());
  app.use(bodyparser.json());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(morgan("dev"));
  // app.use(cors());

  // Middleware Error Handler
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
      if (err instanceof Error) {
        console.log(err);
        response.status(500).send({ message: err });
      } else response.status(500).send("500");
    }
  );

  // Run server
  server.listen(port);
  // Promises binders
  server.on("error", onError);
  server.on("listening", onListening);
};

export default expressLoader;
