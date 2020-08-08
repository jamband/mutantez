<template>
  <header>
    <nav class="flex justify-center fixed w-full py-3 z-20 bg-gray-100" aria-label="Header navigation">
      <nuxt-link :to="{ name:'index' }" class="no-underline">{{ $app.name }}</nuxt-link>
    </nav>
  </header>
</template>
