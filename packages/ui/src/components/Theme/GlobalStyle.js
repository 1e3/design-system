import { createGlobalStyle, css } from '@xstyled/styled-components'

const GlobalStyle = createGlobalStyle`
  ${({ fontFamily }) => css`
    html {
      box-sizing: border-box;
      font-size: 16px;
    }

    *,
    *:before,
    *:after {
      box-sizing: inherit;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    body,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    ol,
    ul {
      margin: 0;
      padding: 0;
      font-weight: normal;
    }

    ol,
    ul {
      list-style: none;
    }

    img {
      max-width: 100%;
      height: auto;
    }

    body {
      font-family: ${fontFamily};
    }
  `}
`

export default GlobalStyle
