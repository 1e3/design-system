import styled, { css } from '@xstyled/styled-components'
import { bool } from 'prop-types'
import { darken, lighten, transparentize } from 'polished'

/** Buttons make common actions more obvious and help users more easily perform them. Buttons use labels and sometimes icons to communicate the action that will occur when the user touches them. */
const Button = styled.button(
  ({
    outline,
    theme: {
      components: { button },
    },
  }) => {
    const { background, border, box, color, font, padding } = button

    return css`
      cursor: pointer;
      border: none;
      outline: none;
      font-family: ${font.family};
      font-size: ${font.size};

      color: ${color};
      background-color: ${background.color};
      padding: ${padding.top} ${padding.right} ${padding.bottom} ${padding.left};
      border-style: ${border.style};
      border-width: ${border.width};
      border-color: ${background.color};

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
  /** Outline style */
  outline: bool,
}

Button.defaultProps = {
  outline: false,
}

Button.displayName = 'Button'

export default Button
