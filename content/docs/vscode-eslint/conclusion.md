---
title: まとめ
position: 9
---

## フロントエンドの環境構築について

今回行った Next.js の環境構築は実は create-next-app コマンドで簡単に作成できる。例えば Next.js, TypeScript, ESLint, Jest の組み合わせの場合は以下:

```
npx create-next-app --example with-typescript-eslint-jest
```

ただあくまで example なので、このままの状態でプロジェクトとして使えるかと言えば微妙だし、何か動作しない箇所があった場合に、理解が浅い状態なので、どこをどう修正すればいいかわからないことが多くあった。というような理由から、このドキュメントを作成した。

フロントエンドの環境構築はほんと複雑でややこしい。

今回書いたドキュメントの最終的なものは [jamband/nextz](https://github.com/jamband/nextz) として GitHub にて公開しているので、興味がある人は参考にしてほしい。