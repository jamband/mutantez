---
title: インストールする
position: 2
---

## プロジェクトの作成

```
npx create-nuxt-app paperz
```

構成は以下。modules では Content をマークし、rendering mode は Universal を選択する。その他は任意:

```
create-nuxt-app v3.x.x
    Generating Nuxt.js project in paperz
? Project name paperz
? Choose programming language JavaScript
? Choose the package manager Npm
? Choose UI framework Bootstrap Vue
? Choose Nuxt.js modules Progressive Web App (PWA) Support, Content
? Choose linting tools ESLint, StyleLint
? Choose test framework Jest
? Choose rendering mode Universal (SSR / Static)
? Choose development tools jsconfig.json (Recommended for VS Code)
```

準備はこれで OK。執筆時の環境は以下。

## 環境

- Node.js 12.x
- create-nuxt-app 3.x
- Nuxt.js 2.13.x
- nuxt/content 1.3.x
