export default (value, { base = 8, unit = 'px' } = {}) => `${value * base}${unit}`
