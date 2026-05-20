import { useState } from 'react'

function Collapse({ title, children }) {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="collapse">

      <button
        className="collapse-header"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>

        <span>
          {isOpen ? '▲' : '▼'}
        </span>
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