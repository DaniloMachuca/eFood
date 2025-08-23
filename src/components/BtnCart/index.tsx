import { JSX } from 'react'
import * as S from './styles'

type Props = {
  children: JSX.Element | string | string[]
  onClick?: () => void
}

const BtnCart = ({ children, onClick }: Props) => {
  return <S.BtnCart onClick={onClick}>{children}</S.BtnCart>
}

export default BtnCart
