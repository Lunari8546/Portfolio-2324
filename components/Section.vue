<template>
  <section :id=heading>
    <div class="info">
      <h2># {{ heading }}.</h2>
      <hr/>
    </div>
    <div class="content">
      <slot/>
    </div>
  </section>
</template>

<style scoped lang="postcss">
section {
  @apply min-h-screen px-48 py-36;
}

.info {
  @apply mb-12;
}

.info h2 {
  @apply text-6xl pb-6;
}

@screen lt-xl {
  section {
    @apply px-24;
  }

  .info h2 {
    @apply text-5xl;
  }

  .info hr {
    @apply max-w-full;
  }
}

@screen lt-md {
  section {
    @apply px-12 py-18;
  }

  .info h2 {
    @apply text-3xl;
  }
}
</style>

<script setup lang="ts">
defineProps<{
  'heading': string
}>();
</script>
