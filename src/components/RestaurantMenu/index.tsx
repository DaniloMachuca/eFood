import * as S from './styles'
import { RestaurantIten } from '../../pages/Home'
import BtnCart from '../BtnCart'
import { useState } from 'react'
import closeImg from '../../assets/images/close.png'

type Props = {
  produtos: RestaurantIten[]
}

interface ModalState extends RestaurantIten {
  isVisible: boolean
}

const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const RestaurantMenu = ({ produtos }: Props) => {
  const [Modal, setModal] = useState<ModalState>({
    foto: '',
    preco: 0,
    id: 0,
    nome: '',
    descricao: '',
    porcao: '',
    isVisible: false
  })

  const closeModal = () => {
    setModal({
      foto: '',
      preco: 0,
      id: 0,
      nome: '',
      descricao: '',
      porcao: '',
      isVisible: false
    })
  }

  return (
    <>
      <S.Container>
        <S.List>
          {produtos.map((produto) => {
            return (
              <S.CardContainer key={produto.id}>
                <div>
                  <img src={produto.foto} alt={produto.nome} />
                  <S.Title>{produto.nome}</S.Title>
                </div>
                <S.Description>{produto.descricao}</S.Description>
                <BtnCart
                  onClick={() => {
                    setModal({
                      foto: produto.foto,
                      preco: produto.preco,
                      id: produto.id,
                      nome: produto.nome,
                      descricao: produto.descricao,
                      porcao: produto.porcao,
                      isVisible: true
                    })
                  }}
                >
                  Adicionar ao carrinho
                </BtnCart>
              </S.CardContainer>
            )
          })}
        </S.List>
      </S.Container>
      <S.Modal className={Modal.isVisible ? 'visivel' : ''}>
        <S.ModalContent>
          <span onClick={closeModal}>
            <img src={closeImg} alt="fechar" />
          </span>
          <S.ModalContainer>
            <img src={Modal.foto} alt={Modal.nome} />
            <div>
              <h4>{Modal.nome}</h4>
              <p>
                {Modal.descricao} <br />
                <br /> Serve: {Modal.porcao}
              </p>
              <BtnCart>
                Adicionar ao carrinho - {formataPreco(Modal.preco)}
              </BtnCart>
            </div>
          </S.ModalContainer>
        </S.ModalContent>
        <div className="overlay" onClick={closeModal}></div>
      </S.Modal>
    </>
  )
}

export default RestaurantMenu
