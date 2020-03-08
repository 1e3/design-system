import { number, string } from 'prop-types'
import styled, { css } from 'styled-components'

import Box from '../Box'

const Heading = styled(Box).attrs(({ as }) => ({ as }))(
  ({
    fontSize,
    theme: {
      components: { heading },
      scale,
    },
  }) => {
    const { font } = heading

    return css`
      font-family: '${font.family}', sans-serif;
      font-size: ${scale(fontSize || font.family.size)};
    `
  },
)

Heading.propTypes = {
  as: string,
  fontSize: number,
}

Heading.defaultProps = {
  as: 'h1',
  fontSize: null,
}

export default Heading
