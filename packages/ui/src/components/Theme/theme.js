import tokens from '@1e3/tokens'

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

const [bodyFontFamily, headingFontFamily] = fonts

const theme = { colors, fonts: { bodyFontFamily, headingFontFamily } }

export default theme
