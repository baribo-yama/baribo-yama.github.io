type Work = {
  title: string
  description: string
  tech: string[]
  url: string
}

const works: Work[] = [
  {
    title: 'Portfolio Blog',
    description: 'このサイト。React + TypeScript + Vite + Tailwind CSS で構築したポートフォリオサイト。',
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    url: 'https://github.com/baribo-yama/portfolio_blog',
  },
]

export default function Works() {
  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Works</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {works.map((work) => (
            <a
              key={work.title}
              href={work.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-colors group"
            >
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {work.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">{work.description}</p>
              <div className="flex flex-wrap gap-2">
                {work.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
