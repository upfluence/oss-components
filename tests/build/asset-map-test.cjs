'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { test } = require('node:test');
const { Builder } = require('broccoli');
const AssetRev = require('broccoli-asset-rev');
const mergeTrees = require('broccoli-merge-trees');
const { injectAssetMap } = require('../../build/classic-asset-map.cjs');

const html = '<meta name="upfluence:asset-map" content="__UPFLUENCE_ASSET_MAP__">';
const appAsset = 'assets/images/consumer.svg';
const addonAsset = '@upfluence/oss-components/assets/images/addon.svg';

function fixture(t, files = {}) {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'upfluence-asset-map-'));
  t.after(() => fs.rmSync(directory, { recursive: true, force: true }));
  for (const [file, contents] of Object.entries({ 'index.html': html, 'tests/index.html': html, ...files })) {
    const target = path.join(directory, file);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.writeFileSync(target, contents);
  }
  return directory;
}

async function build(t, input, options) {
  const builder = new Builder(injectAssetMap(input, options));
  t.after(() => builder.cleanup());
  await builder.build();
  return builder.outputPath;
}

function manifestAt(output, file = 'index.html') {
  const contents = fs.readFileSync(path.join(output, file), 'utf8');
  const content = contents.match(/content="([^"]*)"/)[1];
  return JSON.parse(decodeURIComponent(content));
}

for (const fingerprintAssetMap of [false, true]) {
  test(`consumer final build includes app and addon assets (hashed manifest: ${fingerprintAssetMap})`, async (t) => {
    const input = fixture(t, {
      [appAsset]: '<svg>app</svg>',
      [addonAsset]: '<svg>addon</svg>',
      'assets/app.js': 'console.log("app")'
    });
    const fingerprint = {
      enabled: true,
      generateAssetMap: true,
      fingerprintAssetMap,
      extensions: ['svg', 'js'],
      prepend: 'https://cdn.example.com/'
    };
    const output = await build(t, new AssetRev(input, fingerprint), { fingerprint });
    const manifest = manifestAt(output);
    assert.deepEqual(manifestAt(output, 'tests/index.html'), manifest);
    assert.equal(manifest.prepend, fingerprint.prepend);
    for (const logical of [appAsset, addonAsset, 'assets/app.js']) {
      assert.notEqual(manifest.assets[logical], logical);
      assert.ok(fs.existsSync(path.join(output, manifest.assets[logical])));
    }
    assert.equal(fs.readFileSync(path.join(input, 'index.html'), 'utf8'), html, 'does not mutate the input tree');
  });
}

test('supports explicit custom manifest paths', async (t) => {
  const input = fixture(t, { [appAsset]: '<svg/>' });
  const fingerprint = {
    enabled: true,
    generateAssetMap: true,
    assetMapPath: 'assets/consumer-map.json',
    extensions: ['svg']
  };
  const output = await build(t, new AssetRev(input, fingerprint), { fingerprint });
  assert.ok(manifestAt(output).assets[appAsset]);
});

test('development does not require a manifest and preserves the consumer rootURL', async (t) => {
  const output = await build(t, fixture(t), {
    fingerprint: { enabled: false, prepend: 'https://unused.example.com/' },
    rootURL: '/plugin/'
  });
  assert.deepEqual(manifestAt(output), { assets: {}, prepend: '', enabled: false, rootURL: '/plugin/' });
});

test('rejects enabled fingerprinting without manifest generation', (t) => {
  assert.throws(() => injectAssetMap(fixture(t), { fingerprint: { enabled: true } }), /generateAssetMap/);
});

test('fails when the production manifest is missing', async (t) => {
  await assert.rejects(
    build(t, fixture(t), { fingerprint: { enabled: true, generateAssetMap: true } }),
    /Expected one final asset manifest/
  );
});

test('rejects an invalid manifest', async (t) => {
  const input = fixture(t, { 'assets/assetMap.json': JSON.stringify({ assets: { image: 42 }, prepend: '' }) });
  await assert.rejects(
    build(t, input, { fingerprint: { enabled: true, generateAssetMap: true } }),
    /Invalid asset manifest/
  );
});

test('rejects ambiguous manifests', async (t) => {
  const content = JSON.stringify({ assets: {}, prepend: '' });
  const input = fixture(t, { 'assets/assetMap-abcd.json': content, 'assets/assetMap-1234.json': content });
  await assert.rejects(
    build(t, input, { fingerprint: { enabled: true, generateAssetMap: true } }),
    /Set fingerprint.assetMapPath/
  );
});

test('rejects missing placeholders and active IFA integration', async (t) => {
  for (const entry of ['<html></html>', `${html}<meta name="ember-cli-ifa:assetMap">`]) {
    await assert.rejects(
      build(t, fixture(t, { 'index.html': entry }), { fingerprint: { enabled: false } }),
      /placeholder|Remove ember-cli-ifa/
    );
  }
});

test('rebuilds inject the new manifest, not stale data', async (t) => {
  const manifest = (url) => JSON.stringify({ assets: { [appAsset]: url }, prepend: '' });
  const input = fixture(t, { 'assets/assetMap.json': manifest('assets/images/before.svg') });
  const fingerprint = { enabled: true, generateAssetMap: true };
  const builder = new Builder(injectAssetMap(input, { fingerprint }));
  t.after(() => builder.cleanup());
  await builder.build();
  const before = manifestAt(builder.outputPath).assets[appAsset];
  fs.writeFileSync(path.join(input, 'assets/assetMap.json'), manifest('assets/images/after.svg'));
  await builder.build();
  assert.notEqual(manifestAt(builder.outputPath).assets[appAsset], before);
});

test('preserves symlink-backed cached HTML across non-HTML rebuilds', async (t) => {
  const source = fixture(t, { 'assets/app.js': 'before' });
  const input = fixture(t);
  for (const relative of ['index.html', 'tests/index.html']) {
    fs.unlinkSync(path.join(input, relative));
    fs.symlinkSync(path.join(source, relative), path.join(input, relative));
  }
  const builder = new Builder(
    injectAssetMap(mergeTrees([input, source], { overwrite: true }), { fingerprint: { enabled: false } })
  );
  t.after(() => builder.cleanup());
  await builder.build();
  assert.equal(fs.lstatSync(path.join(builder.outputPath, 'index.html')).isSymbolicLink(), false);
  assert.equal(fs.lstatSync(path.join(builder.outputPath, 'tests/index.html')).isSymbolicLink(), false);
  assert.equal(fs.readFileSync(path.join(source, 'index.html'), 'utf8'), html);
  assert.equal(fs.readFileSync(path.join(source, 'tests/index.html'), 'utf8'), html);
  fs.writeFileSync(path.join(source, 'assets/app.js'), 'after');
  await builder.build();
  assert.equal(manifestAt(builder.outputPath).enabled, false);
  assert.equal(fs.readFileSync(path.join(source, 'index.html'), 'utf8'), html);
  assert.equal(fs.readFileSync(path.join(source, 'tests/index.html'), 'utf8'), html);
});
