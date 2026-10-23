'use strict';

const fs = require('node:fs');
const path = require('node:path');
const Plugin = require('broccoli-plugin');

const PLACEHOLDER = '__UPFLUENCE_ASSET_MAP__';
const PREFIX = '[upfluence asset-map]';

function validateManifest(manifest) {
  if (
    !manifest ||
    !manifest.assets ||
    typeof manifest.assets !== 'object' ||
    Array.isArray(manifest.assets) ||
    Object.values(manifest.assets).some((value) => typeof value !== 'string') ||
    typeof manifest.prepend !== 'string'
  ) {
    throw new Error(`${PREFIX} Invalid asset manifest.`);
  }
  return manifest;
}

function relativePath(file) {
  if (path.isAbsolute(file) || file.split(/[\\/]/).includes('..')) {
    throw new Error(`${PREFIX} Expected an output-relative path: ${file}`);
  }
  return file;
}

function readManifest(directory, fingerprint) {
  if (fingerprint.assetMapPath) {
    return validateManifest(
      JSON.parse(fs.readFileSync(path.join(directory, relativePath(fingerprint.assetMapPath)), 'utf8'))
    );
  }

  const assetsDirectory = path.join(directory, 'assets');
  const files = fs.existsSync(assetsDirectory)
    ? fs.readdirSync(assetsDirectory).filter((file) => /^assetMap(?:-[a-f\d]+)?\.json$/.test(file))
    : [];
  const candidates = files.map((file) => ({
    file: `assets/${file}`,
    manifest: validateManifest(JSON.parse(fs.readFileSync(path.join(assetsDirectory, file), 'utf8')))
  }));

  // broccoli-asset-rev can emit a manifest in each fingerprinting pass.
  // The final manifest references the earlier manifest; never pick by directory order.
  const final = candidates.filter((candidate) =>
    candidates.every((other) => other === candidate || Object.values(candidate.manifest.assets).includes(other.file))
  );
  if (final.length !== 1) {
    throw new Error(
      `${PREFIX} Expected one final asset manifest, found ${final.length}. Set fingerprint.assetMapPath explicitly.`
    );
  }
  return final[0].manifest;
}

class AssetMapInjection extends Plugin {
  constructor(input, { fingerprint = {}, rootURL = '/', htmlPaths = ['index.html', 'tests/index.html'] } = {}) {
    super([input], { annotation: 'Inject consumer asset map', persistentOutput: false });
    if (fingerprint.enabled !== false && !fingerprint.generateAssetMap) {
      throw new Error(`${PREFIX} Enable fingerprint.generateAssetMap in the consuming app.`);
    }
    this.fingerprint = fingerprint;
    this.rootURL = rootURL;
    this.htmlPaths = htmlPaths.map(relativePath);
  }

  build() {
    const input = this.inputPaths[0];
    const enabled = this.fingerprint.enabled !== false;
    const manifest = enabled ? readManifest(input, this.fingerprint) : { assets: {}, prepend: '' };
    const payload = encodeURIComponent(JSON.stringify({ ...manifest, enabled, rootURL: this.rootURL }));

    fs.cpSync(input, this.outputPath, { recursive: true, dereference: true });
    let injected = 0;
    for (const relative of this.htmlPaths) {
      const file = path.join(this.outputPath, relative);
      if (!fs.existsSync(file)) continue;
      const html = fs.readFileSync(file, 'utf8');
      if (html.includes('ember-cli-ifa:assetMap')) {
        throw new Error(`${PREFIX} Remove ember-cli-ifa from the consuming app and its active dependencies.`);
      }
      if (html.split(PLACEHOLDER).length !== 2) {
        throw new Error(`${PREFIX} Expected exactly one ${PLACEHOLDER} placeholder in ${relative}.`);
      }
      // Detach copied symlinks or hard links before writing into the output tree.
      // Cached upstream HTML must retain its placeholder for subsequent builds.
      fs.unlinkSync(file);
      fs.writeFileSync(file, html.replace(PLACEHOLDER, payload));
      injected++;
    }
    if (!injected) throw new Error(`${PREFIX} No consumer HTML entry points found.`);
  }
}

module.exports = {
  injectAssetMap(input, options) {
    return new AssetMapInjection(input, options);
  }
};
