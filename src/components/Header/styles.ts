import styled from 'styled-components'
import { colors } from '../../styles'
import { Link } from 'react-router-dom'

export const HeaderList = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 64px 0;
  color: ${colors.salmon};
  img {
    margin-left: 87px;
  }
`
export const Links = styled(Link)`
  text-decoration: none;
  color: ${colors.salmon};
  font-weight: bold;
  font-size: 18px;
`
