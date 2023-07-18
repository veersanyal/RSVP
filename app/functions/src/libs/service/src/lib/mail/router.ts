import { sendDefaultMail } from "./controller.js";
import { Request, Response, Application } from "express";
class mailRouterBase {
  async addRoutes(app: Application) {
    app.post("/email:send", (req: Request, res: Response) => {
      sendDefaultMail(req, res);
    });
  }
}
const mailRouter = new mailRouterBase();
export { mailRouter };
