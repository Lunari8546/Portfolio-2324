<template>
  <canvas ref="experience" />
</template>

<style scoped lang="postcss">
canvas {
  @apply fixed t-0 l-0;
}
</style>

<script setup lang="ts">
import {
  Camera,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
  PlaneGeometry, WireframeGeometry, LineSegments
} from 'three';

import { OrbitControls } from 'three/addons/controls/OrbitControls';

const experience: Ref<HTMLCanvasElement | null> = ref(null);

const width = window.innerWidth,
      height = window.innerHeight;
const aspectRatio = computed(() => width / height);

const scene = new Scene();
const camera = new PerspectiveCamera(
  75, aspectRatio.value, 0.1, 1000
);

function initScene() {
  scene.add(camera);

  camera.position.set(0, 0, 2);
};

function initObjects() {
  const objects = [
    new LineSegments(
      new WireframeGeometry( new PlaneGeometry(1, 1, 10, 10) )
    )
  ];

  objects.forEach((object) => {
    scene.add(object);
  });
};

function updateCamera() {
  camera.aspect = aspectRatio;

  camera.updateProjectionMatrix();
};

let renderer: WebGLRenderer;

let controls: OrbitControls;

function initRenderer() {
  if (experience.value) {
    renderer = new WebGLRenderer({ canvas: experience.value });
    
    controls = new OrbitControls(camera, renderer.domElement);

    updateRenderer();
  };
};

function updateRenderer() {
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  
  controls.update();
  
  renderer.render(scene, camera);
};

watch(aspectRatio, () => {
  updateCamera();
  updateRenderer();
});

onMounted(() => {
  initScene();
  initObjects();
  initRenderer();

  draw();
});

const draw = () => {
  updateRenderer();

  requestAnimationFrame(draw);
};
</script>
