<template>
  <nav class="flex justify-center fixed w-full py-3 z-20 bg-gray-100">
    <nuxt-link :to="{ name:'index' }" class="no-underline">{{ $app.name }}</nuxt-link>
  </nav>
</template>
