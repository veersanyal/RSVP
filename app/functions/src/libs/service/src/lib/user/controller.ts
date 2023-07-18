import admin from "firebase-admin";
import { Request, Response } from "express";

import firebase from "firebase/compat/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { userCreateReq } from "./schema.js";
import { sendRegisterMail } from "../mail/service.js";
import {
  errors,
  roles as UserRoles,
} from "../../../../configuration/src/index.js";
const expiresIn = 60 * 60 * 24 * 1000;

const mapUserCredential = async (userCredential: any) => {
  if (!userCredential.user) {
    return;
  }
  const user = await admin.auth().getUserByEmail(userCredential.user.email);
  let returnuser = mapUser(user);
  const idToken = await userCredential.user.getIdToken();

  const sessionCookie = await admin
    .auth()
    .createSessionCookie(idToken, { expiresIn });
  returnuser.token = await sessionCookie;
  return returnuser;
};

const mapUser = (user: any) => {
  const customClaims = user.customClaims || { role: "" };
  const role = customClaims.role ? customClaims.role : "";
  const stores = customClaims.stores ? customClaims.stores : "";
  return {
    uid: user.uid,
    email: user.email || "",
    emailVerified: user.emailVerified || false,
    displayName: user.displayName || "",
    disabled: user.disabled,
    role,
    stores,
    lastSignInTime: user.metadata.lastSignInTime,
    creationTime: user.metadata.creationTime,
    token: "",
  };
};
export const create = async (req: Request, res: Response) => {
  console.log("Inside create user in controller");
  try {
    const { displayName, password, email, role } = req.body;
    userCreateReq.validate(req.body, "userCreate");
    const { uid } = await admin.auth().createUser({
      displayName,
      password,
      email,
    });
    await admin.auth().setCustomUserClaims(uid, { role } || "user");

    return res.status(201).send({ uid });
  } catch (err) {
    return handleError(res, err);
  }
};
export const all = async (req: Request, res: Response) => {
  try {
    const listUsers = await admin.auth().listUsers();
    const users = listUsers.users.map(mapUser);
    return res.status(200).send({ users });
  } catch (err) {
    return handleError(res, err);
  }
};

export const get = async (req: Request, res: Response) => {
  try {
    const id = req.params.id ? req.params.id : res.locals.uid;
    const user = await admin.auth().getUser(id);
    return res.status(200).send({ user: mapUser(user) });
  } catch (err) {
    return handleError(res, err);
  }
};

export const patchRole = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { role } = req.body;
    if (!role) {
      return res.status(400).send(errors.INVALID_REQUEST_BODY);
    }
    if (!UserRoles.includes(role)) {
      return res.status(400).send(errors.INVALID_REQUEST_BODY);
    }
    await admin.auth().setCustomUserClaims(id, { role });
    const user = await admin.auth().getUser(id);
    return res.status(204).send({ user: mapUser(user) });
  } catch (err) {
    return handleError(res, err);
  }
};

export const remove = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await admin.auth().deleteUser(id);
    return res.status(204).send({});
  } catch (err) {
    return handleError(res, err);
  }
};
export const login = async (req: Request, res: Response) => {
  const { password, email } = req.body;
  try {
    const auth = getAuth();
    const UserCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const returnUser = await mapUserCredential(UserCredential);
    const options = { maxAge: expiresIn, httpOnly: true, secure: true };
    if (returnUser) {
      res.cookie("session", returnUser.token, options);
    }
    return res.status(200).send(returnUser);
  } catch (err) {
    return handleError(res, err);
  }
};

export const logout = async (req: Request, res: Response) => {
  try {
    await firebase.auth().signOut();
    return res.status(200).send({});
  } catch (err) {
    return handleError(res, err);
  }
};
export const resetPassword = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    await firebase.auth().sendPasswordResetEmail(email);
    return res.status(200).send({});
  } catch (err) {
    return handleError(res, err);
  }
};
const handleError = (res: Response, err: any) => {
  return res.status(500).send(`${res} : ${err}`);
};
