const PLACEHOLDER = '__UPFLUENCE_ASSET_MAP__';

// Vite serves app and addon public assets unfingerprinted, so the manifest only carries the root URL.
export function assetMapContent(rootURL = '/') {
  return encodeURIComponent(JSON.stringify({ assets: {}, prepend: '', rootURL, enabled: false }));
}

export function assetMapMeta(rootURL = '/') {
  return `<meta name="upfluence:asset-map" content="${assetMapContent(rootURL)}" />`;
}

export function upfluenceAssetMap() {
  let rootURL = '/';

  return {
    name: 'upfluence-asset-map',
    configResolved(config) {
      rootURL = config.base;
    },
    transformIndexHtml(html) {
      return html.replaceAll(PLACEHOLDER, assetMapContent(rootURL));
    }
  };
}
