---
title: Git Hooks による最終確認
position: 8
---

## より良い品質を求めて

ESLint や Prettier, Jest などでコードの品質はある程度確保できたものの、各開発者のエディター環境の違いであったり、パッケージのアップデートや、何かしらの設定の変更などにより、修正が必要なファイルを検証仕切れなかったり、見落としていたりする場面がどうしてもでてくる。それらを防ぐために Git のコミット時に諸々の最終確認ができるような環境を整えていく。

## Git 関連の準備

Git によるバージョン管理を有効にする (していないのであれば) :

```
git init
```

Git Hooks のサンプルファイルを確認しておく:

```
ls -la .git/hooks
```

## 必要なパッケージのインストールと設定


パッケージのインストール:

```
npm i -D husky lint-staged
```

husky 関連の Git Hooks があるか確認:

```
ls -la .git/hooks
```

package.json の更新:

```json[package.json]
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.{ts,tsx}": [
      "eslint --cache --fix",
      "jest --bail --findRelatedTests"
    ],
    "*.{css,scss}": "stylelint --fix"
  },
  ...
```

これでどんな環境であっても、コミット前に変更されたファイルに応じて Lint/Test ツールが発動するようになる。

## 関連リンク

- [GitHub - lint-staged](https://github.com/okonet/lint-staged)
- [GitHub - Husky](https://github.com/typicode/husky)