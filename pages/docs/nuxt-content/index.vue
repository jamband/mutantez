<template>
  <div>
    <h1>nuxt/content</h1>
    <p>このサイトは nuxt/content を使っている。</p>
    <p>
      ということで、ここでは、実際このサイトをどのように作成していったかを簡単に説明していく。基本的なことしか書いていないので、より詳細なものが知りたい人は
      <nuxt-link :to="to">nuxt/content: まとめ</nuxt-link>
      などを参考にしてほしい。
    </p>
    <ol>
      <li v-for="doc in docs" :key="doc.slug">
        <nuxt-link :to="doc.path">{{ doc.title }}</nuxt-link>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const path = 'docs/nuxt-content'
    const docs = await $content(path)
      .sortBy('position')
      .fetch()

    return {
      docs
    }
  },
  data () {
    return {
      to: {
        name: 'docs-nuxt-content-slug',
        params: {
          slug: 'conclusion'
        }
      }
    }
  },
  head () {
    const description = 'nuxt/content の簡単な説明をしていく'

    return {
      title: 'nuxt/content',
      meta: [
        { hid: 'description', name: 'description', content: description },
        { hid: 'og:title', property: 'og:title', content: 'nuxt/content' },
        { hid: 'og:description', property: 'og:description', content: description }
      ]
    }
  }
}
</script>
