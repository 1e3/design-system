import React from 'react'
import { arrayOf, node, shape } from 'prop-types'
import styled, { css } from 'styled-components'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Column, Grid, ThemeProvider } from '@1e3/ui'

import Navigation from './Navigation'

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
      <Grid columns="auto 1fr">
        <Column>
          <Navigation items={nav} />
        </Column>
        <Column>
          <Main>
            <MDXRenderer>{body}</MDXRenderer>
          </Main>
        </Column>
      </Grid>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  body: node.isRequired,
  nav: arrayOf(shape({})).isRequired,
}

export default Layout
