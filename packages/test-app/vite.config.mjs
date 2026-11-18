import { babel } from '@rollup/plugin-babel';
import { classicEmberSupport, ember, extensions } from '@embroider/vite';
import { defineConfig } from 'vite';

import { ossLessPaths } from '@upfluence/oss-components/build/less-paths.cjs';
import { assetMap } from '@upfluence/oss-components/build/vite-asset-map.mjs';

export default defineConfig({
  define: {
    'import.meta.env.COVERAGE': JSON.stringify(process.env.COVERAGE === 'true')
  },
  css: {
    preprocessorOptions: {
      less: {
        // The OSS styles rely on Less 3 math (`16 / @rem`). less is pinned to 4.2.2: 4.9.1 fails on their `rgb(from …)`.
        math: 'always',
        // They import bootstrap's LESS by bare name, resolved next to oss-components.
        paths: ossLessPaths()
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
    assetMap()
  ]
});
