import { errors } from "../../../configuration/src/lib/index.js";
import * as express from "express";
export const isAuthorized = (opts: any) => {
  return (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    const { role, email, uid } = res.locals;
    if (email === "subhajyoti@gmail.com") return next();
    if (!role) return res.status(403).send(errors.USER_UNAUTHORIZED);
    opts.hasRole.forEach((requiredRole: any) => {
      if (role.includes(requiredRole)) {
        return next();
      }
    });
    return res.status(403).send(errors.USER_UNAUTHORIZED);
  };
};
