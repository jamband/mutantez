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
        {{ createdAt(doc.date) }}
        <nuxt-link :to="doc.path">{{ doc.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { APP_NAME } from '~/plugins/constants'
import { dateFormat } from '~/plugins/format'

export default {
  async asyncData ({ $content }) {
    const articles = await $content('articles', { deep: true })
      .sortBy('date', 'desc')
      .fetch()

    const docs = await $content('docs', { deep: true })
      .only(['path', 'title', 'date'])
      .where({ slug: 'index' })
      .sortBy('date', 'desc')
      .fetch()

    return {
      articles,
      docs
    }
  },
  head () {
    return {
      title: APP_NAME,
      titleTemplate: ''
    }
  },
  methods: {
    createdAt (value) {
      return dateFormat(value)
    }
  }
}
</script>
