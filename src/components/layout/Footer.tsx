export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-3">
        <p className="text-gray-500 text-sm">© 2025 baribo-yama</p>
        <div className="flex gap-6 text-sm text-gray-500">
          <a
            href="https://github.com/baribo-yama"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
