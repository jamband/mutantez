<template>
  <div>
    <h2>Articles</h2>
    <article-list :docs="articles" />
    <div class="mt-5 mb-8 text-right">
      <nuxt-link :to="{ name: 'articles' }">すべての記事一覧を見る</nuxt-link>
    </div>
    <h2>Documents</h2>
    <ul>
      <li v-for="doc in docs" :key="doc.path">
        {{ $format.date(doc.date) }}
        <nuxt-link :to="doc.path">{{ doc.title }}</nuxt-link>
      </li>
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

    const docs = await $content('docs', { deep: true })
      .only(['path', 'title', 'date'])
      .where({ slug: 'index' })
      .sortBy('date', 'desc')
      .limit(10)
      .fetch()

    return {
      articles,
      docs
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
