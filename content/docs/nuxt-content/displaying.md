---
title: コンテンツを表示する
position: 5
---

## ページコンポーネントの更新

NuxtContent コンポーネントを使用して、コンテンツを表示する。

```vue[pages/docs/nuxt-content/_slug.vue]
<template>
  <article>
    <h2>{{ doc.title }}</h2>
    <nuxt-content :document="doc" />
  </article>
</template>

<script>
export default {
  async asyncData ({ $content, params, error }) {
    const path = 'docs/nuxt-content'
    const slug = params.slug

    let doc
    try {
      doc = await $content(path, slug).fetch()
    } catch (e) {
      return error({ statusCode: 404, message: 'Page not found' })
    }

    return {
      doc
    }
  }
}
</script>
```

コンテンツを書き、取得し、表示する、という流れは以上。

## 関連リンク

- [Displaying content - Nuxt Content](https://content.nuxtjs.org/displaying)
