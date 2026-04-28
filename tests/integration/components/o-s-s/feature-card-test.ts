import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, setupOnerror } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { COLOR_VARIANTS, SHADOW_VARIANTS } from '@upfluence/oss-components/components/o-s-s/feature-card';
import { setupIntl } from 'ember-intl/test-support';

module('Integration | Component | o-s-s/feature-card', function (hooks) {
  setupRenderingTest(hooks);
  setupIntl(hooks);

  hooks.beforeEach(function () {
    this.title = this.intl.t('Audience & content insights', { htmlSafe: true });
    this.description = 'Pull demographics and media performance into your BI to target smarter and report faster.';
    this.image = {
      src: '/@upfluence/oss-components/assets/images/no-image.svg',
      alt: 'No image illustration'
    };
  });

  module('Rendering', () => {
    test('it renders the title', async function (assert) {
      await render(
        hbs`<OSS::FeatureCard @title={{this.title}} @description={{this.description}} @image={{this.image}} />`
      );

      assert.dom('.oss-feature-card').exists();
      assert.dom('.oss-feature-card>:first-child>:first-child').hasText(this.title.toString());
    });

    test('it renders the description', async function (assert) {
      await render(
        hbs`<OSS::FeatureCard @title={{this.title}} @description={{this.description}} @image={{this.image}} />`
      );

      assert.dom('.oss-feature-card').exists();
      assert.dom('.oss-feature-card__description').hasText(this.description);
    });

    test('it renders the image', async function (assert) {
      await render(
        hbs`<OSS::FeatureCard @title={{this.title}} @description={{this.description}} @image={{this.image}} />`
      );

      assert.dom('.oss-feature-card').exists();
      assert.dom('.oss-feature-card__illustration').hasAttribute('src', this.image.src);
      assert.dom('.oss-feature-card__illustration').hasAttribute('alt', this.image.alt);
    });

    test('it renders extra attributes (splattributes)', async function (assert) {
      await render(
        hbs`<OSS::FeatureCard @title={{this.title}} @description={{this.description}} @image={{this.image}} data-control-name="feature-card-test" />`
      );

      assert.dom('[data-control-name="feature-card-test"]').exists();
    });
  });

  module('Variants', () => {
    COLOR_VARIANTS.forEach((colorVariant) => {
      test(`it supports the ${colorVariant} color variant`, async function (assert) {
        this.colorVariant = colorVariant;

        await render(
          hbs`<OSS::FeatureCard @title={{this.title}} @description={{this.description}} @image={{this.image}} @colorVariant={{this.colorVariant}} />`
        );

        assert.dom('.oss-feature-card').hasClass(`oss-feature-card--color-${colorVariant}`);
      });
    });

    SHADOW_VARIANTS.forEach((shadowVariant) => {
      test(`it supports the ${shadowVariant} shadow variant`, async function (assert) {
        this.shadowVariant = shadowVariant;

        await render(
          hbs`<OSS::FeatureCard @title={{this.title}} @description={{this.description}} @image={{this.image}} @shadowVariant={{this.shadowVariant}} />`
        );

        assert.dom('.oss-feature-card').hasClass(`oss-feature-card--shadow-${shadowVariant}`);
      });
    });
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

    test('it throws when @colorVariant is unknown', async function (assert) {
      setupOnerror((err: any) => {
        assert.equal(
          err.message,
          'Assertion Failed: [OSS::FeatureCard] @colorVariant must be one of: blue, violet, yellow'
        );
      });

      await render(
        hbs`<OSS::FeatureCard @title={{this.title}} @description={{this.description}} @image={{this.image}} @colorVariant="green" />`
      );
    });

    test('it throws when @shadowVariant is unknown', async function (assert) {
      setupOnerror((err: any) => {
        assert.equal(err.message, 'Assertion Failed: [OSS::FeatureCard] @shadowVariant must be one of: sm, lg');
      });

      await render(
        hbs`<OSS::FeatureCard @title={{this.title}} @description={{this.description}} @image={{this.image}} @shadowVariant="xl" />`
      );
    });
  });
});
