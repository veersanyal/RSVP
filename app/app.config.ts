export default defineAppConfig({
  theme: "light",
  locale: "en",
  logoImage: "/images/gatherlyLogo.png",
  firebaseConfig: {
    appId: process.env.FIREBASE_APPID,
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECTID,
    storageBucketId: process.env.STORAGEBUCKETID,
    messengarId: process.env.FIREBASE_MESSAGINGSENDERID,
  },
  eventList: [
    { id: "BIRTHDAY", label: "Birthday", icon: "fluent-emoji:birthday-cake" },
    { id: "WEDDING", label: "Wedding", icon: "emojione:wedding" },
    {
      id: "ANNIVERSARY",
      label: "Anniversary",
      icon: "openmoji:couple-with-heart-woman-man",
    },
    { id: "GRADUATION", label: "Graduation", icon: "noto-v1:graduation-cap" },
    { id: "BABYSHOWER", label: "Baby Shower", icon: "mdi:mother-heart" },
    {
      id: "BRIDALSHOWER",
      label: "Bridal Shower",
      icon: "emojione:bride-with-veil",
    },
    { id: "OTHER", label: "Other", icon: "fluent-emoji:birthday-cake" },
  ],
  customLabelStyle: "font-family: Caveat",
});
