import { render, settled } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

import type AssetMapService from '@upfluence/oss-components/services/asset-map';

module('Integration | Helper | asset-map', function (hooks) {
  setupRenderingTest(hooks);

  test('uses the consumer service and reacts to manifest changes', async function (assert) {
    const service = this.owner.lookup('service:asset-map') as AssetMapService;
    service.configure({ assets: { 'assets/logo.svg': 'assets/logo-first.svg' }, prepend: '/consumer/' });
    await render(hbs`<img src={{asset-map "assets/logo.svg"}} alt="logo" />`);
    assert.dom('img').hasAttribute('src', '/consumer/assets/logo-first.svg');
    service.configure({ assets: { 'assets/logo.svg': 'assets/logo-second.svg' }, prepend: '/consumer/' });
    await settled();
    assert.dom('img').hasAttribute('src', '/consumer/assets/logo-second.svg');
  });

  test('empty input does not produce an asset URL', async function (assert) {
    await render(hbs`<img src={{asset-map ""}} alt="empty" />`);
    assert.dom('img').doesNotHaveAttribute('src');
  });
});
