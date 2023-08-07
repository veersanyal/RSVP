function getBaseURI(): string {
  switch (process.env["FABRIC"]) {
    case enums.fabric.PRODUCTION:
      return `https://${process.env["GCP_ZONE"]}-${process.env["GCP_PROJECTID"]}.cloudfucntions.net/api`;
    case enums.fabric.TEST:
      return `http://localhost:8080`;
    default:
      return `http://localhost:8080`;
  }
}
const enums = {
  fabric: {
    TEST: "test",
    PRODUCTION: "prod",
  },
};
export function getConfig() {
  return {
    emailConfig: {
      sendGrid: {
        apiKey: process.env.SENDGRID_API_KEY,
        matchFoundTemplate: "d-f9bd019fe91a48b08e3e7327cb6c3ba4",
      },
      defaultEmailinput: {
        from: "change@gmail.com",
        to: "change@gmail.com",
      },
    },
    baseURI: getBaseURI(),
    firebaseConfig: {
      apiKey: process.env["NUXT_FIREBASE_API_KEY"],
      authDomain: process.env["NUXT_FIREBASE_AUTH_DOMAIN"],
      projectId: process.env["NUXT_GCP_PROJECTID"],
      storageBucket: process.env["NUXT_STORAGEBUCKETID"],
      messagingSenderId: process.env["NUXT_FIREBASE_MESSAGINGSENDERID"],
      appId: process.env["NUXT_FIREBASE_APPID"],
      databaseURL: process.env["NUXT_FIREBASE_DATABASEURL"],
    },
    settings: {
      projectId: process.env["NUXT_GCP_PROJECTID"] || "rsvp-e9540",
      collection: {
        card: "card",
      },
      path: {
        card: "/card",
      }
    },
  };
}
export function config(req: any, res: any, next: any) {
  req.app.config = getConfig();
  return next();
}
