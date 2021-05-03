<template>
  <div>
    <h1 class="mb-5">Contact</h1>
    <p>
      何かしらの問い合わせに関しては
      <LinkExternal href="https://twitter.com/livejam_db">Twitter</LinkExternal>
      のダイレクトメッセージからお願いします。
    </p>
    <p>
      また、プログラムのバグなどを発見した場合は
      <LinkExternal :href="appRepositoryUrl">GitHub Issues</LinkExternal>
      から報告してもらえると助かります。
    </p>
  </div>
</template>

<script>
import { APP_REPOSITORY_URL } from '~/constants/app'

export default {
  data () {
    return {
      appRepositoryUrl: APP_REPOSITORY_URL
    }
  },
  head () {
    return {
      title: 'Contact'
    }
  }
}
</script>
