import React from 'react'
import { string } from 'prop-types'
import styled, { css } from 'styled-components'

import PropsQuery from './PropsQuery'

const Table = styled.table(
  ({
    theme: {
      colors: { gray, primary, white },
      scale,
    },
  }) => css`
    border: 1px solid ${gray.base};
    border-collapse: collapse;
    text-align: left;
    width: 100%;

    thead {
      background-color: ${gray.light};

      th {
        font-weight: normal;
        padding: ${scale(2)};
      }
    }

    tbody {
      background-color: ${white};
      font-family: monospace;

      td {
        border-top: 1px solid ${gray.base};
        padding: ${scale(1)};

        :first-child {
          font-weight: bold;
        }

        :nth-child(3),
        :nth-child(5) {
          color: ${primary.base};
        }
      }
    }
  `,
)

const InlineCode = styled.pre(
  ({
    theme: {
      colors: { gray, primary },
      scale,
    },
  }) => css`
    background-color: ${gray.base};
    border-radius: ${scale(0.5)};
    color: ${primary.base};
    display: inline-block;
    margin: 0;
    padding: ${scale(0.5)};
  `,
)

const PropsTable = ({ component }) => {
  const {
    allComponentMetadata: { edges },
  } = PropsQuery()

  const {
    node: { props: properties },
  } = edges.find(({ node }) => node.displayName === component)

  return (
    <Table>
      <thead>
        <tr>
          <th>Prop</th>
          <th>Description</th>
          <th>Type</th>
          <th>Default</th>
          <th>Required</th>
        </tr>
      </thead>
      <tbody>
        {properties.map(
          ({
            name,
            description: { text: description },
            type: { name: type },
            defaultValue,
            required: isRequired,
          }) => (
            <tr key={name}>
              <td>{name}</td>
              <td>{description}</td>
              <td>{type}</td>
              <td>
                {defaultValue && <InlineCode>{defaultValue.value.replace(/'/g, '')}</InlineCode>}
              </td>
              <td>{String(isRequired)}</td>
            </tr>
          ),
        )}
      </tbody>
    </Table>
  )
}

PropsTable.propTypes = {
  component: string.isRequired,
}

export default PropsTable
