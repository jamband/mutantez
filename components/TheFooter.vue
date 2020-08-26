<template>
  <footer class="py-3 bg-gray-100">
    <div class="flex container mx-auto">
      <nav class="w-1/2" aria-label="Footer navigation">
        <nuxt-link :to="{ name: 'contact' }" class="pr-3">Contact</nuxt-link>
        <nuxt-link :to="{ name: 'about' }">About</nuxt-link>
      </nav>
      <div class="w-1/2 text-right">
        &copy; {{ new Date().getFullYear() }} {{ app.name }}
      </div>
    </div>
  </footer>
</template>

<script>
import { APP_NAME } from '~/plugins/constants'

export default {
  data () {
    return {
      app: {
        name: APP_NAME
      }
    }
  }
}
</script>
