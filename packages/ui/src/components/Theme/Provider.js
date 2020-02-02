import React from 'react'
import { node, shape } from 'prop-types'
import { ThemeProvider } from '@xstyled/styled-components'

import GlobalStyle from './GlobalStyle'
import defaultTheme from './theme'

const Provider = ({ children, theme }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
)

Provider.propTypes = {
  children: node.isRequired,
  theme: shape({}),
}

Provider.defaultProps = {
  theme: defaultTheme,
}

export default Provider
