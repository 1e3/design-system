import { readableColor, shade, tint } from 'polished'

const generateColors = (color, white, black) => {
  const light = tint(0.8, color)
  const base = color
  const dark = shade(0.4, color)
  const contrast = readableColor(color, black, white)

  return {
    light,
    base,
    dark,
    contrast,
  }
}

export default generateColors
