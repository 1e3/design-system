import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'
import { arrayOf, shape } from 'prop-types'

const Nav = styled.div(
  () => css`
    min-width: 250px;
    padding: 5 4;
  `,
)

const NavItem = styled.div(
  () => css`
    min-width: 250px;
    padding: 2 3;
  `,
)

const Navigation = ({ items }) => {
  return (
    <Nav as="nav">
      {items.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <NavItem key={node.fields.slug}>
            <Link to={node.fields.slug}>{title}</Link>
          </NavItem>
        )
      })}
    </Nav>
  )
}

Navigation.propTypes = {
  items: arrayOf(shape({})).isRequired,
}

export default Navigation
