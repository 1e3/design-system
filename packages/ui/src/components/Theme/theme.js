import { button, heading, input, text } from './components'
import { generateColors, scale } from '../../utils'

const defaultColors = {
  blue: `#1e31e3`,
  gray: '#e7e7e7',
  green: '#00af7c',
  red: '#c91630',
  yellow: '#eec200',
}

defaultColors.primary = defaultColors.blue

const defaultFonts = { body: 'Source Sans Pro', heading: 'Red Hat Display' }

export const generateTheme = ({ colors = {}, fonts = {} }) => {
  const mergedColors = { ...defaultColors, ...colors }
  const mergedFonts = { ...defaultFonts, ...fonts }

  const generatedColors = Object.entries(mergedColors).reduce(
    (acc, [key, value]) => ({ ...acc, [key]: generateColors(value) }),
    {},
  )

  const themeColors = {
    black: '#000000',
    white: '#ffffff',
    ...generatedColors,
  }

  const theme = { colors: themeColors, fonts: mergedFonts, scale }

  const components = {
    button: button(theme),
    heading: heading(theme),
    input: input(theme),
    text: text(theme),
  }

  return { ...theme, components }
}
