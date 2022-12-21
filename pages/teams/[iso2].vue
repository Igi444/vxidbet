<template>
    <div class=" border border-white rounded-lg  grid grid-cols-2 flex-col items-left justify-left p-3 w-full h-full">
    
        
        <h1 class="text-white flex justify-left text-3xl mb-8 m-4">{{data.name}}</h1>
        <div class="flex items-center justify-center ">
        <h1 class="text-white text-3xl">Lastest match</h1>
    </div>
        <div class=" col-start-2 w-auto h-auto text-white border border-white rounded-lg flex items-center justify-center text-xl gap-4">
            <NuxtLink :to='`/teams/${lastmatch.team1_iso === iso2 ? data.iso2 : opps.iso2}`'><img :src="lastmatch.team1_iso === iso2 ? data.flag : opps.flag" alt="" class="w-72 h-40"> </NuxtLink>

            {{ lastmatch.team1_iso }} {{lastmatch.team1_score}}:{{lastmatch.team2_score}} {{lastmatch.team2_iso}}
            <NuxtLink :to='`/teams/${lastmatch.team2_iso === iso2 ? data.iso2 : opps.iso2}`'><img :src="lastmatch.team2_iso === iso2 ? data.flag : opps.flag" alt="" class="w-72 h-40"> </NuxtLink>
        </div>
        <img :src="data.flag" alt="" class="w-72 h-40 mb-5 col-start-1">

        <p class="text-white col-start-1 p-0" v-for="s in squad" :key="s">
            {{ s }}
        </p>

    </div>
</template>

<script setup>
const { iso2 } = useRoute().params

const { data } = await useFetch(`/api/team`,{
    method: 'POST',
    body: {iso2: iso2}
})
const { data: lastmatch } = await useFetch(`/api/getMatch`,{ // info o meczu: team1_iso, team2_iso, score
    method: 'POST',
    body: {iso2: iso2}
})
const { data: opps } = await useFetch(`/api/team`,{ // taka sama skladnia jak team wyzej no
    method: 'POST',
    body: {iso2: iso2 === lastmatch.value.team1_iso ? lastmatch.value.team2_iso : lastmatch.value.team1_iso}
})
let squad = data.value.squad.split('\n').filter(e => {
   return e !== ""
})
</script>

<style scoped>

</style>