export default defineNuxtConfig({
  modules: ["@nuxtjs/i18n", "@nuxt/eslint"],
  site: {
    name: "Hyoshii Documentation",
  },

  i18n: {
    defaultLocale: "en",
    locales: [
      {
        code: "en",
        name: "English",
      },
      {
        code: "id",
        name: "Indonesia",
      },
    ],
  },
  llms: {
    domain: "https://doc.hyoshii.com",
    title: "Hyoshii Documentation",
    description: "Hyoshii Documentation",
    full: {
      title: "Hyoshii Documentation",
      description: "Hyoshii Documentation",
    },
  },
});
