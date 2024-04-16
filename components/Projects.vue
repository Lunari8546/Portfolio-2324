<template>
  <Section heading="projects">
    <div class="list">
      <NuxtLink class="item btn" to="http://uniquad.vercel.app" target="_blank">
        <div class="wrapper">
          <div class="inner">
            <img src="/images/uniquad.png" />
          </div>
        </div>
        Uniquad.
        <p class="year">2023</p>
      </NuxtLink>
      <NuxtLink class="item btn" to="https://honne.vercel.app" target="_blank">
        <div class="wrapper">
          <div class="inner">
            <img src="/images/honne.png" />
          </div>
        </div>
        Honne.
        <p class="year">2023</p>
      </NuxtLink>
      <NuxtLink
        class="item btn"
        to="https://pageofmoths.itch.io/metamorphosis"
        target="_blank"
      >
        <div class="wrapper">
          <div class="inner">
            <img src="/images/metamorphosis.png" />
          </div>
        </div>
        Metamorphosis.
        <p class="year">2023</p>
      </NuxtLink>
      <NuxtLink
        class="item btn"
        to="https://github.com/TeamHarTex/HarTex"
        target="_blank"
      >
        <div class="wrapper">
          <div class="inner">
            <img src="/images/hartex.png" />
          </div>
        </div>
        HarTex.
        <p class="year">2024</p>
      </NuxtLink>
      <NuxtLink
        class="item btn"
        to="https://github.com/StudiosConcertos/Quartz"
        target="_blank"
      >
        <div class="wrapper">
          <div class="inner">
            <img src="/images/quartz.png" />
          </div>
        </div>
        Quartz.
        <p class="year">2024</p>
      </NuxtLink>
    </div>
  </Section>
</template>

<style scoped lang="postcss">
.list {
  @apply flex flex-col;
}

.list .item {
  @apply m-0 w-full pl-6;
}

.list .item:not(:last-child) {
  @apply mb-6;
}

.list .item .year {
  @apply float-right mr-6;
}

.list .item .wrapper {
  @apply absolute opacity-0 z-99;
  @apply w-xl h-sm pointer-events-none;
  @apply top-[50%] left-[50%]
  @apply translate-x-[-50%] translate-y-[-50%];
}

.list .item .wrapper .inner img {
  @apply absolute t-0 l-0 border-rd-4;
  @apply w-full h-full object-cover;
}

@screen lt-xl {
  .list .item .wrapper {
    @apply hidden;
  }
}

@screen lt-md {
  .list .item {
    @apply text-xl;
  }
}
</style>

<script setup lang="ts">
const { $gsap } = useNuxtApp();

onMounted(() => {
  $gsap
    .timeline()
    .set(".list", { autoAlpha: 1 })
    .from(".item", {
      delay: 1,
      duration: 0.85,
      xPercent: 25,
      stagger: 0.095,
      skewY: $gsap.utils.wrap([-8, 8]),
    })
    .set(".list", { pointerEvents: "all" });

  $gsap.defaults({
    duration: 0.55,
    ease: "expo.out",
  });

  const items = document.querySelectorAll(".item");

  items.forEach((item) => {
    const wrapper = item.querySelector(".wrapper");

    const onMouseEnter = () => {
      $gsap.set(wrapper, {
        scale: 0.8,
        xPercent: 25,
        yPercent: 25,
        rotation: -15,
      });

      $gsap.to(wrapper, {
        opacity: 1,
        scale: 1,
        yPercent: 0,
        rotation: 0,
      });
    };

    const onMouseLeave = () => {
      $gsap.to(wrapper, {
        opacity: 0,
        yPercent: -25,
        xPercent: 25,
        scale: 0.8,
        rotation: -15,
      });
    };

    item.addEventListener("mouseenter", onMouseEnter);
    item.addEventListener("mouseleave", onMouseLeave);
  });
});
</script>
