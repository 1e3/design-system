import React from 'react'
import { node, number, string } from 'prop-types'
import styled, { css } from 'styled-components'

import Box from '../Box'

const StyledHeading = styled(Box)(
  ({ fontSize, theme: { fonts, scale } }) => css`
      font-family: '${fonts.heading}', sans-serif;
      font-size: ${scale(fontSize)};
    `,
)

const Heading = ({ as, children, fontSize }) => (
  <StyledHeading as={as} fontSize={fontSize}>
    {children}
  </StyledHeading>
)

Heading.propTypes = {
  as: string,
  children: node.isRequired,
  fontSize: number,
}

Heading.defaultProps = {
  as: 'h1',
  fontSize: 4,
}

Heading.displayName = 'Heading'

export default Heading
