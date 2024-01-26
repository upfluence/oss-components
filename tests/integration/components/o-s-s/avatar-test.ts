import { hbs } from 'ember-cli-htmlbars';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { find, render, setupOnerror, waitFor, waitUntil } from '@ember/test-helpers';

import { SizeDefinition, DEFAULT_IMAGE_URL } from '@upfluence/oss-components/components/o-s-s/avatar';

module('Integration | Component | o-s-s/avatar', function (hooks) {
  setupRenderingTest(hooks);

  module('Default behavior', function () {
    test('it displays the image when it is provided', async function (assert) {
      await render(hbs`<OSS::Avatar @image="http://foo.co/bar.png" />`);

      assert.dom('.upf-avatar').exists();
      assert.dom('.upf-avatar img').exists();
      assert.dom('.upf-avatar img').hasAttribute('src', 'http://foo.co/bar.png');
    });

    test('it displays the initials when they are provided', async function (assert) {
      await render(hbs`<OSS::Avatar @initials="TS" />`);

      assert.dom('.upf-avatar').exists();
      assert.dom('.upf-avatar span').exists();
      assert.dom('.upf-avatar span').hasText('TS');
    });

    test('it displays the default image when initials and image are not provided', async function (assert) {
      await render(hbs`<OSS::Avatar />`);

      assert.dom('.upf-avatar').exists();
      assert.dom('.upf-avatar img').exists();
      assert.dom('.upf-avatar img').hasAttribute('src', DEFAULT_IMAGE_URL);
    });

    test('it displays the image when image and initials are provided', async function (assert) {
      await render(hbs`<OSS::Avatar @image="http://foo.co/bar.png" @initials="TS" />`);

      assert.dom('.upf-avatar').exists();
      assert.dom('.upf-avatar img').exists();
      assert.dom('.upf-avatar img').hasAttribute('src', 'http://foo.co/bar.png');
    });
  });

  module('Sizes', function () {
    test('it sets the right default class when size is not provided', async function (assert) {
      await render(hbs`<OSS::Avatar />`);

      assert.dom('.upf-avatar').exists();
      assert.dom('.upf-avatar').hasClass(`upf-avatar--md`);
    });

    Object.keys(SizeDefinition).forEach((size) => {
      test(`it sets the right class when using a supported size: ${size}`, async function (assert: Assert) {
        this.size = size;
        await render(hbs`<OSS::Avatar @size={{this.size}} />`);

        assert.dom('.upf-avatar').exists();
        assert.dom('.upf-avatar').hasClass(`upf-avatar--${size}`);
      });
    });
  });

  module('Error behavior', function () {
    test('it throws an error if the wrong size argument is passed', async function (assert: Assert) {
      setupOnerror((err: Error) => {
        assert.equal(
          err.message,
          `Assertion Failed: [component][OSS::Avatar] Unknown size. Available sizes are: ${Object.keys(
            SizeDefinition
          ).join(', ')}`
        );
      });

      await render(hbs`<OSS::Avatar @size="test" />`);
    });

    test('it displays the initials when both initials and image are provided and the image fails to load', async function (assert) {
      await render(hbs`<OSS::Avatar @image="http://foo.co/bar.p" @initials="TS" />`);
      await waitFor('.upf-avatar span');

      assert.dom('.upf-avatar').exists();
      assert.dom('.upf-avatar span').exists();
      assert.dom('.upf-avatar span').hasText('TS');
    });

    test('it displays the placeholder image when the image provided in parameters fails to load', async function (assert) {
      await render(hbs`<OSS::Avatar @image="http://foo.co/bar.p" />`);
      await waitUntil(function () {
        return find('.upf-avatar img')?.getAttribute('src') === DEFAULT_IMAGE_URL;
      });

      assert.dom('.upf-avatar').exists();
      assert.dom('.upf-avatar img').exists();
      assert.dom('.upf-avatar img').hasAttribute('src', DEFAULT_IMAGE_URL);
    });
  });
});
