import { useEffect, useState } from 'react'
import PostCard, { type Post } from './PostCard'
import { getPosts } from '../../utils/posts'

export default function PostList() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getPosts().then((data) => {
      setPosts(data)
      setLoading(false)
    })
  }, [])

  if (loading) {
    return <div className="text-gray-400">記事を読み込み中...</div>
  }

  if (posts.length === 0) {
    return <div className="text-gray-400">記事はまだありません</div>
  }

  return (
    <div className="flex flex-col gap-4">
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  )
}
