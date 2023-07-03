import { FirebaseApp, getApp, initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  getIdToken,
  browserLocalPersistence,
} from "firebase/auth";
export default defineNuxtPlugin(async (nuxtApp) => {
  const config = useRuntimeConfig().public.firebaseConfig;
  const getFirebaseApp = () => {
    let app;
    try {
      app = getApp(config.projectId);
    } catch (e) {
      app = initializeApp(config);
    }
    return app;
  };
  const getFirebaseAuth = (app: FirebaseApp) => {
    return getAuth(app);
  };
  const getCurrentUser = async () => {
    let app = getFirebaseApp();
    let auth = getFirebaseAuth(app);
    await auth.setPersistence(browserLocalPersistence);
    let currentUser = reactive({ ...auth.currentUser });
    let authHeader = ref();
    onAuthStateChanged(getAuth(app), async (user) => {
      currentUser = { ...user };
      if (user) {
        authHeader.value = "bearer " + (await getIdToken(user, false));
      }
    });
    return { currentUser, authHeader };
  };
  const logout = async () => {
    await getFirebaseAuth(getFirebaseApp()).signOut();
  };
  const { currentUser, authHeader } = await getCurrentUser();
  return {
    provide: {
      fireBaseApp: getFirebaseApp(),
      currentUser: currentUser,
      authHeader: authHeader,
      logout: logout,
      fireBaseAuth: getFirebaseAuth(getFirebaseApp()),
    },
  };
});
