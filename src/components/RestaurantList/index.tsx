import * as S from './styles'
import RestaurantCard from '../RestaurantCard'
import type { Restaurants } from '../../pages/Home'

type Props = {
  restaurants: Restaurants[]
}

const orderByRank = (a: Restaurants, b: Restaurants) =>
  b.avaliacao - a.avaliacao

const RestaurantList = ({ restaurants }: Props) => {
  return (
    <S.Container>
      <S.List>
        {restaurants.sort(orderByRank).map((r, index) => {
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
