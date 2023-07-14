<script setup lang="ts"></script>

<template>
  <div
    class="h-screen flex flex-col justify-center"
    :style="{ backgroundImage: `url(${homeBackground})` }"
  >
    <div class="ml-24 max-w-xxl p-4 mx-auto blur-background">
      <h1 class="text-8xl">Hello, I'm Matt</h1>
      <p class="text-6xl mt-5">JS-Engineer</p>
    </div>
  </div>
</template>

<style scoped>
.blur-background {
  backdrop-filter: blur(2px);
}
</style>
