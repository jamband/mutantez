<template>
  <ul>
    <li v-for="(tag, index) in tags" :key="index" class="inline-block">
      <nuxt-link :to="tagsTo(tag)" class="mr-3">{{ tag }}</nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
      required: true
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
