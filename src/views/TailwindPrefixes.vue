<template>
  <div class="about min-h-screen w-full">
    <h1 class="text-lg text-black font-bold">Tailwind css prefixes</h1>

    <div
      class="lg:bg-blue-500 md:bg-blue-900 bg-blue-300 min-h-screen w-full hover:bg-red-500 lg:hover:bg-black"
    ></div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
