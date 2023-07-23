export default defineNuxtConfig({
  devtools: { enabled: true },
  vite: {
    vue: {
      script: {
        defineModel: true,
        propsDestructure: true,
      },
    },
  },
  modules: ["nuxt-icon", "@nuxthq/ui", "@formkit/nuxt", '@nuxt/image'],
  css: ["~/assets/css/main.css", "~/assets/css/popper.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  image: {
    imagekit: {
      baseURL: 'https://ik.imagekit.io/ztutmqiyjy/rsvp'
    },
    presets: {
      avatar: {
        modifiers: {
          format: 'jpg',
          width: 50,
          height: 50
        }
      }
    }
  },
  runtimeConfig: {
    public: {
      firebaseConfig: {
        appId: process.env.NUXT_FIREBASE_APPID,
        apiKey: process.env.NUXT_FIREBASE_API_KEY,
        authDomain: process.env.NUXT_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.NUXT_FIREBASE_PROJECTID,
        storageBucketId: process.env.NUXT_STORAGEBUCKETID,
        messengarId: process.env.NUXT_FIREBASE_MESSAGINGSENDERID,
      },
      gcpConfig: {
        GOOGLE_APPLICATION_CREDENTIALS:
          process.env.NUXT_GOOGLE_APPLICATION_CREDENTIALS,
        ORG: process.env.NUXT_GCP_ORG,
        FOLDERID: process.env.NUXT_GCP_FOLDERID,
        PROJECTID: process.env.NUXT_GCP_PROJECTID,
        PROJECTNUMBER: process.env.NUXT_GCP_PROJECTNUMBER,
        ZONE: process.env.NUXT_GCP_ZONE,
        PROJECT: process.env.NUXT_GCLOUD_PROJECT,
      },
      tabConfig: {
        tabs: ["Home", "Search", "Notifications"],
      },
    },
  },
});
