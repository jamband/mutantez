<template>
  <footer class="footer text-center">
    &copy; {{ new Date().getFullYear() }}
    <nuxt-link :to="{ name: 'index' }" class="text-decoration-none">{{ $app.name }}</nuxt-link>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background-color: var(--light);
  bottom: 0;
  font-size: 90%;
  height: 45px;
  line-height: 45px;
  position: absolute;
  width: 100%;
}
</style>
