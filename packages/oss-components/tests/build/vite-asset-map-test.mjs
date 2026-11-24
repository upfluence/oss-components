import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';
import { build, createServer } from 'vite';

import { assetMap } from '../../build/vite-asset-map.mjs';

const marker = '<meta name="upfluence:asset-map" content="__UPFLUENCE_ASSET_MAP__">';
const ifaMeta = '<meta name="ember-cli-ifa:assetMap" content="{}">';
const appAsset = 'assets/images/consumer.svg';
const addonAsset = '@upfluence/oss-components/assets/images/addon.svg';

function page(head = marker) {
  return `<!doctype html><html><head>${head}</head><body><script type="module" src="/main.js"></script></body></html>`;
}

function fixture(t, files = {}) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'upfluence-vite-asset-map-'));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  const defaults = {
    'index.html': page(),
    'tests/index.html': page(),
    'main.js': 'import logo from "./logo.svg";\ndocument.body.dataset.logo = logo;\n',
    'logo.svg': '<svg>imported</svg>',
    [`public/${appAsset}`]: '<svg>app</svg>',
    'public/assets/fonts/body.woff2': 'font',
    'public/robots.txt': 'ok'
  };
  for (const [file, contents] of Object.entries({ ...defaults, ...files })) {
    const target = path.join(root, file);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.writeFileSync(target, contents);
  }
  return root;
}

function addonPublicAssets() {
  return {
    name: 'stub-embroider-addon-public-assets',
    apply: 'build',
    buildStart() {
      this.emitFile({ type: 'asset', fileName: addonAsset, source: '<svg>addon</svg>' });
    }
  };
}

async function viteBuild(root, { base = '/', plugin = assetMap() } = {}) {
  const outDir = path.join(root, 'dist');
  await build({
    root,
    base,
    configFile: false,
    envFile: false,
    logLevel: 'silent',
    plugins: [addonPublicAssets(), plugin],
    build: {
      outDir,
      emptyOutDir: true,
      assetsInlineLimit: 0,
      rolldownOptions: {
        input: { main: path.join(root, 'index.html'), tests: path.join(root, 'tests/index.html') }
      }
    }
  });
  return outDir;
}

async function devServer(t, root, base = '/plugin/') {
  const server = await createServer({
    root,
    base,
    configFile: false,
    envFile: false,
    logLevel: 'silent',
    appType: 'custom',
    optimizeDeps: { noDiscovery: true, include: [] },
    server: { middlewareMode: true, ws: false },
    plugins: [assetMap()]
  });
  t.after(() => server.close());
  return (file) => server.transformIndexHtml(`/${file}`, fs.readFileSync(path.join(root, file), 'utf8'));
}

function manifestIn(html) {
  const content = html.match(/name="upfluence:asset-map" content="([^"]*)"/)[1];
  return JSON.parse(decodeURIComponent(content));
}

function manifestAt(outDir, file = 'index.html') {
  return manifestIn(fs.readFileSync(path.join(outDir, file), 'utf8'));
}

test('dev server injects an empty, disabled map rooted at the base', async (t) => {
  const transform = await devServer(t, fixture(t));
  for (const file of ['index.html', 'tests/index.html']) {
    assert.deepEqual(manifestIn(await transform(file)), {
      assets: {},
      prepend: '',
      rootURL: '/plugin/',
      enabled: false
    });
  }
});

test('build maps app public and addon public assets to hashed copies', async (t) => {
  const root = fixture(t);
  const outDir = await viteBuild(root);
  const manifest = manifestAt(outDir);

  assert.deepEqual(manifestAt(outDir, 'tests/index.html'), manifest);
  assert.equal(manifest.prepend, '');
  assert.equal(manifest.rootURL, '/');
  assert.equal(manifest.enabled, true);
  assert.deepEqual(Object.keys(manifest.assets).sort(), [addonAsset, appAsset].sort(), 'only public images are mapped');

  for (const logical of [appAsset, addonAsset]) {
    const hashed = manifest.assets[logical];
    assert.match(hashed, /-[\da-f]{16}\.svg$/);
    assert.equal(path.posix.dirname(hashed), path.posix.dirname(logical), 'keeps the directory layout');
    assert.equal(
      fs.readFileSync(path.join(outDir, hashed), 'utf8'),
      fs.readFileSync(path.join(outDir, logical), 'utf8')
    );
  }

  const viteHashed = fs.readdirSync(path.join(outDir, 'assets')).filter((file) => file.startsWith('logo-'));
  assert.equal(viteHashed.length, 1, 'Vite still fingerprints imported assets itself, once');
  assert.ok(fs.existsSync(path.join(outDir, 'robots.txt')));
});

test('an absolute base becomes the CDN prepend', async (t) => {
  const outDir = await viteBuild(fixture(t), { base: 'https://cdn.example.com/amb/' });
  const manifest = manifestAt(outDir);
  assert.equal(manifest.prepend, 'https://cdn.example.com/amb/');
  assert.equal(manifest.rootURL, '/');
  for (const hashed of Object.values(manifest.assets)) {
    assert.ok(fs.existsSync(path.join(outDir, hashed)), `${hashed} is an output-relative path`);
  }
});

test('build serves the OSS stylesheet assets as hashed files from the base', async (t) => {
  const variables = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../styles/core/_variables.less');
  const root = fixture(t, {
    'main.js': 'import "./styles.less";\n',
    'styles.less': `@import '${variables}';\n.flag { background-image: url('@{oss-assets-root}/images/flagSprite42.png'); }\n`
  });
  const outDir = await viteBuild(root, { base: 'https://cdn.example.com/amb/' });
  const css = fs
    .readdirSync(path.join(outDir, 'assets'))
    .filter((file) => file.endsWith('.css'))
    .map((file) => fs.readFileSync(path.join(outDir, 'assets', file), 'utf8'))
    .join('');
  const url = css.match(/url\(([^)]*flagSprite42[^)]*)\)/)[1];

  assert.match(url, /^https:\/\/cdn\.example\.com\/amb\/assets\/flagSprite42-[\w-]+\.png$/);
  assert.ok(fs.existsSync(path.join(outDir, url.replace('https://cdn.example.com/amb/', ''))));
});

test('dev server leaves the OSS stylesheet asset root alone', () => {
  assert.equal(assetMap().config({}, { command: 'serve', mode: 'development' }), undefined);
});

test('extensions narrows the fingerprinted files', async (t) => {
  const outDir = await viteBuild(fixture(t, { 'public/assets/images/photo.png': 'png' }), {
    plugin: assetMap({ extensions: ['.PNG'] })
  });
  assert.deepEqual(Object.keys(manifestAt(outDir).assets), ['assets/images/photo.png']);
});

test('rebuilds with the same plugin instance map the new content, not stale data', async (t) => {
  const root = fixture(t);
  const plugin = assetMap();
  const before = manifestAt(await viteBuild(root, { plugin })).assets[appAsset];
  fs.writeFileSync(path.join(root, 'public', appAsset), '<svg>changed</svg>');
  const after = manifestAt(await viteBuild(root, { plugin })).assets[appAsset];
  assert.notEqual(after, before);
  assert.equal(fs.readFileSync(path.join(root, 'dist', after), 'utf8'), '<svg>changed</svg>');
});

const invalidEntries = [
  ['a missing placeholder', page(''), /Expected exactly one __UPFLUENCE_ASSET_MAP__ placeholder in tests\/index\.html/],
  ['a duplicate placeholder', page(marker + marker), /Expected exactly one __UPFLUENCE_ASSET_MAP__ placeholder/],
  ['an active IFA integration', page(marker + ifaMeta), /Remove ember-cli-ifa/]
];

for (const [description, html, error] of invalidEntries) {
  test(`build rejects ${description}`, async (t) => {
    await assert.rejects(viteBuild(fixture(t, { 'tests/index.html': html })), error);
  });

  test(`dev server rejects ${description}`, async (t) => {
    const transform = await devServer(t, fixture(t, { 'tests/index.html': html }));
    await assert.rejects(transform('tests/index.html'), error);
  });
}

test('build rejects a relative base', async (t) => {
  await assert.rejects(viteBuild(fixture(t), { base: './' }), /relative base/);
});
