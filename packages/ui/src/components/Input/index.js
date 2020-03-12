import React from 'react'
import { bool, func, string } from 'prop-types'
import styled, { css } from 'styled-components'
import { transparentize } from 'polished'

import Text from '../Text'

const Label = styled.label(
  ({
    inverted,
    theme: {
      colors: { black, primary, white },
      scale,
    },
  }) => {
    const main = inverted ? white : black
    const contrast = inverted ? white : primary.base

    return css`
      display: flex;
      flex-direction: column;
      font-size: ${scale(2)};
      color: ${main};

      :focus-within {
        color: ${contrast};
      }

      > p {
        color: ${transparentize(0.5, main)};
        font-size: ${scale(1.5)};
      }
    `
  },
)

const Field = styled.input(
  ({
    inverted,
    theme: {
      colors: { black, primary, white },
      scale,
    },
  }) => {
    const main = inverted ? white : black
    const contrast = inverted ? white : primary.base

    return css`
      background-color: transparent;
      border-color: ${main};
      border-style: solid;
      border-width: ${scale(0.125)};
      color: ${main};
      font-size: ${scale(2)};
      margin-bottom: ${scale(0.5)};
      margin-top: ${scale(0.5)};
      outline: none;
      padding: ${scale(1)};

      :active,
      :focus {
        border-color: ${contrast};
        box-shadow: 0 0 0 ${scale(0.4)} ${transparentize(0.8, contrast)};
      }

      ::placeholder {
        color: ${transparentize(0.8, main)};
      }
    `
  },
)

const Input = ({ hint, inverted, label, onChange, placeholder, type, ...props }) => (
  <Label inverted={inverted}>
    {label && label}
    <Field
      inverted={inverted}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      {...props}
    />
    {hint && <Text>{hint}</Text>}
  </Label>
)

Input.propTypes = {
  hint: string,
  inverted: bool,
  label: string,
  onChange: func,
  placeholder: string,
  type: string,
}

Input.defaultProps = {
  hint: null,
  inverted: false,
  label: null,
  onChange: null,
  placeholder: null,
  type: 'text',
}

Input.displayName = 'Input'

export default Input
