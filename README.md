# Upfluence OSS Components

Shared branded Ember components, helpers, modifiers, services, translations, and LESS styles.

## Compatibility

- Ember 3.28 and 4.12; classic apps require ember-auto-import 2 and Webpack 5.
- Node 20, 22, or 24; use Node 24 for workspace linting and pnpm 10 for development. CI runs Ember compatibility tests on Node 20.

## Installation and styles

Install `@upfluence/oss-components`. Import the umbrella stylesheet before application overrides:

```less
@import '@upfluence/oss-components/styles/oss-components.less';
```

Configure the consuming LESS compiler to resolve packages from the app's `node_modules` and OSS's dependency directory (for the preserved Bootstrap LESS imports):

```js
const path = require('node:path');
const ossRoot = path.dirname(require.resolve('@upfluence/oss-components/package.json'));
// Merge these options into your EmberApp configuration:
const options = {
  lessOptions: {
    paths: [path.join(ossRoot, 'node_modules'), 'node_modules']
  }
};
```

The entire LESS hierarchy, including variables and mixins, remains available under `styles/`. Styles are compiled by the consuming application; components do not inject CSS at runtime.

FontAwesome is owned by the consuming app: install your licensed FontAwesome package, include its CSS before OSS styles, and serve its matching webfonts. OSS does not install or copy FontAwesome. The workspace test app demonstrates this integration.

### Breaking migration changes

- Change `/app/styles/...` imports to `/styles/...`.
- Change `@upfluence/oss-components/addon/...` imports to canonical `@upfluence/oss-components/...` imports.
- Remove TypeScript `paths` mappings to this package's old `addon` and `addon-test-support` directories. Public exports resolve generated declarations directly.
- Import helpers from `/test-support` or its documented subpaths. Test consumers provide QUnit, qunit-dom, Sinon, and Ember test helpers.
- Existing component resolver names, including aliases, remain available.

### Consumer-owned asset maps

Follow [Consumer-owned asset maps](docs/asset-map.md). The consuming app explicitly calls `injectAssetMap` from `@upfluence/oss-components/build/classic-asset-map.cjs`; addon hooks do not activate it. Remove competing ember-cli-ifa registrations when adopting this adapter.

## Development

This is a pnpm workspace with the published addon in `packages/oss-components` and its demo, tests, and Storybook in `packages/test-app`.

```sh
pnpm install
pnpm build
pnpm start
```

`pnpm start` runs Rollup watch and Ember serve through pnpm's native parallel runner. `pnpm storybook` builds the addon and test app before opening Storybook on port 6006. `pnpm build-storybook` produces `packages/test-app/storybook-static`.

```sh
pnpm lint
pnpm typecheck
pnpm test
pnpm test:coverage
pnpm test:ember-compatibility
pnpm --filter @upfluence/oss-components build:analyze
```

Root `test` builds the addon, runs Node asset-map build tests, then runs browser tests. Root `test:coverage` enables Istanbul for the entire build/test sequence and writes `packages/test-app/coverage/lcov.info`; both CI and `make sonar-report` use that command. It verifies addon source records and normalizes LCOV paths to the repository root for SonarQube. A regular rebuild removes instrumentation before packaging. Templates retain their existing runtime behavior; migrating legacy component signatures to full Glint template checking is separate work.

Git hooks remain opt-in through `make enable_pre_hook`. No install or default Make target installs them.

## Packaging and release

`prepack` builds JavaScript and declarations. Verify with `npm pack --dry-run` from `packages/oss-components`. Runtime exports, styles, public assets, translations, the CommonJS asset-map wrapper, and the template lint plugin are included; stories and test-app files are excluded.

Release versioning uses root `pnpm exec release-it major`; tagged CI publishes from the addon package to GitHub Packages after checks and both Ember scenarios pass. Use `pnpm exec release-it major --dry-run --ci` to inspect the release workflow. The migration itself does not publish or change versions.

Use a packed package or verified local links for consumer validation. Do not commit machine-local links or restore old stylesheet paths as compatibility shims.
