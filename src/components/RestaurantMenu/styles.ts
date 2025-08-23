import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.section`
  padding-top: 80px;
  padding-bottom: 120px;
`
export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
`
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;

  display: none;

  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const ModalContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1024px;
  background-color: ${colors.salmon};
  color: ${colors.beige};

  span > img {
    position: absolute;
    width: 16px;
    height: 16px;
    top: 8px;
    right: 8px;
    cursor: pointer;
  }
`

export const ModalContainer = styled.div`
  display: flex;
  padding: 32px;
  > img {
    width: 280px;
    height: 280px;
    object-fit: cover;
    margin-right: 24px;
  }

  h4 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 16px;
  }
`

export const CardContainer = styled.li`
  padding: 8px;
  background-color: ${colors.salmon};
  color: ${colors.beige};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
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
