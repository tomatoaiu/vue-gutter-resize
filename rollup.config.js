import vue from 'rollup-plugin-vue'
import babel from 'rollup-plugin-babel'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import nodeGlobals from 'rollup-plugin-node-globals'
import uglify from 'rollup-plugin-uglify'
import replace from 'rollup-plugin-replace'
import babelrc from 'babelrc-rollup';


let plugins = [
  vue({
    css: './app/vue-gutter-resize.css'
  }),
  babel(babelrc()),
  nodeResolve({
    jsnext: true,
    main: true,
    browser: true
  }),
  commonjs(),
  nodeGlobals()
]

const isProduction = process.env.NODE_ENV === `production`

const config = [
  {
    input: './src/index.js',
    output: {
      name: 'vue-gutter-resize',
      file: './app/vue-gutter-resize.min.js',
      format: 'iife',
      sourcemap: true
    },
    plugins: plugins
  },
  {
    input: './src/index.js',
    output: {
      name: 'vue-gutter-resize',
      file: './app/vue-gutter-resize.umd.js',
      format: 'umd',
      sourcemap: true
    },
    plugins: plugins
  },
  {
    input: './src/index.js',
    output: {
      name: 'vue-gutter-resize',
      file: './app/vue-gutter-resize.esm.js',
      format: 'es',
      sourcemap: true
    },
    plugins: plugins
  }
]

if (isProduction) {
  for (const c of config) {
    c.output.sourcemap = false
    c.output.extend = true
    c.plugins.push(
      replace({
        'process.env.NODE_ENV': JSON.stringify('production')
      })
    )
    c.plugins.push(uglify())
  }
}

export default config
