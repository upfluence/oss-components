'use strict';

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      legacyDecorators: true
    }
  },
  plugins: ['ember'],
  extends: ['eslint:recommended', 'plugin:ember/recommended', 'plugin:prettier/recommended'],
  env: {
    browser: true
  },
  rules: {
    'no-multiple-empty-lines': [2, { max: 1 }],

    'ember/no-jquery': 'off',
    'ember/no-observers': 'off',
    'ember/no-new-mixins': 'off',
    'ember/no-mixins': 'off',
    'ember/no-get': 'off',
    'ember/avoid-leaking-state-in-ember-objects': 'off',
    'ember/closure-actions': 'off',
    'ember/no-global-jquery': 'off',
    'ember/no-classic-classes': 'off',
    'ember/no-classic-components': 'off',
    'ember/require-tagless-components': 'off',
    'ember/no-actions-hash': 'off',
    'ember/no-component-lifecycle-hooks': 'off'
  },
  overrides: [
    // node files
    {
      files: [
        '.eslintrc.js',
        '.template-lintrc.js',
        'ember-cli-build.js',
        'index.js',
        'testem.js',
        'blueprints/*/index.js',
        'config/**/*.js',
        'tests/dummy/config/**/*.js'
      ],
      excludedFiles: ['addon/**', 'addon-test-support/**', 'app/**', 'tests/dummy/app/**'],
      parserOptions: {
        sourceType: 'script'
      },
      env: {
        browser: false,
        node: true
      },
      plugins: ['node'],
      rules: {}
    }
  ]
};
