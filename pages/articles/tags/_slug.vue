<template>
  <div>
    <h2>Articles <small>tag: {{ slug }}</small></h2>
    <article-list :docs="docs" />
    <p v-if="!docs.length">上記で絞られたタグに関連する記事は見つかりませんでした</p>
    <div class="text-right">
      <nuxt-link :to="{ name: 'articles' }">すべての記事一覧を見る</nuxt-link>
    </div>
    <h2>Tags</h2>
    <article-tag-list />
  </div>
</template>

<script>
export default {
  validate ({ params }) {
    return /^[a-z]+$/.test(params.slug)
  },
  async asyncData ({ $content, params }) {
    const slug = params.slug || ''
    const path = 'articles'
    const docs = await $content(path, { deep: true })
      .where({ tags: { $contains: slug } })
      .sortBy('date', 'desc')
      .fetch()

    return {
      docs,
      slug
    }
  },
  head () {
    return {
      title: `タグ: ${this.slug} での記事一覧`
    }
  }
}
</script>

<style lang="scss" scoped>
h2 {
  small {
    font-size: 60%;
  }
}
</style>
