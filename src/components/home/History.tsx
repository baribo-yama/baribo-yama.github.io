import type { HistoryItem } from '../../types/profile'
import historyData from '../../data/history.json'

const history: HistoryItem[] = historyData

export default function History() {
  return (
    <section className="py-16 md:py-20 bg-white border-b border-gray-400">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-10">History</h2>
        <ol className="relative pl-6 border-l border-gray-400">
          {history.map((item) => (
            // 各項目を relative にし、ドットを項目ごとに縦線上へ配置する
            // (pl-6 + border 1px = 25px 左へずらし、16px のドット中心を線に合わせる)
            <li key={`${item.period}-${item.title}`} className="relative mb-8 last:mb-0">
              <span className="absolute -left-[33px] top-0.5 w-4 h-4 bg-white border-2 border-gray-400 rounded-full" />
              <p className="text-sm text-gray-500 mb-1">{item.period}</p>
              <h3 className="text-base font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
