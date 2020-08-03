<template>
  <article>
    <h1 class="mt-2">{{ doc.title }}</h1>
    <nuxt-content :document="doc" />
    <pagination-minimal :prev="prev" :next="next" />
    <div class="mb-2 text-right">
      <!-- createdAt/updatedAt gets the value from git log -->
      <!-- doc.createdAt/doc.updatedAt gets the value from birthtime/mtime -->
      作成日: {{ $format.date(createdAt || doc.createdAt ) }}<br>
      最終更新日: {{ $format.date(updatedAt || doc.updatedAt) }}
    </div>
  </article>
</template>

<script>
import { description } from '~/plugins/meta'

export default {
  async asyncData ({ $content, params, error }) {
    const path = `docs/${params.theme}`

    let theme
    try {
      theme = await $content(path, 'index')
        .only(['title'])
        .fetch()
    } catch (e) {
      return error({ statusCode: 404, message: 'ページが見つかりませんでした' })
    }

    const slug = params.slug || 'index'

    let doc
    try {
      doc = await $content(path, slug).fetch()
    } catch (e) {
      return error({ statusCode: 404, message: 'ページが見つかりませんでした' })
    }

    const [prev, next] = await $content(path)
      .only(['title', 'path'])
      .sortBy('position')
      .surround(slug)
      .fetch()

    let createdAt, updatedAt
    if (process.server) {
      const { firstCreated, lastUpdated } = require('~/plugins/doc')
      const path = `${process.cwd()}/content/${doc.path}${doc.extension}`
      createdAt = firstCreated(path)
      updatedAt = lastUpdated(path)
    }

    return {
      theme,
      doc,
      prev,
      next,
      createdAt,
      updatedAt
    }
  },
  computed: {
    metaDescription () {
      return description(this.doc.body)
    }
  },
  head () {
    const title = this.doc.slug === 'index'
      ? this.theme.title
      : `${this.theme.title}: ${this.doc.title}`

    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: this.metaDescription },
        { hid: 'og:title', property: 'og:title', content: title },
        { hid: 'og:description', property: 'og:description', content: this.metaDescription }
      ]
    }
  }
}
</script>
