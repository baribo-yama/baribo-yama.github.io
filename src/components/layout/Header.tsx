import { NavLink } from 'react-router-dom'

export default function Header() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors ${isActive ? 'text-gray-900 font-semibold' : 'text-gray-500 hover:text-gray-900'}`

  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur border-b border-gray-300 h-14">
      <nav className="max-w-5xl mx-auto px-4 md:px-8 py-0 flex justify-between items-center h-full">
        <NavLink to="/" className="text-lg font-bold text-gray-900 tracking-tight">
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
