import { useParams } from 'react-router-dom'

import { useGetRestaurantPageQuery } from '../../services/api'

import RestaurantHeader from '../../components/RestaurantHeader'
import Banner from '../../components/Banner'
import RestaurantMenu from '../../components/RestaurantMenu'
import Cart from '../../components/Cart'
import Loader from '../../components/Loader'

const Perfil = () => {
  const { id } = useParams()

  const {
    data: Restaurant,
    isLoading,
    isSuccess
  } = useGetRestaurantPageQuery(Number(id))

  const RestaurantData = () => {
    const emptyArray: Restaurants = {
      id: 0,
      avaliacao: 0,
      capa: '',
      cardapio: [
        { descricao: '', foto: '', id: 0, nome: '', porcao: '', preco: 0 }
      ],
      descricao: '',
      destacado: '',
      tipo: '',
      titulo: ''
    }
    if (isSuccess) {
      return Restaurant
    } else {
      return emptyArray
    }
  }

  return (
    <>
      <Cart />
      <RestaurantHeader />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Banner
            infos={RestaurantData().tipo}
            name={RestaurantData().titulo}
            image={RestaurantData().capa}
          />
          <div className="container">
            <RestaurantMenu produtos={RestaurantData().cardapio} />
          </div>
        </>
      )}
    </>
  )
}

export default Perfil
