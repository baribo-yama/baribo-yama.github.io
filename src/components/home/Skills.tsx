import type { SkillCategory } from '../../types/profile'
import skillsData from '../../data/skills.json'
import { assetUrl } from '../../utils/asset'

const skillCategories: SkillCategory[] = skillsData

export default function Skills() {
  return (
    <section className="py-16 md:py-20 bg-white border-b border-gray-400">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-10">Skills</h2>
        <div className="space-y-8">
          {skillCategories.map((category) => (
            <div key={category.category}>
              <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-widest mb-4">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.items.map((skill, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-2 border border-gray-400 text-gray-700 px-3 py-1 text-sm rounded"
                  >
                    {skill.image && (
                      <img src={assetUrl(skill.image)} alt="" className="w-4 h-4 object-contain" />
                    )}
                    {skill.name}
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
