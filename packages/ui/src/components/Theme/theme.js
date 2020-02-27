import tokens from '@1e3/tokens'

import { button, heading, text } from './components'
import generateColors from '../../utils/generateColors'

const {
  colors: { black, blue, gray, green, red, white, yellow },
  fonts,
} = tokens

const colors = {
  black,
  danger: generateColors(red),
  primary: generateColors(blue),
  success: generateColors(green),
  warning: generateColors(yellow),
  gray: generateColors(gray),
  white,
}

const [textFontFamily, headingFontFamily] = fonts

const theme = { colors, fonts: { textFontFamily, headingFontFamily } }

const components = {
  button: button(theme),
  heading: heading(theme),
  text: text(theme),
}

export default { ...theme, components }
