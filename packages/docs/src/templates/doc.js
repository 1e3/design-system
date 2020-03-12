import React from 'react'
import { shape, node } from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

const Template = props => {
  const { data, children } = props

  if (!data) {
    return children
  }

  const {
    mdx: { body },
    allMdx: { edges },
  } = data

  const nav = edges.filter(edge => edge.node.frontmatter.title)

  return <Layout body={body} nav={nav} />
}

Template.propTypes = {
  children: node,
  data: shape({}),
}

Template.defaultProps = {
  children: null,
  data: null,
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
