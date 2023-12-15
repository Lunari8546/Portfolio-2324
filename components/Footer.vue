<template>
  <footer>
    <h1 class="message">
      Let's create something
      <span class="underlined">awesome</span>.
    </h1>
    <div class="contact">
      <NuxtLink class="btn" to="https://www.instagram.com/lunari.cr/" target="_blank">
        instagram.
      </NuxtLink>
      <NuxtLink class="btn" to="mailto:arizlunari@protonmail.com">email.</NuxtLink>
      <NuxtLink class="btn" to="https://github.com/Lunari8546" target="_blank">
        github.
      </NuxtLink>
    </div>
    <p class="copyright">© 2023 ArizLunari, All Rights Reserved.</p>
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

  .copyright {
    @apply text-sm;
  }
}
</style>
