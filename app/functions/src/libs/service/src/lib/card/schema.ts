import Joi from "@hapi/joi";
import { errors } from "../../../../configuration/src/lib/index.js";
export const cardSchema = Joi.object({
    eventTypeId: Joi.string().required(),
    templateType: Joi.string(),
    imageContent: Joi.string(),
    titleContent: Joi.string(),
    descriptionContent: Joi.string(),
    when: Joi.string(),
    from: Joi.string(),
    to: Joi.string(),
    locationContent: Joi.string(),
    avatar: Joi.string(),
    image: Joi.string(),
    titleFont: Joi.string(),
    titleColor: Joi.string(),
    descriptionFont: Joi.string(),
    descriptionColor: Joi.string(),
    dateFont: Joi.string(),
    dateColor: Joi.string(),
    locationFont: Joi.string(),
    locationColor: Joi.string(),
    locationBlend: Joi.string(),
    descriptionBlend: Joi.string(),
    titleBlend: Joi.string(),
    dateBlend: Joi.string(),
    locationWeight: Joi.string(),
    descriptionWeight: Joi.string(),
    titleWeight: Joi.string(),
    dateWeight: Joi.string(),
    locationSize: Joi.string(),
    descriptionSize: Joi.string(),
    titleSize: Joi.string(),
    dateSize: Joi.string(),
});
export const validate = (data: any, schema: string) => {
    let inputschema = cardSchema;
    if (Object.entries(inputschema).length > 0) {
        const { error } = inputschema.validate(data);
        if (error) {
            const err = new Error(
                errors.INVALID_REQUEST_BODY.message + " : " + error
            );
            err.name = errors.INVALID_REQUEST_BODY.code;
            throw err;
        }
    }
};