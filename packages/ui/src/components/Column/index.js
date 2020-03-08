import { number } from 'prop-types'
import styled, { css } from 'styled-components'

import Box from '../Box'

const Column = styled(Box)(
  ({ span, start }) => css`
    ${span
      ? css`
          grid-column-end: span ${span};
        `
      : ''};

    ${start
      ? css`
          grid-column-start: ${start};
        `
      : ''};
  `,
)

Column.propTypes = {
  span: number,
  start: number,
}

Column.defaultProps = {
  span: null,
  start: null,
}

export default Column
