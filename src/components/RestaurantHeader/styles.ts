import styled from 'styled-components'
import { colors } from '../../styles'
import { Link } from 'react-router-dom'

export const HeaderList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  padding: 64px 0;
  color: ${colors.salmon};

  img {
    margin: 0 auto;
  }
`
export const Links = styled(Link)`
  text-decoration: none;
  color: ${colors.salmon};
  font-weight: bold;
  font-size: 18px;s
`
