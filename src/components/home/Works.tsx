import SectionTitle from "../common/SectionTitle";
import NewBadge from "../common/NewBadge";
import { useState } from "react";
import type { Work } from "../../types/profile";
import worksData from "../../data/works.json";
import { assetUrl } from "../../utils/asset";

const works: Work[] = worksData;

export default function Works() {
  // カードごとに独立して開閉させるため、展開中のインデックスを集合で持つ
  // (title は重複し得るのでキーにしない。works.json は静的データなので順序は不変)
  const [expanded, setExpanded] = useState<Set<number>>(new Set());

  const toggle = (index: number) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <section className="py-16 md:py-20 bg-base border-b border-gray-400">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <SectionTitle>Works</SectionTitle>
        <div className="space-y-4">
          {works.map((work, index) => {
            const isOpen = expanded.has(index);
            {
              /* 各worksのカード */
            }
            return (
              <div
                key={index}
                className="bg-white  rounded-md p-6 shadow-sm hover:shadow-lg transition-shadow"
              >
                <h3 className="text-base font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  {work.title}
                  {work.new && <NewBadge />}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {work.summary}
                </p>
                {work.image && (
                  <img
                    src={assetUrl(work.image)}
                    alt={work.title}
                    loading="lazy"
                    className="w-full aspect-video object-cover rounded border border-gray-400 mb-4"
                  />
                )}
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
                  onClick={() => toggle(index)}
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-1"
                >
                  {isOpen ? "隠す" : "もっと見る"}
                  <span
                    className={`transform transition-transform ${isOpen ? "rotate-180" : ""}`}
                  >
                    ▼
                  </span>
                </button>

                {/* 「もっと見る」が押されたとき */}
                {isOpen && (
                  <div className="mt-4 pt-4 border-t border-gray-400 space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">
                        制作の背景
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {work.background}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">
                        担当箇所
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {work.responsibility}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">
                        工夫ポイント
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {work.ingenuity}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">
                        成果
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {work.result}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
