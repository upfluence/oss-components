'use strict';

// Shared by the classic (Broccoli) and Vite adapters so both reject the same HTML the same way.

const PLACEHOLDER = '__UPFLUENCE_ASSET_MAP__';
const PREFIX = '[upfluence asset-map]';

function injectManifest(html, manifest, label) {
  if (html.includes('ember-cli-ifa:assetMap')) {
    throw new Error(`${PREFIX} Remove ember-cli-ifa from the consuming app and its active dependencies.`);
  }

  if (html.split(PLACEHOLDER).length !== 2) {
    throw new Error(`${PREFIX} Expected exactly one ${PLACEHOLDER} placeholder in ${label}.`);
  }

  const payload = encodeURIComponent(JSON.stringify(manifest));

  return html.replace(PLACEHOLDER, () => payload);
}

module.exports = { PLACEHOLDER, PREFIX, injectManifest };
