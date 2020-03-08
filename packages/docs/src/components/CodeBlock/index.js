import React from 'react'
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
  ({ theme: { scale } }) => css`
    align-items: center;
    display: flex;
    justify-content: center;
    padding: ${scale(2)};

    > div {
      width: 100%;
    }
  `,
)

const Error = styled(LiveError)(
  ({
    theme: {
      colors: { danger },
      scale,
    },
  }) => css`
    background-color: ${danger.light};
    color: ${danger.base};
    margin: 0;
    padding: ${scale(2)};
  `,
)

const CodeBlock = props => {
  const code = preToCodeBlock(props)

  return (
    <>
      <MDXContext.Consumer>
        {scope => (
          <LiveProvider code={code.codeString} scope={scope} theme={githubTheme}>
            <Preview>
              <Component>
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
