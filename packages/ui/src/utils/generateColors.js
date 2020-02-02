import { shade, tint } from 'polished'

const generateColors = color => {
  const light = tint(0.25, color)
  const base = color
  const dark = shade(0.25, color)

  return {
    light,
    base,
    dark,
  }
}

export default generateColors
