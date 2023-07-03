export default defineAppConfig({
  theme: "light",
  locale: "en",
  logoImage:
    "/images/gatherlyLogo.png",
  firebaseConfig: {
      appId: process.env.FIREBASE_APPID,
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      projectId: process.env.FIREBASE_PROJECTID,
      storageBucketId: process.env.STORAGEBUCKETID,
      messengarId: process.env.FIREBASE_MESSAGINGSENDERID,
  },
});
