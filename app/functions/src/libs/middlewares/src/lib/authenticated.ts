import admin from "firebase-admin";
import * as express from "express";
import { errors } from "../../../configuration/src/lib/index.js";
import { getAuth, signInWithCustomToken } from "firebase/auth";

export const isAuthenticated = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).send(errors.USER_UNAUTHORIZED);
  if (!authorization.startsWith("Bearer"))
    return res.status(401).send(errors.USER_UNAUTHORIZED);
  const split = authorization.split("Bearer ");
  if (split.length !== 2) return res.status(401).send(errors.USER_UNAUTHORIZED);
  const token = split[1];
  try {
    const decodedToken = await admin.auth().verifySessionCookie(token);
    console.log(decodedToken);
    res.locals = {
      ...res.locals,
      uid: decodedToken.uid,
      role: decodedToken.role,
      email: decodedToken.email,
      store: decodedToken.stores,
    };
    return next();
  } catch (err) {
    return res.status(401).send(err);
  }
};
