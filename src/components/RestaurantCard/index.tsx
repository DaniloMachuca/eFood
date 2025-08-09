import Tag from '../Tag'
import star from '../../assets/images/estrela.svg'
import * as S from './styles'
import { Link } from 'react-router-dom'

type Props = {
  title: string
  description: string
  image: string
  infos: string[]
  rank: number
  id: number
  link: string
}

const RestaurantCard = ({
  title,
  description,
  image,
  infos,
  id,
  rank,
  link
}: Props) => {
  return (
    <S.CardContainer>
      <img src={image} alt={title} />
      <S.Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </S.Infos>
      <S.TextContainer>
        <S.CardHeader>
          <h3>{title}</h3>
          <S.Nota>
            <p>{rank}</p>
            <img src={star} alt="star" />
          </S.Nota>
        </S.CardHeader>
        <S.Description>{description}</S.Description>
        <Tag size="big">
          <Link to={link}>Saiba mais</Link>
        </Tag>
      </S.TextContainer>
    </S.CardContainer>
  )
}

export default RestaurantCard
