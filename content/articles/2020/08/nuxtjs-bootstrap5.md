---
title: Nuxt.js と Bootstrap 5
date: 2020-08-03
tags:
    - nuxt
    - bootstrap
    - css
---

## はじめに

Bootstrap 5 もそろそろ安定版がリリースされそうな雰囲気なので (2020.08.03 現在の最新は 5.0.0-alpha1) 、最近よく触っている Nuxt.js と組み合わせて使ってみた感想を書いていく。

## 試してみたかったこと

Bootstrap も 5.x 系から jQuery への依存をやめたり (オプションでまだ使えるようにはなっている) 、IE のサポートを切ったり (IE のサポートが必要な場合は 4.x を使う) 、といろいろ気になるところはあるが、自分が個人的に気になっていたところは、[BootstrapVue](https://bootstrap-vue.org/) を使用せずに使えるかどうかと、[CSS Modules](https://vue-loader.vuejs.org/guide/css-modules.html) と組み合わせて使っても、良い感じに [PurgeCSS](https://purgecss.com/) が効くかどうかという点だ。

[React Bootstrap](https://react-bootstrap.github.io/) や [BootstrapVue](https://bootstrap-vue.org/) などは Bootstrap の JavaScript 部分を独自に実装していて、かつアクセシビリティの考慮もされているので非常に便利だが、それとは引き換えに残念ながら PurgeCSS とは非常に相性が悪いように思う。カスタムな Sass 構成にして、使用する CSS コンポーネントなどのみをインポートして使うようにしても、なかなか効果的なファイルサイズの削減とはいかない。

といった感じで、Bootstrap 4.x では React Bootstrap や BootstrapVue と PurgeCSS の組み合わせは諦めていたが、5.x からは jQuery への依存もないので、モジュールをインポートして、コンポーネントの props に値を入れていく代わりに、ほぼほぼ生の形で HTML タグの class/className 属性にそのままぽいぽいと用意されたクラスを適用していけばいいので、これ PurgeCSS とも相性がよくなるよね？と期待したわけだ。

また、ほぼほぼ生の形で HTML  タグが構成されるので CSS Modules の使用も簡単になり、これはぜひ試してみようと思い、Nuxt.js と Bootstrap 5 の組み合わせで簡単な Examples サイトを作ることになった。

## 試してみてわかったこと

Vue.js や Nuxt.js において今までコンポーネントへのスタイリングは [Scoped CSS](https://vue-loader.vuejs.org/guide/scoped-css.html) を使っていたが、今回はこれまた PurgeCSS との相性が悪い CSS Modules をあえて使って、どうにかこうにか Bootstrap 5 も絡めて、いい感じに PurgeCSS が効くか試してみたかった。

Nuxt.js における CSS Modules は Vue.js と同様に [vue-loader](https://vue-loader.vuejs.org/) がいろいろやってくれるわけだが、コードとしては以下のように記述する:

```vue[pages/index.vue]
<template>
  <p :class="$style.red">
    This should be red
  </p>
</template>

<style module>
.red {
  color: red;
}
</style>
```

生成される HTML は以下のようになる:

```html
<!-- スタイル部分 -->
<style data-vue-ssr-id="xxx">
/* something... */
.red_3LoVX { color: red }
</style>

<!-- body タグ内 -->
<p class="red_3LoVX">
  This should be red
</p>
```

Scoped CSS とは違い、クラス名の suffix にハッシュ値が自動で付与されるので、クラス名の衝突を防ぐことができ、長ったらしいクラス名にしなくてもいい、という利点がある。

ただ、ここで問題になったのは PurgeCSS との組み合わせである。Nuxt.js において PurgeCSS を使う場合、公式では [nuxt-purgecss](https://github.com/Developmint/nuxt-purgecss) を利用できるよと書いてあったので使ってみたわけだが、やはりどうも CSS Modules とは相性が悪いらしく、クラス名によってスタイルが purge されたりされなかったりと謎の挙動になってしまった。

これについてはいろいろ調べたが原因がよくわからなかったので、最終手段として「CSS Modules を使う場合にクラス名に prefix としてアンダースコアを使う」というルールを採用した。

設定ファイルは以下のようになり:

```js[nuxt.config.js]
export default {
  // ...
  purgeCSS: {
    // ...
    whitelistPatterns: [
      /^_/
    ]
  }
}
```

例としては以下のように記述する:

```vue[pages/index.vue]
<template>
  <p :class="$style._red">
    This should be red
  </p>
</template>

<style module>
._red {
  color: red;
}
</style>
```
生成される HTML は以下のようになる:

```html
<!-- スタイル部分 -->
<style data-vue-ssr-id="xxx">
/* something... */
._red_N26u2 { color: red }
</style>

<!-- body タグ内 -->
<p class="_red_N26u2">
  This should be red
</p>
```

あまり良い対応とはいえないが、これで謎の挙動になることもなくなったので良しとする。ちなみに CSS のクラス名にも規約があるので注意する。[id/class 名に使用できる文字の種類](https://gist.github.com/think49/d8fbcf7f1c743e21bc79bb7d16178cad) を参考にした。

Bootstrap 5 のコンポーネントにおける JavaScript モジュールの読み込みに関しては特にこれといった問題はなかった。mounted() なりでモジュールを require すればいい。

その他の細かな部分はリポジトリを公開しているので興味のある人は見てほしい。

## 完成したもの

- [Quietz](https://quietz.netlify.app/)
- [Quietz のリポジトリ](https://github.com/jamband/quietz)

## まとめ

PurgeCSS との相性を考えると [TailwindCSS](https://tailwindcss.com/)  がやっぱり良いなぁとは思うけど、Bootstrap も Utilities がけっこう充実してきて、ある程度細かなスタイリングもできるようになったし、Dropdown や Modal  などはモジュールを読み込んであーだこーだするとすぐ使えるし、相変わらず CSS/UI Framework は便利だけど、いろいろ悩ましいなぁと思う。

[Vuetify](https://vuetifyjs.com/) + PurgeCSS に関しては [東京都 新型コロナウイルス感染症対策サイトのリポジトリ](https://github.com/tokyo-metropolitan-gov/covid19) が参考になる。コンポーネントのスタイルは Scoped CSS と CSS Modules どちらとも混在している。

## 関連リンク

- [Nuxt.js](https://nuxtjs.org/)
- [Bootstrap](https://getbootstrap.com/)
- [PurgeCSS](https://purgecss.com/)
- [Quietz](https://quietz.netlify.app/)
