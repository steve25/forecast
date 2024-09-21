<template>
  <nav>
    <ul>
      <li><RouterLink to="/">onMounted</RouterLink></li>
      <li>|</li>
      <li><RouterLink to="/onclick">onClick</RouterLink></li>
    </ul>
  </nav>
</template>

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

a {
  text-decoration: none;
  color: black;
}

li:first-child,
li:last-child {
  cursor: pointer;
}

.router-link-active {
  text-decoration: underline;
}
</style>
