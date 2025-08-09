import styled from 'styled-components'
import { colors } from '../../styles'

export const CardContainer = styled.li`
  padding: 8px;
  background-color: ${colors.salmon};
  color: ${colors.beige};
`

export const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
  padding: 8px 0;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 8px;
`
