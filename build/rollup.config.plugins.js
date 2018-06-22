import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import vue from 'rollup-plugin-vue'

const plugins = [
  vue(),
  resolve(),
  babel({
    exclude: 'node_modules/**' // only transpile our source code
  })
]

export default plugins
