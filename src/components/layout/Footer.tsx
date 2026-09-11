export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-400">
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-8 flex flex-col sm:flex-row justify-between items-center gap-3">
        <p className="text-gray-500 text-sm">© 2025 baribo-yama</p>
        <div className="flex gap-6 text-sm text-gray-500">
          <a
            href="https://github.com/baribo-yama"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
