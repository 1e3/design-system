import scale from './scale'

const props = {
  margin: ['margin'],
  marginTop: ['marginTop'],
  marginRight: ['marginRight'],
  marginBottom: ['marginBottom'],
  marginLeft: ['marginLeft'],
  mx: ['marginLeft', 'marginRight'],
  my: ['marginTop', 'marginBottom'],
  padding: ['padding'],
  paddingTop: ['paddingTop'],
  paddingRight: ['paddingRight'],
  paddingBottom: ['paddingBottom'],
  paddingLeft: ['paddingLeft'],
  px: ['paddingLeft', 'paddingRight'],
  py: ['paddingTop', 'paddingBottom'],
}

const getValue = value => (typeof value === 'number' ? scale(value) : value)

export default args =>
  Object.entries(args).reduce((acc, [key, value]) => {
    if (!props[key]) return acc
    return {
      ...acc,
      ...props[key].reduce((innerAcc, prop) => ({ ...innerAcc, [prop]: getValue(value) }), {}),
    }
  }, {})
