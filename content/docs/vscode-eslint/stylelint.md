---
title: stylelint の導入
position: 4
---

## stylelint のインストール

.js 関連のコードは ESLint である程度の秩序は確保できるようなった。それと同じように CSS 関連のコードにも秩序を確保したい場合に stylelint が役に立つので導入していく。今回は CSS に Sass を使う前提で進めていく。

以下をインストール:

```
npm i -D sass stylelint stylelint-config-standard stylelint-order stylelint-scss
```

## 設定ファイルの作成

.stylelintrc ファイルの作成:

```json[.stylelintrc]
{
  "extends": [
    "stylelint-config-standard"
  ],
  "plugins": [
    "stylelint-order",
    "stylelint-scss"
  ],
  "rules": {
    "at-rule-no-unknown": null,
    "order/properties-alphabetical-order": true,
    "scss/at-rule-no-unknown": true
  }
}
```

基本は [stylelint-config-standard のルール](https://github.com/stylelint/stylelint-config-standard/blob/master/index.js) に従い、さらに、プロパティをアルファベット順にするというルール構成にした (ちなみに stylelint 自体のルールは [こちら](https://stylelint.io/user-guide/rules/list) ) 。

## VSCode 側の設定

[stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) をインストール。これで ESLint と同様にエラー箇所を赤色で表示してくれる。さらに保存時に自動修正してほしい場合は設定ファイルに以下を追加する:

```json[.vscode/settings.json]
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll.stylelint": true
  }
}
```

## 動作を確認する

実際にコンポーネントを作って動作を確認してみる:

```jsx[components/Foo.js]
import styles from './Foo.module.scss'

export default function Foo() {
  return (
    <div className={styles.bar}>
      Baz
    </div>
  )
}
```

```scss[components/Foo.module.scss]
.bar {
  background-color: green;
  color: white;
}
```