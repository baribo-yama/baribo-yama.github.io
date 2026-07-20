import { useNavigate } from 'react-router-dom'

export type Post = {
  title: string
  date: string
  slug: string
}

export default function PostCard({ post }: { post: Post }) {
  const navigate = useNavigate()

  return (
    <article
      onClick={() => navigate(`/blog/${post.slug}`)}
      className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-colors cursor-pointer"
    >
      <time className="text-blue-400 text-sm font-mono">{post.date}</time>
      <h2 className="text-xl font-bold text-white mt-2 mb-3">{post.title}</h2>
    </article>
  )
}
