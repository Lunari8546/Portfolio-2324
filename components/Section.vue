<template>
  <section>
    <div class="info" :id=heading>
      <h2># {{ heading }}.</h2>
      <hr />
    </div>
    <slot />
  </section>
</template>

<style scoped lang="postcss">
section {
  @apply min-h-3xl p-24;

  background-color: rgba(8, 8, 8, 0.6);
}

section:first-of-type {
  border-top-left-radius: 6rem;
  border-top-right-radius: 6rem;
}

section:last-of-type {
  border-bottom-left-radius: 6rem;
  border-bottom-right-radius: 6rem;
}

.info {
  @apply mb-6;
}

.info h2 {
  @apply text-6xl pb-6;
}

@screen lt-xl {
  section {
    @apply px-12;
  }

  .info h2 {
    @apply text-5xl;
  }

  .info hr {
    @apply max-w-full;
  }
}

@screen lt-md {
  section:first-of-type {
    border-top-left-radius: 3rem;
    border-top-right-radius: 3rem;
  }

  section:last-of-type {
    border-bottom-left-radius: 3rem;
    border-bottom-right-radius: 3rem;
  }

  .info h2 {
    @apply text-3xl;
  }
}
</style>

<script setup lang="ts">
const props = defineProps<{
  'heading': string
}>();
</script>
