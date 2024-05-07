export default defineNuxtConfig({
  devtools: {
    enabled: false,
  },
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt'],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui',
  },
  tailwindcss: {
    config: {
      content: [
        './pages/**/*.{vue,html,md,jsx,tsx,ts,css}',
        './components/**/*.{vue,html,md,jsx,tsx,ts,css}',
        './assets/**/*.{vue,html,md,jsx,tsx,ts,css}',
        './app.vue',
      ],
    },
  },
})
