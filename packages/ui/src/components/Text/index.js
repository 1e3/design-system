import styled, { css } from '@xstyled/styled-components'
import { system } from '@xstyled/system'

const Text = styled.p(({ theme: { components: { text } } }) => {
  const { font } = text

  return css`
      font-family: '${font.family}', sans-serif;
      font-size: ${font.size};
    `
}, system)

Text.propTypes = {}

Text.defaultProps = {}

export default Text
