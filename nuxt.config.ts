export default defineNuxtConfig({
  app: {
    head: {
      title: 'ArizLunari',
      meta: [
        {name: 'description', content: "ArizLunari's portfolio."}
      ]
    }
  },
  modules: [
    '@nuxt/image',
    '@tresjs/nuxt',
    '@unocss/nuxt'
  ],
  plugins: [
    {src: '~/plugins/vercel.ts', mode: 'client'}
  ],
  tres: {
    devtools: true,
    glsl: true
  }
})
