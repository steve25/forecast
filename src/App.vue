<template>
  <MyNavigation />
  <TheHeader />

  <RouterView v-slot="{ Component }">
    <KeepAlive>
      <component :is="Component" />
    </KeepAlive>
  </RouterView>
</template>

<script setup>
import TheHeader from './views/TheHeader.vue';
import MyNavigation from './views/MyNavigation.vue';
</script>

<style>
body {
  margin-bottom: 2rem;
}
</style>
