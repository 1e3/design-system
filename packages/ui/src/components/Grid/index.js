import { number, oneOfType, string } from 'prop-types'
import styled, { css } from 'styled-components'

import Box from '../Box'

const Grid = styled(Box)(
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

Grid.propTypes = {
  columns: oneOfType([number, string]),
  gap: oneOfType([number, string]),
}

Grid.defaultProps = {
  columns: 1,
  gap: 0,
}

export default Grid
