import React from 'react'
import { arrayOf, node, shape } from 'prop-types'
import styled, { css } from '@xstyled/styled-components'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { ThemeProvider } from '@1e3/ui'

import Navigation from './Navigation'

const StyledLayout = styled.div(
  ({ theme }) =>
    css`
      display: flex;
      min-height: 100vh;
    `,
)

const Main = styled.main(
  ({
    theme: {
      colors: { gray },
    },
  }) =>
    css`
      flex-grow: 1;
      width: 100%;
      background-color: ${gray.light};
      padding: 5;
    `,
)

const Layout = ({ body, nav }) => {
  return (
    <ThemeProvider>
      <StyledLayout>
        <Navigation items={nav} />
        <Main>
          <MDXRenderer>{body}</MDXRenderer>
        </Main>
      </StyledLayout>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  body: node.isRequired,
  nav: arrayOf(shape({})).isRequired,
}

export default Layout
