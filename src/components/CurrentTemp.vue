<template>
  <div class="current">
    <TempBox type="actual" :temp="temp" />
  </div>
</template>

<script setup>
import TempBox from './TempBox.vue'

const { temp } = defineProps(['temp'])
</script>

<style scoped>
.current {
  width: fit-content;
  margin: 4rem auto;
}
</style>
