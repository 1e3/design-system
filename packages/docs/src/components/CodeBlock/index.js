import React, { useState } from 'react'
import { LiveProvider, LiveError, LivePreview } from 'react-live'
import { preToCodeBlock } from 'mdx-utils'
import { MDXContext } from '@mdx-js/react'
import githubTheme from 'prism-react-renderer/themes/github'
import styled, { css } from 'styled-components'
import PrismHighlight from './PrismHighlight'

const Preview = styled.div(
  ({
    theme: {
      colors: { gray, white },
    },
  }) => css`
    background-color: ${white};
    border: 1px solid ${gray.base};
    overflow: hidden;

    textarea {
      outline: none;
    }
  `,
)

const Component = styled.div(
  ({
    inverted,
    theme: {
      colors: { primary },
      scale,
    },
  }) => css`
    align-items: center;
    display: flex;
    justify-content: center;
    padding: ${scale(2)};

    > div {
      width: 100%;
    }

    ${inverted
      ? css`
          background-color: ${primary.base};
        `
      : ''}
  `,
)

const Error = styled(LiveError)(
  ({
    theme: {
      colors: { red },
      scale,
    },
  }) => css`
    background-color: ${red.light};
    color: ${red.base};
    margin: 0;
    padding: ${scale(2)};
  `,
)

const CodeBlock = props => {
  const [inverted, setInverted] = useState(false)
  const code = preToCodeBlock(props)

  return (
    <>
      <MDXContext.Consumer>
        {scope => (
          <LiveProvider code={code.codeString} scope={{ ...scope, inverted }} theme={githubTheme}>
            <Preview>
              <input type="checkbox" onChange={() => setInverted(!inverted)} />
              <Component inverted={inverted}>
                <LivePreview />
              </Component>
              <PrismHighlight code={code.codeString} liveEditor />
              <Error />
            </Preview>
          </LiveProvider>
        )}
      </MDXContext.Consumer>
    </>
  )
}

export default CodeBlock
