import React from 'react'
import { string, bool } from 'prop-types'
import Highlight, { defaultProps } from 'prism-react-renderer'
import githubTheme from 'prism-react-renderer/themes/github'
import styled, { css } from '@xstyled/styled-components'
import { LiveEditor } from 'react-live'

const defaultPropsWithTheme = {
  ...defaultProps,
  theme: githubTheme,
}

const Pre = styled.pre(
  () => css`
    margin: 0;
    padding: 4;
  `,
)

const PrismHighlight = ({ code }) => {
  return (
    <Highlight code={code} language="jsx" {...defaultPropsWithTheme}>
      {({ className, style }) => (
        <Pre className={className} style={style}>
          <LiveEditor />
        </Pre>
      )}
    </Highlight>
  )
}

PrismHighlight.propTypes = {
  code: string,
}

PrismHighlight.defaultProps = {
  code: undefined,
}

export default PrismHighlight