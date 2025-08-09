import Hero from '../../components/Hero'
import RestaurantList from '../../components/RestaurantList'

import { Restaurantes } from '../../Restaurants'

const Home = () => {
  return (
    <>
      <Hero />
      <div className="container">
        <RestaurantList restaurants={Restaurantes} />
      </div>
    </>
  )
}

export default Home
