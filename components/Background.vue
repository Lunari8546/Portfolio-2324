<template>
  <TresCanvas window-size>
    <TresPerspectiveCamera
      :args="[50, 1, 0.001, 1000]"
      :position="[0, 0, 0.2]"
    />
    <TresMesh>
      <TresPlaneGeometry :args="[1.5, 1.5, 300, 300]" />
      <TresShaderMaterial
        :vertex-shader="vertexShader"
        :fragment-shader="fragmentShader"
        :uniforms="uniforms"
      ></TresShaderMaterial>
    </TresMesh>
  </TresCanvas>
</template>

<style scoped lang="postcss">
canvas {
  @apply fixed t-0 l-0 -z-1;
}
</style>

<script setup lang="ts">
import vertexShader from "~/assets/shaders/background/vertex.glsl";
import fragmentShader from "~/assets/shaders/background/fragment.glsl";

import { useRenderLoop } from "@tresjs/core";

import { Color } from "three";

const palette = [
  new Color(0xd27685),
  new Color(0x9e4784),
  new Color(0x66347f),
  new Color(0x37306b),
];

const uniforms = {
  uTime: { value: 0 },
  uColor: { value: palette },
};

const { onLoop } = useRenderLoop();

onMounted(async () => {
  uniforms.uTime.value = Math.random();

  await nextTick();

  onLoop(() => {
    uniforms.uTime.value += 0.0002;
  });
});
</script>
