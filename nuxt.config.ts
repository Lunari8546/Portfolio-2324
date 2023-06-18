export default defineNuxtConfig({
  app: {
    head: {
      title: 'ArizLunari'
    }
  },
  build: {
    transpile: ['three']
  },
  modules: [
    '@nuxt/image',
    '@unocss/nuxt'
  ]
});
