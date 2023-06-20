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
    <p class="credits">
      Credits to: Nuxt 3, UnoCSS, ThreeJS, Locomotive Scroll 5, Fontshare, and Vercel.
    </p>
  </footer>
</template>

<style scoped lang="postcss">
footer {
  @apply flex flex-col justify-center items-center;
  @apply h-screen text-center mx-18;
}

.message {
  @apply text-6xl;
}

.contact {
  @apply flex justify-between my-36;
}

.contact a {
  @apply bg-transparent cursor-pointer transition-colors;
  @apply w-[20vw] mx-6 py-6;
  @apply text-3xl lowercase;
  @apply border-b-solid border-b-1 border-rd;
}

.contact a:hover {
  @apply bg-violet-100 text-dark-900;
}

.copyright {
  @apply mb-6;
}

@screen lt-xl {
  .contact {
    @apply flex-col w-auto;
  }

  .contact a {
    @apply w-[30vw] my-6;
  }

  .contact a:first-child {
    @apply mt-0;
  }

  .contact a:last-child {
    @apply mb-0;
  }
}

@screen lt-md {
  footer {
    @apply mx-12;
  }

  .message {
    @apply text-3xl;
  }

  .contact {
    @apply my-18;
  }

  .contact a {
    @apply w-[50vw] text-lg;
  }

  .copyright, .credits {
    @apply text-sm;
  }
}
</style>
