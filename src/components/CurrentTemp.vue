<template>
  <div class="current">
    <CurrentBox :temp="temp" />
  </div>
</template>

<script setup>
import CurrentBox from './CurrentBox.vue'

const { temp } = defineProps(['temp'])
</script>

<style scoped>
.current {
  width: fit-content;
  margin: 4rem auto;
}
</style>
