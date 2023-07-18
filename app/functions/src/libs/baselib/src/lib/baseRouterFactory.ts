import { ControllerBase } from "./baseController.js";
import { ModelBase } from "./baseModel.js";
import { ServiceBase } from "./baseService.js";
import { RouterBase } from "./baseRouter.js";
export function baseRouteFactory(
  schema: any,
  path: string,
  collection: string,
  projectId: string
) {
  return new RouterBase(
    new ControllerBase(
      new ServiceBase(new ModelBase(schema, collection, projectId)),
      schema
    ),
    schema,
    path
  );
}
