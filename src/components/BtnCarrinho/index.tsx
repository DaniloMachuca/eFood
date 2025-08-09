import { JSX } from 'react'
import * as S from './styles'

type Props = {
  children: JSX.Element | string
}

const BtnCarrinho = ({ children }: Props) => {
  return <S.BtnCarrinho>{children}</S.BtnCarrinho>
}

export default BtnCarrinho
