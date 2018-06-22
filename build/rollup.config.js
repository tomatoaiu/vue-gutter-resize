import plugins from './rollup.config.plugins'

export default {
  input: './src/index.js',
  output: [
    {
      file: './dist/vue-gutter-resize.js',
      format: 'cjs'
    },
    {
      file: './dist/vue-gutter-resize.esm.js',
      format: 'es'
    },
    {
      file: './dist/vue-gutter-resize.umd.js',
      format: 'umd',
      name: 'VueGutterResize'
    }
  ],
  plugins: plugins
}
