import { string } from 'prop-types'
import styled, { css } from 'styled-components'

import Box from '../Box'

const Text = styled(Box).attrs(({ as }) => ({ as }))(
  ({
    theme: {
      components: { text },
    },
  }) => {
    const { font } = text

    return css`
      font-family: '${font.family}', sans-serif;
      font-size: ${font.size};
    `
  },
)

Text.propTypes = {
  as: string,
}

Text.defaultProps = {
  as: 'p',
}

export default Text
