import { render } from '@ember/test-helpers';

import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Integration | Component | o-s-s/smart/blob', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.loading = false;
    await render(hbs`<OSS::Smart::Blob @loading={{this.loading}} />`);

    assert.dom('.smart-blob').exists();
  });

  test('the inactive GIF has class fade-in when loading is false', async function (assert) {
    await render(hbs`<OSS::Smart::Blob @loading={{this.loading}} />`);

    const images = this.element.querySelectorAll('img');
    const inactiveImg = Array.from(images).find((img: Element) =>
      img.getAttribute('src')?.includes('smart-blob-inactive.gif')
    ) as HTMLImageElement;

    assert.ok(inactiveImg, 'Found the inactive GIF');
    assert.ok(inactiveImg?.classList.contains('fade-in'));
  });

  test('the active GIF has class fade-in when loading is true', async function (assert) {
    this.loading = true;
    await render(hbs`<OSS::Smart::Blob @loading={{this.loading}} />`);

    const images = this.element.querySelectorAll('img');
    const active = Array.from(images).find((img: Element) =>
      img.getAttribute('src')?.includes('smart-blob-loading.gif')
    ) as HTMLImageElement;

    assert.ok(active, 'Found the active GIF');
    assert.ok(active?.classList.contains('fade-in'));
  });

  module('@size', function () {
    ['xs', 'sm', 'md', 'xl'].forEach((size) => {
      test(`it applies the correct size class for @size='${size}'`, async function (assert) {
        this.set('size', size);
        await render(hbs`<OSS::Smart::Blob @size={{this.size}} />`);

        assert.dom('.smart-blob-container').hasClass(`smart-blob-container--${size}`);
      });
    });

    test('it defaults to md size', async function (assert) {
      await render(hbs`<OSS::Smart::Blob />`);

      assert.dom('.smart-blob-container').hasClass('smart-blob-container--md');
    });
  });
});
