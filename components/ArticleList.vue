<template>
  <ul class="list-unstyled">
    <li v-for="doc in docs" :key="doc.slug">
      {{ $format.date(doc.date) }}
      <nuxt-link :to="doc.path">{{ doc.title }}</nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    docs: {
      type: Array,
      required: true
    }
  }
}
</script>
