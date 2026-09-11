# CLAUDE.md

このファイルは、このリポジトリで Claude Code に開発を委任する際のプロジェクト指示書です。
実装・レビュー・PR作成のすべてにおいて、ここに書かれた設計方針を優先してください。

## 1. プロジェクトの目的

新卒/インターン就活用のポートフォリオサイト。単なる「見た目が綺麗な静的サイト」ではなく、
**サーバーサイドエンジニア志望者として、設計判断を言語化できる構成**にすることを重視する。
フロントエンドはReactだが、ビルドパイプライン・デプロイ構成・記事配信の仕組みは
バックエンドエンジニアの視点で設計し、面接で「なぜその構成にしたか」を説明できる状態を保つ。

## 2. 技術スタック

| 領域 | 選定 | 選定理由(面接で語れる軸) |
|---|---|---|
| UI | React 18 + TypeScript | 型安全性。コンポーネント単位でのテスト容易性 |
| スタイリング | Tailwind CSS | デザイントークンをコード上で一元管理し、devcontainer / CI 環境差異の影響を受けない |
| ビルド | Vite | ビルド時間の短縮。SSGプラグインとの統合が容易 |
| ルーティング | React Router (or Vite SSG) | 3種類のページ(Home / Blog一覧 / 記事詳細)を明確に分離 |
| 記事管理 | Markdown + frontmatter (gray-matter) | コンテンツとロジックの分離。Gitでバージョン管理された記事=DBレスな構成 |
| 記事→HTML変換 | remark / rehype (unified) | Qiita的なMarkdownレンダリング。コードハイライトは rehype-highlight |
| CI/CD | GitHub Actions | push契機のビルド→デプロイを自動化。将来的なテスト/Lintゲートの追加を見据える |
| ホスティング | GitHub Pages(Source: GitHub Actions) | 既存ポートフォリオと同じ設定を踏襲。`main`へのpushで自動ビルド・デプロイ |
| 開発環境 | Docker (任意) | ローカル/CI/本番のNode.jsバージョン差異を無くす。raqooのVPS運用経験と一貫した思想 |

> 補足: フロントエンドの技術選定であっても、「なぜDBを持たずMarkdown+Gitで記事管理するのか」
> 「なぜビルド時レンダリング(SSG)であり、SSRやCSRではないのか」を説明できることが、
> このサイト自体をバックエンド視点のポートフォリオ作品にする。

## 3. アーキテクチャ

### 3.1 全体構成図(概念)

```
[著者: articles/*.md を編集]
        │ git push
        ▼
[GitHub Actions Workflow]
  1. checkout
  2. npm ci
  3. build-articles.ts
     - articles/*.md を読み込み
     - frontmatter(title, date, tags, slug)をパース
     - remark/rehypeでHTML変換
     - src/generated/articles.json を生成
  4. vite build (React SSG or SPA build)
  5. dist/ を成果物として出力
        │
        ▼
[GitHub Pages にデプロイ]
  (Source: GitHub Actions。`main`へのpushをトリガーに自動デプロイされる既存構成を踏襲。
   開発中は`redesign`ブランチで作業するため、完成してmainにマージするまでは本番は変わらない)
        │
        ▼
[閲覧者のブラウザ]
  - Home (About/Works/History/Skills/Contact)
  - Blog一覧ページ
  - 記事詳細ページ
```

### 3.2 設計判断のポイント(バックエンド視点)

- **記事データはビルド時に静的JSON化する**(実行時にMarkdownをパースしない)。
  理由: 実行時パースはクライアント負荷とレンダリング遅延を生む。ビルド時に前処理を終わらせることで
  「配信物は常に完成された静的アセット」という単純な契約にできる。これはAPIサーバーで言う
  「キャッシュ層を挟んで動的処理をオフロードする」思想と同じ。
- **記事のスキーマ(frontmatter)を明示的に型定義する**(`ArticleMeta`型)。
  DB設計における「テーブルスキーマを先に決める」のと同じ考え方。
- **GitHub Actionsのワークフローをステージ分割する**(build-articles → build-site → deploy)。
  将来的にLint/型チェック/テストをゲートとして挿入しやすくするため。
- **ホスティングはCDN配信を前提にする**。静的サイトである以上、オリジンサーバーへの
  リクエストを最小化し、エッジでキャッシュさせる構成が「サーバーサイドの負荷設計」的に自然な選択。

### 3.3 開発中の運用ルール
- 既存の公開中ポートフォリオはそのまま残し、**新デザインは別ブランチ(例: `redesign`)で開発**する
- デプロイワークフローは`main`へのpushをトリガーにしているため、`redesign`ブランチで作業している間は
  本番サイトに影響しない(ワークフローの`on: push: branches: [main]`をそのまま維持する)
- 完成後、`redesign`を`main`にマージすることで新デザインが自動デプロイされる(Pages設定自体の変更は不要)
- カスタムドメインは使用しない(`github.io`のデフォルトURLのまま)

## 4. ディレクトリ構成

```
/
├── articles/                # Markdown記事置き場(著者が直接編集)
│   └── 2026-09-01-example.md
├── scripts/
│   └── build-articles.ts    # articles/*.md → src/generated/articles.json
├── src/
│   ├── generated/
│   │   └── articles.json    # ビルド時生成物(gitignore対象)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx   # 固定ヘッダー(Home / Blog)
│   │   │   └── Footer.tsx
│   │   ├── home/
│   │   │   ├── AboutMe.tsx
│   │   │   ├── Works.tsx
│   │   │   ├── History.tsx  # 縦タイムライン
│   │   │   ├── Skills.tsx
│   │   │   ├── Intern.tsx
│   │   │   └── Contact.tsx
│   │   └── blog/
│   │       ├── ArticleCard.tsx
│   │       └── MarkdownRenderer.tsx
│   ├── pages/
│   │   ├── HomePage.tsx       # AboutMe→Works→History→Skills→Intern→Contactを縦に並べる1ページ
│   │   ├── BlogListPage.tsx
│   │   └── BlogArticlePage.tsx
│   ├── types/
│   │   └── article.ts       # ArticleMeta型定義
│   └── router.tsx
├── .github/
│   └── workflows/
│       └── deploy.yml
├── design.md
└── CLAUDE.md
```

## 5. ページ・コンポーネント仕様

### 5.1 ページ構成(3種類)
1. **HomePage** — AboutMe / Works / History / Skills / Intern / Contact を1ページ内に縦に配置
2. **BlogListPage** — 記事一覧(カード表示)
3. **BlogArticlePage** — 記事詳細(Markdown→HTML表示)

### 5.2 HomePage内セクション順序(固定)
1. AboutMe(自己紹介、ページ最上部)
2. Works(過去の成果物・作品概要)
3. History(過去の経歴、縦の時系列タイムライン)
4. Skills(使用経験のある技術一覧)
5. Intern(参加インターンの一覧)
6. Contact

### 5.3 ヘッダー仕様
- `position: fixed` でスクロール時も常に表示
- 現時点のリンクは **Home** / **Blog** の2つのみ
- セクションアンカー(`#about`, `#works` 等)は今回は実装しない。Home配下の各セクションは
  ページ内を上から下にスクロールして閲覧する前提とする

### 5.4 History仕様
- 縦タイムライン表示(左側に縦線、各項目をインデント)
- アンカーリンクなし
- フィールドはテキストのみ(期間、見出し、説明文。画像・リンク等は持たせない)

### 5.5 Works仕様
- カードはグリッド表示、**要約表示がデフォルト**
  - 要約: タイトル、概要(1〜2行)、使用技術タグ、リンクアイコン(GitHub/デプロイURL)
- カード内に「もっと見る」ボタンを設置し、クリックで**同ページ内で展開**(アコーディオン形式。
  別ページ・モーダルには遷移させない)
  - 展開時に表示: 制作の背景、担当箇所
- 展開状態はカードごとに独立して管理(1枚開いても他のカードは閉じたまま)

### 5.6 Intern仕様(Contactの直上に新設)
- カード形式、1社1カード
- カード内の情報順序: **画像 → 社名 → インターン内容(簡潔な説明文)**
- Worksのような「もっと見る」展開は不要(簡潔な説明のみで完結させる)

### 5.7 ブログパイプライン
- `articles/*.md` に frontmatter(`title`, `date`, `tags`, `slug`)+本文を記述(OGP用の`description`/`thumbnail`は今回は持たせない)
- push時にGitHub Actionsが `scripts/build-articles.ts` を実行し、静的JSONを生成
- ビルド成果物をVite buildに含めてデプロイ
- v1のスコープ: 記事は**全件表示**(ページネーションなし)、タグは表示のみで**絞り込み・検索は実装しない**、コメント・いいね機能も実装しない

## 6. 開発規約

- コンポーネントは関数コンポーネント + TypeScript、Propsは型で明示
- Tailwindのユーティリティクラスのみ使用(独自CSSは最小限、`design.md`のトークンに従う)
- 1コンポーネント1責務。セクションごとにファイル分割(上記ディレクトリ構成参照)
- コミット前に `npm run lint` / `npm run typecheck` を通す
- PRは機能単位。実装→動作確認→PR作成のサイクルをClaude Codeが担当し、マージはレビュー後に人が行う

## 7. 今後の拡張候補(今回は未実装)
- Home内セクションへのアンカーリンク(About/Works/History/Skills)をヘッダーに追加
- Worksの「もっと見る」展開に加え、必要になれば専用の詳細ページ化
- 記事タグによる絞り込み・検索機能
- コメント・いいね機能
- OGP画像の自動生成、ページネーション
- Lint/型チェックをCIのゲートに追加(現状は手元確認のみ)
