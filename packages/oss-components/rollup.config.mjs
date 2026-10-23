import { Addon } from '@embroider/addon-dev/rollup';
import { babel } from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { readFileSync } from 'node:fs';
import copy from 'rollup-plugin-copy';
import { visualizer } from 'rollup-plugin-visualizer';

const addon = new Addon({ srcDir: 'src', destDir: 'dist' });
const reexports = JSON.parse(readFileSync(new URL('./app-reexports.json', import.meta.url)));

export default {
  output: addon.output(),
  plugins: [
    nodeResolve({ extensions: ['.ts', '.js'] }),
    addon.publicEntrypoints(['**/*.js', '**/*.ts'], { exclude: ['**/*.stories.*'] }),
    addon.appReexports(Object.keys(reexports), { exports: (filename) => reexports[filename] }),
    addon.publicAssets('public', { exclude: ['**/.DS_Store'] }),
    addon.dependencies(),
    babel({ babelHelpers: 'bundled', extensions: ['.js', '.ts'] }),
    addon.hbs(),
    addon.declarations('declarations'),
    addon.clean(),
    copy({
      targets: [
        { src: '../../README.md', dest: '.' },
        { src: '../../LICENSE.md', dest: '.' }
      ]
    }),
    ...(process.env.DEBUG ? [visualizer()] : [])
  ]
};
