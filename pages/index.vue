<template>
  <div>
    <h2>Tags</h2>
    <article-tag-list :tags="tags" class="mb-8" />
    <h2>Articles</h2>
    <article-list :articles="articles" />
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
import { tags } from '~/utils/tags'

export default {
  async asyncData ({ $content }) {
    const contents = await $content('articles', { deep: true })
      .fetch()

    const articles = await $content('articles', { deep: true })
      .sortBy('date', 'desc')
      .limit(10)
      .fetch()

    const docs = await $content('docs', { deep: true })
      .only(['path', 'title', 'date'])
      .where({ slug: 'index' })
      .sortBy('date', 'desc')
      .fetch()

    return {
      tags: tags(contents),
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
