import React from 'react'
import { node, objectOf, shape, string } from 'prop-types'
import { ThemeProvider } from 'styled-components'
import ReactFontLoader from 'react-font-loader'

import GlobalStyle from './GlobalStyle'
import { generateTheme } from './theme'

const Provider = ({ children, theme }) => {
  const generatedTheme = generateTheme(theme)

  return (
    <ThemeProvider theme={generatedTheme}>
      <ReactFontLoader
        fonts={[
          { name: generatedTheme.fonts.body },
          { name: generatedTheme.fonts.heading, weight: [700] },
        ]}
      />
      <GlobalStyle fontFamily={generatedTheme.fonts.body} />
      {children}
    </ThemeProvider>
  )
}

Provider.propTypes = {
  children: node.isRequired,
  theme: shape({
    colors: objectOf(string),
    fonts: shape({
      body: string,
      heading: string,
    }),
  }),
}

Provider.defaultProps = {
  theme: {},
}

export default Provider
