import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
  }

  body {
    font-family: ${props => props.theme.font.family};
    font-size: ${props => props.theme.font.sizes.medium};
  }

  button {
    background: transparent;
    border: 0;
    cursor: pointer;
  }
`

export default GlobalStyles
