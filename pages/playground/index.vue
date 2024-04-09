<template>
  <div class="flex justify-center items-center h-screen">
    <p ref="target"></p>
  </div>
</template>

<style scoped lang="postcss">
p {
  @apply text-5xl opacity-100 font-300;
}
</style>

<script setup lang="ts">
definePageMeta({
  layout: "playground",
});

const target = ref<HTMLParagraphElement>();

const text = "And I watched the water unfold.";

onMounted(() => {
  text.split("").forEach((character) => {
    var span = document.createElement("span");

    span.innerHTML = character;

    target.value?.appendChild(span);
  });
});
</script>
