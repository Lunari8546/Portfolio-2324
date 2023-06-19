<template>
  <header class="navbar">
    <NuxtLink to="/">
      <h1 class="brand">arizlunari.</h1>
    </NuxtLink>
    <nav>
      <NuxtLink to="/">biography.</NuxtLink>
      <NuxtLink to="/">projects.</NuxtLink>
      <NuxtLink to="/">journals.</NuxtLink>
    </nav>
  </header>
</template>

<style scoped lang="postcss">
.navbar {
  @apply fixed flex justify-between items-center;
  @apply px-24 py-18;
  @apply w-screen max-w-screen;
}

.brand {
  @apply text-4xl;
}

nav a {
  @apply text-xl mx-6;
}

nav a:first-child {
  @apply ml-0;
}

nav a:last-child {
  @apply mr-0;
}

@screen lt-lg {
  .navbar {
    @apply px-18;
  }

  nav {
    @apply hidden;
  }
}
</style>
