<template>
  <header class="navbar" ref="navbar">
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
  @apply px-48 py-18 z-99;
  @apply w-screen max-w-screen transition-opacity;
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
    @apply px-24;
  }

  nav {
    @apply hidden;
  }
}

@screen lt-md {
  .navbar {
    @apply p-12;
  }

  .brand {
    @apply text-2xl;
  }
}
</style>

<script setup lang="ts">
const navbar: Ref<HTMLHeaderElement | null> = ref(null);

let showNavbar = true;
let lastScrollPosition = 0;

onMounted(() => {
  window.addEventListener('scroll', onScroll);
});

function onScroll() {
  const currentScrollPosition = window.pageYOffset;

  if (currentScrollPosition < 0) { return; };

  if (Math.abs(currentScrollPosition - lastScrollPosition) < 30) { return };

  showNavbar = currentScrollPosition < lastScrollPosition;

  lastScrollPosition = currentScrollPosition;

  if (!showNavbar) {
    navbar.value.style.opacity = 0;
    navbar.value.style.pointerEvents = 'none';
  } else {
    navbar.value.style.opacity = 100;
    navbar.value.style.pointerEvents = 'auto';
  };
}

function scrollTo(el) {
  const target = el.target.innerHTML.slice(0, -1);

  import('locomotive-scroll').then(module => {
    const locomotiveScroll = new module.default();

    locomotiveScroll.scrollTo('#' + target);
  });
};
</script>
