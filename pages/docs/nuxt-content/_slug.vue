<template>
  <article>
    <h1>{{ doc.title }}</h1>
    <nuxt-content :document="doc" />
    <pagination-minimal :prev="prev" :next="next" />
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

    return {
      doc,
      prev,
      next
    }
  },
  head () {
    return {
      title: `nuxt/content: ${this.doc.title}`
    }
  }
}
</script>
