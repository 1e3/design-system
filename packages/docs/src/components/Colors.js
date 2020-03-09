import React, { useContext } from 'react'
import styled, { ThemeContext, css } from 'styled-components'
import { Box, Heading, Text } from '@1e3/ui'

const Circle = styled.div(
  ({
    color,
    size = 50,
    theme: {
      colors: { gray },
    },
  }) => css`
    background-color: ${color};
    border: 1px solid ${gray.base};
    border-radius: 50%;
    height: ${size}px;
    width: ${size}px;
  `,
)

const Color = ({ color, name }) => {
  const isSingleColor = typeof color === 'string'

  const { contrast, dark, light } = color

  const base = isSingleColor ? color : color.base

  return (
    <Box backgroundColor="white" padding={3} margin={2} col={{ xs: 1, md: 1 / 3 }}>
      <Box display="flex" justifyContent="space-between">
        <Box>
          <Heading fontSize={3} textTransform="capitalize">
            {name}
          </Heading>
          <Text color="gray.dark">{base}</Text>
        </Box>
        <Circle color={base} />
      </Box>
      {light && (
        <Box display="flex" justifyContent="space-between">
          <Heading fontSize={2}>Light</Heading>
          <Text color="gray.dark">{light}</Text>
          <Circle color={light} size={25} />
        </Box>
      )}
      {dark && (
        <Box display="flex" justifyContent="space-between">
          <Heading fontSize={2}>Dark</Heading>
          <Text color="gray.dark">{dark}</Text>
          <Circle color={dark} size={25} />
        </Box>
      )}
      {contrast && (
        <Box display="flex" justifyContent="space-between">
          <Heading fontSize={2}>Contrast</Heading>
          <Text color="gray.dark">{contrast}</Text>
          <Circle color={contrast} size={25} />
        </Box>
      )}
    </Box>
  )
}

const Colors = () => {
  const {
    colors: { black, blue, gray, green, primary, red, yellow, white },
  } = useContext(ThemeContext)

  return (
    <Box marginTop={3}>
      <Heading fontSize={4} marginBottom={2}>
        Primary palette
      </Heading>
      <Box row mx={-2}>
        <Color color={primary} name="primary" />
      </Box>
      <Heading fontSize={4} marginBottom={2}>
        Neutrals palette
      </Heading>
      <Box row mx={-2}>
        <Color color={white} name="white" />
        <Color color={gray} name="gray" />
        <Color color={black} name="black" />
      </Box>
      <Heading fontSize={4} marginBottom={2}>
        Secondary palette
      </Heading>
      <Box row mx={-2}>
        <Color color={blue} name="blue" />
        <Color color={green} name="green" />
        <Color color={red} name="red" />
        <Color color={yellow} name="yellow" />
      </Box>
    </Box>
  )
}

export default Colors
