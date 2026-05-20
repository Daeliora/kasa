import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header>
      <h1>Kasa</h1>

      <nav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">À propos</NavLink>
      </nav>
    </header>
  )
}

export default Header