---
title: Prettier の導入
position: 5
---

## より一貫性のあるコードを求めて

ESLint でも各プロジェクトに合わせたプラグインを導入することによって、ある程度、複数人が書いたコードのスタイルの一貫性を保つことができるが、それらをどのプロジェクトでもより強制的にするのが Prettier である。

コードの整形部分はすべて Prettier に任し、その他の細かな部分を ESLint のプラグインに任すという形をとることで、より一貫性のあるコードを書くことができる。

## Prettier のインストールと設定

VSCode の [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) プラグインをインストール。

npm パッケージの Prettier をインストール:

```
npm i -D --save-exact prettier
```

Prettier の設定ファイルの作成:

```json[.prettierrc]
{
}
```

すべてのオプションは [Options · Prettier](https://prettier.io/docs/en/options.html) に書かれている。

Prettier と競合する可能性のある ESLint 側のルールをオフにするパッケージをインストール:

```
npm i -D eslint-config-prettier
```

ESLint の設定ファイルの更新:

```json[.eslintrc]
{
  "root": true,
  "parser": "babel-eslint",
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier"
  ],
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "rules": {
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off"
  }
}
```
VSCode の設定ファイルの更新:

```json[.vscode/settings.json]
{
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  },
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll.stylelint": true
  }
}
```

これで JavaScript のコード整形に関連するものは Prettier 側でやるという形になる。

## Prettier の動作を確認する

```jsx[pages/_app.js]
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
```

適当に改行を入れて保存すると以下のように整形されるはず:

```jsx[pages/_app.js]
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
```

## 備考

Prettier の導入に関しては賛否両論あるように思う。雑にコードを書いても Prettier が勝手にいろいろ整形してくれるので楽という意見もあるし、ときに、ちょっとした文字数の違いでインデントが入り、結果的に読みにくいコードになることもある。

いずれにせよ、複数人が書くコードのスタイルの一貫性は ESLint のみよりもあるので、導入する価値は大いにあるが、特に必須というわけではないので、プロジェクトの状況や、フォーマット対象との相性などを見て、導入するかしないかを決めていけばいいと思う。

また、プロジェクトの開発途中で Prettier を導入する場合は .prettierrc で途中までの整形ルールを引き継ぐ感じで設定を調整し、はじめから導入する場合は、余程のこだわりがなければ Prettier のデフォルトの設定にまかせる形がいいかと思う。

ただ、Prettier のデフォルトの設定のままでいくにしても、各々の環境で設定されているものを使わせないために、プロジェクトに空の設定ファイルを作成しておく必要があるので注意する。