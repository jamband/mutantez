---
title: コンテンツを取得する
position: 4
---

## ページコンポーネントの作成

Nuxt Content は $content インスタンスをグローバルに挿入するので、this.$content を使ってどこからでもアクセスすることができる。

実際、このページは以下のような感じでコンテンツを取得している:

```js[pages/docs/_theme/_slug.vue]
export default {
  async asyncData ({ $content, params, error }) {
    const path = `docs/${params.theme}`
    const slug = params.slug || 'index'

    let doc
    try {
      doc = await $content(path, slug).fetch()
    } catch (e) {
      doc error({ statusCode: 404, message: 'Page not found' })
    }

    return {
      doc
    }
  }
}
```

## 関連リンク

- [Fetching content - Nuxt Content](https://content.nuxtjs.org/fetching/)
