import { nodeResolve } from '@rollup/plugin-node-resolve';

export default [
  {
    input: 'src/index.js',
    output: {
      name: 'markedSmartypants',
      file: 'lib/index.umd.js',
      format: 'umd'
    },
    plugins: [nodeResolve()]
  },
  {
    input: 'src/index.js',
    output: {
      file: 'lib/index.cjs',
      format: 'cjs'
    },
    external: ['smartypants']
  }
];
