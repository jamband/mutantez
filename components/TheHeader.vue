<template>
  <nav class="header text-center mb-5">
    <nuxt-link :to="{ name:'index' }" class="header-link text-decoration-none">{{ $app.name }}</nuxt-link>
  </nav>
</template>

<style scoped>
.header {
  background-color: var(--light);
}

.header-link {
  display: inline-block;
  margin: 0.1rem;
  padding: 0.5rem;
}
</style>
