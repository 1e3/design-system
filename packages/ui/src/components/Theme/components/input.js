const input = ({ colors, fonts, scale }) => ({
  border: {
    color: colors.gray.dark,
    style: 'solid',
    width: scale(0.125),
  },
  box: {
    shadow: `0 0 0 ${scale(0.25)}`,
  },
  font: {
    size: scale(2),
  },
  label: {
    font: {
      family: fonts.body,
      size: scale(2),
    },
  },
  margin: {
    bottom: scale(0.5),
    top: scale(0.5),
  },
  padding: {
    bottom: scale(1.5),
    left: scale(1.5),
    right: scale(1.5),
    top: scale(1.5),
  },
  placeholder: {
    color: colors.gray.base,
  },
})

export default input
