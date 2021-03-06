import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import vue from 'rollup-plugin-vue'
import replace from 'rollup-plugin-replace'
import { terser } from 'rollup-plugin-terser'
import json from '@rollup/plugin-json'
import CleanCSS from 'clean-css' // 压缩css
import { writeFileSync } from 'fs' // 写文件
import del from 'rollup-plugin-delete'
import scss from 'rollup-plugin-scss'
import meta from './src/config/meta'

export default {
  input: 'src/as-script/main.js',
  output: {
    name: 'allSearch',
    file: 'build/index.js',
    format: 'iife',
    // sourceMap: true,
    globals: {
      vue: 'Vue'
    }
  },
  external: ['vue'],
  plugins: [
    del({ targets: 'build/*' }),
    scss({
      output (style) {
        writeFileSync('build/as-style.css', new CleanCSS().minify(style).styles)
      }
    }),
    vue({
      css: false
    }),
    resolve(),
    commonjs(),
    json(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env.VUE_ENV': JSON.stringify('browser')
    }),
    terser({
      output: {
        beautify: true,
        preamble: meta
      }
    })
  ]
}
