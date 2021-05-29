<template>
  <header>
    <nav class="flex justify-center fixed w-full py-3 z-20 bg-gray-800" aria-label="Header navigation">
      <nuxt-link :to="{ name:'index' }" class="no-underline">{{ appName }}</nuxt-link>
    </nav>
  </header>
</template>

<script>
import { APP_NAME } from '~/constants/app'

export default {
  data () {
    return {
      appName: APP_NAME
    }
  }
}
</script>
