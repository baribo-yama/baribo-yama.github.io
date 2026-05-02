# サイト構成
- react + ts + viteで作る
- ポートフォリオサイト
- 過去の制作物とつなげる
- ブログ機能
- ヘッダー、フッター
- フッターには自分へのコンタクト（連絡先とか）
- サイトはgithub.pagesで公開するため静的である必要がある

# 未実装のアイデア
- spotifyのプレイリストっぽい感じに
- blenderのキャラぐるぐる回す（gifでもいい
- spotifyAPIとつなげておすすめ曲流すようにする

# ルーティング
- ホーム画面はルートに表示するように（https://baribo-yama.github.io/でホーム画面を表示させる

## ヘッダー
ヘッダーから以下の二つにアクセスできるようにする
- ホーム
- ブログ

## ホーム画面
ホーム画面は以下の要素で構成する
- 画面上部
  - ウェルカムボード（インパクトでひきつける
  - 簡単な自己紹介
- 画面中部
  - スキル紹介
  - 過去の制作物紹介npm
- 画面下部
  - コンタクト

## ブログ画面
未定


## ディレクトリ構成
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx        # ナビゲーション（ホーム・ブログ）
│   │   └── Footer.tsx        # 連絡先・SNSリンク
│   ├── home/
│   │   ├── WelcomeBoard.tsx  # インパクトのあるトップ
│   │   ├── Introduction.tsx  # 自己紹介
│   │   ├── Skills.tsx        # スキル紹介
│   │   ├── Works.tsx         # 過去の制作物
│   │   └── Contact.tsx       # コンタクト
│   └── blog/
│       ├── PostList.tsx      # 記事一覧
│       └── PostCard.tsx      # 記事カード（一覧の1件分）
├── pages/
│   ├── Home.tsx              # ホーム画面（各 home/ コンポーネントを並べる）
│   └── Blog.tsx              # ブログ画面
├── App.tsx                   # ルーティング
├── index.tsx
└── index.css
