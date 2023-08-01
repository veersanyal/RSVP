"use strict";
import morgan from "morgan";
import admin from "firebase-admin";
import express from "express";
import bodyParser from "body-parser";
import firebase from "firebase/compat/app";
import lb from "@google-cloud/logging-bunyan";
import "dotenv/config";
//import { cors, morganlog, Otel } from "./libs/middlewares/src/index.js";
import { cors, morganlog } from "./libs/middlewares/src/index.js";
import { getConfig, config } from "./libs/configuration/src/index.js";
import { userRouter, mailRouter } from "./libs/service/src/index.js";
import { baseRouteFactory } from "./libs/baselib/src/index.js";
import { cardSchema } from "./libs/service/src/index.js";
const server = express();
// Otel("api");
const { mw } = await lb.express.middleware();
server.use(mw);
server.use(morgan(morganlog));
console.log("printing getconfig");
console.log(getConfig().firebaseConfig);
admin.initializeApp(getConfig().firebaseConfig);
firebase.initializeApp(getConfig().firebaseConfig);
server.use(bodyParser.json());
server.use(config);
server.all("/*", cors);
userRouter.addRoutes(server);
mailRouter.addRoutes(server);
const cardRouter = baseRouteFactory(
    cardSchema,
    "/card",
    'card',
    //@ts-ignore
    getConfig().firebaseConfig.projectId,
);
cardRouter.addRoutes(server);
export { server };
