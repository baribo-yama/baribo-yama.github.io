import SectionTitle from "../common/SectionTitle";
import type { Internship } from "../../types/profile";
import internshipsData from "../../data/internships.json";

const internships: Internship[] = internshipsData;

export default function Intern() {
  return (
    <section className="py-16 md:py-20 bg-base border-b border-gray-400">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <SectionTitle>Intern</SectionTitle>
        <div className="space-y-4">
          {internships.map((internship) => (
            <div
              key={internship.company}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
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
  );
}
