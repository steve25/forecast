<template>
  <nav>
    <ul>
      <li :class="choosedMounted ? 'choosed' : ''" @click="onMountedClick">onMounted</li>
      <li>|</li>
      <li :class="choosedMounted ? '' : 'choosed'" @click="onClickClick">onClick</li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
const choosedMounted = ref(true);
const emit = defineEmits(['page']);

const onMountedClick = () => {
  choosedMounted.value = true;
  emit('page', choosedMounted);
};

const onClickClick = () => {
  choosedMounted.value = false;
  emit('page', choosedMounted);
};
</script>

<style scoped>
nav {
  margin-top: 1rem;
}

ul {
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 1rem;
}

li:first-child,
li:last-child {
  cursor: pointer;
}

.choosed {
  text-decoration: underline;
}
</style>
