import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
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

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: repeat(1, 1fr);
    text-align: center;
    gap: 16px;
  }
`
export const Links = styled(Link)`
  text-decoration: none;
  color: ${colors.salmon};
  font-weight: bold;
  font-size: 18px;
  transition: all 0.2s ease-in-out;

  &:hover {
    font-size: 20px;
  }
`

export const LinkCart = styled.a`
  text-decoration: none;
  color: ${colors.salmon};
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    font-size: 20px;
  }
`
