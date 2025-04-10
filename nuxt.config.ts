import * as path from 'path';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt-primevue',
    '@nuxtjs/tailwindcss',
    '@nuxt/devtools',
    '@nuxt/image',
    '@nuxtjs/seo',
  ],
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2025-02-24',
  primevue: {
    options: { unstyled: true },
    importPT: { from: path.resolve(__dirname, './presets/masum/') },
    components: {
      exclude: ['Editor', 'Chart']
    }
  },
  image: {
    format: ['webp']
  },

  routeRules: {
    '/demo/**': { ssr: false }
  }
})