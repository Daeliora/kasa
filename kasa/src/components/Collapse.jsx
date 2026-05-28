import { useState } from 'react'
import chevron from '../assets/chevron_menu.png'

function Collapse({ title, children }) {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="collapse">

      <button
        className="collapse-header"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>

        <img
          src={chevron}
          alt="chevron"
          className={isOpen ? 'open' : ''}
        />
      </button>

      {isOpen && (
        <div className="collapse-content">
          {children}
        </div>
      )}

    </div>
  )
}

export default Collapse