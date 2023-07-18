// import { isAuthenticated } from '../../middleware/auth/authenticated.js'
// import { isAuthorized } from '../../middleware/auth/authorized.js'
import { Request, Response, Application } from "express";

import { ControllerBase } from "./baseController.js";

export class RouterBase {
  controller: ControllerBase;
  schema: object;
  entity: string;
  constructor(controller: ControllerBase, schema: any, entity: string) {
    this.controller = controller;
    this.schema = schema;
    this.entity = entity;
  }

  async addRoutes(app: Application) {
    app.get(this.entity + "/health", (req: Request, res: Response) => {
      this.controller.health(req, res);
    });
    app.post(this.entity, [
      // isAuthenticated,
      // isAuthorized({ hasRole: ["super-admin", "product-admin"] }),
      (req: Request, res: Response) => {
        this.controller.create(req, res);
      },
    ]);

    app.get(this.entity, (req: Request, res: Response) => {
      this.controller.all(req, res);
    });
    app.get(this.entity + "/search", (req: Request, res: Response) => {
      this.controller.search(req, res);
    });
    app.get(this.entity + "/:id", (req: Request, res: Response) => {
      this.controller.get(req, res);
    });
    app.patch(this.entity + "/:id", [
      // isAuthenticated,
      // isAuthorized({ hasRole: ['super-admin', 'product-admin'] }),
      (req: Request, res: Response) => {
        this.controller.patch(req, res);
      },
    ]);
    app.delete(this.entity + "/:id", [
      // isAuthenticated,
      // isAuthorized({ hasRole: ['super-admin', 'product-admin'] }),
      (req: Request, res: Response) => {
        this.controller.remove(req, res);
      },
    ]);
  }
}
