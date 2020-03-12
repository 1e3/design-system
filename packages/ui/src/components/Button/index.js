import React from 'react'
import { bool, node } from 'prop-types'
import styled, { css } from 'styled-components'
import { darken, lighten, transparentize } from 'polished'

import Box from '../Box'

const StyledButton = styled(Box)(
  ({
    full,
    inverted,
    outline,
    theme: {
      colors: { primary, white },
      fonts,
      scale,
    },
  }) => {
    const main = inverted ? white : primary.base
    const contrast = inverted ? primary.base : white

    return css`
      background-color: ${main};
      border: none;
      border-color: ${main};
      border-style: solid;
      border-width: ${scale(0.125)};
      color: ${contrast};
      cursor: pointer;
      font-family: ${fonts.heading};
      font-size: ${scale(2)};
      letter-spacing: ${scale(0.125)};
      outline: none;
      padding: ${scale(1)} ${scale(2)};
      width: ${full ? '100%' : 'auto'};

      :hover {
        background-color: ${lighten(0.05, main)};
        border-color: ${lighten(0.05, main)};
      }

      :active {
        background-color: ${darken(0.1, main)};
        border-color: ${darken(0.1, main)};
        box-shadow: 0 0 0 ${scale(0.4)} ${transparentize(0.8, main)};
      }

      :focus {
        box-shadow: 0 0 0 ${scale(0.4)} ${transparentize(0.8, main)};
      }

      ${outline
        ? css`
            color: ${main};
            background-color: transparent;

            :hover {
              background-color: ${transparentize(0.8, main)};
            }

            :active {
              background-color: ${transparentize(0.7, main)};
              box-shadow: 0 0 0 ${scale(0.4)} ${transparentize(0.6, main)};
            }

            :focus {
              box-shadow: 0 0 0 ${scale(0.4)} ${transparentize(0.6, main)};
            }
          `
        : ''}
    `
  },
)

const Button = ({ children, full, inverted, outline }) => (
  <StyledButton as="button" full={full} inverted={inverted} outline={outline}>
    {children}
  </StyledButton>
)

Button.propTypes = {
  full: bool,
  children: node.isRequired,
  inverted: bool,
  outline: bool,
}

Button.defaultProps = {
  full: false,
  inverted: false,
  outline: false,
}

Button.displayName = 'Button'

export default Button
