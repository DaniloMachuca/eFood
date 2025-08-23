import RestaurantHeader from '../../components/RestaurantHeader'
import Banner from '../../components/Banner'
import RestaurantMenu from '../../components/RestaurantMenu'
import { useParams } from 'react-router-dom'
import type { Restaurants } from '../Home'
import { useEffect, useState } from 'react'

const Perfil = () => {
  const { id } = useParams()

  const [Restaurant, setRestaurant] = useState<Restaurants>()

  useEffect(() => {
    fetch(`https://ebac-fake-api.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((data) => setRestaurant(data))
  }, [id])

  if (!Restaurant) {
    return <h1></h1>
  }

  return (
    <>
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
