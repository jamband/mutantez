---
title: TypeScript の導入
position: 6
---

## TypeScript のインストールと設定

Next.js (React) と TypeScript は非常に相性が良いし、型安全や、VSCode の補完強化などを考えると TypeScript は是非入れておきたい。ということで導入していく。

TypeScript とその他必要なパッケージのインストール:

```
npm i -D typescript @types/react @types/node
```

TypeScript の空の設定ファイルを作成:

```
touch tsconfig.json
```

dev コマンドの実行:

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
    "prettier"
  ],
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "rules": {
    "@typescript-eslint/explicit-module-boundary-types": "off",
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
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  },
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll.stylelint": true
  }
}
```

## 動作を確認する

プロジェクトルートに components ディレクトリを作成し、Foo コンポーネントを作成:

```tsx[components/Foo.tsx]
type Props = {
  bar: string;
  baz: number;
};

export const Foo: React.VFC<Props> = (props) => {
  return (
    <>
      <h1>{props.bar}</h1>
      <div>{props.baz + 1}</div>
    </>
  );
};
```

トップページにて Foo コンポーネントを使う:

```tsx[pages/index.tsx]
import { Foo } from "../components/Foo";

export default function Home() {
  return (
    <>
      <Foo bar="bar" baz={5} />
    </>
  );
}
```

補完や自動整形などが効いているか確認する。