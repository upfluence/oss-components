import { babel } from '@rollup/plugin-babel';
import { classicEmberSupport, ember, extensions } from '@embroider/vite';
import { createRequire } from 'node:module';
import path from 'node:path';
import { defineConfig } from 'vite';

import { upfluenceAssetMap } from './vite-asset-map.mjs';

const ossRoot = path.dirname(createRequire(import.meta.url).resolve('@upfluence/oss-components/package.json'));

export default defineConfig({
  define: {
    'import.meta.env.COVERAGE': JSON.stringify(process.env.COVERAGE === 'true')
  },
  css: {
    preprocessorOptions: {
      less: {
        // The OSS styles rely on Less 3 math (`16 / @rem`). less is pinned to 4.2.2: 4.9.1 fails on their `rgb(from …)`.
        math: 'always',
        // They also import Less files from their own dependencies.
        paths: [path.join(ossRoot, 'node_modules')]
      }
    }
  },
  plugins: [
    classicEmberSupport(),
    ember(),
    babel({
      babelHelpers: 'runtime',
      extensions
    }),
    upfluenceAssetMap()
  ]
});
