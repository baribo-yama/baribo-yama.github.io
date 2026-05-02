export default function WelcomeBoard() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20 pointer-events-none" />
      <div className="relative z-10 text-center px-6">
        <p className="text-blue-400 text-xs font-mono tracking-[0.3em] uppercase mb-6">
          Welcome to my portfolio
        </p>
        <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight">
          Creative
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Developer
          </span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-md mx-auto leading-relaxed">
          ようこそ。こんにちは。
        </p>
        <button
          onClick={scrollToAbout}
          className="mt-12 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-medium transition-colors cursor-pointer"
        >
          詳しく見る
          <span>↓</span>
        </button>
      </div>
    </section>
  );
}
