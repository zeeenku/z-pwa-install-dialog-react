import { defineConfig } from 'tsup';
import stylePlugin from 'esbuild-style-plugin';

export default defineConfig({
  entry: ['src/index.tsx'],
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom'],
  target: 'es2018',
  injectStyle: true, 
  minify: true,
  esbuildPlugins: [stylePlugin()],
});

