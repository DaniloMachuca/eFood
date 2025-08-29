import RestaurantHeader from '../../components/RestaurantHeader'
import Banner from '../../components/Banner'
import RestaurantMenu from '../../components/RestaurantMenu'
import Cart from '../../components/Cart'

import { useParams } from 'react-router-dom'
import { useGetRestaurantPageQuery } from '../../services/api'

const Perfil = () => {
  const { id } = useParams()

  const { data: Restaurant } = useGetRestaurantPageQuery(Number(id))

  if (!Restaurant) {
    return <h1></h1>
  }

  return (
    <>
      <Cart />
      <RestaurantHeader />
      <Banner
        infos={Restaurant.tipo}
        name={Restaurant.titulo}
        image={Restaurant.capa}
      />
      <div className="container">
        <RestaurantMenu produtos={Restaurant.cardapio} />
      </div>
    </>
  )
}

export default Perfil
