import { sendMail, eMailInputType } from "./service.js";
import { getConfig } from "../../../../configuration/src/index.js";
import { Request, Response } from "express";

export const sendDefaultMail = async (request: Request, response: Response) => {
  const { emailConfig } = getConfig();
  const emailInput = request.body;
  const defaultinput = {
    to: emailConfig.defaultEmailinput.to,
    from: emailConfig.defaultEmailinput.from,
    subject: "Test",
    text: "Test",
    html: "test",
  };
  const input = { ...defaultinput, ...emailInput };
  try {
    await sendMail(input);
    console.log("email sent");
    return response.status(200).send("Done");
  } catch (err) {
    return handleError(response, err as Error);
  }
};

function handleError(res: Response, err: Error) {
  return res
    .status(500)
    .send({ code: "ER-00", message: `${err.name} - ${err.message}` });
}
