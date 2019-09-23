import babel from 'rollup-plugin-babel';
import minify from 'rollup-plugin-babel-minify';
// import multiInput from 'rollup-plugin-multi-input';
import scss from 'rollup-plugin-scss'

const babelConfig = { exclude: 'node_modules/**' };
const minifyConfig = { comments: false };

export default [
  {
    input: ['src/lib/**/*.js', 'src/utils/**/*.js'],
    output: {
      dir: 'dist',
      format: 'umd',
    },
    interop: false,
    plugins: [
      babel(babelConfig),
      minify(minifyConfig),
      // multiInput(),
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