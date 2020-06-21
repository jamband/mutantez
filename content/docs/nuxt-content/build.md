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

## 備考

実際このサイトの [Netlify](https://www.netlify.com/) でのビルド/デプロイ時の設定は以下:

- Repository: github.com/jamband/mutantez
- Build command: npm run build && npm run export
- Publish directory: dist
