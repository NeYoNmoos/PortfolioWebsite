<template>
  <div class="overlay h-screen flex flex-row-reverse items-center justify-between">
    <div class="mr-24 max-w-xxl p-6 mx-auto bgColor text-white">
      <h1 class="text-6xl mb-2">Kontakt</h1>
      <p>Are you interested or do you have further questions? Get into contact with me!</p>

      <form class="flex flex-col mt-4 space-y-4">
        <div>
          <label class="block text-sm font-medium" for="name">Name</label>
          <input
            class="mt-1 px-2 block w-full h-10 focus:outline-none focus:border-2 focus:border-orange-500 shadow-sm"
            id="name"
            type="text"
            required
          />
        </div>
        <div>
          <label class="block text-sm font-medium" for="phone">Phone</label>
          <input
            class="mt-1 px-2 block w-full h-10 focus:outline-none focus:border-2 focus:border-orange-500 shadow-sm"
            id="phone"
            type="tel"
            required
          />
        </div>
        <div>
          <label class="block text-sm font-medium" for="email">E-Mail</label>
          <input
            class="mt-1 px-2 block w-full h-10 focus:outline-none focus:border-2 focus:border-orange-500 shadow-sm"
            id="email"
            type="email"
            required
          />
        </div>
        <div>
          <label class="block text-sm font-medium" for="message">Message</label>
          <textarea
            class="mt-1 px-2 py-1 block w-full focus:outline-none focus:border-2 focus:border-orange-500 shadow-sm"
            id="message"
            rows="4"
            required
          ></textarea>
        </div>
        <button class="mt-4 px-4 py-2 bg-orange-500 text-white hover:bg-orange-600" type="submit">
          Send
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts"></script>

<style scoped>
.overlay {
  background: rgba(0, 0, 0, 0.8);
  background: radial-gradient(circle at center, transparent 20px, rgba(0, 0, 0, 0.7) 250px);
}
</style>
