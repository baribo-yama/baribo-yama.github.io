import PostList from '../components/blog/PostList'

export default function Blog() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-white mb-2">Blog</h1>
      <p className="text-gray-400 mb-12">日々の学びや制作の記録</p>
      <PostList />
    </div>
  )
}
