<template>
  <main>
    <div class="load-button">
      <button @click="loadData">{{ loaded ? 'Refresh' : 'Load' }} data</button>
      <p v-if="loaded">refreshed: {{ dateTime }}</p>
    </div>

    <div v-if="loaded">
      <CurrentTemp :temp="actualTempValue" />
      <ForecastTemp :forecast="forecastValues" />
    </div>
  </main>
</template>

<script setup>
import CurrentTemp from '../components/CurrentTemp.vue';
import ForecastTemp from '../components/ForecastTemp.vue';

import { ref } from 'vue';
import { actualTemp, forecastTemps } from '@/api';

const actualTempValue = ref(0);
const forecastValues = ref([]);
const loaded = ref(false);
const dateTime = ref('');

const loadData = async () => {
  forecastValues.value = [];
  actualTempValue.value = await actualTemp();
  forecastValues.value = await forecastTemps();
  loaded.value = true;

  dateTime.value = formateDate(new Date());
};

const formateDate = (date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  return `${day}/${month}/${year} ${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
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
p {
  width: fit-content;
  margin: 0 auto;
  margin-top: 1rem;
  padding: 0.4rem 0.7rem;
  border-radius: 0.3rem;
  border: 2px solid #1c1c1c;
  background-color: #1c1c1cbd;
  color: rgb(244, 244, 244);
}
</style>
