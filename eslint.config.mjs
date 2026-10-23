import { defineConfig } from 'eslint/config';
import { buildConfiguration, DEFAULT_NODE_FILES } from '@upfluence/w-conf/eslint';

export default defineConfig(
  ...buildConfiguration(
    {
      ignores: [
        '**/node_modules/**',
        '**/dist/**',
        '**/declarations/**',
        '**/coverage/**',
        '**/tmp/**',
        '**/storybook-static/**',
        '**/.node_modules.ember-try/**'
      ],
      testFiles: ['packages/test-app/tests/**/*-test.{js,ts}'],
      nodeFiles: [
        ...DEFAULT_NODE_FILES,
        '**/*.config.mjs',
        '**/.template-lintrc.js',
        '**/.storybook/main.js',
        'packages/*/config/**/*.js',
        'packages/*/ember-cli-build.js',
        'packages/*/testem.js',
        'packages/*/linters/**/*.js'
      ]
    },
    { files: ['**/*.mjs'], languageOptions: { sourceType: 'module' } }
  )
);
