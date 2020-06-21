---
title: ビルドする
position: 7
---

## 準備

scripts セクションにコマンドを追加:

```json[package.json]
{
  "scripts": {
    ...
    "build": "nuxt build",
    "export": "nuxt export",
    "serve": "nuxt serve"
  }
}
```

静的ファイルを生成する設定を追加:

```js[nuxt.config.js]
export default {
  target: 'static',
  ...
}
```

## コマンドの実行

```
npm run build
npm run export
```

あとは以下を叩いて、ブラウザ (http://localhost:3000) で確認する:

```
npm run serve
```
