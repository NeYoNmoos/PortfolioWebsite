<script setup lang="ts">
import Home from '../components/sections/Home.vue'
import Service from '../components/sections/Service.vue'
import Portfolio from '../components/sections/Portfolio.vue'
import About from '../components/sections/About.vue'
import Contact from '../components/sections/Contact.vue'
import Background1 from '../components/threeJs/Background1.vue'

const scrollTo = (section: string) => {
  const element = document.getElementById(section)
  if (element) element.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <!-- top bar -->
  <div class="navbar bg-base-0 top sticky top-0 z-50">
    <a class="btn btn-ghost" @click="scrollTo('home')">
      <img class="h-10" src="../assets/icons/logo.png" />
    </a>
    <a class="btn btn-ghost normal-case text-xl" @click="scrollTo('home')">Home</a>
    <a class="btn btn-ghost normal-case text-xl" @click="scrollTo('about')">About</a>
    <a class="btn btn-ghost normal-case text-xl" @click="scrollTo('service')">Service</a>
    <a class="btn btn-ghost normal-case text-xl" @click="scrollTo('portfolio')">Portfolio</a>
    <a class="btn btn-ghost normal-case text-xl" @click="scrollTo('kontakt')">Kontakt</a>
  </div>

  <!-- main page -->
  <div id="home" class="section"><Home /></div>
  <div id="about" class="section"><About /></div>
  <div id="service" class="section"><Service /></div>
  <div id="portfolio" class="section"><Portfolio /></div>
  <div id="kontakt" class="section"><Contact /></div>
  <div id="three" class="section"><Background1 /></div>
</template>
