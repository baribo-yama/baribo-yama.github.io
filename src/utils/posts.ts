export interface Post {
  title: string
  date: string
  slug: string
  tags: string[]
  content: string
  html: string
}

let articlesCache: Post[] | null = null

async function loadArticles(): Promise<Post[]> {
  if (articlesCache) return articlesCache

  try {
    const response = await fetch('/articles.json')
    const articles = await response.json() as Post[]
    articlesCache = articles
    return articles
  } catch (error) {
    console.error('Failed to load articles:', error)
    return []
  }
}

export async function getPosts(): Promise<Post[]> {
  return loadArticles()
}

export async function getPost(slug: string): Promise<Post | null> {
  const posts = await loadArticles()
  return posts.find((post) => post.slug === slug) || null
}
