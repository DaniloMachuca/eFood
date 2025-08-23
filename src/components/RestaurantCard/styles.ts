import styled from 'styled-components'
import { colors } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { Link } from 'react-router-dom'

export const CardContainer = styled.li`
  display: flex-box;
  flex-direction: column;
  border: 1px solid ${colors.salmon};
  > img {
    width: 100%;
    max-height: 200px;
    object-fit: cover;
  }
  position: relative;
  background-color: ${colors.white};
`

export const TextContainer = styled.div`
  padding: 8px;
`
export const Rank = styled.div`
  display: flex;
  gap: 4px;
  font-weight: bold;
`

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  font-size: 18px;
  text-align: center;
`
export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 16px;
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;

  ${TagContainer} {
    margin-left: 16px;
  }
`

export const LearnMore = styled(Link)`
  border: 3px solid ${colors.white};
  transition: all 0.2s ease-in-out;
  font-weight: bold;
  padding: 4px 6px;
  display: inline-block;
  background-color: ${colors.salmon};
  color: ${colors.beige};
  font-size: 14px;
  text-decoration: none;

  &:hover {
    border: 3px solid ${colors.salmon};
    background-color: ${colors.beige};
    cursor: pointer;
    color: ${colors.salmon};
  }
`
