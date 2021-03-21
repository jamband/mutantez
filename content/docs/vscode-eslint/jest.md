---
title: Jest の導入
position: 7
---

## テストツールの導入について

ESLint, Prettier, TypeScript などでコードの品質はある程度確保できるが、書かれたコードの動作そのものは実際手を動かして自分の目で見て確認する他ない。それらの動作をテストコードとして書いておくことによって、再度動作を確認する際に、より単純でかつ速く確認することができる。

プロジェクトの規模が大きくなってきたり、より複雑になった場合や、また、変更が発生した場合、依存パッケージのアップデートが発生した場合など、テストを書いていると助かる場面は多々あるので、余裕があるなら書いておきたい。

## 何をテストするのか

今回テストする対象としては、アプリケーション全体のテストではなく、コンポーネント単位のテスト。例としては単純なものだが、実際は複雑で動作に不安があるものを優先してテストするのが望ましい。なんでもかんでもテストするのはコストがかかるし、コンポーネントのテストを考えれば、カバレッジよりも入力に対しての出力をテストするなど、テスト対象を見ながら柔軟に書いていきたい。

## テスト関連のパッケージのインストールと設定

React 関連のコンポーネントをテストする際のツールとしては React Testing Library, Enzyme, react-test-renderer などがあるが、今回は React Testing Library を使うことにする。

必要なものをインストール:

```
npm i -D jest babel-jest @types/jest @testing-library/react @testing-library/jest-dom @types/react-dom identity-obj-proxy
```

identity-obj-proxy はスタイルシートや画像など、アセット関連のモックに使う。詳しくは[Jest - Mocking CSS Modules](https://jestjs.io/docs/en/webpack#mocking-css-modules) 。

.babelrc の作成と設定:

```json[.babelrc]
{
  "presets": ["next/babel"]
}
```

Jest の設定ファイルの作成:

```js[jest.config.js]
module.exports = {
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  transform: {
    "^.+\\.(ts|tsx)$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy",
  },
};
```

setupFilesAfterEnv はテストの実行前に何かをさせるときに使う。上記の場合は jest-dom のカスタムマッチャーを読み込み、各テストファイルで import せずに使えるようにしている。

ESLint の設定ファイルの更新:

```json[.eslintrc]
{
  "env": {
    "node": true
  },
  ...
```

test コマンドを package.json に追加:

```json[package.json]
{
  "scripts": {
    ...
    "test": "jest"
```

## コンポーネントのテストを書く

検索結果の件数を表示するコンポーネントがあったとして、それをテストする。0 件なら No results found と表示し、n 件なら n results と表示する、というもの。

テストファイル:

```tsx[components/TotalCount.spec.tsx]
import { render, screen } from "@testing-library/react";
import { TotalCount } from "./TotalCount";

test("total: 0", () => {
  render(<TotalCount total={0} />);
  expect(screen.getByText("No results found")).toBeInTheDocument();
});

test("total: 10", () => {
  render(<TotalCount total={10} />);
  expect(screen.getByText("10 results")).toBeInTheDocument();
});
```

コンポーネントのスタイルファイル:

```scss[components/TotalCount.module.scss]
.foo {
  color: darkgray;
}
```

コンポーネント:

```tsx[components/TotalCount.tsx]
import styles from "./TotalCount.module.scss";

type Props = {
  total: number;
};

export const TotalCount: React.VFC<Props> = (props) => {
  return (
    <p className={styles.foo}>
      {props.total === 0 ? "No results found" : `${props.total} results`}
    </p>
  );
};
```

テストの実行:

```
npm run test components/TotalCount.spec.tsx
```