<template>
  <div class="flex flex-col h-screen w-screen justify-between">
    <header class="bg-violet-900 flex justify-between font-bold shadow-md text-xl items-center">
      
      <h2 class="text-white text-5xl mx-5 animate-pulse hover:text-black duration-700"><NuxtLink to="/">Vxidbet</NuxtLink></h2>
      <img src="~/assets/angryziut.png"  class="w-80 h-40 animate-spin"/>
      <ul class="text-white flex flex-row justify-between">
          <li class="m-5 bg-violet-700 py-5 px-4 hover:scale-110 shadow-lg shadow-indigo-500/50  hover:shadow-blue-500/50 duration-700"><NuxtLink to="/groups">Groups</NuxtLink></li>
          <li class="m-5 bg-violet-700 py-5 px-4 hover:scale-110 shadow-lg shadow-indigo-500/50  hover:shadow-blue-500/50 duration-700"><NuxtLink to="/teams">Teams</NuxtLink></li>
          <li class="m-5 bg-violet-700 py-5 px-4 hover:scale-110 shadow-lg shadow-indigo-500/50  hover:shadow-blue-500/50 duration-700"><NuxtLink to="/match-history">Add Match</NuxtLink></li>
      </ul>
    </header>
    <main class="w-full h-full flex items-center bg-violet-700 grid-cols-3 gap-2 place-content-center">
      <slot />
    </main>
    <footer class="bg-violet-900 shadow-lg font-thin text-xl text-white flex items-center justify-center h-10">
      <p class ="animate-pulse hover:text-black">Made by Rashxvsky & igi444</p>
    </footer>
</div>
</template>

<script setup>

</script>

<style scoped>

</style>