<template>
  <article>
    <h1>{{ article.title }}</h1>
    <div class="mt-8 text-right">
      作成日: {{ createdAt(article.date) }}
    </div>
    <nuxt-content :document="article" />
  </article>
</template>

<script>
import { description as metaDescription } from '~/utils/meta'
import { dateFormat } from '~/utils/format'

export default {
  async asyncData ({ $content, params, error }) {
    const { year, month, slug } = params

    let article
    try {
      article = await $content('articles', year, month, slug || '').fetch()
    } catch (e) {
      return error({ statusCode: 404, message: 'ページが見つかりませんでした' })
    }

    return {
      article
    }
  },
  head () {
    const description = metaDescription(this.article.body)

    return {
      title: this.article.title,
      meta: [
        { hid: 'description', name: 'description', content: description },
        { hid: 'og:title', property: 'og:title', content: this.article.title },
        { hid: 'og:description', property: 'og:description', content: description }
      ]
    }
  },
  methods: {
    createdAt (value) {
      return dateFormat(value)
    }
  }
}
</script>
