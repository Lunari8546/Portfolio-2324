<template>
  <NuxtLayout>
    <Background />
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
  @apply select-none outline-none;
}

a {
  @apply decoration-none cursor-pointer lowercase;
}

body {
  @apply overflow-x-hidden;
}

hr {
  @apply max-w-lg;
}

p {
  @apply opacity-40;
}

.btn {
  @apply bg-transparent cursor-pointer transition-colors;
  @apply w-[20vw] mx-6 py-6;
  @apply text-3xl lowercase;
  @apply border-b-solid border-b-1 border-rd;
}

.btn:hover {
  @apply bg-violet-100 text-dark-900;
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
  useSmoothScroll();
});
</script>
