<template>
  <main>
    <CurrentTemp :temp="actualTempValue" />
    <ForecastTemp :forecast="forecastValues" />
  </main>
</template>

<script setup>
import CurrentTemp from '../components/CurrentTemp.vue';
import ForecastTemp from '../components/ForecastTemp.vue';

import { ref, onMounted } from 'vue';
import { actualTemp, forecastTemps } from '@/api';

const actualTempValue = ref(0);
const forecastValues = ref([]);

onMounted(async () => {
  actualTempValue.value = await actualTemp();
  forecastValues.value = await forecastTemps();
});
</script>

<style scoped>
main {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  color: #1c1c1c;
}
</style>
