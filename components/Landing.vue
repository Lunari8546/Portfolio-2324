<template>
  <div class="hero">
    <div class="intro">
      <h1 class="title">{{ title }}</h1>
      <p class="subtitle">{{ subtitle }}</p>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.hero {
  @apply h-screen overflow-hidden;
}

.intro {
  @apply flex justify-center items-center flex-col;
  @apply mx-18 h-screen text-center italic;
}

.title {
  @apply text-8xl mb-2;
}

.subtitle {
  @apply text-4xl;
}

@screen lt-xl {
  .title {
    @apply mb-4;
  }
}

@screen lt-md {
  .intro {
    @apply mx-12;
  }

  .title {
    @apply text-6xl;
  }

  .subtitle {
    @apply text-2xl;
  }
}
</style>

<script setup lang="ts">
defineProps<{
  title: string;
  subtitle?: string;
}>();
</script>
