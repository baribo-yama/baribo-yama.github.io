type InternData = {
  company: string
  description: string
  logo?: string
}

const internships: InternData[] = [
  {
    company: 'Tech Company A',
    description: 'Webアプリケーション開発インターンシップ。フロントエンド・バックエンド双方の技術スタックを経験',
  },
]

export default function Intern() {
  return (
    <section className="py-16 md:py-20 bg-gray-50 border-b border-gray-400">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-10">Intern</h2>
        <div className="space-y-4">
          {internships.map((internship) => (
            <div key={internship.company} className="bg-white border border-gray-400 rounded p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-base font-semibold text-gray-900 mb-2">
                {internship.company}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {internship.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
