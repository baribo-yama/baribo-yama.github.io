const skills = [
  { name: 'React', level: 3 },
  { name: 'TypeScript', level: 2 },
  { name: 'Vite', level: 2 },
  { name: 'Tailwind CSS', level: 3 },
  { name: 'HTML / CSS', level: 3 },
  { name: 'Git / GitHub', level: 2 },
]

export default function Skills() {
  return (
    <section className="py-24 bg-gray-950">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-gray-800 rounded-xl p-5 border border-gray-700 hover:border-blue-500 transition-colors"
            >
              <p className="text-white font-medium mb-3">{skill.name}</p>
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 flex-1 rounded-full ${i < skill.level ? 'bg-blue-500' : 'bg-gray-600'}`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
