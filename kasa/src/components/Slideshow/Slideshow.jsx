import { useState } from 'react'
import leftArrow from '../../assets/chevron_left.png'
import rightArrow from '../../assets/chevron_right.png'

function Slideshow({ pictures }) {

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex(
      currentIndex === pictures.length - 1
        ? 0
        : currentIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex(
      currentIndex === 0
        ? pictures.length - 1
        : currentIndex - 1
    )
  }

  return (
    <div className="slideshow">

      <img
        src={pictures[currentIndex]}
        alt="Logement"
      />

      {pictures.length > 1 && (
        <>
          <button onClick={prevSlide}>
             <img src={leftArrow} alt="précédent" />
          </button>

          <button onClick={nextSlide}>
            <img src={rightArrow} alt="suivant" />
          </button>

          <p>
            {currentIndex + 1} / {pictures.length}
          </p>
        </>
      )}

    </div>
  )
}

export default Slideshow