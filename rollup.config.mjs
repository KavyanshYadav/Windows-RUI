import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';


export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.cjs.js',
      format: 'cjs',
      exports: 'named',
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    postcss({
      extract: true, 
      modules: false, 
      use: ['sass'], 
    }),
    typescript({
      useTsconfigDeclarationDir: true,
    }),
  ],
  external: ['react', 'react-dom'], 
};
