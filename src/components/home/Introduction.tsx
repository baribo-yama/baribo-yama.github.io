export default function Introduction() {
  return (
    <section id="about" className="py-24 bg-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-36 h-36 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex-shrink-0 flex items-center justify-center text-5xl select-none">
            👨‍💻
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">baribo-yama</h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              Webエンジニアを目指して日々勉強中。
              <br />
              開発と寿司打とジャルジャルが好きです。腰を守りたいです。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
