export default function WelcomeBoard() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      <div className="relative z-10 text-center px-4 md:px-6">
        <p className="text-gray-500 text-xs font-medium tracking-widest uppercase mb-6">
          Welcome to my portfolio
        </p>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          baribo-yama
        </h1>
        <p className="text-gray-600 text-lg md:text-lg max-w-md mx-auto leading-relaxed">
          Webエンジニアを目指して日々勉強中
        </p>
        <button
          onClick={scrollToAbout}
          className="mt-12 inline-flex items-center gap-2 bg-gray-900 hover:opacity-80 text-white px-6 py-2 font-medium transition-opacity cursor-pointer"
        >
          詳しく見る
          <span>↓</span>
        </button>
      </div>
    </section>
  );
}
