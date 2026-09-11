import { useEffect, useState } from 'react'
import PostCard from './PostCard'
import { getPosts, type Post } from '../../utils/posts'

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
    return <div className="text-gray-500">記事を読み込み中...</div>
  }

  if (posts.length === 0) {
    return <div className="text-gray-500">記事はまだありません</div>
  }

  return (
    <div className="space-y-1 divide-y divide-gray-200">
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  )
}
