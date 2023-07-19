<script setup lang="ts">
import Home from '../components/sections/Home.vue'
import Service from '../components/sections/Service.vue'
import Portfolio from '../components/sections/Portfolio.vue'
import About from '../components/sections/About.vue'
import Contact from '../components/sections/Contact.vue'
import Background1 from '../components/threeJs/Background1.vue'
import { onMounted, ref } from 'vue'

const scrollTo = (section: string) => {
  const element = document.getElementById(section)
  if (element) element.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => {
  const sections = ['home', 'about', 'service', 'portfolio', 'kontakt']
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          currentSection.value = entry.target.id
        }
      })
    },
    { threshold: 0.5 }
  )

  sections.forEach((id) => {
    const element = document.getElementById(id)
    if (element) {
      observer.observe(element)
    }
  })
})
let currentSection = ref('home')
</script>

<template>
  <!-- top bar -->
  <div class="navbar bg-base-0 top sticky top-0 z-50">
    <a class="btn btn-ghost" @click="scrollTo('home')">
      <img class="h-10" src="../assets/icons/logo.png" />
    </a>
    <a
      class="btn btn-ghost normal-case text-xl rounded-none"
      @click="scrollTo('home')"
      :class="{ 'underline-red': currentSection === 'home' }"
      >Home</a
    >
    <a
      class="btn btn-ghost normal-case text-xl rounded-none"
      @click="scrollTo('about')"
      :class="{ 'underline-pink': currentSection === 'about' }"
      >About</a
    >
    <a
      class="btn btn-ghost normal-case text-xl rounded-none"
      @click="scrollTo('service')"
      :class="{ 'underline-blue': currentSection === 'service' }"
      >Service</a
    >
    <a
      class="btn btn-ghost normal-case text-xl rounded-none"
      @click="scrollTo('portfolio')"
      :class="{ 'underline-green': currentSection === 'portfolio' }"
      >Portfolio</a
    >
    <a
      class="btn btn-ghost normal-case text-xl rounded-none"
      @click="scrollTo('kontakt')"
      :class="{ 'underline-red': currentSection === 'kontakt' }"
      >Kontakt</a
    >
  </div>

  <!-- main page -->
  <div id="home" class="section"><Home /></div>
  <div id="about" class="section"><About /></div>
  <div id="service" class="section"><Service /></div>
  <div id="portfolio" class="section"><Portfolio /></div>
  <div id="kontakt" class="section"><Contact /></div>

  <!-- top navigation button -->
  <button
    class="fixed bottom-10 right-5 z-50 flex items-center justify-center h-12 w-12 p-3 rounded-full bg-white text-red-500 hover:bg-red-500 hover:text-white"
    :class="{
      'bg-white text-red-500 hover:bg-red-500 hover:text-white': currentSection === 'home',
      'bg-white text-pink-500 hover:bg-pink-500 hover:text-white': currentSection === 'about',
      'bg-white text-blue-500 hover:bg-blue-500 hover:text-white': currentSection === 'service',
      'bg-white text-green-500 hover:bg-green-500 hover:text-white': currentSection === 'portfolio',
      'bg-white text-red-500 hover:bg-red-500 hover:text-white': currentSection === 'kontakt'
    }"
    title="Go to top"
    ref="myBtn"
    @click="scrollTo('home')"
  >
    <div class="material-icons">arrow_upward</div>
  </button>

  <!-- background -->
  <div><Background1 /></div>
</template>

<style scoped>
.underline-red {
  border-bottom: 2px solid red;
}
.underline-pink {
  border-bottom: 2px solid rgb(191, 9, 205);
}
.underline-blue {
  border-bottom: 2px solid rgb(3, 255, 255);
}
.underline-green {
  border-bottom: 2px solid rgb(125, 255, 0);
}
.underline-red {
  border-bottom: 2px solid red;
}
/* .myBtn {
  display: flex; 
  justify-content: center; 
  align-items: center;
  position: fixed;
  bottom: 40px;
  right: 20px;
  z-index: 99;
  border: none;
  outline: none;
  background-color: white;
  color: red;
  cursor: pointer;
  padding: 15px;
  height: 50px;
  width: 50px;
  border-radius: 50%;
}
.myBtn:hover {
  background-color: red;
  color: white;
} */
</style>
