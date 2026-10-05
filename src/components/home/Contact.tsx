import SectionTitle from "../common/SectionTitle";
export default function Contact() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
        <SectionTitle className="mb-4">SNS</SectionTitle>
        <p className="text-gray-600 mb-8">お気軽にご連絡ください。</p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="https://github.com/baribo-yama"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
          >
            GitHub
          </a>
          <a href="https://x.com/gu_develop551?s=11">X</a>
          <a href="https://qiita.com/bariboyama">qiita</a>
        </div>
      </div>
    </section>
  );
}
