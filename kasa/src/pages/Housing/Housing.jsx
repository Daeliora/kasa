import { useParams, Navigate } from 'react-router-dom'
import listeLogements from '../../data/logements.json' // données 
import Slideshow from '../../components/Slideshow/Slideshow'
import Collapse from '../../components/Collapse'
import '../../styles/pages/_housing.scss'


function Housing() {
  // extrait le paramètre "id" de l'URL
  const { id } = useParams()

  // cherche le logement qui possède cet ID précis
  const logement = listeLogements.find((item) => item.id === id)

  // Cas de sécurité : si l'ID dans l'URL ne correspond à aucun logement
  if (!logement) {
     return <Navigate to="./error" />
  }

  // Si le logement existe, on affiche ses informations
  return (
    <div className="logement-container">

      <Slideshow pictures={logement.pictures} alt={logement.title} />
      
      <div className="housing-infos">

        <div className="housing-left">

          <h1>{logement.title}</h1>
          <p>{logement.location}</p>

          <div className="housing-tags">
            {logement.tags.map((tag) => (
              <span key={tag} className="tag">
               {tag}
              </span>
            ))}
          </div>

        </div>

        <div className="housing-right">

          <div className="housing-host">
            <p>{logement.host.name}</p>

            <img
              src={logement.host.picture}
              alt={logement.host.name}
            />
          </div>

          <div className="housing-rating">
            {[1,2,3,4,5].map((star) => (
              <span
                key={star}
                className={star <= logement.rating ? "star active" : "star"}
              >
                ★
              </span>
            ))}
          </div>

        </div>

      </div>
            
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