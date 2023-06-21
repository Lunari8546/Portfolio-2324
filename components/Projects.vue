<template>
  <Section heading="projects">
    <canvas ref="experience" />
  </Section>
</template>

<style scoped lang="postcss">
</style>

<script setup lang="ts">
import {
  Camera, Color,
  Mesh,
  PerspectiveCamera, PlaneGeometry,
  Scene, ShaderMaterial,
  WebGLRenderer
} from 'three';

const experience: Ref<HTMLCanvasElement | null> = ref(null);

const width = window.innerWidth,
      height = window.innerHeight;
const aspectRatio = computed(() => width / height);

const scene = new Scene();
const camera = new PerspectiveCamera(
  50, aspectRatio.value, 0.001, 1000
);
</script>
