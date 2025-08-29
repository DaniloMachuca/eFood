import { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#FFFFFF',
  salmon: '#E66767',
  beige: '#FFEBD9',
  DarkerBeige: '#af937bff',
  almostWhite: '#FFF8F2',
  red: '#d01b0eff'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px',
  mobile: '480px'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
  line-height: 100%;

  }

  body {
    background-color: ${colors.almostWhite};
    color: ${colors.salmon};
  }

  .container{
    max-width: 80%;
    margin: 0 auto;
    width: 100%;

    @media (min-width: ${breakpoints.desktop}) {
      max-width: 960px;
    }
  }
`
