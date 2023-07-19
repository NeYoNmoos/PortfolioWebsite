<script setup lang="ts">
import { ref } from 'vue'

const squareContent = ref([
  {
    icon: 'code',
    title: 'Webdevelopment',
    text: 'I can code as webdeveloper'
  },
  {
    icon: 'developer_board',
    title: 'Fullstack',
    text: 'I am a fullstack developer that knows how to code in Javascript'
  },
  { icon: 'desktop_windows', title: 'Wordpress', text: 'I can build Wordpress websites' },
  { icon: 'palette', title: 'Design', text: 'I love to design websites' }
])
</script>

<template>
  <div class="h-screen flex flex-row-reverse items-center justify-between">
    <div class="mr-24 max-w-xxl p-6 mx-auto bgColor text-white">
      <h1 class="text-6xl">Service</h1>
      <p class="text-md mt-5 max-w-xl">
        There are many variations of passages of Lorem Ipsum available, but the majority have
        suffered alteration in some form, by injected humour, or randomised words which dont look
        even slightly believable. If you are going to use a passage of Lorem Ipsum,
      </p>
      <div class="grid grid-cols-2 gap-4 mb-2 mt-2">
        <div
          class="squareColor p-5 grid grid-cols-1"
          v-for="(square, index) in squareContent"
          :key="index"
        >
          <div class="text-xl">
            <i class="material-icons iconStyle">{{ square.icon }}</i>
          </div>
          <div class="text-xl">
            {{ square.title }}
          </div>
          <div class="w-60 text-md">
            {{ square.text }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.blur-background {
  backdrop-filter: blur(2px);
}
.bgColor {
  background-color: rgba(15, 15, 15, 0.95);
}
.squareColor {
  background-color: rgb(48, 48, 48);
}
.activeTab {
  color: rgb(191, 9, 205);
}
.btn-tab {
  position: relative;
}
.btn-tab::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 30%;
  height: 2px;
  background-color: rgb(191, 9, 205);
  transition: width 0.3s ease-in-out;
}
.btn-tab.activeTab::after {
  width: 100%;
}
.iconStyle {
  font-size: 48px;
  color: rgb(3, 255, 255);
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
  transition: color 0.3s;
}
.squareColor {
  @apply text-white p-5 grid grid-cols-1 transition-all duration-300 ease-in-out transform hover:bg-cyan-600 hover:scale-110;
  background-color: rgb(48, 48, 48);
}
.iconStyle {
  @apply text-4xl transition-colors duration-300 ease-in-out;
}
.squareColor:hover .iconStyle {
  @apply text-white;
}
</style>
