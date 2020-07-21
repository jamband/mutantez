<template>
  <div>
    <h2>Articles</h2>
    <article-list :docs="docs" />
    <h2 class="mt-8">Tags</h2>
    <article-tag-list />
  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const path = 'articles'
    const docs = await $content(path, { deep: true })
      .sortBy('date', 'desc')
      .fetch()

    return {
      docs
    }
  },
  head () {
    return {
      title: '記事一覧'
    }
  }
}
</script>
