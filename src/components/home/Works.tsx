import { useState } from 'react'

type Work = {
  title: string
  summary: string
  background: string
  responsibility: string
  tech: string[]
  github?: string
  url?: string
}

const works: Work[] = [
  {
    title: 'Portfolio Blog',
    summary: 'このサイト。React + TypeScript + Vite + Tailwind CSS で構築したポートフォリオサイト。',
    background: 'エンジニア志望者として、バックエンドの視点を持ったポートフォリオを構築したいと考え、Markdown記事管理とビルド時SSG化を実装。',
    responsibility: 'フロントエンド全般、ビルドパイプライン設計、記事管理システム',
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    github: 'https://github.com/baribo-yama/portfolio_blog',
  },
]

export default function Works() {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  return (
    <section className="py-16 md:py-20 bg-white border-b border-gray-400">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-12">Works</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {works.map((work) => (
            <div
              key={work.title}
              className="border border-gray-400 rounded p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {work.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">{work.summary}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {work.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-gray-100 text-gray-700 px-2 py-1 border border-gray-400 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 mb-4">
                {work.github && (
                  <a
                    href={work.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                    title="GitHub"
                  >
                    GitHub
                  </a>
                )}
                {work.url && (
                  <a
                    href={work.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                    title="Deploy"
                  >
                    Deploy
                  </a>
                )}
              </div>
              <button
                onClick={() => setExpandedId(expandedId === work.title ? null : work.title)}
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-1"
              >
                {expandedId === work.title ? 'もっと隠す' : 'もっと見る'}
                <span className={`transform transition-transform ${expandedId === work.title ? 'rotate-180' : ''}`}>
                  v
                </span>
              </button>
              {expandedId === work.title && (
                <div className="mt-4 pt-4 border-t border-gray-400 space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">制作の背景</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{work.background}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">担当箇所</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{work.responsibility}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
