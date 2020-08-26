<template>
  <ul>
    <li v-for="tag in tags" :key="tag" class="inline-block">
      <nuxt-link :to="tagsTo(tag)" class="px-1">{{ tag }}</nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  async fetch () {
    const docs = await this.$content('articles', { deep: true }).fetch()
    const tags = docs.map(doc => doc.tags).flat()
    this.tags = Array.from(new Set(tags)).sort()
  },
  data () {
    return {
      tags: []
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
  }
}
</script>
