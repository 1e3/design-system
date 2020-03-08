import { bool } from 'prop-types'
import styled, { css } from 'styled-components'
import { darken, lighten, transparentize } from 'polished'

import Box from '../Box'

const Button = styled(Box).attrs({ as: 'button' })(
  ({
    outline,
    theme: {
      components: { button },
    },
  }) => {
    const { background, border, box, color, font, letterSpacing, padding } = button

    return css`
      background-color: ${background.color};
      border: none;
      border-color: ${background.color};
      border-style: ${border.style};
      border-width: ${border.width};
      color: ${color};
      cursor: pointer;
      font-family: ${font.family};
      font-size: ${font.size};
      letter-spacing: ${letterSpacing};
      outline: none;
      padding: ${padding.top} ${padding.right} ${padding.bottom} ${padding.left};

      :hover {
        background-color: ${lighten(0.05, background.color)};
        border-color: ${lighten(0.05, background.color)};
      }

      :active {
        background-color: ${darken(0.1, background.color)};
        border-color: ${darken(0.1, background.color)};
        box-shadow: ${box.shadow} ${transparentize(0.8, background.color)};
      }

      :focus {
        box-shadow: ${box.shadow} ${transparentize(0.8, background.color)};
      }

      ${outline
        ? css`
            color: ${background.color};
            background-color: transparent;

            :hover {
              background-color: ${transparentize(0.8, background.color)};
            }

            :active {
              background-color: ${transparentize(0.7, background.color)};
              box-shadow: ${box.shadow} ${transparentize(0.6, background.color)};
            }

            :focus {
              box-shadow: ${box.shadow} ${transparentize(0.6, background.color)};
            }
          `
        : ''}
    `
  },
)

Button.propTypes = {
  outline: bool,
}

Button.defaultProps = {
  outline: false,
}

export default Button
