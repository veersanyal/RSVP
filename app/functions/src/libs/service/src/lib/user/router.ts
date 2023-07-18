import { isAuthenticated } from "../../../../middlewares/src/lib/authenticated.js";
import { isAuthorized } from "../../../../middlewares/src/lib/authorized.js";
import { Request, Response, Application } from "express";
import {
  create,
  all,
  get,
  patchRole,
  remove,
  login,
  logout,
  resetPassword,
} from "./controller.js";

class userRouterBase {
  async addRoutes(app: Application) {
    app.post("/login", login);
    app.post("/logout", logout);
    app.post("/resetPassword", resetPassword);
    app.post("/users", create);
    app.get("/users", [
      isAuthenticated,
      isAuthorized({ hasRole: ["super-admin", "user-admin"] }),
      all,
    ]);
    app.get("/users/:id", [
      isAuthenticated,
      isAuthorized({ hasRole: ["super-admin", "user-admin"] }),
      get,
    ]);
    app.get("/currentuser", [isAuthenticated, get]);
    app.patch("/users/:id", [
      isAuthenticated,
      isAuthorized({ hasRole: ["super-admin"], allowSameUser: true }),
      patchRole,
    ]);
    app.delete("/users/:id", [
      isAuthenticated,
      isAuthorized({ hasRole: ["super-admin"] }),
      remove,
    ]);
  }
}
const userRouter = new userRouterBase();
export { userRouter };
