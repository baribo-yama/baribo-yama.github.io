export default function Contact() {
  return (
    <section className="py-24 bg-gray-950">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Contact</h2>
        <p className="text-gray-400 mb-10">お気軽にご連絡ください。</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://github.com/baribo-yama"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white px-8 py-3 rounded-full transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
