<template>
  <header class="navbar">
    <NuxtLink to="/">
      <h1 class="brand">arizlunari.</h1>
    </NuxtLink>
    <nav>
      <a @click="scrollTo">biography.</a>
      <a @click="scrollTo">projects.</a>
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

@screen lt-xl {
  .navbar {
    @apply px-12;
  }

  nav {
    @apply hidden;
  }
}

@screen lt-md {
  .navbar {
    @apply py-12;
  }

  .brand {
    @apply text-2xl;
  }
}
</style>

<script setup lang="ts">
function scrollTo(el) {
  const target = el.target.innerHTML.slice(0, -1);

  import('locomotive-scroll').then(module => {
    const locomotiveScroll = new module.default();

    locomotiveScroll.scrollTo(
      '#' + target,
      { offset: -120 }
    );
  });
};
</script>
