<template>
  <footer class="py-3 bg-gray-800">
    <div class="flex container mx-auto">
      <nav class="w-1/2" aria-label="Footer navigation">
        <nuxt-link :to="{ name: 'contact' }" class="pr-3">Contact</nuxt-link>
        <nuxt-link :to="{ name: 'about' }">About</nuxt-link>
      </nav>
      <div class="w-1/2 text-right">
        &copy; {{ new Date().getFullYear() }} {{ appName }}
      </div>
    </div>
  </footer>
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
