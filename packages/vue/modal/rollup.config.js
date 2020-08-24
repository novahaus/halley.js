import resolve from "@rollup/plugin-node-resolve";
import commonjs from '@rollup/plugin-commonjs'
import vue from 'rollup-plugin-vue2'
import stylus from 'rollup-plugin-stylus-compiler';
import css from 'rollup-plugin-css-only';
import babel from 'rollup-plugin-babel';
import minify from 'rollup-plugin-babel-minify';
import { eslint } from 'rollup-plugin-eslint';
const minifyConfig = { comments: false };

export default [
  {
    input: 'src/index.js',
    external: ['vue'],
    output: {
      name: 'index',
      file: 'dist/index.js',
      format: 'umd',
      globals: {
        vue: 'vue'
      }
    },
    interop: false,
    plugins: [
      commonjs(),
      resolve({
        browser: true,
      }),
      stylus(),
      css(),
      vue({
        css: true,
        compileTemplate: true,
      }),
      babel({
        runtimeHelpers: true,
        extensions: ['.js', '.jsx', '.es6', '.es', '.mjs', '.vue'],
      }),
      eslint(),
      minify(minifyConfig),
    ]
  },
]

