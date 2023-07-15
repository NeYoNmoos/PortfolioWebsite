<script setup lang="ts">
import { ref } from 'vue'

const tabContent = [
  {
    title: 'Main skills',
    text: 'There are many variations of passages of Lorem Ipsum available...'
  },
  { title: 'Experience', text: 'Here are some of my projects...' },
  { title: 'Educatian & Certification', text: 'Here are some of my skills...' },
  { title: 'Hobbies', text: "Here's how you can contact me..." }
]

let activeTab = ref(tabContent[0])
</script>

<template>
  <div class="h-screen flex flex-col justify-center">
    <div class="ml-24 max-w-xxl p-6 mx-auto bgColor text-white">
      <h1 class="text-6xl">About Me</h1>
      <p class="text-md mt-5 max-w-xl">
        There are many variations of passages of Lorem Ipsum available, but the majority have
        suffered alteration in some form, by injected humour, or randomised words which dont look
        even slightly believable. If you are going to use a passage of Lorem Ipsum,
      </p>
      <div class="flex space-x-4 mb-2 mt-2 text-xl">
        <button
          v-for="tab in tabContent"
          :key="tab.title"
          class="btn-tab"
          :class="{ activeTab: activeTab.title === tab.title }"
          @click="activeTab = tab"
        >
          {{ tab.title }}
        </button>
      </div>
      <p class="text-md mt-5 max-w-xl">{{ activeTab.text }}</p>
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
</style>
