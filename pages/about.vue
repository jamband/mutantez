<template>
  <div>
    <h1 class="mb-5">About</h1>
    <p>
      {{ app.description }}
    </p>
    <p>
      このウェブサイトはオープンソースなプロジェクトです。詳細については
      <LinkExternal :href="app.repositoryUrl">GitHub {{ app.repositoryName }}</LinkExternal>
      をご覧ください。
    </p>
  </div>
</template>

<script>
import {
  APP_DESCRIPTION,
  APP_REPOSITORY_URL,
  APP_REPOSITORY_NAME
} from '~/plugins/constants'

export default {
  data () {
    return {
      app: {
        description: APP_DESCRIPTION,
        repositoryUrl: APP_REPOSITORY_URL,
        repositoryName: APP_REPOSITORY_NAME
      }
    }
  },
  head () {
    return {
      title: 'About'
    }
  }
}
</script>
