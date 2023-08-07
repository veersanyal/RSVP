import { cardSchema } from "./schema.js";
import { CardService } from "./service.js";
import { ControllerBase, RouterBase, ServiceBase, ModelBase } from "../../../../../libs/baselib/src/index.js";
import { getConfig } from "../../../../configuration/src/index.js";
import e, { Request, Response, Application } from "express";
export * from "./schema.js";
const schema = cardSchema;
const collection = getConfig().settings.collection.card as string;
const path = getConfig().settings.path.card as string;
const projectId = getConfig().firebaseConfig.projectId as string;
const service = new CardService(new ModelBase(schema, collection, projectId));
class CardController extends ControllerBase {
    async setRSVP(req: Request, res: Response) {
        try {
            const id = req.params["id"];
            const rsvp = req.body;
            const result = await service.setRSVP(id, rsvp);
            return res.status(200).send(result);
        } catch (err) {
            return this.handleError(res, err as Error);
        }
    }
    constructor() {
        super(service, schema);
    }
}
class CardRouter extends RouterBase {

    constructor() {
        super(new CardController(), schema, path);
    }
    controller = new CardController();
    async addRoutes(app: Application) {
        console.log("adding routes for " + path);
        super.addRoutes(app);
        app.post(path + "/:id/setRSVP", (req: Request, res: Response) => {
            this.controller.setRSVP(req, res);
        });
    }
}
const cardRouter = new CardRouter();
export { cardRouter };