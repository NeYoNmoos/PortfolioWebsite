<script setup lang="ts">
import homeBackground from '../../assets/backgrounds/homeBackground.jpg'
</script>

<template>
  <div
    class="h-screen bg-cover bg-right bg-no-repeat text-white flex flex-col justify-center py-20 px-60 bg-gradient-to-r from-black via-transparent to-black"
    :style="{ backgroundImage: `url(${homeBackground})` }"
  >
    <div>
      <h1 class="text-8xl">Hello, I'm Matt</h1>
      <p class="text-6xl mt-5">JS-Engineer</p>
    </div>
  </div>
</template>

<style scoped></style>
