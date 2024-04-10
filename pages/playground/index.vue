<template>
  <div class="flex justify-center items-center h-screen">
    <p ref="target" class="text-6xl select-none opacity-100 font-100"></p>
  </div>
</template>

<script setup lang="ts">
const { $gsap } = useNuxtApp();

definePageMeta({
  layout: "playground",
});

const maxDistance = 200;
const minFontWeight = 100;
const maxFontWeight = 800;

const target = ref<HTMLParagraphElement>();

const text = "And I watched the water unfold...";

const { x, y } = useMouse({ target: useParentElement() });

watch([x, y], () => {
  document.querySelectorAll(".letter").forEach((letter) => {
    const itemRect = letter.getBoundingClientRect();
    const itemCenterX = itemRect.left + itemRect.width / 2 + window.scrollX;
    const itemCenterY = itemRect.top + itemRect.height / 2 + window.scrollY;

    const distance = Math.sqrt(
      Math.pow(x.value - itemCenterX, 2) + Math.pow(y.value - itemCenterY, 2)
    );

    let fontWeight =
      distance < maxDistance
        ? $gsap.utils.mapRange(
            0,
            maxDistance,
            minFontWeight,
            maxFontWeight,
            Math.max(0, maxDistance - distance)
          )
        : minFontWeight;

    $gsap.to(letter, { fontWeight, duration: 0.2 });
  });
});

onMounted(() => {
  text.split("").forEach((character) => {
    var span = document.createElement("span");

    span.innerHTML = character;
    span.classList.add("letter");
    span.classList.add("font-serif");

    target.value?.appendChild(span);
  });
});
</script>
