import Header from '../../components/Header'
import RestaurantList from '../../components/RestaurantList'
import { useGetRestaurantsQuery } from '../../services/api'

export interface RestaurantIten {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurants = {
  id: number
  titulo: string
  destacado: string
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: [
    {
      foto: string
      preco: number
      id: number
      nome: string
      descricao: string
      porcao: string
    }
  ]
}

const Home = () => {
  const { data: Restaurants } = useGetRestaurantsQuery()

  if (!Restaurants) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <Header />
      <div className="container">
        <RestaurantList restaurants={Restaurants} />
      </div>
    </>
  )
}

export default Home
