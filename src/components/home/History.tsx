type HistoryItem = {
  period: string
  title: string
  description: string
}

const history: HistoryItem[] = [
  {
    period: '2025.05 - 現在',
    title: 'Webエンジニア志望',
    description: 'React・TypeScriptでのフロントエンド開発及び、バックエンド視点でのシステム設計を学習中',
  },
  {
    period: '2024.04',
    title: '大学入学',
    description: 'プログラミングの基礎から学習開始',
  },
]

export default function History() {
  return (
    <section className="py-16 md:py-20 bg-white border-b border-gray-400">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-10">History</h2>
        <div className="relative pl-6 border-l border-gray-400">
          {history.map((item, index) => (
            <div key={index} className="mb-8 last:mb-0">
              <div className="absolute -left-3 w-4 h-4 bg-white border-2 border-gray-400 rounded-full" />
              <p className="text-sm text-gray-500 mb-1">{item.period}</p>
              <h3 className="text-base font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
