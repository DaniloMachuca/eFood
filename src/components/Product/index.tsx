import * as S from './styles'
import BtnCarrinho from '../BtnCarrinho'

type Props = {
  description: string
  image: string
  name: string
}

const Product = ({ description, image, name }: Props) => {
  return (
    <S.CardContainer>
      <img src={image} alt={name} />
      <S.Title>{name}</S.Title>
      <S.Description>{description}</S.Description>
      <BtnCarrinho>Adicionar ao carrinho</BtnCarrinho>
    </S.CardContainer>
  )
}

export default Product
