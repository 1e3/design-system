import React from 'react'
import { node, number, oneOf, oneOfType, string } from 'prop-types'
import styled, { css } from 'styled-components'

import Box from '../Box'

const StyledGrid = styled(Box)(
  ({ align, columns, gap, justify, theme: { scale } }) =>
    css`
      ${align && `align-items: ${align};`}
      display: grid;
      grid-template-columns: ${typeof columns === 'string'
        ? columns
        : css`repeat(${columns}, 1fr)`};

      ${gap && `grid-gap: ${typeof gap === 'number' ? scale(gap) : gap};`}
      ${justify && `justify-items: ${justify};`}
    `,
)

const Grid = ({ children, columns, gap, ...props }) => (
  <StyledGrid columns={columns} gap={gap} {...props}>
    {children}
  </StyledGrid>
)

Grid.propTypes = {
  align: oneOf(['center', 'end', 'start']),
  children: node.isRequired,
  columns: oneOfType([number, string]),
  justify: oneOf(['center', 'end', 'start']),
  gap: oneOfType([number, string]),
}

Grid.defaultProps = {
  align: null,
  columns: 1,
  justify: null,
  gap: 0,
}

Grid.displayName = 'Grid'

export default Grid
