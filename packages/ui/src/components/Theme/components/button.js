const button = ({ colors, fonts }) => ({
  background: {
    color: colors.primary.base,
  },
  border: {
    style: 'solid',
    width: 1,
  },
  box: {
    shadow: '0 0 0 2px',
  },
  color: colors.primary.contrast,
  font: {
    family: fonts.headingFontFamily,
    size: 3,
  },
  padding: {
    top: 2,
    right: 4,
    bottom: 2,
    left: 4,
  },
})

export default button
