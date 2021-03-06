---
title: ページネーションを追加する
position: 6
---

## ページネーションコンポーネントの作成

$content には [surround](https://content.nuxtjs.org/fetching/#surroundslug-options) というメソッドがあり、これで前後の結果を取得し、ページネーションの「前へ」と「次へ」みたいなリンクが作れる。ページネーション部分をコンポーネント化して、_slug.vue から呼び出してみる:

```vue[components/PaginationMinimal.vue]
<template>
  <div class="flex my-12 text-center">
    <div class="w-1/2">
      <nuxt-link v-if="prev" :to="prev.path">
        ← {{ prev.title }}
      </nuxt-link>
    </div>
    <div class="w-1/2">
      <nuxt-link v-if="next" :to="next.path">
        {{ next.title }} →
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    prev: {
      type: Object,
      default: () => null
    },
    next: {
      type: Object,
      default: () => null
    }
  }
}
</script>
```

## ページコンポーネントの更新

front matter に追加した position でソートすれば簡単なページネーションが作成できる:

```vue[pages/docs/_theme/_slug.vue]
<template>
  <article>
    <h1>{{ doc.title }}</h1>
    <nuxt-content :document="doc" />
    <pagination-minimal :prev="prev" :next="next" />
  </article>
</template>

<script>
export default {
  async asyncData ({ $content, params, error }) {
    const path = `docs/${params.theme}`
    const slug = params.slug || 'index'

    let doc
    try {
      doc = await $content(path, slug).fetch()
    } catch (e) {
      return error({ statusCode: 404, message: 'Page not found' })
    }

    const [prev, next] = await $content(path)
      .only(['title', 'path'])
      .sortBy('position')
      .surround(slug)
      .fetch()

    return {
      doc,
      prev,
      next
    }
  }
}
</script>
```

以上で、今見ているページなどを簡単に作ることができる。

## 関連リンク

[Snippets - Nuxt Content](https://content.nuxtjs.org/snippets/#pagination)