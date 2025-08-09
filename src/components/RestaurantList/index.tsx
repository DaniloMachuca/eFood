import * as S from './styles'
import RestaurantCard from '../RestaurantCard'
import Restaurant from '../../models/Restaurant'

type Props = {
  restaurants: Restaurant[]
}

const RestaurantList = ({ restaurants }: Props) => {
  return (
    <S.Container>
      <S.List>
        {restaurants.map((r) => {
          return (
            <RestaurantCard
              description={r.description}
              id={r.id}
              image={r.image}
              infos={r.infos}
              key={r.id}
              rank={r.rank}
              title={r.title}
              link={r.link}
            />
          )
        })}
      </S.List>
    </S.Container>
  )
}

export default RestaurantList
