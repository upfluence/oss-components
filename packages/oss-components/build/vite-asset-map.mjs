import { createHash } from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';

import assetMapHTML from './asset-map-html.cjs';

const { PREFIX, injectManifest } = assetMapHTML;

const DEFAULT_EXTENSIONS = ['png', 'jpg', 'jpeg', 'gif', 'svg', 'webp', 'avif', 'ico'];

function isAbsoluteURL(url) {
  return /^(?:[a-z][a-z\d+.-]*:)?\/\//i.test(url);
}

function prefixFor(base) {
  if (isAbsoluteURL(base)) return { prepend: base, rootURL: '/' };
  if (base.startsWith('/')) return { prepend: '', rootURL: base };
  throw new Error(
    `${PREFIX} Set Vite's base to an absolute path or URL; a relative base ("${base}") breaks nested routes.`
  );
}

function hashedFileName(fileName, source) {
  const hash = createHash('sha256').update(source).digest('hex').slice(0, 16);
  const extension = path.posix.extname(fileName);
  return `${fileName.slice(0, fileName.length - extension.length)}-${hash}${extension}`;
}

function publicFiles(directory, relative = '') {
  return fs.readdirSync(path.join(directory, relative)).flatMap((entry) => {
    const file = path.posix.join(relative, entry);
    return fs.statSync(path.join(directory, file)).isDirectory() ? publicFiles(directory, file) : [file];
  });
}

/**
 * Fills the `upfluence:asset-map` meta of every HTML entry with the consumer's asset manifest.
 *
 * - `vite` (dev server): an empty, disabled map rooted at Vite's `base`.
 * - `vite build`: app `public/` files and addon public assets matching `extensions` get a content-hashed copy
 *   next to their stable one, and the map points each logical name to its hashed copy. An absolute `base`
 *   (CDN) becomes the manifest's `prepend`.
 *
 * @param {{ extensions?: string[] }} [options]
 * @returns {import('vite').Plugin}
 */
export function assetMap({ extensions = DEFAULT_EXTENSIONS } = {}) {
  const fingerprinted = new Set(extensions.map((extension) => extension.replace(/^\./, '').toLowerCase()));
  const matches = (file) => fingerprinted.has(path.posix.extname(file).slice(1).toLowerCase());
  let config;
  let hashed;

  function hashedAssets(bundle) {
    if (hashed) return hashed;
    const sources = new Map();
    for (const output of Object.values(bundle)) {
      if (output.type === 'asset' && !output.originalFileNames?.length && matches(output.fileName)) {
        sources.set(output.fileName, output.source);
      }
    }
    if (config.build.copyPublicDir !== false && config.publicDir && fs.existsSync(config.publicDir)) {
      for (const file of publicFiles(config.publicDir).filter(matches)) {
        sources.set(file, fs.readFileSync(path.join(config.publicDir, file)));
      }
    }
    hashed = [...sources].map(([logical, source]) => ({ logical, fileName: hashedFileName(logical, source), source }));
    return hashed;
  }

  return {
    name: 'upfluence-asset-map',

    configResolved(resolved) {
      config = resolved;
      if (config.command === 'build') prefixFor(config.base);
    },

    renderStart() {
      hashed = undefined;
    },

    generateBundle(_options, bundle) {
      for (const { fileName, source } of hashedAssets(bundle)) {
        this.emitFile({ type: 'asset', fileName, source });
      }
    },

    transformIndexHtml: {
      order: 'post',
      handler(html, { path: htmlPath, bundle }) {
        const manifest =
          config.command === 'build'
            ? {
                assets: Object.fromEntries(hashedAssets(bundle).map(({ logical, fileName }) => [logical, fileName])),
                ...prefixFor(config.base),
                enabled: true
              }
            : { assets: {}, prepend: '', rootURL: config.base, enabled: false };
        return injectManifest(html, manifest, htmlPath.replace(/^\/+/, ''));
      }
    }
  };
}
