import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

interface ArticleMeta {
  title: string
  date: string
  slug: string
  tags: string[]
}

interface Article extends ArticleMeta {
  content: string
}

const articlesDir = path.join(process.cwd(), 'articles')
const outputDir = path.join(process.cwd(), 'public')
const outputFile = path.join(outputDir, 'articles.json')

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true })
}

// Read all markdown files
const markdownFiles = fs.readdirSync(articlesDir).filter((file) => file.endsWith('.md'))

const articles: Article[] = markdownFiles
  .map((file) => {
    const filePath = path.join(articlesDir, file)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(fileContent)

    return {
      title: data.title || 'Untitled',
      date: data.date || new Date().toISOString().split('T')[0],
      slug: data.slug || file.replace(/\.md$/, ''),
      tags: data.tags || [],
      content,
    } as Article
  })
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

// Write to JSON file
fs.writeFileSync(outputFile, JSON.stringify(articles, null, 2), 'utf-8')
console.log(`✓ Generated articles.json with ${articles.length} articles`)
