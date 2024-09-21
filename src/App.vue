<template>
  <TheNavigation />
  <TheHeader />

  <RouterView v-slot="{ Component }">
    <KeepAlive>
      <component :is="Component" />
    </KeepAlive>
  </RouterView>

  <TheFooter />
</template>

<script setup>
import TheHeader from './views/TheHeader.vue';
import TheNavigation from './views/TheNavigation.vue';
import TheFooter from './views/TheFooter.vue';
</script>
