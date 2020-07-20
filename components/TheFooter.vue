<template>
  <footer class="p-3 text-center text-sm bg-gray-100">
    &copy; {{ new Date().getFullYear() }}
    <nuxt-link :to="{ name: 'index' }" class="no-underline">{{ $app.name }}</nuxt-link>
  </footer>
</template>
