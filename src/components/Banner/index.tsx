import * as S from './styles'

type Props = {
  infos: string[]
  name: string
  image: string
}

const Banner = ({ infos, name, image }: Props) => {
  return (
    <S.Background style={{ backgroundImage: `url(${image})` }}>
      <S.TextContainer className="container">
        <S.Infos>
          {infos.map((info) => (
            <span>{info}</span>
          ))}
        </S.Infos>
        <h2>{name}</h2>
      </S.TextContainer>
    </S.Background>
  )
}

export default Banner
