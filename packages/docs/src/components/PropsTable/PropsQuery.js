import { useStaticQuery, graphql } from 'gatsby'

const PropsQuery = () =>
  useStaticQuery(graphql`
    query {
      allComponentMetadata(sort: { fields: displayName }) {
        edges {
          node {
            displayName
            props {
              name
              type {
                name
              }
              required
              defaultValue {
                value
              }
              description {
                text
              }
            }
          }
        }
      }
    }
  `)

export default PropsQuery
