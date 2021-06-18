<template>
  <div>
    <h2>Tags</h2>
    <article-tag-list :tags="tags" class="mb-8" />
    <h2>Articles <span class="text-base">tag: {{ slug }}</span></h2>
    <article-list :articles="articles" />
    <p v-if="!articles.length">上記で絞られたタグに関連する記事は見つかりませんでした</p>
    <div class="mt-5 mb-8 text-right">
      <nuxt-link :to="{ name: 'index' }">すべての記事一覧を見る</nuxt-link>
    </div>
  </div>
</template>

<script>
import { tags } from '~/utils/tags'

export default {
  validate ({ params }) {
    return /^[a-z]+$/.test(params.slug)
  },
  async asyncData ({ $content, params }) {
    const contents = await $content('articles', { deep: true })
      .fetch()

    const slug = params.slug || ''
    const articles = await $content('articles', { deep: true })
      .where({ tags: { $contains: slug } })
      .sortBy('date', 'desc')
      .fetch()

    return {
      tags: tags(contents),
      articles,
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
