<template>
  <Section heading="projects">
    <div class="list">
      <NuxtLink class="item btn">
        <div class="wrapper">
          <div class="inner">
            <img src="/images/uniquad.vercel.app.png" />
          </div>
        </div>
        Uniquad.
        <p class="year">2023</p>
      </NuxtLink>
      <NuxtLink class="item btn">
        <div class="wrapper">
          <div class="inner">
            <img src="/images/honne.vercel.app.png" />
          </div>
        </div>
        Honne.
        <p class="year">2023</p>
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
  @apply mb-12;
}

.list .item .year {
  @apply float-right mr-6;
}

.list .item .wrapper {
  @apply absolute opacity-0;
  @apply w-xl h-sm border-rd;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
}

.list .item .wrapper .inner img {
  @apply absolute t-0 l-0;
  @apply w-full h-full object-cover;
}
</style>

<script setup lang="ts">
const projects = [
  {
    name: 'uniquad.vercel.app',
    url: 'https://github.com/Lunari8546/Uniquad'
  },
  {
    name: 'honne.vercel.app',
    url: 'https://github.com/Lunari8546/Honne'
  }
];

const projectList = ref([]);

import gsap from 'gsap';

onMounted(() => {
  gsap.timeline().set('.list', { autoAlpha: 1 })
    .from('.item', {
      delay: 1,
      duration: 0.85,
      xPercent: 25,
      stagger: 0.095,
      skewY: gsap.utils.wrap([-8, 8]),
    }).set('.list', { pointerEvents: 'all' });

  gsap.defaults({
    duration: 0.55,
    ease: 'expo.out'
  });

  const items = document.querySelectorAll('.item');

  items.forEach((item) => {
    const wrapper = item.querySelector('.wrapper');
    const wrapperBounds = wrapper.getBoundingClientRect();
    let itemBounds = item.getBoundingClientRect();

    const onMouseEnter = () => {
      gsap.set(wrapper, {
        scale: 0.8,
        xPercent: 25,
        yPercent: 25,
        rotation: -15
      });

      gsap.to(wrapper, {
        opacity: 1,
        scale: 1,
        yPercent: 0,
        rotation: 0
      });
    };

    const onMouseLeave = () => {
      gsap.to(wrapper, {
        opacity: 0,
        yPercent: -25,
        xPercent: 25,
        scale: 0.8,
        rotation: -15
      });
    };

    const onMouseMove = ({ x, y }) => {
      let yOffset = itemBounds.top / wrapperBounds.height;

      yOffset = gsap.utils.mapRange(0, 1.5, -150, 150, yOffset);

      gsap.to(wrapper, {
        duration: 1.25,
        x: Math.abs(x - itemBounds.left) - wrapperBounds.width / 1.5,
        y: Math.abs(y - itemBounds.top) - wrapperBounds.height / 1.5 - yOffset * 2
      });
    };

    item.addEventListener('mouseenter', onMouseEnter);
    item.addEventListener('mouseleave', onMouseLeave);
    item.addEventListener('mousemove', onMouseMove);
  });
});
</script>
