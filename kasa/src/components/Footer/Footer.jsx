import React from 'react'
import logoFooter from '../../assets/LogoBlanc.png'

function Footer() {
  return (
    <footer className="kasa-footer">
      <img src={logoFooter} alt="Kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer