---
title: Prettier の導入
position: 5
---

## より一貫性のあるコードを求めて

ESLint でも各プロジェクトに合わせたプラグインを導入することによって、ある程度、複数人が書いたコードのスタイルの一貫性を保つことができるが、それらをどのプロジェクトでもより強制的にするのが Prettier である。

コードの整形部分はすべて Prettier に任し、その他の細かな部分を ESLint のプラグインに任すという形をとることで、より一貫性のあるコードを書くことができる。

## Prettier のインストールと設定

Prettier のインストール:

```
npm i -D --save-exact prettier
```

Prettier の設定ファイルの作成:

```json[.prettierrc]
{
  "semi": false,
  "singleQuote": true
}
```

すべてのオプションは [Options · Prettier](https://prettier.io/docs/en/options.html) に書かれている。

Prettier と競合する可能性のある ESLint 側のルールをオフにするパッケージをインストール:

```
npm i -D eslint-config-prettier
```

Prettier を ESLint のルールとして実行するパッケージをインストール:

```
npm i -D eslint-plugin-prettier
```

ESLint の設定ファイルの更新:

```json[.eslintrc]
{
  "root": true,
  "parser": "babel-eslint",
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "prettier/react"
  ],
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "rules": {
    "react/react-in-jsx-scope": "off"
  }
}
```

extends で plugin:prettier/recommended を指定することによって eslint-plugin-prettier が有効になり、Prettier のルールが ESLint 側にセットされ、eslint-config-prettier のルールが適用される。また prettier/react を指定することによって eslint-plugin-react のコード整形に関係するルールをオフにし、結果的にコード整形に関連するものは Prettier 側でやるという形になる。なので extends の指定順序も気をつけないと、上手く上書きされないので注意する。

## Prettier の動作を確認する

```jsx[components/Foo.js]
import styles from './Foo.module.scss'

export default function Foo() {
  return (
    <div className={styles.bar}>Baz</div>
  )
}
```

上手く ESLint 上で Prettier が動作していれば、上記のコードはエラー扱いになり、エラー箇所にカーソルを合わせると eslint(prettier/prettier) のエラーであることが確認できる。またファイルを保存すると自動で以下のように整形される:

```jsx[components/Foo.js]
import styles from './Foo.module.scss'

export default function Foo() {
  return <div className={styles.bar}>Baz</div>
}
```

## 備考

Prettier の導入に関しては賛否両論あるように思う。雑にコードを書いても Prettier が勝手にいろいろ整形してくれるので楽という意見もあるし、ときに、ちょっとした文字数の違いでインデントが入り、結果的に読みにくいコードになることもある。

いずれにせよ、複数人が書くコードのスタイルの一貫性は ESLint のみよりもあるので、導入する価値は大いにあるが、特に必須というわけではないので、プロジェクトの状況や、フォーマット対象との相性などを見て、導入するかしないかを決めていけばいいと思う。