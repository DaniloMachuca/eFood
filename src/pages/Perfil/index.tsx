import Header from '../../components/Header'
import RestaurantPage from '../../models/RestaurantPage'
import Banner from '../../components/Banner'
import ProductList from '../../components/ProductList'

type Props = {
  restaurant: RestaurantPage
}

const Perfil = ({ restaurant }: Props) => {
  return (
    <>
      <Header />
      <Banner
        infos={restaurant.infos}
        name={restaurant.name}
        image={restaurant.background}
      />
      <div className="container">
        <ProductList produtos={restaurant.itens} />
      </div>
    </>
  )
}

export default Perfil
