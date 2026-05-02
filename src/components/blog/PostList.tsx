import PostCard, { type Post } from './PostCard'

const posts: Post[] = [
  {
    title: '記事は近日公開予定',
    date: '2025-05-03',
    excerpt: 'ブログ機能は現在開発中です。学んだことや制作の記録を発信していく予定です。',
    slug: 'coming-soon',
  },
]

export default function PostList() {
  return (
    <div className="flex flex-col gap-4">
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  )
}
