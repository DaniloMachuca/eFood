import Tag from '../Tag'
import star from '../../assets/images/estrela.svg'
import * as S from './styles'
import useMediaQuery from '../../utils/MediaQuery'

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
  const getDescriptionMobile = (description: string) => {
    if (description.length > 95) {
      return description.slice(0, 95) + '...'
    }
    return description
  }
  const isSmallScreen = useMediaQuery('(max-width: 768px)')

  return (
    <S.CardContainer>
      <div>
        <img src={image} alt={title} />
        <S.Infos>
          {isFirst && <Tag>Destaque da semana</Tag>}
          <Tag>{infos}</Tag>
        </S.Infos>
        <S.CardHeader>
          <h3>{title}</h3>
          <S.Rank>
            <p>{rank}</p>
            <img src={star} alt="star" />
          </S.Rank>
        </S.CardHeader>
      </div>
      <S.TextContainer>
        {isSmallScreen ? (
          <S.Description>{getDescriptionMobile(description)}</S.Description>
        ) : (
          <S.Description>{description}</S.Description>
        )}
      </S.TextContainer>
      <S.TextContainer>
        <S.LearnMore to={`/restaurant/${id}`}>Saiba mais</S.LearnMore>
      </S.TextContainer>
    </S.CardContainer>
  )
}

export default RestaurantCard
