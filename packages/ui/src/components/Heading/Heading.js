import React from 'react'
import { node, shape } from 'prop-types'
import styled, { css } from '@xstyled/styled-components'

const Heading = styled.box(
  ({
    theme: {
      fonts: { headingFontFamily },
    },
  }) => css`
    font-family: '${headingFontFamily}', sans-serif;
  `,
)

Heading.propTypes = {}

Heading.defaultProps = {
  as: 'h1',
}

export default Heading
