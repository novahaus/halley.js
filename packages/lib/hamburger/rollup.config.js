import stylus  from 'rollup-plugin-stylus-compiler';
import css from 'rollup-plugin-css-only';

export default [
  {
    input: 'src/stylus/app.styl',
    output: {
      file: 'dist/hamburger.js',
      format: "system"
    },
    plugins: [
      stylus(),
      css()
    ]
  }
]