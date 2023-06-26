<template>
  <Section heading="projects">
    <div class="list">
      <a
        class="btn"
        ref="projectList"
        v-for="project in projects"
        :href="project.url"
        target="_blank"
      >
        <span>{{ project.name }}</span>
      </a>
    </div>
  </Section>
</template>

<style scoped lang="postcss">
.list {
  @apply flex;
}

a {
  @apply relative m-0 pl-6 b-0;
  @apply w-full h-3xl;
}

span {
  @apply absolute right-0 bottom-0;
  @apply mb-6 mr-6 opacity-40;
}

@screen lt-md {
  span {
    @apply text-xl;
  }
}
</style>

<script setup lang="ts">
const projects = [
  {
    name: 'uniquad.vercel.app',
    url: 'https://github.com/Lunari8546/Uniquad'
  }
];

const projectList = ref([]);

onMounted(() => {
  for (let i = 0; i < projectList.value.length; i++) {
    projectList.value[i].style.background = `
      linear-gradient(
        rgba(0, 0, 0, 0) 90%,
        rgba(0, 0, 0, 0.9)
      ),
      url(./images/${ projects[i].name }.png)
    `;

    projectList.value[i].style.backgroundPosition = 'center';
    projectList.value[i].style.backgroundSize = 'cover';
    projectList.value[i].style.backgroundRepeat = 'no-repeat';
  };
});
</script>
