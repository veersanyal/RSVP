import { initializeApp, getApps } from "@firebase/app";
import { getAuth, GoogleAuthProvider, EmailAuthProvider } from "firebase/auth";

export const initializeFirebase = (config: any) => {
  let app: any;
  if (!getApps.length) {
    app = initializeApp(config);
  } else {
    app = getApps()[0];
  }
  const auth = getAuth(app);
  return { app, auth, };
}
