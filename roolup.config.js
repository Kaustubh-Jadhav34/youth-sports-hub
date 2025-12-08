import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import copy from 'rollup-plugin-copy';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife',
    name: 'YouthSportsHub'
  },
  plugins: [
    resolve(),
    commonjs(),
    copy({
      targets: [
        { src: 'public/*', dest: 'dist' },
        { src: 'api/*', dest: 'dist/api' },
        { src: 'index.html', dest: 'dist' }
      ]
    })
  ]
};
