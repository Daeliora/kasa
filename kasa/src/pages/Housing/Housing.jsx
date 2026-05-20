import { useParams } from 'react-router-dom'
import listeLogements from '../../data/logements.json' // données (chemin à adapter)

function Logement() {
  // 1. On extrait le paramètre "id" de l'URL
  const { id } = useParams()

  // 2. On cherche le logement qui possède cet ID précis
  const logement = listeLogements.find((item) => item.id === id)

  // 3. Cas de sécurité : si l'ID dans l'URL ne correspond à aucun logement
  if (!logement) {
    return <p>Logement introuvable ou ID incorrect.</p>
  }

  // 4. Si le logement existe, on affiche ses informations
  return (
    <div className="logement-container">
      <h1>{logement.title}</h1>
      <p>{logement.location}</p>
      <img src={logement.cover} alt={logement.title} />
      <p>{logement.description}</p>
      
     
      <h3>Équipements :</h3>
      <ul>
        {logement.equipments.map((equip, index) => (
          <li key={index}>{equip}</li>
        ))}
      </ul>
    </div>
  );
}

export default Logement