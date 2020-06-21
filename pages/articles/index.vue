<template>
  <div>
    <h2>Articles</h2>
    <list-articles :docs="docs" />
    <h2>Tags</h2>
    <nuxt-link v-for="tag in tags" :key="tag" :to="tagsTo(tag)" class="px-1">{{ tag }}</nuxt-link>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const path = 'articles'
    const docs = await $content(path, { deep: true })
      .sortBy('date', 'desc')
      .fetch()

    let tags
    tags = docs.map(doc => doc.tags).flat()
    tags = Array.from(new Set(tags)).sort()

    return {
      docs,
      tags
    }
  },
  methods: {
    tagsTo (tag) {
      return {
        name: 'articles-tags-slug',
        params: {
          slug: tag
        }
      }
    }
  },
  head () {
    return {
      title: '記事一覧'
    }
  }
}
</script>
