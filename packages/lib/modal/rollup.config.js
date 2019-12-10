import babel from 'rollup-plugin-babel';
import minify from 'rollup-plugin-babel-minify';
import stylus  from 'rollup-plugin-stylus-compiler';
import css from 'rollup-plugin-css-only';
import { eslint } from "rollup-plugin-eslint";

const babelConfig = { exclude: 'node_modules/**' };
const minifyConfig = { comments: false };

export default [
  {
    input: 'src/index.js',
    output: {
      name: 'index',
      file: 'dist/index.min.js',
      format: 'umd'
    },
    interop: false,
    plugins: [
      eslint(),
      babel(babelConfig),
      minify(minifyConfig),
    ]
  },
  {
    input: 'src/stylus/app.styl',
    output: {
      file: 'dist/modal.js',
      format: "system"
    },
    plugins: [
      stylus(),
      css()
    ]
  }
]