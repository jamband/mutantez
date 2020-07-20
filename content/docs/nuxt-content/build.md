---
title: ビルドする
position: 7
---

## コマンドの実行

ビルドする:

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
