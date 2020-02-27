import React from 'react'
import { node, shape } from 'prop-types'
import { ThemeProvider } from '@xstyled/styled-components'
import ReactFontLoader from 'react-font-loader'

import GlobalStyle from './GlobalStyle'
import defaultTheme from './theme'

const Provider = ({ children, theme }) => (
  <>
    <ThemeProvider theme={theme}>
      <ReactFontLoader
        fonts={[{ name: theme.fonts.textFontFamily }, { name: theme.fonts.headingFontFamily }]}
      />
      <GlobalStyle fontFamily={theme.fonts.textFontFamily} />
      {children}
    </ThemeProvider>
  </>
)

Provider.propTypes = {
  children: node.isRequired,
  theme: shape({}),
}

Provider.defaultProps = {
  theme: defaultTheme,
}

export default Provider
