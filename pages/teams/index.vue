<template>

    <div class="box-border p-4 border-4 grid grid-cols-8 gap-5 place-items-center shadow-2xl hover:shadow-blue-500/50 w-full">
    <div v-for="d in data" :key="d" class="text-white " :style="`background-image: url(${d.flag}); background-size: cover`">
        <div class="w-48 h-32 p-3 border-2 flex justify-center items-center text-2xl" :style="`text-shadow: 2px 2px 0px black`"><NuxtLink :to='`/teams/${d.iso2}`'><p>{{d.name}}</p></NuxtLink></div>
    </div>
    </div>
</template>

<script setup>
const { data } = await useFetch('api/Country')

</script>

<style lang="scss" scoped>

</style>
