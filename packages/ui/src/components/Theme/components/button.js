const button = ({ colors, fonts, scale }) => ({
  background: {
    color: colors.primary.base,
  },
  border: {
    style: 'solid',
    width: scale(0.125),
  },
  box: {
    shadow: `0 0 0 ${scale(0.25)}`,
  },
  color: colors.primary.contrast,
  font: {
    family: fonts.heading,
    size: scale(1.5),
  },
  letterSpacing: scale(0.125),
  padding: {
    top: scale(1),
    right: scale(2),
    bottom: scale(1),
    left: scale(2),
  },
})

export default button
