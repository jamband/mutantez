---
title: コンテンツを書く
position: 3
---

## ディレクトリの作成

プロジェクトルートに content/docs/nuxt-content ディレクトリを作成する。以下のような感じ:

```
content/
  docs/
    nuxt-content/
      about.md
      installation.md
      ...
```

## コンテンツの書き方

実際このページのマークダウンは以下。front matter の position はドキュメントの順番に使う:

```[content/docs/nuxt-content/wrting.md]
---
title: コンテンツを書く
description: nuxt/content でコンテンツを書く
position: 3
---

プロジェクトルートに ...
```


以下のような変数を持つことになる:

```js
{
  body: Object
  title: "コンテンツを書く"
  description: "nuxt/content でコンテンツを書く"
  dir: "/docs/nuxt-content"
  extension: ".md"
  position: 3
  path: "/docs/nuxt-content/writing"
  slug: "writing"
  toc: Array
  createdAt: "2020-xx-xxTxx:xx:xx.xxxZ"
  updatedAt: "2020-xx-xxTxx:xx:xx.xxxZ"
}
```

## 関連リンク

- [Writing content - Nuxt Content](https://content.nuxtjs.org/writing)
