import { useDispatch, useSelector } from 'react-redux'

import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'
import useMediaQuery from '../../utils/MediaQuery'

import Logo from '../../assets/images/logo.png'
import Fundo from '../../assets/images/fundo.png'
import * as S from './styles'

const RestaurantHeader = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const isMobile = useMediaQuery('(max-width: 480px)')

  const openCart = () => {
    dispatch(open())
  }

  return (
    <div style={{ backgroundImage: `url(${Fundo})` }}>
      <div className="container">
        <S.HeaderList>
          <S.Links to={'/'}>Restaurantes</S.Links>

          <img src={Logo} alt="eFood" />

          <S.LinkCart
            onClick={openCart}
            style={isMobile ? {} : { textAlign: 'right' }}
          >
            {items.length} produto(s) no carrinho
          </S.LinkCart>
        </S.HeaderList>
      </div>
    </div>
  )
}

export default RestaurantHeader
