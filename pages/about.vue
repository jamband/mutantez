<template>
  <div>
    <h1 class="mb-5">About</h1>
    <p>
      {{ appDescription }}
    </p>
    <p>
      このウェブサイトはオープンソースなプロジェクトです。詳細については
      <LinkExternal :href="appRepositoryUrl">GitHub {{ appRepositoryName }}</LinkExternal>
      をご覧ください。
    </p>
  </div>
</template>

<script>
import {
  APP_DESCRIPTION,
  APP_REPOSITORY_URL,
  APP_REPOSITORY_NAME
} from '~/constants/app'

export default {
  data () {
    return {
      appDescription: APP_DESCRIPTION,
      appRepositoryUrl: APP_REPOSITORY_URL,
      appRepositoryName: APP_REPOSITORY_NAME
    }
  },
  head () {
    return {
      title: 'About'
    }
  }
}
</script>
