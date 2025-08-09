import * as S from './styles'
import { RestaurantIten } from '../../models/RestaurantPage'
import Product from '../Product'

type Props = {
  produtos: RestaurantIten[]
}

const ProductList = ({ produtos }: Props) => {
  return (
    <S.Container>
      <S.List>
        {produtos.map((produto) => {
          return (
            <Product
              description={produto.description}
              image={produto.image}
              key={produto.name}
              name={produto.name}
            />
          )
        })}
      </S.List>
    </S.Container>
  )
}

export default ProductList
