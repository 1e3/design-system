import React from 'react'
import { graphql } from 'gatsby'
import { ThemeProvider } from '@1e3/ui'

import Layout from '../components/Layout'

const Template = props => {
  const {
    data: {
      mdx: { body },
      allMdx: { edges },
    },
  } = props

  return <Layout body={body} nav={edges} />
}

export default Template

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      frontmatter {
        title
      }
      body
    }
    allMdx(sort: { fields: [frontmatter___title], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
