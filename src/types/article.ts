export type ArticleMeta = {
  title: string
  date: string
  slug: string
  tags: string[]
}

export type Article = ArticleMeta & {
  content: string
  html: string
}
