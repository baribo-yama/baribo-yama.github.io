type SkillCategory = {
  category: string
  items: string[]
}

const skillCategories: SkillCategory[] = [
  {
    category: '言語',
    items: ['TypeScript', 'HTML / CSS', 'JavaScript'],
  },
  {
    category: 'フレームワーク',
    items: ['React', 'Tailwind CSS'],
  },
  {
    category: 'ツール・インフラ',
    items: ['Vite', 'Git / GitHub', 'npm'],
  },
]

export default function Skills() {
  return (
    <section className="py-16 md:py-20 bg-white border-b border-gray-200">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-10">Skills</h2>
        <div className="space-y-8">
          {skillCategories.map((category) => (
            <div key={category.category}>
              <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-widest mb-4">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="inline-block border border-gray-300 text-gray-700 px-3 py-1 text-sm rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
