import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { Menu, X } from 'lucide-react' // puedes usar cualquier ícono o emoji

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const linkClasses = ({ isActive }) =>
    isActive
      ? 'text-lime-300 font-bold drop-shadow-[0_0_6px_#84cc16] relative after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-[2px] after:bg-lime-300 after:animate-pulse'
      : 'hover:text-white transition relative'

  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <nav className="bg-gray-900 text-lime-300 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="text-2xl font-bold hover:text-white transition">
          Rick & Morty API
        </NavLink>

        {/* Menú para pantallas grandes */}
        <div className="hidden md:flex space-x-4 text-lg">
          <NavLink to="/" className={linkClasses}>Inicio</NavLink>
          <NavLink to="/personajes" className={linkClasses}>Personajes</NavLink>
          <NavLink to="/acerca" className={linkClasses}>Acerca de</NavLink>
        </div>

        {/* Botón hamburguesa visible en móviles */}
        <button className="md:hidden" onClick={toggleMenu}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menú desplegable en móviles */}
      {menuOpen && (
  <div className="md:hidden px-4 pb-4 flex flex-row flex-wrap justify-start items-center space-x-6 text-lg animate-slide-down">
    <NavLink to="/" className={linkClasses} onClick={() => setMenuOpen(false)}>Inicio</NavLink>
    <NavLink to="/personajes" className={linkClasses} onClick={() => setMenuOpen(false)}>Personajes</NavLink>
    <NavLink to="/acerca" className={linkClasses} onClick={() => setMenuOpen(false)}>Acerca de</NavLink>
  </div>
)}

    </nav>
  )
}
