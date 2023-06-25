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
</style>

<script setup lang="ts">
const projects = [
  {
    name: 'uniquad',
    url: 'https://github.com/Lunari8546/Uniquad'
  }
];

const projectList = ref([]);

onMounted(() => {
  for (let i = 0; i < projectList.value.length; i++) {
    projectList.value[i].style.background = `
      linear-gradient(rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.3)),
      url(./images/${ projects[i].name }.png)
    `;

    projectList.value[i].style.backgroundPosition = 'center';
    projectList.value[i].style.backgroundSize = 'cover';
    projectList.value[i].style.backgroundRepeat = 'no-repeat';
  };
});
</script>
