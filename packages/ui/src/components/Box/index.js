import React from 'react'
import { bool, node } from 'prop-types'
import styled, { css } from 'styled-components'
import { transparentize } from 'polished'

import space from '../../utils/space'

const StyledBox = styled.div(
  ({ debug, theme: { colors } }) => css`
    ${debug
      ? css`
          background-color: ${transparentize(0.8, colors.primary.base)};
        `
      : ''}
  `,
  space,
)

const Box = ({ children, debug, ...props }) => (
  <StyledBox debug={debug} {...props}>
    {children}
  </StyledBox>
)

Box.propTypes = {
  children: node.isRequired,
  debug: bool,
}

Box.defaultProps = {
  debug: false,
}

Box.displayName = 'Box'

export default Box
