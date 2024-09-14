<template>
  <main>
    <CurrentTemp :temp="actualTemp" />
    <ForecastTemp :forecast="forecast" />
  </main>
</template>

<script setup>
import CurrentTemp from '../components/CurrentTemp.vue'
import ForecastTemp from '../components/ForecastTemp.vue'

import { onMounted } from 'vue'
import axios from 'axios'

let actualTemp = 0
let forecast = {}

onMounted(async () => {
  const response = await axios.get(
    'https://api.open-meteo.com/v1/forecast?latitude=48.3&longitude=18.07&current=temperature_2m&daily=temperature_2m_max,temperature_2m_min&timezone=Europe%2FBerlin'
  )

  actualTemp = response.data.current.temperature_2m
  forecast = {
    max: response.data.daily.temperature_2m_max,
    min: response.data.daily.temperature_2m_min,
    date: response.data.daily.time
  }

  console.log(response.data)
})
</script>

<style scoped>
main {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  color: #1c1c1c;
}
</style>
