import Joi from "@hapi/joi";
import { errors, roles } from "../../../../configuration/src/lib/index.js";

export const userCreateReq = Joi.object({
  displayName: Joi.string().required(),
  password: Joi.string().required(),
  email: Joi.string().required(),
  role: Joi.array().items(Joi.string()),
  stores: Joi.array().items(Joi.string()),
});
export const validate = (data: any, schema: string) => {
  let inputschema = userCreateReq;
  switch (schema) {
    case "userCreate":
      inputschema = userCreateReq;
      break;
    default:
      inputschema = userCreateReq;
  }
  if (Object.entries(inputschema).length > 0) {
    const { error, value } = inputschema.validate(data);
    if (error) {
      const err = new Error(
        errors.INVALID_REQUEST_BODY.message + " : " + error
      );
      err.name = errors.INVALID_REQUEST_BODY.code;
      throw err;
    }
  }
};
