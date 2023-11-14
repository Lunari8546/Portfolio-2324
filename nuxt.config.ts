export default defineNuxtConfig({
  app: {
    head: {
      title: 'ArizLunari',
      meta: [
        {name: 'description', content: "ArizLunari's portfolio."}
      ]
    }
  },
  build: {
    transpile: ['three']
  },
  modules: [
    '@nuxt/image',
    '@unocss/nuxt'
  ],
  plugins: [
    {src: '~/plugins/vercel.ts', mode: 'client'}
  ]
})
