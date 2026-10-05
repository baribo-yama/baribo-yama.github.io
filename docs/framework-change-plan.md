結論：**このサイトの今の機能だけで見ると、Reactを主役にするのは大きすぎる。Astro＋React islandsへの移行を勧める。** todo.mdの「Astro移行（UIにReact）★★」の方向は合っている。

## Reactのメリット（コンポーネント分割以外）
- **状態を持つUI**：アコーディオン、絞り込み、検索、Spotify/GitHub APIのような実行時データ。ただし今このサイトで状態を持つのは [Works.tsx](src/components/home/Works.tsx) の「もっと見る」だけ。これは `<details>` でも作れる。
- **ページ遷移が滑らか**：SPAなのでページを丸ごと読み込み直さない。ポートフォリオでは差がほとんど出ない。
- **周辺ツールの多さと実務での採用率**：Testing Library やUIライブラリが使える。就活で「Reactを書ける」と示せる。
- **JSXとTypeScriptの型チェック**：Astroでも `.tsx` をそのまま使えるので、Reactだけの利点ではない。

静的サイト＋Markdownブログという要件では、どれも決め手にならない。

## もっと大きい問題：今の実装はSSGではない
コードを確認した。
- [posts.ts:16](src/utils/posts.ts#L16) で `fetch('/articles.json')` しており、記事を**ブラウザで実行時に**取ってきている
- [PostList.tsx](src/components/blog/PostList.tsx) と [BlogPost.tsx](src/pages/BlogPost.tsx) は useEffect と loading 表示で描画している

つまり実体はCSR（クライアント側レンダリング）。CLAUDE.mdの「ビルド時に完成した静的アセットを配信」と食い違っている。面接で「SSGと書いてあるのに、なぜ実行時にfetchしているのか」と突っ込まれるリスクがある。ほかの影響も出る：
- 配信されるHTMLは空のrootだけ。検索エンジンやOGPのクローラに本文が見えない
- GitHub Pagesで `/blog/<slug>` に直接アクセスすると404になりうる（SPA用のフォールバックが無い場合）

## Astroにすると得られるもの
- ページごとのHTMLがビルド時に作られる。設計方針と実装が一致する
- **Content Collections＋zodスキーマ**で、frontmatterの型をビルド時に検証できる。「先にテーブルスキーマを決める」の説明にそのままつながり、サーバーサイド志望の話として強い
- `build-articles.ts`、`articles.json`、fetch という自前の仕組みが不要になる
- JSはデフォルトでゼロ。Worksだけ `client:visible` でReactを載せる（island）
- 既存の `.tsx` コンポーネントはほぼそのまま使い回せる

面接では「必要な箇所だけReactを使う判断をした」と説明できる。Reactを全面採用するより説明しやすい。

Reactのまま行くなら、React Router v7のprerenderでSSG化するという手もある。ただしMarkdown周りの自前実装は残る。

移行手順（`content.config.ts` のスキーマ、`[slug].astro` の getStaticPaths、deploy.ymlを withastro/action に置き換え、など）は計画ファイルに書いた。実装は別タスクとして承認をもらってから進める。
