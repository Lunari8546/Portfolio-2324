export default defineNuxtConfig({
  modules: [
    "@hypernym/nuxt-gsap",
    "@nuxt/image",
    "@tresjs/nuxt",
    "@unocss/nuxt",
    "@vueuse/nuxt",
  ],
  plugins: [{ src: "~/plugins/vercel.ts", mode: "client" }],
  tres: {
    devtools: true,
    glsl: true,
  },
});
