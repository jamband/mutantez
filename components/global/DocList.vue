<template>
  <nav aria-label="Documents navigation">
    <template v-if="$fetchState.pending">
      <ContentLoading text="ドキュメントのリストを読み込んでいます..." />
    </template>
    <div v-else-if="$fetchState.error">
      ドキュメントのリストの読み込みに失敗しました。
    </div>
    <ol v-else>
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
  data () {
    return {
      docs: []
    }
  },
  async fetch () {
    this.docs = await this.$content(`docs/${this.theme}`)
      .only(['slug', 'path', 'title'])
      .sortBy('position')
      .fetch()
  }
}
</script>
