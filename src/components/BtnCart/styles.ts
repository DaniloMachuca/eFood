import styled from 'styled-components'
import { colors } from '../../styles'

export const BtnCart = styled.button`
  padding: 8px 0;
  width: 100%;
  background-color: ${colors.beige};
  color: ${colors.salmon};
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 14px;
  transition: all 0.2s ease-in-out;
  border: 3px solid ${colors.salmon};

  &:hover {
    border: 3px solid ${colors.beige};
    color: ${colors.beige};
    background-color: ${colors.salmon};
  }
`
