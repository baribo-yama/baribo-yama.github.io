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
      <div className="max-w-3xl mx-auto px-4 md:px-8 py-16">
        <div className="text-gray-500">記事を読み込み中...</div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-4 md:px-8 py-16">
        <div className="text-gray-500">記事が見つかりません</div>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto px-4 md:px-8 py-16">
      <button
        onClick={() => navigate('/blog')}
        className="mb-8 text-gray-600 hover:text-gray-900 transition-colors text-sm"
      >
        ← 記事一覧に戻る
      </button>

      <article>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>
        <time className="text-gray-500 text-sm mb-8 block">{post.date}</time>

        <div
          className="prose prose-sm max-w-none text-gray-600 leading-relaxed space-y-4"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>
    </div>
  )
}
