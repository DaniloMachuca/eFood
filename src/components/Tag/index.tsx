import { JSX } from 'react/jsx-runtime'
import * as S from './styles'

export type Props = {
  size?: 'small' | 'big'
  children: JSX.Element | string
}

const Tag = ({ children, size = 'small' }: Props) => {
  return <S.TagContainer size={size}>{children}</S.TagContainer>
}

export default Tag
