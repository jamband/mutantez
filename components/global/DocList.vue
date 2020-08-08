<template>
  <nav aria-label="Documents navigation">
    <ol>
      <li v-for="doc in docs" :key="doc.slug">
        <nuxt-link :to="doc.path">{{ doc.title }}</nuxt-link>
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  props: {
    theme: {
      type: String,
      required: true
    }
  },
  async fetch () {
    this.docs = await this.$content(`docs/${this.theme}`)
      .only(['slug', 'path', 'title'])
      .sortBy('position')
      .fetch()
  },
  data () {
    return {
      docs: []
    }
  }
}
</script>
