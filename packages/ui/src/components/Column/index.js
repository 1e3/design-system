import React from 'react'
import { node, number } from 'prop-types'
import styled, { css } from 'styled-components'

import Box from '../Box'

const StyledColumn = styled(Box)(
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

const Column = ({ children, span, start }) => (
  <StyledColumn span={span} start={start}>
    {children}
  </StyledColumn>
)

Column.propTypes = {
  children: node.isRequired,
  span: number,
  start: number,
}

Column.defaultProps = {
  span: null,
  start: null,
}

Column.displayName = 'Column'

export default Column
