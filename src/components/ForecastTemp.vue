<template>
  <div class="forecast">
    <ForecastBox
      v-for="(day, index) in props.forecast"
      :key="index"
      :min="day.min"
      :max="day.max"
      :date="day.date"
    />
  </div>
</template>

<script setup>
import ForecastBox from './ForecastBox.vue'

const props = defineProps(['forecast'])
</script>

<style scoped>
.forecast {
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  gap: 0.9rem;
}

@media screen and (max-width: 750px) {
  .forecast {
    gap: 0.6rem;
  }
}

@media screen and (max-width: 660px) {
  .forecast {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
}
</style>
