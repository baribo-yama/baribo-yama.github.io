import { NavLink } from 'react-router-dom'

export default function Header() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors ${isActive ? 'text-blue-400' : 'text-gray-300 hover:text-white'}`

  return (
    <header className="sticky top-0 z-50 bg-gray-900/90 backdrop-blur-sm border-b border-gray-800">
      <nav className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <NavLink to="/" className="text-lg font-bold text-white tracking-tight">
          baribo-yama
        </NavLink>
        <ul className="flex gap-8">
          <li><NavLink to="/" end className={linkClass}>Home</NavLink></li>
          <li><NavLink to="/blog" className={linkClass}>Blog</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}
