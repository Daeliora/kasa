import { useParams, Navigate } from 'react-router-dom'
import listeLogements from '../../data/logements.json' // données 
import Slideshow from '../../components/Slideshow/Slideshow'
import Collapse from '../../components/Collapse'

function Housing() {
  // 1. On extrait le paramètre "id" de l'URL
  const { id } = useParams()

  // 2. On cherche le logement qui possède cet ID précis
  const logement = listeLogements.find((item) => item.id === id)

  // 3. Cas de sécurité : si l'ID dans l'URL ne correspond à aucun logement
  if (!logement) {
     return <Navigate to="./error" />
  }

  // 4. Si le logement existe, on affiche ses informations
  return (
    <div className="logement-container">
      
      <h1>{logement.title}</h1>
      <p>{logement.location}</p>

      <div className="housing-tags">
        {logement.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
      <div className="housing-host">
        <p>{logement.host.name}</p>
        <img
          src={logement.host.picture}
          alt={logement.host.name}
        />
      </div>

      <div className="housing-rating">
        {[1,2,3,4,5].map((star) => (
          <span key={star}>
            {star <= logement.rating ? '★' : '☆'}
          </span>
        ))}
      </div>

      <Slideshow pictures={logement.pictures} alt={logement.title} />
      
      <div className="housing-collapses">
        
        <Collapse title="Description">
          <p>{logement.description}</p>
        </Collapse>

        <Collapse title="Équipements">
          <ul>
            {logement.equipments.map((equipment) => (
              <li key={equipment}>
                {equipment}
              </li>
            ))}
          </ul>

        </Collapse>
      </div>

    </div>
  )
}

export default Housing