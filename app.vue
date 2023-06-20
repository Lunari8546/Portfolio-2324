<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="postcss">
@import 'node_modules/locomotive-scroll/dist/locomotive-scroll';

::-webkit-scrollbar {
  @apply hidden;
}

* {
  @apply m-0 p-0 box-border;
  @apply font-sans text-violet-100;
  @apply select-none outline-none;
}

a {
  @apply decoration-none cursor-pointer lowercase;
}

hr {
  @apply max-w-lg;
}

p {
  @apply opacity-40;
}

.hidden {
  @apply important-hidden;
}

.underlined {
  @apply underline;
}
</style>

<script setup lang="ts">
onMounted(() => {
  import('locomotive-scroll').then(module => {
    const locomotiveScroll = new module.default();
  });
});
</script>
