import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Perfil from './pages/Perfil'
import { RestaurantesPages } from './Restaurants'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    {RestaurantesPages.map((page) => (
      <Route
        key={page.link}
        path={page.link}
        element={<Perfil restaurant={page} />}
      />
    ))}
  </Routes>
)

export default Rotas
