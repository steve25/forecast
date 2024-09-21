<template>
  <section class="current-section" v-if="type == 'single'">
    <h4>
      current <br />
      temp
    </h4>
    <p>{{ temp }} °C</p>
  </section>
  <section class="forecast-section" v-else>
    <h4>
      {{ parsedDate() }}
    </h4>
    <div>
      <p>
        <span>{{ max }}</span>
        <span>°C</span>
      </p>
      <p>
        <span>{{ min }}</span>
        <span>°C</span>
      </p>
    </div>
  </section>
</template>

<script setup>
const { temp, min, max, date, type } = defineProps(['temp', 'min', 'max', 'date', 'type']);

const parsedDate = () => {
  const units = date.split('-');

  return units[2] + '. ' + units[1] + '.';
};
</script>

<style scoped>
section {
  border: 2px solid #0c0c0c;
  border-radius: 0.3rem;
  text-align: center;
  background-color: #ffffffae;
}

h4 {
  font-weight: normal;
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

P {
  font-size: 1.6rem;
  font-weight: bolder;
  display: flex;
  justify-content: space-between;
  gap: 0.4rem;
}

span:first-child {
  width: 100%;
  text-align: right;
}

.current-section {
  padding: 1.1rem;
}

.forecast-section {
  padding: 0.8rem;
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
  .current-section,
  .forecast-section {
    width: fit-content;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }

  h4 {
    font-size: 1.2rem;
  }

  p {
    font-size: 2rem;
  }
}
</style>
