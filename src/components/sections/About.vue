<script setup lang="ts">
import { ref } from 'vue'

const tabContent = [
  {
    title: 'Main skills',
    text: 'Over the years, I have cultivated a rich skill set encompassing various aspects of computer science and programming. From UX/UI design to front-end development, I strive for excellence in all my work.'
  },
  {
    title: 'Experience',
    text: 'I have had the opportunity to work on numerous diverse projects, from creating digital products for businesses to software development for startups. Every project is a chance for me to innovate and refine my skills.'
  },
  {
    title: 'Education & Certification',
    text: 'My formal education in computer science, started in 2016, provides a solid foundation for my work. I am always eager to expand my knowledge and stay updated with the latest developments in the field.'
  },
  {
    title: 'Hobbies',
    text: 'When not coding, I enjoy a round of Chess enjoying the Lake of Constance. These activities help me maintain a balanced lifestyle and often serve as a source of inspiration in my work.'
  }
]

let activeTab = ref(tabContent[0])
</script>

<template>
  <div class="h-screen flex flex-row items-center justify-between">
    <div class="ml-24 max-w-xxl p-6 mx-auto bgColor text-white">
      <h1 class="text-6xl">About Me</h1>
      <p class="text-md mt-5 max-w-xl">
        Hi, I'm Matt. I'm delighted you found your way to my site! My fascination with computers
        sparked at a young age, and it was a natural progression for me to dive into the world of
        computer science and programming. I officially began this journey in 2016 when I enrolled in
        school for computer science, and since then, it's been an adventure filled with growth,
        learning, and innovation. I'm based in Vorarlberg, Austria, but the digital world knows no
        boundaries. I've had the privilege to work on numerous projects, sharpening my skills and
        applying my knowledge to solve real-world problems. I have an insatiable curiosity for new
        technologies and creative coding. Each project I take on is an opportunity to craft elegant
        solutions, whether I'm working with agencies, startups, or individual clients. When I'm not
        behind a computer screen, I indulge in my other passions and hobbies. It's all part of a
        well-rounded life, after all! I'm excited to share more about myself, my skills, and my work
        with you. Welcome, and enjoy exploring my portfolio.
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
