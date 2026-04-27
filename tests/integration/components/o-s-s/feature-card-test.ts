import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, setupOnerror } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | o-s-s/feature-card', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.title = 'Audience & content insights';
    this.description = 'Pull demographics and media performance into your BI to target smarter and report faster.';
    this.image = {
      src: '/@upfluence/oss-components/assets/images/no-image.svg',
      alt: 'No image illustration'
    };
  });

  test('it renders', async function (assert) {
    await render(
      hbs`<OSS::FeatureCard @title={{this.title}} @description={{this.description}} @image={{this.image}} />`
    );

    assert.dom('.oss-feature-card').exists();
    assert.dom('.oss-feature-card__title').hasText(this.title);
    assert.dom('.oss-feature-card__description').hasText(this.description);
    assert.dom('.oss-feature-card__illustration').hasAttribute('src', this.image.src);
    assert.dom('.oss-feature-card__illustration').hasAttribute('alt', this.image.alt);
  });

  test('it renders extra attributes (splattributes)', async function (assert) {
    await render(
      hbs`<OSS::FeatureCard @title={{this.title}} @description={{this.description}} @image={{this.image}} data-control-name="feature-card-test" />`
    );

    assert.dom('[data-control-name="feature-card-test"]').exists();
  });

  test('it supports color and shadow variants', async function (assert) {
    await render(
      hbs`<OSS::FeatureCard @title={{this.title}} @description={{this.description}} @image={{this.image}} @colorVariant="blue" @shadowVariant="lg" />`
    );

    assert.dom('.oss-feature-card').hasClass('oss-feature-card--color-blue');
    assert.dom('.oss-feature-card').hasClass('oss-feature-card--shadow-lg');
  });

  module('Error management', () => {
    test('it throws when @title is missing', async function (assert) {
      setupOnerror((err: any) => {
        assert.equal(err.message, 'Assertion Failed: [OSS::FeatureCard] The @title parameter is mandatory');
      });

      await render(hbs`<OSS::FeatureCard @description={{this.description}} @image={{this.image}} />`);
    });

    test('it throws when @description is missing', async function (assert) {
      setupOnerror((err: any) => {
        assert.equal(err.message, 'Assertion Failed: [OSS::FeatureCard] The @description parameter is mandatory');
      });

      await render(hbs`<OSS::FeatureCard @title={{this.title}} @image={{this.image}} />`);
    });

    test('it throws when @image is missing', async function (assert) {
      setupOnerror((err: any) => {
        assert.equal(
          err.message,
          'Assertion Failed: [OSS::FeatureCard] The @image parameter is mandatory and must contain a src key'
        );
      });

      await render(hbs`<OSS::FeatureCard @title={{this.title}} @description={{this.description}} />`);
    });
  });
});
