import babel from 'rollup-plugin-babel';
import minify from 'rollup-plugin-babel-minify';
import scss from 'rollup-plugin-scss'

const babelConfig = { exclude: 'node_modules/**' };
const minifyConfig = { comments: false };

export default [
  {
    input: 'src/lib/app.js',
    output: {
      name: 'index',
      file: 'dist/lib/index.min.js',
      format: 'umd',
      exports: 'named'
    },
    interop: false,
    plugins: [
      babel(babelConfig),
      minify(minifyConfig)
    ],
  },
  {
    input: 'src/utils/app.js',
    output: {
      name: 'index',
      file: 'dist/utils/index.min.js',
      format: 'umd',
      exports: 'named'
    },
    interop: false,
    plugins: [
      babel(babelConfig),
      minify(minifyConfig)
    ],
  },

  {
    input: 'src/index.js',
    output: {
      name: 'index',
      file: 'dist/index.min.js',
      format: 'umd',
      exports: 'named'
    },
    interop: false,
    plugins: [
      babel(babelConfig),
      minify(minifyConfig)
    ],
  },
]