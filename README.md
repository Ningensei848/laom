# LAOM: Alternative Owned Media

## What is LAOM ?

LAOM は，ウェブフロントエンド技術に精通せずとも，個々人でプラットフォームに依存しない発信の場を確保するためのサービスです．静的文書ジェネレータとして有名な Docusaurus をベースとしてつくられていますが，`blog-only` モードだけを残し，プラグイン等を通じてソーシャルメディアへのシェア機能を拡張しています．

## Why use this ?

昨今欧米でも猛威を奮っている「キャンセルカルチャー」が徐々に各国へ広まりつつあります．例えば少しでも「ただしくない」発言をしたという事実があれば，それを針小棒大に騒ぎ立てて延々と追求し，これが駄目だからアレもダメというふうに，それまでの評価を連鎖的に無効化させようとする運動を指します．

「キャンセル」から身を守ることは難しいでしょう．ポリティカル・コレクトネス全盛の時代にあって，それまで誰しもがそれと意識せず使っていた言葉が今では忌避されるようにもなることから分かる通り，今は問題ない表現でも未来では断罪されてしまうリスクがあります．つまり，今日まで問題ないとされてきた発言でも明日には問題視され発言権を奪われることになりかねません．

LAOM は，発言の場を確保するために，個々人が自前のブログを展開するのを手助けします．煩雑な設定やプログラミングの知識なしに，誰にも口出しされない個人的な言論空間を提供します．

## Requirements

- エディタを用意する（VSCode を推奨）
- Node.js  v16.x の実行環境を整える
- Git の環境および基礎知識

```shell
$ git clone https://github.com/Ningensei848/laom.git
$ cd laom
$ yarn install
```

## Deploy your own

- 文書を書く
  - `content/blogs` ディレクトリ以下に Markdown で記述する
  - `yarn dev` を実行すると新たにタブが開く → それでプレビューしながら書いてみるべし
- デプロイ準備
  - `yarn build` してローカルで問題が出ないことを確認する
  - `.github/workflows/gh-pages.yml` に必要事項を追記する
- リポジトリを GitHub に push する
  - 無事に push されれば，自動的に GitHub Pages でデプロイまで行われる

## Author

[![Twitter is what's happening in the world and what people are talking about right now.](https://img.shields.io/badge/@Ningensei848-%231DA1F2.svg?&style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/Ningensei848)

[![](https://img.shields.io/badge/k.kubokawa@klis.tsukuba.ac.jp-%23757575.svg?&style=for-the-badge&logo=gmail&logoColor=EA4335)](mailto:k.kubokawa@klis.tsukuba.ac.jp)

## License

_This software is released under the [MIT License](LICENSE)._
