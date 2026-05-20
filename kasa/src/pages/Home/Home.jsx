import React from 'react'
import logements from '../../data/logements.json'

import Banner from '../../components/Banner/Banner'
import Card from '../../components/Card/Card'

/*import bannerImage from '../../assets/banner-home.png'*/

function Home() {
  return (
    <main className="home">

      <Banner
        title="Chez vous, partout et ailleurs"
        image={bannerImage}
      />

      <section className="cards-container">

        {logements.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}

      </section>

    </main>
  )
}

export default Home