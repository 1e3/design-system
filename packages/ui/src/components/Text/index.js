import { number, string } from 'prop-types'
import styled, { css } from 'styled-components'

import Box from '../Box'

const Text = styled(Box).attrs(({ as }) => ({ as }))(
  ({
    fontSize,
    theme: {
      components: { text },
      scale,
    },
  }) => {
    const { font } = text

    return css`
      font-family: '${font.family}', sans-serif;
      font-size: ${scale(fontSize || font.family.size)};
    `
  },
)

Text.propTypes = {
  as: string,
  fontSize: number,
}

Text.defaultProps = {
  as: 'p',
  fontSize: null,
}

export default Text
