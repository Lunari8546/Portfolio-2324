export default defineNuxtConfig({
  app: {
    head: {
      title: 'ArizLunari'
    }
  },
  modules: [
    '@hypernym/nuxt-gsap',
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
