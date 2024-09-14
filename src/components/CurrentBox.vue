<template>
  <section>
    <h4>
      current <br />
      temp
    </h4>
    <p>{{ temp }} °C</p>
  </section>
</template>

<script setup>
const { temp } = defineProps(['temp'])
</script>

<style scoped>
section {
  border: 2px solid #0c0c0c;
  border-radius: 0.3rem;
  text-align: center;
  background-color: #ffffffae;
  padding: 0.8rem;
}

h4 {
  font-weight: normal;
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

P {
  font-size: 1.6rem;
  font-weight: bolder;
}

@media screen and (max-width: 850px) {
  h4 {
    font-size: 1.1rem;
  }

  p {
    font-size: 1.4rem;
  }
}

@media screen and (max-width: 750px) {
  h4 {
    font-size: 1rem;
  }

  p {
    font-size: 1.2rem;
  }
}

@media screen and (max-width: 660px) {
  section {
    width: fit-content;
    padding-left: 3rem;
    padding-right: 3rem;
  }

  h4 {
    font-size: 1.2rem;
  }

  p {
    font-size: 2rem;
  }
}
</style>
