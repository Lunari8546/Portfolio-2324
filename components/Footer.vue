<template>
  <footer>
    <h1 class="message">
      Let's create something
      <span class="underlined">awesome</span>.
    </h1>
    <div class="contact">
      <NuxtLink to="https://www.instagram.com/lunari.cr/" target="_blank">
        instagram.
      </NuxtLink>
      <NuxtLink to="mailto:arizlunari@protonmail.com">email.</NuxtLink>
      <NuxtLink to="https://github.com/Lunari8546" target="_blank">
        github.
      </NuxtLink>
    </div>
    <p class="copyright">© 2023 ArizLunari, All Rights Reserved.</p>
    <p>Credits to Nuxt 3, UnoCSS, ThreeJS, Locomotive Scroll 5, and Vercel.</p>
  </footer>
</template>

<style scoped lang="postcss">
footer {
  @apply flex flex-col justify-center items-center;
  @apply h-screen;
}

.contact {
  @apply my-36;
}

.contact a {
  @apply bg-transparent cursor-pointer transition-colors;
  @apply px-12 py-6 mx-12;
  @apply text-3xl lowercase;
  @apply border-b-solid border-b-1 border-rd;
}

.contact a:hover {
  @apply bg-violet-100 text-dark-900;
}

.message {
  @apply text-6xl;
}
</style>
