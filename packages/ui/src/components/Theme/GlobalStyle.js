import { createGlobalStyle, css } from '@xstyled/styled-components'

const GlobalStyle = createGlobalStyle`
  ${({
    theme: {
      fonts: { bodyFontFamily, headingFontFamily },
    },
  }) => css`
    @import url('https://fonts.googleapis.com/css?family=${bodyFontFamily}&display=swap');
    @import url('https://fonts.googleapis.com/css?family=${headingFontFamily}&display=swap');

    body {
      font-family: ${bodyFontFamily};
    }
  `}
`

export default GlobalStyle
