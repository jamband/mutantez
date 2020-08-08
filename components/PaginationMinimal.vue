<template>
  <nav class="flex my-12 text-center" aria-label="Page navigation">
    <div class="w-1/2">
      <nuxt-link v-if="prev" :to="prev.path">← {{ prev.title }}</nuxt-link>
    </div>
    <div class="w-1/2">
      <nuxt-link v-if="next" :to="next.path">{{ next.title }} →</nuxt-link>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    prev: {
      type: Object,
      default: () => null
    },
    next: {
      type: Object,
      default: () => null
    }
  }
}
</script>
