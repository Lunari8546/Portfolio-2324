<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="postcss">
::-webkit-scrollbar {
  @apply hidden;
}

* {
  @apply m-0 p-0 box-border;
  @apply font-sans text-violet-100;
  @apply select-none;
}

a {
  @apply decoration-none lowercase;
}

hr {
  @apply max-w-2xl;
}
</style>

<script setup lang="ts">
import LocomotiveScroll from 'locomotive-scroll';

// unavailable until the dependency updates.
// onMounted(() => {
  // const scroll = new LocomotiveScroll();
// });
</script>
