import PostList from '../components/blog/PostList'

export default function Blog() {
  return (
    <div className="max-w-3xl mx-auto px-4 md:px-8 py-16 bg-white">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Blog</h1>
      <p className="text-gray-600 mb-12">日々の学びや制作の記録</p>
      <PostList />
    </div>
  )
}
