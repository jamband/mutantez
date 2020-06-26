<template>
  <article>
    <h1>{{ doc.title }}</h1>
    <nuxt-content :document="doc" />
    <pagination-minimal :prev="prev" :next="next" />
    <div class="text-right">
      <!-- createdAt/updatedAt from gets the value from git log -->
      <!-- doc.createdAt/doc.updatedAt from gets the value from birthtime/mtime -->
      作成日: {{ $format.date(createdAt || doc.createdAt ) }}<br>
      最終更新日: {{ $format.date(updatedAt || doc.updatedAt) }}
    </div>
  </article>
</template>

<script>
export default {
  async asyncData ({ $content, params, error }) {
    const path = 'docs/nuxt-content'
    const slug = params.slug

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
      doc,
      prev,
      next,
      createdAt,
      updatedAt
    }
  },
  head () {
    return {
      title: `nuxt/content: ${this.doc.title}`
    }
  }
}
</script>
