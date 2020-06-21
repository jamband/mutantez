<template>
  <div class="row text-center p-4">
    <div class="col-6">
      <nuxt-link v-if="prev" :to="prev.path">← {{ prev.title }}</nuxt-link>
    </div>
    <div class="col-6">
      <nuxt-link v-if="next" :to="next.path">{{ next.title }} →</nuxt-link>
    </div>
  </div>
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
