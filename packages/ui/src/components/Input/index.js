import React from 'react'
import { string, func } from 'prop-types'
import styled, { css } from 'styled-components'
import { transparentize } from 'polished'

import Text from '../Text'

const Label = styled.label(
  ({
    theme: {
      colors: { gray, primary },
      components: {
        input: { label },
      },
    },
  }) => {
    const { font } = label

    return css`
      display: flex;
      flex-direction: column;
      font-family: '${font.family}', sans-serif;
      font-size: ${font.family.size};

      :focus-within {
        color: ${primary.base};
      }

      ${Text} {
        color: ${gray.dark};
      }
`
  },
)

const Field = styled.input(
  ({
    theme: {
      colors: { primary },
      components: { input },
    },
  }) => {
    const { border, box, font, margin, padding, placeholder } = input

    return css`
      border-color: ${border.color};
      border-style: ${border.style};
      border-width: ${border.width};
      font-size: ${font.size};
      margin-bottom: ${margin.bottom};
      margin-top: ${margin.top};
      outline: none;
      padding: ${padding.top} ${padding.right} ${padding.bottom} ${padding.left};

      :active {
        border-color: ${primary.base};
        box-shadow: ${box.shadow} ${transparentize(0.8, primary.base)};
      }

      :focus {
        border-color: ${primary.base};
        box-shadow: ${box.shadow} ${transparentize(0.8, primary.base)};
      }

      ::placeholder {
        color: ${placeholder.color};
      }
    `
  },
)

const Input = ({ hint, label, onChange, placeholder, type }) => (
  <Label>
    {label && label}
    <Field onChange={onChange} placeholder={placeholder} type={type} />
    {hint && <Text fontSize={1.5}>{hint}</Text>}
  </Label>
)

Input.propTypes = {
  hint: string,
  label: string,
  onChange: func,
  placeholder: string,
  type: string,
}

Input.defaultProps = {
  hint: '',
  label: '',
  onChange: null,
  placeholder: '',
  type: 'text',
}

export default Input
