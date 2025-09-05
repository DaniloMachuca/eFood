import Header from '../../components/Header'
import Loader from '../../components/Loader'
import RestaurantList from '../../components/RestaurantList'
import { useGetRestaurantsQuery } from '../../services/api'

const Home = () => {
  const { data: Restaurants, isLoading, isSuccess } = useGetRestaurantsQuery()

  const RestaurantData = () => {
    const emptyArray: Restaurants[] = []
    if (isSuccess) {
      return Restaurants
    } else {
      return emptyArray
    }
  }

  return (
    <>
      <Header />
      <div className="container">
        <RestaurantList isLoading restaurants={RestaurantData()} />
        {isLoading && <Loader />}
      </div>
    </>
  )
}

export default Home
