import React from 'react'
import { node, shape } from 'prop-types'
import styled, { css } from '@xstyled/styled-components'

const Button = styled.box(
  ({
    theme: {
      colors: { primary, white },
    },
  }) => css`
    color: ${white};
    background-color: ${primary.light};
  `,
)

Button.propTypes = {}

Button.defaultProps = {
  as: 'button',
}

export default Button
