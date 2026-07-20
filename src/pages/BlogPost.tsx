import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getPost, type Post } from '../utils/posts'

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const [post, setPost] = useState<Post | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!slug) return

    getPost(slug).then((data) => {
      if (!data) {
        navigate('/blog')
      } else {
        setPost(data)
      }
      setLoading(false)
    })
  }, [slug, navigate])

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-gray-400">記事を読み込み中...</div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-gray-400">記事が見つかりません</div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <button
        onClick={() => navigate('/blog')}
        className="mb-8 text-blue-400 hover:text-blue-300 transition-colors"
      >
        ← 記事一覧に戻る
      </button>

      <article className="prose prose-invert max-w-none">
        <h1 className="text-4xl font-bold text-white mb-4">{post.title}</h1>
        <time className="text-blue-400 text-sm font-mono mb-8 block">{post.date}</time>

        <div className="text-gray-300 leading-relaxed whitespace-pre-wrap">
          {post.content}
        </div>
      </article>
    </div>
  )
}
