<template>
  <section>
    <div class="info">
      <h2># {{ heading }}.</h2>
      <hr />
    </div>
    <slot />
  </section>
</template>

<style scoped lang="postcss">
section {
  @apply min-h-4xl p-24;

  background-color: rgba(8, 8, 8, 0.6);
}

.info {
  @apply mb-12;
}

.info h2 {
  @apply text-6xl pb-6;
}

.info p {
  @apply text-3xl;
}
</style>

<script setup lang="ts">
const props = defineProps<{
  'heading': string
}>();
</script>
