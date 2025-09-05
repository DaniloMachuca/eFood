import { JSX } from 'react'
import * as S from './styles'

type Props = {
  children: JSX.Element | string | string[]
  onClick?: () => void
  type?: 'button' | 'submit'
  id?: string
  disabled?: boolean
}

const BtnCart = ({ children, onClick, type, id, disabled }: Props) => {
  return (
    <S.BtnCart id={id} disabled={disabled} type={type} onClick={onClick}>
      {children}
    </S.BtnCart>
  )
}

export default BtnCart
