import React from 'react'
import { node, number, oneOf } from 'prop-types'
import styled, { css } from 'styled-components'

import Box from '../Box'

const StyledColumn = styled(Box)(
  ({ align, justify, span, start }) => css`
    ${align && `align-self: ${align};`}
    ${justify && `justify-self: ${justify};`}
    ${span && `grid-column-end: span ${span};`}
    ${start && `grid-column-start: ${start};`}
  `,
)

const Column = ({ children, span, start, ...props }) => (
  <StyledColumn span={span} start={start} {...props}>
    {children}
  </StyledColumn>
)

Column.propTypes = {
  align: oneOf(['center', 'end', 'start']),
  children: node.isRequired,
  justify: oneOf(['center', 'end', 'start']),
  span: number,
  start: number,
}

Column.defaultProps = {
  align: null,
  justify: null,
  span: null,
  start: null,
}

Column.displayName = 'Column'

export default Column
