<template>
  <ul>
    <li v-for="doc in docs" :key="doc.slug" class="truncate">
      {{ createdAt(doc.date) }}
      <nuxt-link :to="doc.path">{{ doc.title }}</nuxt-link>
    </li>
  </ul>
</template>

<script>
import { dateFormat } from '~/plugins/format'

export default {
  props: {
    docs: {
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
