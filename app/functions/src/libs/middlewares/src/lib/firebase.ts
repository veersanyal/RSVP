import { initializeApp, getApps } from "@firebase/app";
import { getAuth, GoogleAuthProvider, EmailAuthProvider } from "@firebase/auth";

import "firebase/auth";

export const initializeFirebase = (config: any) => {
  if (!getApps.length) {
    initializeApp(config);
  }
  const auth = getAuth();
  const uiConfig: any = {
    signInFlow: "popup",
    signInSuccessUrl: "/",
    tosUrl: "/terms-of-service",
    privacyPolicyUrl: "/privacy-policy",
    signInOptions: [
      GoogleAuthProvider.PROVIDER_ID,
      EmailAuthProvider.PROVIDER_ID,
    ],
  };
  return { auth, uiConfig };
};
