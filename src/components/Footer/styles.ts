import styled from 'styled-components'
import { colors } from '../../styles'

export const Footer = styled.footer`
  padding: 40px 0;
  text-align: center;
  background-color: ${colors.beige};
`
export const SocialMedias = styled.ul`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 32px;
`

export const Description = styled.p`
  color: ${colors.salmon};
  margin: 0 auto;
  margin-top: 80px;
  text-align: center;
  font-size: 10px;
  max-width: 480px;
`
