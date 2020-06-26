<template>
  <span>
    <nuxt-link v-for="tag in tags" :key="tag" :to="tagsTo(tag)" class="px-1">{{ tag }}</nuxt-link>
  </span>
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
