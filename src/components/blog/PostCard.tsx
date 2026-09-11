import { useNavigate } from 'react-router-dom'
import { type Post } from '../../utils/posts'

export default function PostCard({ post }: { post: Post }) {
  const navigate = useNavigate()

  return (
    <article
      onClick={() => navigate(`/blog/${post.slug}`)}
      className="py-4 px-0 hover:opacity-70 transition-opacity cursor-pointer border-b border-gray-300 pb-4 mb-4 last:border-b-0"
    >
      <div className="flex flex-col gap-1">
        <time className="text-gray-500 text-sm">{post.date}</time>
        <h2 className="text-base font-medium text-gray-900">{post.title}</h2>
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-1">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}
