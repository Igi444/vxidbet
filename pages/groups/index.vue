<template>
    <div class="grid grid-flow-col">
        <div v-for="g in groups" class=" border border-white rounded-lg mx-8 flex flex-col items-center justify-center p-3 text-white text-2xl">
            {{g}}
            <div v-for="d in data" >
                <div v-if="g === d.group" class="w-36 h-24 flex justify-center items-center text-white">
                    <NuxtLink :to='`/teams/${d.iso2}`'><p>{{d.name}}</p></NuxtLink>


                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const { data } = await useFetch('api/Country')
const groups = ["A", "B", "C", "D", "E", "F", "G", "H"]
</script>

<style lang="scss" scoped>

</style>