import { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#FFFFFF',
  salmon: '#E66767',
  beige: '#FFEBD9',
  almostWhite: '#FFF8F2'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
  }

  body {
    background-color: ${colors.almostWhite};
    color: ${colors.salmon};
  }

  .container{
    max-width: 1024px;
    margin: 0 auto;
    width: 100%;
  }
`
