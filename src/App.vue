<template>
  <MyNavigation @page="onUpdatePage" />
  <TheHeader />
  <MainOnmounted v-if="isOnMountedPage" />
  <MainOnclick v-else />
</template>

<script setup>
import { ref } from 'vue';

import TheHeader from './views/TheHeader.vue';
import MainOnmounted from './views/MainOnmounted.vue';
import MyNavigation from './views/MyNavigation.vue';
import MainOnclick from './views/MainOnclick.vue';

const isOnMountedPage = ref(true);

const onUpdatePage = (e) => {
  isOnMountedPage.value = e.value;
};
</script>

<style scoped></style>
