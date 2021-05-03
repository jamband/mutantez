<template>
  <article>
    <h1>{{ doc.title }}</h1>
    <nuxt-content :document="doc" />
    <div class="mt-20 text-right">
      作成日: {{ createdAt(doc.date) }}
    </div>
  </article>
</template>

<script>
import { description as metaDescription } from '~/utils/meta'
import { dateFormat } from '~/utils/format'

export default {
  async asyncData ({ $content, params, error }) {
    const { year, month, slug } = params
    const path = 'articles'

    let doc
    try {
      doc = await $content(path, year, month, slug || '').fetch()
    } catch (e) {
      return error({ statusCode: 404, message: 'ページが見つかりませんでした' })
    }

    return {
      doc
    }
  },
  head () {
    const description = metaDescription(this.doc.body)

    return {
      title: this.doc.title,
      meta: [
        { hid: 'description', name: 'description', content: description },
        { hid: 'og:title', property: 'og:title', content: this.doc.title },
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
