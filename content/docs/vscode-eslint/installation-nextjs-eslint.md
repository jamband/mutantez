---
title: Next.js と ESLint のインストール
position: 2
---

## Next.js のインストール

テンプレートは Default starter app を選ぶ:

```
npx create-next-app foo
cd $_
```

## ESLint のインストールと設定

parser に babel を使うので babel-eslint もインストールしておく:

```
npm i -D eslint babel-eslint
```

設定ファイルの作成:

```
touch .eslintrc
```

./node_modules/.bin/eslint --init でも設定ファイルを作成できるが、個人的にあまり綺麗な設定ファイルを生成しないなぁという感じだったので今回は使わず。

さて、create-next-app でインストールした Next.js のテンプレートを見てみると、プログラムの書き方として、文字列はシングルクオートで囲まれていて、コードの文末にはセミコロンが付いていない。

ということで、今回はそういうルールで (プロジェクトによってルールは変わるが) コードを書くということを ESLint の設定ファイルに記載しておく 。また ESLint が推奨しているものを継承しておくことで、ある程度の秩序があるコードの書き方を強制することができる。

```json[.eslintrc]
{
  "root": true,
  "parser": "babel-eslint",
  "extends": [
    "eslint:recommended"
  ],
  "rules": {
    "semi": ["error", "never"],
    "quotes": ["error", "single"]
  }
}
```

[List of available rules - ESLint](https://eslint.org/docs/rules/) にて ESLint のルールを確認できる。チェックマークが付いているものがデフォルトで有効なルール。さすがに全部覚えられないし、メジャーバージョンアップで追加されるものや変更されるものもあるかもなので、雑に目を通すくらいでいい。

## ESLint の実行

```
./node_modules/.bin/eslint . --ext .js

/path/to/pages/index.js
  1:8  error  'Head' is defined but never used  no-unused-vars
```

エラーになったファイルの中身を見てみる:

```jsx[pages/index.js]
import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      ...
    </div>
  )
}
```

Head が定義されているが使われていないというエラーだが、これは React/JSX の記述が上手く ESLint 側で設定されていないために発生するエラーなので、必要なパッケージを入れて、設定を修正していく。

必要になるパッケージをインストール:

```
npm i -D eslint-plugin-react
```

ESLint の設定ファイルの更新:

```json[.eslintrc]
{
  "root": true,
  "parser": "babel-eslint",
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "rules": {
    "semi": ["error", "never"],
    "quotes": ["error", "single"]
  }
}
```

ESLint を再度実行:

```
./node_modules/.bin/eslint . --ext .js
Warning: React version not specified in eslint-plugin-react settings. See https://github.com/yannickcr/eslint-plugin-react#configuration .

/path/to/pages/index.js
    5:5   error  'React' must be in scope when using JSX  react/react-in-jsx-scope
    6:7   error  'React' must be in scope when using JSX  react/react-in-jsx-scope
    ...
```

一行目の警告は React のバージョンを記載すれば良さそう。その他のエラーは Next.js では各コンポーネントに React をインポートする記述は必要ないので、ルールをオフにしておく。

最終的には以下のような設定になった:

```json[.eslintrc]
{
  "root": true,
  "parser": "babel-eslint",
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "rules": {
    "semi": ["error", "never"],
    "quotes": ["error", "single"],
    "react/react-in-jsx-scope": "off"
  }
}
```
React の version に detect を指定することによって、インストールしたバージョンを検出し自動で選択してくれる。

これで ESLint を実行しても警告やエラーはとりあえずは出ないはず。