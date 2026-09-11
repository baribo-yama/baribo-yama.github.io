import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkHtml from 'remark-html'

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
    const articles = await response.json()

    for (const article of articles) {
      const html = await markdownToHtml(article.content)
      article.html = html
    }

    articlesCache = articles
    return articles
  } catch (error) {
    console.error('Failed to load articles:', error)
    return []
  }
}

async function markdownToHtml(markdown: string): Promise<string> {
  const processor = unified().use(remarkParse).use(remarkHtml)
  const html = await processor.process(markdown)
  return String(html)
}

export async function getPosts(): Promise<Post[]> {
  return loadArticles()
}

export async function getPost(slug: string): Promise<Post | null> {
  const posts = await loadArticles()
  return posts.find((post) => post.slug === slug) || null
}
