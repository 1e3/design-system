import React from 'react'
import { node } from 'prop-types'
import { MDXProvider } from '@mdx-js/react'
import * as components from '@1e3/ui'

import CodeBlock from './CodeBlock'
import Colors from './Colors'
import PropsTable from './PropsTable'

const { Heading } = components

const customComponents = {
  h1: Heading,
  h2: ({ children }) => <Heading>{children}</Heading>,
  pre: CodeBlock,
  Colors,
  PropsTable,
  ...components,
}

const wrapRootElement = ({ element }) => (
  <MDXProvider components={customComponents}>{element}</MDXProvider>
)

wrapRootElement.propTypes = {
  element: node.isRequired,
}

export { wrapRootElement }
