// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: [
    'primevue/resources/themes/saga-blue/theme.css',  // You can choose other themes
    'primevue/resources/primevue.min.css',
    'primeicons/primeicons.css',
  ],
})
