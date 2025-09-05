import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'

import { close, remove, clear } from '../../store/reducers/cart'
import { RootReducer } from '../../store'
import { priceFormater, getTotalPrice } from '../../utils'
import { usePurchaseMutation } from '../../services/api'

import trashBin from '../../assets/images/lixeira.png'
import BtnCart from '../BtnCart'
import * as S from './styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [payingOrDelivery, setPayingOrDelivery] = useState(false)
  const [checkout, setCheckout] = useState(false)
  const [purchase, { isSuccess, isLoading, data }] = usePurchaseMutation()

  const totalPrice = getTotalPrice(items)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const closeCart = () => {
    dispatch(close())
  }

  const form = useFormik({
    initialValues: {
      //Dados de Entrega
      deliveryName: '',
      address: '',
      city: '',
      zipCode: '',
      number: '',
      complement: '',

      //Dados de pagamento
      cardOwner: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      //Dados de Entrega

      deliveryName: Yup.string()
        .min(3, 'O campo deve ter no mínimo 3 caractérios')
        .required('o campo é obrigatório'),
      address: Yup.string()
        .min(3, 'O campo deve ter no mínimo 3 caractérios')
        .required('o campo é obrigatório'),
      city: Yup.string()
        .min(3, 'O campo deve ter no mínimo 3 caractérios')
        .required('o campo é obrigatório'),
      zipCode: Yup.string()
        .min(9, 'O campo deve ter no mínimo 8 caractérios')
        .max(9, 'O campo deve ter no máximo 8 caractérios')
        .required('o campo é obrigatório'),
      number: Yup.number().required('o campo é obrigatório'),
      complement: Yup.string().min(
        5,
        'O campo deve ter no mínimo 5 caractérios'
      ),

      //Dados de Pagamento
      cardOwner: Yup.string()
        .min(3, 'O campo deve ter no mínimo 3 caractérios')
        .required('o campo é obrigatório'),
      cardNumber: Yup.string()
        .min(19, 'O campo deve ter no mínimo 19 caractérios')
        .max(19, 'O campo deve ter no máximo 19 caractérios')
        .required('o campo é obrigatório'),
      cardCode: Yup.string()
        .min(3, 'O campo deve ter no mínimo 3 caractérios')
        .max(3, 'O campo deve ter no máximo 3 caractérios')
        .required('o campo é obrigatório'),
      expiresMonth: Yup.number()
        .min(1, 'digite uma mês válido')
        .max(12, 'digite uma mês válido')
        .required('o campo é obrigatório'),
      expiresYear: Yup.number().required('o campo é obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        products: items.map((item) => ({
          id: item.id,
          price: item.preco as number
        })),
        delivery: {
          receiver: values.deliveryName,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.zipCode,
            number: Number(values.number),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardOwner,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        }
      })
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  const checkDeliveryInputs = () => {
    const deliveryName =
      checkInputHasError('deliveryName') || !('deliveryName' in form.touched)
    const address =
      checkInputHasError('address') || !('address' in form.touched)
    const city = checkInputHasError('city') || !('city' in form.touched)
    const zipCode =
      checkInputHasError('zipCode') || !('zipCode' in form.touched)
    const number = checkInputHasError('number') || !('number' in form.touched)
    const complement =
      checkInputHasError('complement') || !('complement' in form.touched)

    if (deliveryName || address || city || zipCode || number || complement) {
      return alert('preencha os campos corretaments')
    } else {
      setPayingOrDelivery(true)
    }
  }

  const clearAll = () => {
    setCheckout(false)
    setPayingOrDelivery(false)
    closeCart()
    dispatch(clear())
    navigate('/')
    window.location.reload()
  }

  return (
    <>
      <S.Overlay className={isOpen ? '' : 'is-closed'} />
      <S.CartContainer className={isOpen ? 'is-open' : ''}>
        <div onClick={isSuccess ? clearAll : closeCart} />
        <S.Sidebar>
          {checkout === false && (
            <>
              {items.length > 0 ? (
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
                    <strong>{priceFormater(totalPrice)}</strong>
                  </S.TextContainer>
                  <BtnCart
                    id="testIdBtnCheckout"
                    onClick={() => setCheckout(true)}
                  >
                    Continuar com a entrega
                  </BtnCart>
                </>
              ) : (
                <>
                  <S.TextContainer className="flex">
                    <h3>
                      O seu carrinho está <span>vazio</span>!
                    </h3>
                    <p>
                      Adicione itens ao seu carrinho para continuar a compra
                    </p>
                  </S.TextContainer>
                  <BtnCart onClick={closeCart}>Ir para compras</BtnCart>
                </>
              )}
            </>
          )}
          {checkout && !isSuccess && (
            <>
              <form onSubmit={form.handleSubmit}>
                {payingOrDelivery ? (
                  <>
                    <h3>
                      Pagamento - Valor a pagar {priceFormater(totalPrice)}
                    </h3>
                    <S.Imputs>
                      <S.Row>
                        <S.ImputGroup>
                          <label htmlFor="cardOwner">Nome no cartão</label>
                          <input
                            id="cardOwner"
                            name="cardOwner"
                            value={form.values.cardOwner}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={
                              checkInputHasError('cardOwner') ? 'error' : ''
                            }
                            type="text"
                          />
                        </S.ImputGroup>
                      </S.Row>
                      <S.Row>
                        <S.ImputGroup>
                          <label htmlFor="cardNumber">Número do cartão</label>
                          <input
                            id="cardNumber"
                            name="cardNumber"
                            value={form.values.cardNumber}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={
                              checkInputHasError('cardNumber') ? 'error' : ''
                            }
                            type="text"
                          />
                        </S.ImputGroup>
                        <S.ImputGroup $maxWidth="88px">
                          <label htmlFor="cardCode">CVV</label>
                          <input
                            id="cardCode"
                            name="cardCode"
                            value={form.values.cardCode}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={
                              checkInputHasError('cardCode') ? 'error' : ''
                            }
                            type="text"
                          />
                        </S.ImputGroup>
                      </S.Row>
                      <S.Row>
                        <S.ImputGroup $maxWidth="155px">
                          <label htmlFor="expiresMonth">
                            Mês de vencimento
                          </label>
                          <input
                            id="expiresMonth"
                            name="expiresMonth"
                            value={form.values.expiresMonth}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={
                              checkInputHasError('expiresMonth') ? 'error' : ''
                            }
                            type="number"
                          />
                        </S.ImputGroup>
                        <S.ImputGroup $maxWidth="155px">
                          <label htmlFor="expiresYear">Ano de vencimento</label>
                          <input
                            id="expiresYear"
                            name="expiresYear"
                            value={form.values.expiresYear}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={
                              checkInputHasError('expiresYear') ? 'error' : ''
                            }
                            type="number"
                          />
                        </S.ImputGroup>
                      </S.Row>
                    </S.Imputs>
                    <BtnCart
                      id="testIdBtnSubmit"
                      type={isLoading ? 'button' : 'submit'}
                      disabled={isLoading}
                    >
                      {isLoading
                        ? 'Finalizando o pedido...'
                        : 'Finalizar Pedido'}
                    </BtnCart>
                    <BtnCart
                      type="button"
                      onClick={() => setPayingOrDelivery(false)}
                    >
                      Voltar para edição de endereço
                    </BtnCart>
                  </>
                ) : (
                  <>
                    <h3>Entrega</h3>
                    <S.Imputs>
                      <S.Row>
                        <S.ImputGroup>
                          <label htmlFor="deliveryName">Quem irá receber</label>
                          <input
                            id="deliveryName"
                            name="deliveryName"
                            value={form.values.deliveryName}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={
                              checkInputHasError('deliveryName') ? 'error' : ''
                            }
                            type="text"
                          />
                        </S.ImputGroup>
                      </S.Row>
                      <S.Row>
                        <S.ImputGroup>
                          <label htmlFor="address">Endereço</label>
                          <input
                            id="address"
                            name="address"
                            value={form.values.address}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={
                              checkInputHasError('address') ? 'error' : ''
                            }
                            type="text"
                          />
                        </S.ImputGroup>
                      </S.Row>
                      <S.Row>
                        <S.ImputGroup>
                          <label htmlFor="city">Cidade</label>
                          <input
                            id="city"
                            name="city"
                            value={form.values.city}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={
                              checkInputHasError('city') ? 'error' : ''
                            }
                            type="text"
                          />
                        </S.ImputGroup>
                      </S.Row>
                      <S.Row>
                        <S.ImputGroup>
                          <label htmlFor="zipCode">Cep</label>
                          <input
                            id="zipCode"
                            name="zipCode"
                            value={form.values.zipCode}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={
                              checkInputHasError('zipCode') ? 'error' : ''
                            }
                            type="text"
                          />
                        </S.ImputGroup>
                        <S.ImputGroup>
                          <label htmlFor="number">Número</label>
                          <input
                            id="number"
                            name="number"
                            value={form.values.number}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={
                              checkInputHasError('number') ? 'error' : ''
                            }
                            type="number"
                          />
                        </S.ImputGroup>
                      </S.Row>
                      <S.Row>
                        <S.ImputGroup>
                          <label htmlFor="city">Complemento (opcional)</label>
                          <input
                            id="complement"
                            name="complement"
                            value={form.values.complement}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={
                              checkInputHasError('complement') ? 'error' : ''
                            }
                            type="text"
                          />
                        </S.ImputGroup>
                      </S.Row>
                    </S.Imputs>
                    <BtnCart
                      type="button"
                      id="testIdBtnPayment"
                      onClick={checkDeliveryInputs}
                    >
                      Continuar com o pagamento
                    </BtnCart>
                    <BtnCart type="button" onClick={() => setCheckout(false)}>
                      Voltar ao carrinho
                    </BtnCart>
                  </>
                )}
              </form>
            </>
          )}
          {isSuccess && (
            <S.SuccessMsg>
              <h3>Pedido Realizado {data.orderId}</h3>
              <p>
                Estamos felizes em informar que seu pedido já está em processo
                de preparação e, em breve, será entregue no endereço fornecido.
                <br />
                <br />
                Gostaríamos de ressaltar que nossos entregadores não estão
                autorizados a realizar cobranças extras.
                <br />
                <br />
                Lembre-se da importância de higienizar as mãos após o
                recebimento do pedido, garantindo assim sua segurança e
                bem-estar durante a refeição.
                <br />
                <br />
                Esperamos que desfrute de uma deliciosa e agradável experiência
                gastronômica. Bom apetite!
              </p>
              <BtnCart onClick={clearAll}>Concluir</BtnCart>
            </S.SuccessMsg>
          )}
        </S.Sidebar>
      </S.CartContainer>
    </>
  )
}

export default Cart
