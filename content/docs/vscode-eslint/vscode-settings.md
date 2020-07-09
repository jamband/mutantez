---
title: VSCode の設定
position: 3
---

## 問題点

ここまでは ESLint をコマンドで実行してエラーを確認していたが、さすがにコードを書いてコマンドを実行して... と繰り返すのはめんどくさいので、エラー箇所をコードを書いているときでも表示してくれるように VSCode 側でいろいろ設定しておく。

## Extension のインストールと設定

[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) をインストールする。これでコードを書いているときに ESLint 関連でエラーがあると、その箇所を赤色で教えてくれる。またエクスプローラーのファイルも赤色になり、どのファイルでエラーが発生しているかすぐわかるし、カーソルをエラー箇所に置くとエラーの内容もわかり、その場で修正もできるので便利だ。

さらに、それらをファイルの保存時に勝手にやってくれるともっと楽なので、その設定もやっておく。

.vscode/settings.json を作成し以下を追加:

```json[.vscode/settings.json]
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

あとは VSCode を再起動する。これでファイルの保存時に ESLint 関連でエラーが発生すると自動で修正してくれる。ただエラーの種類によっては自動で修正ができないものもあるので注意。
