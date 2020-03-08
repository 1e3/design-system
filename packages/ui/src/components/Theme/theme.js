import { button, heading, text } from './components'
import { generateColors, scale } from '../../utils'

const defaultColors = {
  black: '#000000',
  blue: `#1e31e3`,
  gray: '#e7e7e7',
  green: '#00af7c',
  red: '#c91630',
  white: '#ffffff',
  yellow: '#eec200',
}

const defaultFonts = { body: 'Source Sans Pro', heading: 'Red Hat Display' }

export const generateTheme = ({ colors = {}, fonts = {} }) => {
  const mergedColors = { ...defaultColors, ...colors }
  const mergedFonts = { ...defaultFonts, ...fonts }

  const { black, blue, gray, green, red, yellow, white } = mergedColors

  const themeColors = {
    black,
    danger: generateColors(red),
    gray: generateColors(gray),
    primary: generateColors(blue),
    success: generateColors(green),
    warning: generateColors(yellow),
    white,
  }

  const theme = { colors: themeColors, fonts: mergedFonts, scale }

  const components = {
    button: button(theme),
    heading: heading(theme),
    text: text(theme),
  }

  return { ...theme, components }
}
