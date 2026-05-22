import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/Logo.png'

function Header() {
  return (
    <header className="kasa-header">
      <img src={logo} alt="Kasa" className="kasa-logo" />
      <nav className="kasa-nav">
        <NavLink to="/"
          className={({ isActive }) =>
          isActive ? 'active-link' : ''
          }>
        Accueil
        </NavLink>
        <NavLink to="/about"
          className={({ isActive }) =>
          isActive ? 'active-link' : ''
        }>
        À propos
        </NavLink>
      </nav>
    </header>
  )
}

export default Header