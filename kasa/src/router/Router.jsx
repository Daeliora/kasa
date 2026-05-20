import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '../pages/Home/Home.jsx'      
import About from '../pages/About/About.jsx'    
import Error from '../pages/Error/Error.jsx'
import Header from '../components/Header/Header.jsx'
import Footer from '../components/Footer/Footer.jsx'
import Logement from '../components/Logement/Logement.jsx'

import MainLayout from '../layouts/MainLayout';

function AppRouter() {
  return (
    <BrowserRouter>
    
      <Header /> {/* <-- Il s'affichera tout en haut de CHAQUE page */}
      
      <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Cette route intercepte n'importe quel ID entré après /logement/ */}
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="*" element={<Error />} />
      </Routes>
      </main>

      <Footer /> {/* <-- Il s'affichera tout en bas de CHAQUE page */}

    </BrowserRouter>
  )
}

export default AppRouter;