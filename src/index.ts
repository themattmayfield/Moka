import express from "express";
import http from "http";
import { config } from "./config/config";
import Logging from "./lib/Logging";

const router = express();

/** Log the request */
router.use(
  (
    req: { method: any; url: any; socket: { remoteAddress: any } },
    res: { on: (arg0: string, arg1: () => void) => void; statusCode: any },
    next: () => void
  ) => {
    /** Log the req */
    Logging.info(
      `Incomming - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`
    );

    res.on("finish", () => {
      /** Log the res */
      Logging.info(
        `Result - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}] - STATUS: [${res.statusCode}]`
      );
    });

    next();
  }
);

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

/** Rules of our API */
router.use(
  (
    req: { method: string },
    res: {
      header: (arg0: string, arg1: string) => void;
      status: (arg0: number) => {
        (): any;
        new (): any;
        json: { (arg0: {}): any; new (): any };
      };
    },
    next: () => void
  ) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );

    if (req.method == "OPTIONS") {
      res.header(
        "Access-Control-Allow-Methods",
        "PUT, POST, PATCH, DELETE, GET"
      );
      return res.status(200).json({});
    }

    next();
  }
);

/** Healthcheck */
router.get(
  "/ping",
  (
    req: any,
    res: {
      status: (arg0: number) => {
        (): any;
        new (): any;
        json: { (arg0: { hello: string }): any; new (): any };
      };
    },
    next: any
  ) => res.status(200).json({ hello: "world" })
);

/** Error handling */
router.use(
  (
    req: any,
    res: {
      status: (arg0: number) => {
        (): any;
        new (): any;
        json: { (arg0: { message: string }): void; new (): any };
      };
    },
    next: any
  ) => {
    const error = new Error("Not found");

    Logging.error(error);

    res.status(404).json({
      message: error.message,
    });
  }
);

http
  .createServer(router)
  .listen(config.server.port, () =>
    Logging.info(`Server is running on port ${config.server.port}`)
  );

//load environment variables
import "./lib/variables";
//run the twitch bot
import "./bot";
