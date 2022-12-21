<template>
    <div class="flex flex-col h-full items-center ">
        <div class="w-full">
            <p class="text-3xl font-serif text-white mt-48 text-center" >Insert your own match :PPP</p>
        </div>
    
        <div class=" text-black border border-white rounded-lg flex items-center justify-center gap-8 h-14 p-8 mt-8">
            <p class="text-white">Team 1</p>
            <select name="team1" id="1" @change="FilterTeams()"  v-model="team1">
            
                <option v-for="(t, i) in filteredTeams" :value="t.iso2" :key="i">{{t.name}}</option>
            </select>
            <input type="number" v-model="score1" min="0"/>
            <input type="number" v-model="score2" min="0"/>
            <p class="text-white">Team 2</p>
            <select name="team2" id="2" ref="team2">
                <option v-for="(t, i) in FilterTeams()" :value="t.iso2" :key="i">{{t.name}}</option>
            </select>
            <button @click="createMatch(); clear()" class="text-white border border-white rounded-lg p-1">Submit</button>
        </div>
    </div>
    </template>
    
    <script setup>
    const { data: teams } = await useFetch('/api/Country')
    const team1 = ref('')
    const team2 = ref()
    const score1 = ref(0)
    const score2 = ref(0)
    let filteredTeams= ref(teams)
    const FilterTeams = () => {
        return filteredTeams.value.filter(e => e.iso2 !== team1.value)
        
    }
    
    async function createMatch(){
        if ((score1.value < 0 || score2.value < 0)) {
            alert('Co pan sobie myslal2')
        }
        else
        {
            const { data } = await useFetch(`/api/match`,{
            method: 'POST',
            body: {
                team1: team1.value,
                team2: team2.value.value,
                score1: Math.floor(score1.value),
                score2: Math.floor(score2.value)
            }}
        )
                alert('Match has been added')
    }
    }
    function clear(){
        score1.value = 0
        score2.value = 0
    }
    </script>

<style lang="scss" scoped>

</style>