<template>
  <div>
    <h2>Tags</h2>
    <article-tag-list :tags="tags" class="mb-8" />
    <h2>Articles</h2>
    <article-list :articles="articles" />
  </div>
</template>

<script>
import { tags } from '~/utils/tags'

export default {
  async asyncData ({ $content }) {
    const contents = await $content('articles', { deep: true })
      .fetch()

    const articles = await $content('articles', { deep: true })
      .sortBy('date', 'desc')
      .fetch()

    return {
      tags: tags(contents),
      articles
    }
  },
  head () {
    return {
      title: '記事一覧'
    }
  }
}
</script>
