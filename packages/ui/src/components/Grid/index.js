import React from 'react'
import { node, number, oneOfType, string } from 'prop-types'
import styled, { css } from 'styled-components'

import Box from '../Box'

const StyledGrid = styled(Box)(
  ({ columns, gap, theme: { scale } }) =>
    css`
      display: grid;
      grid-template-columns: ${typeof columns === 'string'
        ? columns
        : css`repeat(${columns}, 1fr)`};

      ${gap
        ? css`
            grid-gap: ${typeof gap === 'number' ? scale(gap) : gap};
          `
        : ''};
    `,
)

const Grid = ({ children, columns, gap }) => (
  <StyledGrid columns={columns} gap={gap}>
    {children}
  </StyledGrid>
)

Grid.propTypes = {
  children: node.isRequired,
  columns: oneOfType([number, string]),
  gap: oneOfType([number, string]),
}

Grid.defaultProps = {
  columns: 1,
  gap: 0,
}

Grid.displayName = 'Grid'

export default Grid
