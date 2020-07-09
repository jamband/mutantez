---
title: TypeScript の導入
position: 6
---

## TypeScript のインストールと設定

Next.js (React) と TypeScript は非常に相性が良いし、型安全や、VSCode の補完強化などを考えると TypeScript は是非入れておきたい。ということで導入していく。

TypeScript のインストール:

```
npm i -D typescript
```

TypeScript の空の設定ファイルを作成:

```
touch tsconfig.json
```

dev コマンドの実行:

```
npm run dev
```

いつかのパッケージをインストールしろと言われるのでインストール:

```
npm i -D @types/react @types/node
```

再度 dev コマンドを実行:

```
npm run dev
```

これで TypeScript に関連する設定が tsconfig.json に書かれ、next-env.d.ts ファイルが自動で生成される。 設定ファイルの strict がデフォルトでは false になっているので、そこだけ注意しておく。慣れてきたら true しよう。


## その他のパッケージのインストールと設定

ESLint 関連で必要になるパッケージをインストール:

```
npm i -D @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

必要がなくなったパッケージの削除:

```
npm rm babel-eslint
```

ESLint の設定ファイルの更新:

```json[.eslintrc]
{
  "root": true,
  "parser": "@typescript-eslint/parser",
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint",
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

ESLint 上で Prettier を動かしている場合、ESLint や eslint-plugin-react のコード整形に関連するルールをオフにした指定方法と同様に、prettier/@typescript-eslint を指定して plugin:@typescript-eslint/recommended のコード整形に関連するルールをオフにしておく。

## 動作を確認する

```tsx[components/Foo.tsx]
type Props = {
  bar: string
  baz: number
}

export default function Foo(props: Props): JSX.Element {
  return (
    <>
      <h1>{props.bar}</h1>
      <div>{props.baz + 1}</div>
    </>
  )
}
```

```tsx[pages/index.tsx]
import Foo from '../components/Foo'

export default function Home(): JSX.Element {
  return (
    <>
      <Foo bar="bar" baz={5} />
    </>
  )
}
```