import Tag from '../Tag'
import star from '../../assets/images/estrela.svg'
import * as S from './styles'
import { Link } from 'react-router-dom'

type Props = {
  title: string
  description: string
  image: string
  infos: string
  rank: number
  id: number
  isFirst?: boolean
}

const RestaurantCard = ({
  title,
  description,
  image,
  infos,
  id,
  rank,
  isFirst
}: Props) => {
  return (
    <S.CardContainer>
      <img src={image} alt={title} />
      <S.Infos>
        {isFirst && <Tag>Destaque da semana</Tag>}
        <Tag>{infos}</Tag>
      </S.Infos>
      <S.TextContainer>
        <S.CardHeader>
          <h3>{title}</h3>
          <S.Rank>
            <p>{rank}</p>
            <img src={star} alt="star" />
          </S.Rank>
        </S.CardHeader>
        <S.Description>{description}</S.Description>
        <S.LearnMore to={`/restaurant/${id}`}>Saiba mais</S.LearnMore>
      </S.TextContainer>
    </S.CardContainer>
  )
}

export default RestaurantCard
