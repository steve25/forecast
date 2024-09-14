<template>
  <div class="current">
    <TempBox :temp="temp" type="single" />
  </div>
</template>

<script setup>
import TempBox from './TempBox.vue';

defineProps(['temp']);
</script>

<style scoped>
.current {
  width: fit-content;
  margin: 4rem auto;
}
</style>
