<script setup lang="ts">
const projects = [
  {
    title: 'Project 1',
    subtitle: 'Subtitle 1',
    image: 'src/assets/icons/quackoLogo1.svg',
    description: 'Lorem ipsum dolor sit amet...'
  },
  {
    title: 'Project 2',
    subtitle: 'Subtitle 2',
    image: 'src/assets/icons/quackoLogo1.svg',
    description: 'Consectetur adipiscing elit...'
  }
]
</script>

<template>
  <div class="h-screen flex items-center justify-between">
    <div class="ml-24 max-w-xxl p-6 mx-auto bgColor text-white">
      <h1 class="text-6xl">My latest Projects</h1>
      <p class="text-md mt-5 max-w-xl">
        There are many variations of passages of Lorem Ipsum available...
      </p>

      <div class="grid grid-cols-2 gap-4 mt-5">
        <div
          v-for="project in projects"
          :key="project.title"
          class="relative overflow-hidden project-card transform transition-transform duration-200 hover:scale-105"
        >
          <img :src="project.image" :alt="project.title" class="w-60 h-full object-cover" />

          <div
            class="overlay-content absolute inset-0 opacity-0 hover:opacity-100 transition-all duration-200 ease-out p-4 h-full flex flex-col justify-between text-white"
          >
            <div>
              <h2 class="text-xl font-bold">{{ project.title }}</h2>
              <h3 class="text-md mb-2">{{ project.subtitle }}</h3>
            </div>
            <p
              class="text-sm description opacity-0 hover:opacity-100 transition-all duration-500 delay-150"
            >
              {{ project.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bgColor {
  background-color: rgba(15, 15, 15, 0.95);
}

.project-card {
  transition: transform 0.3s;
}

.project-card:hover {
  transform: scale(1.05);
}

.overlay-content {
  background: linear-gradient(to top, rgba(57, 255, 20, 0.2), rgba(0, 0, 0, 0.2));
  transition: opacity 0.3s;
}

.overlay-content .description {
  transition: opacity 0.5s;
  transition-delay: 0.2s;
}
</style>
