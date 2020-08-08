<template>
  <div>
    <h1>#{{ error.statusCode }}</h1>
    {{ error.message }}。
    <p class="mt-5 text-center">
      <nuxt-link :to="{ name: 'index' }">ホームに戻る</nuxt-link>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head () {
    return {
      title: `(#${this.error.statusCode}) ${this.error.message}`
    }
  }
}
</script>
