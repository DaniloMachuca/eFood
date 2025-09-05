import RestaurantCard from '../RestaurantCard'
import * as S from './styles'

type Props = {
  restaurants: Restaurants[]
  isLoading: boolean
}

const RestaurantList = ({ restaurants }: Props) => {
  const orderByRank = (a: Restaurants, b: Restaurants) =>
    b.avaliacao - a.avaliacao

  const restaurantsCopy = [...restaurants]

  return (
    <S.Container>
      <S.List>
        {restaurantsCopy.sort(orderByRank).map((r, index) => {
          return (
            <RestaurantCard
              description={r.descricao}
              id={r.id}
              image={r.capa}
              infos={r.tipo}
              key={r.id}
              rank={r.avaliacao}
              title={r.titulo}
              isFirst={index === 0}
            />
          )
        })}
      </S.List>
    </S.Container>
  )
}

export default RestaurantList
