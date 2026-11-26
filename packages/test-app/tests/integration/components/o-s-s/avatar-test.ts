import { find, render, setupOnerror, waitFor, waitUntil } from '@ember/test-helpers';

import { hbs } from 'ember-cli-htmlbars';
import { setupIntl } from 'ember-intl/test-support';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

import { SizeDefinition, AvatarSkins, DEFAULT_IMAGE_URL } from '@upfluence/oss-components/components/o-s-s/avatar';

import { renderExpectingError } from 'test-app/tests/helpers/render-expecting-error';

module('Integration | Component | o-s-s/avatar', function (hooks) {
  setupRenderingTest(hooks);
  setupIntl(hooks, 'en-us');

  module('Default behavior', function () {
    test('it displays the image when it is provided', async function (assert) {
      await render(hbs`<OSS::Avatar @image="/assets/images/brand-icon.svg" />`);

      assert.dom('.upf-avatar').exists();
      assert.dom('.upf-avatar img').exists();
      assert.dom('.upf-avatar img').hasAttribute('src', '/assets/images/brand-icon.svg');
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
      await render(hbs`<OSS::Avatar @image="/assets/images/brand-icon.svg" @initials="TS" />`);

      assert.dom('.upf-avatar').exists();
      assert.dom('.upf-avatar img').exists();
      assert.dom('.upf-avatar img').hasAttribute('src', '/assets/images/brand-icon.svg');
    });

    test('it updates the image when a new @image is provided', async function (assert) {
      this.updatedImage = null;
      await render(hbs`<OSS::Avatar @image={{this.updatedImage}} @initials="TS" />`);

      assert.strictEqual(this.updatedImage, null);
      assert.dom('.upf-avatar').exists();
      assert.dom('.upf-avatar img').doesNotExist();
      assert.dom('.upf-avatar span').hasText('TS');
      this.set('updatedImage', '/assets/images/brand-icon.svg');
      assert.dom('.upf-avatar span').doesNotExist();
      assert.dom('.upf-avatar img').hasAttribute('src', '/assets/images/brand-icon.svg');
    });
  });

  module('Badge', function () {
    test('it does not display the badge when @badge is not provided', async function (assert) {
      await render(hbs`<OSS::Avatar />`);

      assert.dom('.upf-avatar .upf-avatar__badge').doesNotExist();
    });

    test('it displays an OSS::Badge with the provided arguments', async function (assert) {
      this.badge = { icon: 'fab fa-instagram', skin: 'primary', plain: true };
      await render(hbs`<OSS::Avatar @badge={{this.badge}} />`);

      assert
        .dom('.upf-avatar .upf-avatar__badge')
        .hasClass('upf-badge')
        .hasClass('upf-badge--primary')
        .hasClass('upf-badge--size-sm')
        .hasClass('upf-badge--plain');
      assert.dom('.upf-avatar__badge i').hasClass('fab').hasClass('fa-instagram');
    });

    test('it always displays the badge with the sm size', async function (assert) {
      this.badge = { text: '2', size: 'lg' };
      await render(hbs`<OSS::Avatar @badge={{this.badge}} />`);

      assert.dom('.upf-avatar__badge').hasClass('upf-badge--size-sm').hasNoClass('upf-badge--size-lg');
    });

    test('it displays an OSS::Badge with an image', async function (assert) {
      this.badge = { image: '/assets/images/brand-icon.svg' };
      await render(hbs`<OSS::Avatar @badge={{this.badge}} />`);

      assert.dom('.upf-avatar__badge img').hasAttribute('src', '/assets/images/brand-icon.svg');
    });

    test('it displays a tooltip on the badge when a tooltip is provided', async function (assert) {
      this.badge = { icon: 'fab fa-instagram', tooltip: 'Instagram' };
      await render(hbs`<OSS::Avatar @badge={{this.badge}} />`);

      await assert.tooltip('.upf-avatar__badge').hasTitle('Instagram');
    });

    test('it does not display a tooltip on the badge when no tooltip is provided', async function (assert) {
      this.badge = { icon: 'fab fa-instagram' };
      await render(hbs`<OSS::Avatar @badge={{this.badge}} />`);

      await assert.tooltip('.upf-avatar__badge').doesNotExist();
    });

    test('it does not display the badge while loading', async function (assert) {
      this.badge = { text: '2' };
      await render(hbs`<OSS::Avatar @badge={{this.badge}} @loading={{true}} />`);

      assert.dom('.upf-avatar .upf-avatar__badge').doesNotExist();
    });
  });

  module('Skins', function () {
    test('it sets no skin class when skin is not provided', async function (assert) {
      await render(hbs`<OSS::Avatar />`);

      assert.dom('.upf-avatar').exists();
      assert.dom('.upf-avatar').hasNoClass(`upf-avatar--skin`);
    });

    AvatarSkins.forEach((skin) => {
      test(`it sets the right class when using a supported skin: ${skin}`, async function (assert) {
        this.skin = skin;
        await render(hbs`<OSS::Avatar @skin={{this.skin}} />`);

        assert.dom('.upf-avatar').hasClass(`upf-avatar--skin`).hasClass(`upf-avatar--skin-${skin}`);
      });
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

  test('When @loading is thruthy, the right class is applied on the component', async function (assert) {
    await render(hbs`<OSS::Avatar @loading={{true}} />`);
    assert.dom('.upf-avatar').hasClass('upf-avatar--loading');
  });

  module('Error behavior', function () {
    test('it throws an error if the wrong size argument is passed', async function (assert: Assert) {
      assert.expect(1);
      setupOnerror((err: Error) => {
        assert.strictEqual(
          err.message,
          `Assertion Failed: [component][OSS::Avatar] Unknown size. Available sizes are: ${Object.keys(
            SizeDefinition
          ).join(', ')}`
        );
      });

      await renderExpectingError(this, hbs`{{#if this.show}}<OSS::Avatar @size="test" />{{/if}}`);
    });

    test('it throws an error if the wrong skin argument is passed', async function (assert: Assert) {
      assert.expect(1);
      setupOnerror((err: Error) => {
        assert.strictEqual(
          err.message,
          `Assertion Failed: [component][OSS::Avatar] Unknown skin. Available skins are: ${AvatarSkins.join(', ')}`
        );
      });

      await renderExpectingError(this, hbs`{{#if this.show}}<OSS::Avatar @skin="test" />{{/if}}`);
    });

    test('it displays the initials when both initials and image are provided and the image fails to load', async function (assert) {
      await render(hbs`<OSS::Avatar @image="/@upfluence/oss-components/assets/images/fail.svg" @initials="TS" />`);
      await waitFor('.upf-avatar span');

      assert.dom('.upf-avatar').exists();
      assert.dom('.upf-avatar span').exists();
      assert.dom('.upf-avatar span').hasText('TS');
    });

    test('it displays the placeholder image when the image provided in parameters fails to load', async function (assert) {
      await render(hbs`<OSS::Avatar @image="/@upfluence/oss-components/assets/images/fail.svg" />`);
      await waitUntil(function () {
        return find('.upf-avatar img')?.getAttribute('src') === DEFAULT_IMAGE_URL;
      });

      assert.dom('.upf-avatar').exists();
      assert.dom('.upf-avatar img').exists();
      assert.dom('.upf-avatar img').hasAttribute('src', DEFAULT_IMAGE_URL);
    });
  });
});
