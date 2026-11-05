import { setupTest } from 'ember-qunit';
import { module, test } from 'qunit';
import sinon from 'sinon';

import { type default as AssetMapService, AssetURLTable } from '@upfluence/oss-components/services/asset-map';

module('Unit | Service | asset-map', function (hooks) {
  setupTest(hooks);

  test('reads the manifest injected into the consuming application', function (assert) {
    const service = this.owner.lookup('service:asset-map') as AssetMapService;
    const meta = document.querySelector<HTMLMetaElement>('meta[name="upfluence:asset-map"]')!;
    const manifest = JSON.parse(decodeURIComponent(meta.content));
    const logical = Object.keys(manifest.assets)[0] ?? 'assets/images/consumer.svg';
    assert.ok(service);
    assert.strictEqual(service.resolve(logical), new AssetURLTable(manifest).resolve(logical));
  });

  test('resolves app and addon assets, and preserves already resolved URLs', function (assert) {
    const service = this.owner.lookup('service:asset-map') as AssetMapService;
    service.configure({
      assets: {
        'assets/logo.svg': 'assets/logo-123.svg',
        '@upfluence/hypermarket/icon.svg': '@upfluence/hypermarket/icon-456.svg'
      },
      prepend: 'https://cdn.example.com/'
    });
    assert.strictEqual(service.resolve('assets/logo.svg'), 'https://cdn.example.com/assets/logo-123.svg');
    assert.strictEqual(
      service.resolve('/@upfluence/hypermarket/icon.svg'),
      'https://cdn.example.com/@upfluence/hypermarket/icon-456.svg'
    );
    assert.strictEqual(service.resolve(service.resolve('assets/logo.svg')), service.resolve('assets/logo.svg'));
    assert.strictEqual(service.resolve('assets/logo-123.svg'), 'https://cdn.example.com/assets/logo-123.svg');
  });

  test('absolute, protocol-relative, data and blob URLs pass through', function (assert) {
    assert.expect(5);
    const table = new AssetURLTable({ assets: {}, prepend: 'https://cdn.example.com/' });
    for (const url of [
      'https://other.example.com/a.png',
      '//other.example.com/a.png',
      'data:image/svg+xml,test',
      'blob:https://example.com/test',
      ''
    ]) {
      assert.strictEqual(table.resolve(url), url);
    }
  });

  test('URL tables do not share consumer configuration', function (assert) {
    const first = new AssetURLTable({ assets: { 'logo.svg': 'first.svg' }, prepend: '/first/' });
    const second = new AssetURLTable({ assets: { 'logo.svg': 'second.svg' }, prepend: '/second/' });
    assert.strictEqual(first.resolve('logo.svg'), '/first/first.svg');
    assert.strictEqual(second.resolve('logo.svg'), '/second/second.svg');
    assert.strictEqual(first.resolve('logo.svg'), '/first/first.svg');
  });

  test('service instances do not share consumer configuration', function (assert) {
    assert.expect(2);
    const factory = this.owner.factoryFor('service:asset-map')!;
    const first = factory.create() as AssetMapService;
    const second = factory.create() as AssetMapService;
    try {
      first.configure({ assets: { 'logo.svg': 'first.svg' }, prepend: '/first/' });
      second.configure({ assets: { 'logo.svg': 'second.svg' }, prepend: '/second/' });
      assert.strictEqual(first.resolve('logo.svg'), '/first/first.svg');
      assert.strictEqual(second.resolve('logo.svg'), '/second/second.svg');
    } finally {
      first.destroy();
      second.destroy();
    }
  });

  test('development and missing entries use the consumer base path', function (assert) {
    const table = new AssetURLTable({ assets: {}, prepend: '', rootURL: '/plugin/', enabled: false });
    assert.strictEqual(table.resolve('assets/logo.svg'), '/plugin/assets/logo.svg');
    assert.strictEqual(table.resolve('/assets/logo.svg'), '/plugin/assets/logo.svg');
    assert.strictEqual(table.resolve('/plugin/assets/logo.svg'), '/plugin/assets/logo.svg');
  });

  test('missing entries warn once and fall back without prototype lookups', function (assert) {
    assert.expect(5);
    const service = this.owner.lookup('service:asset-map') as AssetMapService;
    service.configure({ assets: {}, prepend: '/cdn/' });
    const warning = sinon.stub(console, 'warn');
    try {
      assert.strictEqual(service.resolve('missing.svg'), '/cdn/missing.svg');
      assert.strictEqual(service.resolve('missing.svg'), '/cdn/missing.svg');
      assert.strictEqual(warning.callCount, 1);
      assert.strictEqual(service.resolve('constructor'), '/cdn/constructor');
      assert.strictEqual(warning.callCount, 2);
    } finally {
      warning.restore();
    }
  });

  test('already fingerprinted names and development fallbacks do not warn', function (assert) {
    assert.expect(3);
    const service = this.owner.lookup('service:asset-map') as AssetMapService;
    service.configure({ assets: { 'logo.svg': 'logo-123.svg' }, prepend: '/consumer/' });
    const warning = sinon.stub(console, 'warn');
    try {
      assert.strictEqual(service.resolve('logo-123.svg'), '/consumer/logo-123.svg');
      service.configure({ assets: {}, prepend: '', rootURL: '/plugin/', enabled: false });
      assert.strictEqual(service.resolve('missing.svg'), '/plugin/missing.svg');
      assert.true(warning.notCalled);
    } finally {
      warning.restore();
    }
  });

  test('configuration snapshots the supplied manifest', function (assert) {
    const service = this.owner.lookup('service:asset-map') as AssetMapService;
    const manifest = { assets: { 'logo.svg': 'first.svg' }, prepend: '/first/' };
    service.configure(manifest);
    manifest.assets['logo.svg'] = 'mutated.svg';
    assert.strictEqual(service.resolve('logo.svg'), '/first/first.svg');
  });

  test('rejects malformed manifest data', function (assert) {
    assert.expect(5);
    const service = this.owner.lookup('service:asset-map') as AssetMapService;
    for (const manifest of [
      null,
      {},
      { assets: [], prepend: '' },
      { assets: { logo: 42 }, prepend: '' },
      { assets: {}, prepend: '', enabled: 'true' }
    ]) {
      // Invalid input can arrive from the build payload or an alternative integration.
      assert.throws(() => service.configure(manifest as never), /Invalid consumer manifest/);
    }
  });
});
