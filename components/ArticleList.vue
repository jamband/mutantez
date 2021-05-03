<template>
  <ul>
    <li v-for="article in articles" :key="article.slug" class="truncate">
      {{ createdAt(article.date) }}
      <nuxt-link :to="article.path">{{ article.title }}</nuxt-link>
    </li>
  </ul>
</template>

<script>
import { dateFormat } from '~/utils/format'

export default {
  props: {
    articles: {
      type: Array,
      required: true
    }
  },
  methods: {
    createdAt (value) {
      return dateFormat(value)
    }
  }
}
</script>
