<template>
  <div class="forecast">
    <TempBox
      v-for="(min, index) in forecast.min"
      :key="index"
      :min="min"
      :max="forecast.max[index]"
      :date="forecast.date[index]"
      type="forecast"
    />
  </div>
</template>

<script setup>
import TempBox from './TempBox.vue'

const { forecast } = defineProps(['forecast'])
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
