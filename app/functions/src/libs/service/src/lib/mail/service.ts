import sgMail from "@sendgrid/mail";
import { getConfig } from "../../../../configuration/src/index.js";

export type eMailInputType = {
  to: string;
  from: string;
  subject: string;
  text: string;
  html: string;
};
export type registerEmail = {
  to: string;
  from: string;
  subject: string;
  name: string;
};
export type matchFoundEmail = {
  to: string;
  from: string;
  subject: string;
  name: string;
};

export const sendMail = async (emailInput: eMailInputType) => {
  const { emailConfig } = getConfig();
  const sendGridApiKey = emailConfig.sendGrid.apiKey;
  if (sendGridApiKey && typeof sendGridApiKey === "string") {
    console.log("sendGridApiKey", sendGridApiKey);
    sgMail.setApiKey(sendGridApiKey);
    const msg = {
      to: emailInput.to,
      from: emailInput.from,
      templateId: 'd-f9bd019fe91a48b08e3e7327cb6c3ba4',
      dynamic_template_data: {
        subject: 'Testing Templates',
        name: 'Ubaid',
        from: 'Denver',
      },
    };

    console.log("before sending email", msg);
    try {
      const response = await sgMail.send(msg);
      console.log(response)
    } catch (err: any) {
      console.log("error sending email", err);
      console.log(JSON.stringify(err));
    }
  }
};

export const sendRegisterMail = async (emailInput: registerEmail) => {
  const { emailConfig } = getConfig();
  const sendGridApiKey = emailConfig.sendGrid.apiKey;
  if (sendGridApiKey && typeof sendGridApiKey === "string") {
    console.log("sendGridApiKey", sendGridApiKey);
    sgMail.setApiKey(sendGridApiKey);

    const msg = {
      to: emailInput.to,
      from: emailInput.from,
      templateId: 'd-e1068f27eb9a4fc8851b563bc9c1ea1f',
      dynamic_template_data: {
        subject: emailInput.subject,
        name: emailInput.name
      },
    };

    console.log("before sending email", msg);
    try {
      await sgMail.send(msg);
    } catch (err: any) {
      console.log("error sending email", err);
      console.log(JSON.stringify(err));
    }
  }
};


export const sendMatchEmail = async (emailInput: matchFoundEmail) => {
  console.log("SENDING MATCH EMAIL")
  const { emailConfig } = getConfig();
  const sendGridApiKey = emailConfig.sendGrid.apiKey;
  if (sendGridApiKey && typeof sendGridApiKey === "string") {
    console.log("sendGridApiKey", sendGridApiKey);
    sgMail.setApiKey(sendGridApiKey);

    const msg = {
      to: emailInput.to,
      from: emailInput.from,
      templateId: emailConfig.sendGrid.matchFoundTemplate,
      dynamic_template_data: {
        subject: emailInput.subject,
        name: emailInput.name
      },
    };

    console.log("before sending email", msg);
    try {
      const response = await sgMail.send(msg);
      console.log(response)
      return response;
    } catch (err: any) {
      console.log("error sending email", err);
      console.log(JSON.stringify(err));
    }
  }
};
