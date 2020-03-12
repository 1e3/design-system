import React from 'react'
import { node, number, string } from 'prop-types'
import styled, { css } from 'styled-components'

import Box from '../Box'

const StyledText = styled(Box)(
  ({ fontSize, theme: { fonts, scale } }) => css`
      font-family: '${fonts.body}', sans-serif;
      font-size: ${scale(fontSize)};
    `,
)

const Text = ({ as, children, fontSize }) => (
  <StyledText as={as} fontSize={fontSize}>
    {children}
  </StyledText>
)

Text.propTypes = {
  children: node.isRequired,
  as: string,
  fontSize: number,
}

Text.defaultProps = {
  as: 'p',
  fontSize: 2,
}

Text.displayName = 'Text'

export default Text
