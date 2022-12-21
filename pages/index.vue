<template>
    <div class="w-full">
      <div v-for="item, i in groups" :key="item" class="w-full"> 
        <div v-if="currentSlide == i" class="w-full flex" :class="currentSlide !== i ? 'hidden' : ''">
          <div class="flex w-full">
            <div class='grid place-items-center w-1/12 text-5xl'><button @click="changeSlide(-1)">←</button></div>
              <div class="flex flex-col justify-center items-center w-10/12">
                <p class="text-3xl font-serif text-white">{{ item }}</p>
                <div class="grid grid-cols-2 content-between items-center ">
                  <div v-for="d in data" :key="d">
                  <div v-if="item === d.group" class="m-10 flex flex-col">
                    <NuxtLink class="flex flex-col justify-center items-center" :to='`/teams/${d.iso2}`'><p class="text-3xl font-serif text-white">{{d.name}}</p> <img :src="d.flag" alt="" class="w-48 h-32"></NuxtLink>
                  </div>
                </div>
              </div>
              </div>
            <div class='grid place-items-center w-1/12 text-5xl'><button @click="changeSlide(1)">→</button></div>
          </div>
        </div>
      </div>
    </div>
</template>
<script setup>
const currentSlide = ref(0)
const groups = ["A", "B", "C", "D", "E", "F", "G", "H"]
const { data } = await useFetch('/api/Country')
function changeSlide(amount) {
  if (currentSlide.value === 0 && amount < 0) {
    currentSlide.value = groups.length - 1
    return
  } else if (currentSlide.value === groups.length - 1 && amount > 0) {
    currentSlide.value = 0;
    return
  }
  currentSlide.value += amount
}
</script>

