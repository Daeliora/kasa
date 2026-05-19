import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import Housing from '../pages/Housing/Housing'
import Error from '../pages/Error/Error'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/housing/:id" element={<Housing />} />

        {/* page 404 */}
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router