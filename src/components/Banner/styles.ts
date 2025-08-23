import styled from 'styled-components'
import { colors } from '../../styles'

export const Background = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 280px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }
`
export const Infos = styled.div`
  color: ${colors.white};
  span {
    font-size: 32px;
    font-weight: 100;
  }

  padding-top: 25px;
  padding-bottom: 156px;
`

export const TextContainer = styled.div`
  position: relative;
  height: 100%;
  color: ${colors.white};
  h2 {
    font-size: 32px;
    padding-bottom: 32px;
  }
`
