<template>
  <div>
    <h1 class="mb-5">About</h1>
    <p>
      {{ description }}
    </p>
    <p>
      このウェブサイトはオープンソースなプロジェクトです。詳細については
      <LinkExternal href="https://github.com/jamband/mutantez">GitHub jamband/mutantez</LinkExternal>
      をご覧ください。
    </p>
  </div>
</template>

<script>
import { APP_DESCRIPTION } from '~/plugins/constants'

export default {
  data () {
    return {
      description: APP_DESCRIPTION
    }
  },
  head () {
    return {
      title: 'About'
    }
  }
}
</script>
