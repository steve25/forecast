<template>
  <main>
    <div class="load-button">
      <button @click="loadData">{{ loaded ? 'Refresh' : 'Load' }} data</button>
    </div>

    <div v-if="loaded">
      <CurrentTemp :temp="actualTemp" />
      <ForecastTemp :forecast="forecast" />
    </div>
  </main>
</template>

<script setup>
import CurrentTemp from '../components/CurrentTemp.vue';
import ForecastTemp from '../components/ForecastTemp.vue';

import { ref } from 'vue';
import axios from 'axios';

const actualTemp = ref(0);
const forecast = ref([]);
const loaded = ref(false);

const loadData = async () => {
  forecast.value = [];
  const response = await axios.get(
    'https://api.open-meteo.com/v1/forecast?latitude=48.3&longitude=18.07&current=temperature_2m&daily=temperature_2m_max,temperature_2m_min&timezone=Europe%2FBerlin'
  );

  actualTemp.value = response.data.current.temperature_2m;
  createForecastData(response.data.daily);
  loaded.value = true;
};

const createForecastData = (data) => {
  for (let index = 0; index < 6; index++) {
    forecast.value.push({
      date: data.time[index],
      max: data.temperature_2m_max[index],
      min: data.temperature_2m_min[index]
    });
  }
};
</script>

<style scoped>
main {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  color: #1c1c1c;
}

.load-button {
  text-align: center;
}

button {
  border: 1px solid #1c1c1c;
  border-radius: 0.2rem;
  padding: 0.7rem 0.9rem;
  background-color: azure;
  cursor: pointer;
}
</style>
