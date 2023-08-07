// create a function to fetch the routes from the API
const resource = 'https://us-central1-rsvp-e9540.cloudfunctions.net/api/card/';
const getCardRoutes = async () => {
  try {
    const res = await fetch(resource);
    if (res.ok) {
      const data = await res.json();
      return data.map((card: any) => '/card/' + card.id);
    }
    else {
      return ['/card/85723552'];
    };
  } catch (e) {
    console.log("error is ", { e });
    return ['/card/85723552'];
  };
};

export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: { preset: 'firebase' },
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
  ssr: true, // this should be set to true for static websites
  hooks: {
    async 'nitro:config'(nitroConfig) {
      // fetch the routes from our function above
      const slugs = await getCardRoutes();
      // add the routes to the nitro config
      if (slugs.length) {
        //@ts-ignore
        nitroConfig.prerender.routes.push(...slugs);
      }
    },
  },
  routeRules: {
    '/card/**': { ssr: false }
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
