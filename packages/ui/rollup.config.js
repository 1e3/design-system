import nodeResolve from '@rollup/plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'

const plugins = [babel({ exclude: 'node_modules/**' }), nodeResolve(), terser()]

const external = ['polished', 'prop-types', 'react', 'react-dom', 'styled-components']

export default [
  {
    input: 'src/index.js',
    plugins,
    external,
    output: {
      file: 'dist/index.js',
      format: 'cjs',
    },
  },
]
