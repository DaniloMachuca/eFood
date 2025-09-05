import { BtnCart } from './../BtnCart/styles'
import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

type InputGroupProps = {
  $maxWidth?: string
}

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  transform: translateX(0);
  z-index: 1;

  &.is-closed {
    display: none;
  }
`

export const Sidebar = styled.aside`
  background-color: ${colors.salmon};
  z-index: 1;
  padding: 36px 8px 0px 8px;
  max-width: 360px;
  width: 100%;

  ${BtnCart} {
    max-width: 100%;
    width: 100%;
  }

  form {
    h3 {
      color: ${colors.beige};
      font-weight: bold;
    }
    ${BtnCart} {
      margin-bottom: 8px;
    }
  }
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  z-index: 1;
  display: flex;

  > div {
    width: 100%;
  }

  transform: translateX(100%); /* Or adjust for your desired animation */
  opacity: 0;
  transition:
    transform 0.3s ease-out,
    opacity 0.3s ease-out;

  &.is-open {
    display: flex;
    transform: translateX(0);
    opacity: 1;
  }
`

export const CartItem = styled.li`
  display: flex;
  padding: 8px 8px 12px 8px;
  background-color: ${colors.beige};
  position: relative;
  margin-bottom: 16px;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    font-size: 18px;
    margin-bottom: 16px;
    font-weight: bold;
  }

  span {
    display: block;
    font-size: 14px;
  }

  button {
    width: 16px;
    height: 16px;
    position: absolute;
    bottom: 8px;
    right: 8px;
    border: none;
    cursor: pointer;
    background-color: transparent;

    img {
      width: 16px;
      height: 16px;
      object-fit: fill;
    }
  }
`

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-block: 40px 8px;

  color: ${colors.beige};
  font-size: 14px;
  font-weight: bold;

  &.flex {
    display: flex;
    flex-direction: column;
    text-align: center;
    h3 {
      margin-bottom: 16px;
    }
    span {
      color: ${colors.red};
    }
    p {
      margin-bottom: 16px;
    }
  }
`
export const Imputs = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
  padding: 16px 0px 24px 0px;
`

export const ImputGroup = styled.div<InputGroupProps>`
  flex: auto;
  max-width: ${(props) => props.$maxWidth || 'auto'};

  label {
    font-size: 14px;
    margin-bottom: 8px;
    font-weight: bold;
    display: block;
    color: ${colors.beige};
  }

  input,
  select {
    background-color: ${colors.beige};
    height: 32px;
    padding: 0 8px;
    border: 1px solid ${colors.beige};
    width: 100%;
    color: ${colors.gray};
    font-size: 14px;
    font-weight: bold;

    &.error {
      border: 1px solid red;
    }
  }
`

export const Row = styled.div`
  display: flex;
  column-gap: 24px;
  justify-content: space-between;
  align-items: flex-end;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
  }
`

export const SuccessMsg = styled.div`
  h3 {
    font-size: 16px;
    color: ${colors.beige};
    margin-bottom: 16px;
  }
  p {
    font-size: 14px;
    line-height: 22px;
    color: ${colors.beige};
  }

  ${BtnCart} {
    margin-top: 24px;
  }
`
