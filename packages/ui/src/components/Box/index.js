import { bool } from 'prop-types'
import styled, { css } from 'styled-components'
import { transparentize } from 'polished'

import space from '../../utils/space'

const Box = styled.div(
  ({ debug, theme: { colors } }) => css`
    ${debug
      ? css`
          background-color: ${transparentize(0.8, colors.primary.base)};
        `
      : ''}
  `,
  space,
)

Box.propTypes = {
  debug: bool,
}

Box.defaultProps = {
  debug: false,
}

export default Box
