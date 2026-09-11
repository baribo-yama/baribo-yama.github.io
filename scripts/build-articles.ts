import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkHtml from 'remark-html'

interface ArticleMeta {
  title: string
  date: string
  slug: string
  tags: string[]
}

interface Article extends ArticleMeta {
  content: string
  html: string
}

async function markdownToHtml(markdown: string): Promise<string> {
  const processor = unified().use(remarkParse).use(remarkHtml)
  const file = await processor.process(markdown)
  return String(file.value)
}

async function buildArticles() {
  const articlesDir = path.join(process.cwd(), 'articles')
  const outputDir = path.join(process.cwd(), 'public')
  const outputFile = path.join(outputDir, 'articles.json')

  // Create output directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
  }

  // Read all markdown files
  const markdownFiles = fs.readdirSync(articlesDir).filter((file) => file.endsWith('.md'))

  const articles: Article[] = await Promise.all(
    markdownFiles.map(async (file) => {
      const filePath = path.join(articlesDir, file)
      const fileContent = fs.readFileSync(filePath, 'utf-8')
      const { data, content } = matter(fileContent)
      const html = await markdownToHtml(content)

      return {
        title: data.title || 'Untitled',
        date: data.date || new Date().toISOString().split('T')[0],
        slug: data.slug || file.replace(/\.md$/, ''),
        tags: data.tags || [],
        content,
        html,
      } as Article
    })
  )

  articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  // Write to JSON file
  fs.writeFileSync(outputFile, JSON.stringify(articles, null, 2), 'utf-8')
  console.log(`✓ Generated articles.json with ${articles.length} articles`)
}

buildArticles().catch((error) => {
  console.error('Failed to build articles:', error)
  process.exit(1)
})
