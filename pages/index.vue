<template>
  <div>
    <h2>Articles</h2>
    <list-articles :docs="articles" />
    <div class="text-right">
      <nuxt-link :to="{ name: 'articles' }">すべての記事一覧を見る</nuxt-link>
    </div>
    <h2>Documents</h2>
    <ul>
      <li><nuxt-link :to="{ name: 'docs-nuxt-content' }">nuxt/content</nuxt-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const articles = await $content('articles', { deep: true })
      .sortBy('date', 'desc')
      .limit(10)
      .fetch()

    return {
      articles
    }
  },
  head () {
    return {
      title: this.$app.name,
      titleTemplate: ''
    }
  }
}
</script>
