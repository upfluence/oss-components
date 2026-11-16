import { Addon } from '@embroider/addon-dev/rollup';
import { babel } from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import copy from 'rollup-plugin-copy';
import { visualizer } from 'rollup-plugin-visualizer';

const addon = new Addon({ srcDir: 'src', destDir: 'dist' });

export default {
  output: addon.output(),
  plugins: [
    nodeResolve({ extensions: ['.ts', '.js'] }),
    addon.publicEntrypoints(['**/*.js', '**/*.ts'], {
      exclude: [
        '**/*.stories.*',
        'components/o-s-s/private/base-modal.*',
        'modifiers/install-scroll-reached-modifier.*'
      ]
    }),
    addon.appReexports(
      [
        'components/**/*.js',
        'helpers/**/*.js',
        'modifiers/**/*.js',
        'services/**/*.js',
        'instance-initializers/**/*.js'
      ],
      { exclude: ['components/o-s-s/private/**', 'components/wizard/base-step.js'] }
    ),
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
