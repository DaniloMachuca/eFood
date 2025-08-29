import * as S from './styles'
import trashBin from '../../assets/images/lixeira.png'
import BtnCart from '../BtnCart'
import { useDispatch, useSelector } from 'react-redux'
import { close, remove } from '../../store/reducers/cart'
import { RootReducer } from '../../store'
import { priceFormater } from '../RestaurantMenu'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acc, i) => {
      return (acc += i.preco)
    }, 0)
  }

  return (
    <>
      <S.Overlay className={isOpen ? '' : 'is-closed'} />
      <S.CartContainer className={isOpen ? 'is-open' : ''}>
        <div onClick={closeCart} />
        <S.Sidebar>
          {items.length <= 0 ? (
            <>
              <S.TextContainer className="flex">
                <h3>
                  O seu carrinho está <span>vazio</span>!
                </h3>
                <p>Adicione itens ao seu carrinho para continuar a compra</p>
              </S.TextContainer>
              <BtnCart onClick={closeCart}>Ir para compras</BtnCart>
            </>
          ) : (
            <>
              <ul>
                {items.map((item) => (
                  <S.CartItem key={item.id}>
                    <img src={item.foto} alt="" />
                    <div>
                      <h3>{item.nome}</h3>
                      <span>{priceFormater(item.preco)}</span>
                    </div>
                    <button onClick={() => dispatch(remove(item.id))}>
                      <img src={trashBin} />
                    </button>
                  </S.CartItem>
                ))}
              </ul>
              <S.TextContainer>
                <span>Valor Total</span>
                <strong>{priceFormater(getTotalPrice())}</strong>
              </S.TextContainer>
              <BtnCart>Continuar com a entrega</BtnCart>
            </>
          )}
        </S.Sidebar>
      </S.CartContainer>
    </>
  )
}

export default Cart
