---
title: Nuxt Content
date: 2020-06-12
position: 1
---

## はじめに

このサイトは Nuxt Content を使っている。

ということで、ここでは、実際このサイトをどのように作成していったかを簡単に説明していく。基本的なことしか書いていないので、より詳細なものが知りたい人は <nuxt-link :to="{ name: 'docs-theme-slug', params: { theme: 'nuxt-content', slug: 'conclusion' } }">Nuxt Content: まとめ</nuxt-link> などを参考にしてほしい。

## 環境

- Node.js 12.x
- Yarn 1.22.x
- create-nuxt-app 3.1.x
- Nuxt.js 2.13.x
- Nuxt Content 1.4.x

## ページ一覧

<doc-list theme="nuxt-content"></doc-list>

## Nuxt Content とは

Git ベースの Headless CMS。Markdown/JSON/YAML/CSV ファイルなどで書かれたコンテンツを Git で管理しつつ MongoDB のような API を介して読み込み、いい感じ表示してくれる、といったもの。

個人的には今まで Jamstack な構成で使っていた [Contentful](https://www.contentful.com/) などの Headless CMS を使うまでもないような小規模のプロジェクトに最適かなと思った。

## その他の嬉しい機能

- 全文検索
- 目次の自動生成
- マークダウン内のコードブロックのシンタックスハイライト
- マークダウンコンテンツのライブ編集

## 関連リンク

- [Nuxt Content](https://content.nuxtjs.org/)
- [GitHub nuxt/content](https://github.com/nuxt/content)
