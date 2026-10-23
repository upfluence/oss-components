# Consumer-owned asset maps

OSS provides an `asset-map` service/helper implementation through its v2 `app-js` registrations and an explicitly imported classic-build utility. No build integration is activated by OSS addon hooks.

## Ownership

- The consuming app builds and fingerprints its complete asset output, including assets supplied by addons.
- `injectAssetMap` wraps that final build tree and injects the consumer's completed manifest into its HTML.
- OSS publishes runtime code, not a manifest or environment-specific URLs.
- OSS's `app-js` service and helper mappings register the implementation in the consumer, including the test app. Each service instance owns its URL table.

## Classic app setup

In the consuming app's `ember-cli-build.js`:

```js
const { injectAssetMap } = require('@upfluence/oss-components/build/classic-asset-map.cjs');

// Inside the existing EmberApp configuration:
fingerprint: {
  generateAssetMap: true,
  assetMapPath: 'assets/upfluence-asset-map.json',
  // Keep the consumer's existing enabled, prepend, and extensions settings.
}

// Instead of returning app.toTree() directly:
return injectAssetMap(app.toTree(), {
  fingerprint: app.options.fingerprint,
  rootURL: app.project.config(app.env).rootURL
});
```

The utility requires Node 16.7+ (`fs.cpSync`); the plugin-web pilot uses Node 20. An explicit manifest path avoids ambiguity between broccoli-asset-rev's fingerprinting passes. Default fingerprinted asset-map filenames are also supported: the final manifest is identified through references to earlier manifests, not directory order.

Add this marker to `app/index.html` and `tests/index.html`:

```html
<meta name="upfluence:asset-map" content="__UPFLUENCE_ASSET_MAP__" />
```

No consumer-local service/helper re-exports are needed: OSS supplies them through v2 `app-js` mappings. Resolution and manifest validation live alongside the service in `packages/oss-components/src/services/asset-map.ts`.

Remove `ember-cli-ifa` and its `ifa` environment configuration in the same consumer change. Existing template helpers and `assetMap.resolve(path)` calls stay unchanged.

The wrapper rejects an IFA meta tag, including one injected by an active transitive dependency. Missing/invalid production manifests, ambiguous manifests, or missing HTML markers fail the build. Development builds with fingerprinting disabled receive an empty map and the consumer's rootURL; no production CDN prefix is applied.

## Resolution contract

- Logical names resolve to manifest output paths with the consumer's CDN prepend, or its rootURL when no prepend exists.
- Leading slashes on logical names are normalized.
- Already resolved URLs, external URLs, protocol-relative URLs, and data/blob URLs pass through.
- Empty helper input produces no URL.
- Missing entries fall back to the prefixed logical path and warn once per key per URL-table instance in development builds when fingerprinting is enabled.
- Reconfiguring a service with `configure(manifest)` updates consumers through tracked state.

Browser instances read the owning page's meta tag when instantiated. Non-browser integrations must supply a manifest through `configure()` before resolving any paths; this is not a complete FastBoot integration.

## Pilot and release sequencing

Only plugin-web is migrated in this pilot. Its installed OSS package must be replaced with this local implementation (or a newly published version) before the pilot can build. The existing registry version 3.99.9 does not contain the new build utility. Do not commit machine-local linking overrides.

For local integration, install a packed addon or verify a local link points to `packages/oss-components` and that `dist` exists. Do not commit local overrides. Reinstalling dependencies can replace local links. Before deploying, publish the updated OSS package and update plugin-web to that release; no release version was chosen in this change.

Adopting this OSS change is a dependency-contract change: its app re-exports register the owned adapter automatically, so every adopting consumer must remove IFA and configure the wrapper together. Unmigrated apps should stay on the older OSS release until migrated; adding IFA directly would create competing registrations. This pilot does not edit those other apps.

The OSS v2 package preserves the Node utility as an explicit package export, runtime modules as ordinary exports, and consumer registrations through `app-js` mappings. Classic consumers can keep using the wrapper. A Vite integration will produce the same logical-name-to-URL table without broccoli-asset-rev; it is not implemented here.

## Validation

```sh
pnpm test:asset-map-build
pnpm typecheck
pnpm --filter test-app exec ember test --filter='asset-map' --launch=Chrome
```

Build tests exercise real broccoli-asset-rev output with app-owned and namespaced addon-owned assets, CDN prepend, hashed/default/custom manifests, disabled fingerprinting, repeated builds, and error paths. Ember tests cover the service, independent instances, helper output, and reactive configuration.

Before accepting the plugin-web pilot, run its development and production builds with the local/new OSS package, then check dynamically selected login images, branding logos, locked-state illustrations, profile empty-state images, and OSS upload/social badges. Verify CDN URLs point to actual emitted files.

In plugin-web, run the consumer browser test both normally and with fingerprinting enabled in the test environment:

```sh
pnpm exec ember test --filter='asset-map consumer' --launch=Chrome --test-port=0
CDN_URL=/ pnpm exec ember test --filter='asset-map consumer' --launch=Chrome --test-port=0
```

Build production separately with the intended CDN prefix. Using `--environment=production` for this isolated test also activates the app's normal production autoboot configuration; it is not the same as enabling fingerprinting in the test environment.
