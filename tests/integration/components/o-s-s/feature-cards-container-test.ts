import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, setupOnerror } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | o-s-s/feature-cards-container', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.image = {
      src: '/@upfluence/oss-components/assets/images/no-image.svg',
      alt: 'No image illustration'
    };
    this.cards = [
      {
        title: 'Creator discovery at scale',
        description: 'Discover and enrich creators via API.',
        image: this.image
      },
      {
        title: 'Audience & content insights',
        description: 'Pull demographics and media performance into your BI.',
        image: this.image
      },
      {
        title: 'Campaign performance tracking',
        description: 'Track contribution stages and ROI.',
        image: this.image
      }
    ];
  });

  test('it renders', async function (assert) {
    await render(hbs`<OSS::FeatureCardsContainer @cards={{this.cards}} />`);

    assert.dom('.oss-feature-cards-container').exists();
    assert.dom('.oss-feature-cards-container .oss-feature-card').exists({ count: 3 });
  });

  test('it supports 2 cards layout', async function (assert) {
    this.set('cards', this.cards.slice(0, 2));

    await render(hbs`<OSS::FeatureCardsContainer @cards={{this.cards}} />`);

    assert.dom('.oss-feature-cards-container .oss-feature-card').exists({ count: 2 });

    assert
      .dom('.oss-feature-cards-container__item:nth-child(1)')
      .hasAttribute('style', 'transform: translateX(-45%) rotate(-11.25deg);');
    assert
      .dom('.oss-feature-cards-container__item:nth-child(1) .oss-feature-card')
      .hasClass('oss-feature-card--color-blue');
    assert
      .dom('.oss-feature-cards-container__item:nth-child(1) .oss-feature-card')
      .hasClass('oss-feature-card--shadow-sm');

    assert
      .dom('.oss-feature-cards-container__item:nth-child(2)')
      .hasAttribute('style', 'transform: translateX(45%) rotate(11.25deg);');
    assert
      .dom('.oss-feature-cards-container__item:nth-child(2) .oss-feature-card')
      .hasClass('oss-feature-card--color-yellow');
    assert
      .dom('.oss-feature-cards-container__item:nth-child(2) .oss-feature-card')
      .hasClass('oss-feature-card--shadow-sm');
  });

  test('it applies computed layout rules for 3 cards', async function (assert) {
    await render(hbs`<OSS::FeatureCardsContainer @cards={{this.cards}} />`);

    assert
      .dom('.oss-feature-cards-container__item:nth-child(1)')
      .hasAttribute('style', 'transform: translateX(-80%) rotate(-11.25deg);');
    assert
      .dom('.oss-feature-cards-container__item:nth-child(1) .oss-feature-card')
      .hasClass('oss-feature-card--color-blue');
    assert
      .dom('.oss-feature-cards-container__item:nth-child(1) .oss-feature-card')
      .hasClass('oss-feature-card--shadow-sm');

    assert
      .dom('.oss-feature-cards-container__item:nth-child(2)')
      .hasAttribute('style', 'transform: translateX(0) rotate(0deg);');
    assert.dom('.oss-feature-cards-container__item:nth-child(2)').hasClass('oss-feature-cards-container__item--center');
    assert
      .dom('.oss-feature-cards-container__item:nth-child(2) .oss-feature-card')
      .hasClass('oss-feature-card--color-violet');
    assert
      .dom('.oss-feature-cards-container__item:nth-child(2) .oss-feature-card')
      .hasClass('oss-feature-card--shadow-lg');

    assert
      .dom('.oss-feature-cards-container__item:nth-child(3)')
      .hasAttribute('style', 'transform: translateX(80%) rotate(11.25deg);');
    assert
      .dom('.oss-feature-cards-container__item:nth-child(3) .oss-feature-card')
      .hasClass('oss-feature-card--color-yellow');
    assert
      .dom('.oss-feature-cards-container__item:nth-child(3) .oss-feature-card')
      .hasClass('oss-feature-card--shadow-sm');
  });

  module('Error management', () => {
    test('it throws when @cards is missing', async function (assert) {
      setupOnerror((err: any) => {
        assert.equal(err.message, 'Assertion Failed: [OSS::FeatureCardsContainer] The @cards parameter is mandatory');
      });

      await render(hbs`<OSS::FeatureCardsContainer />`);
    });

    test('it throws when @cards has invalid count', async function (assert) {
      this.cards = [this.cards[0]];

      setupOnerror((err: any) => {
        assert.equal(
          err.message,
          'Assertion Failed: [OSS::FeatureCardsContainer] @cards must contain exactly 2 or 3 cards'
        );
      });

      await render(hbs`<OSS::FeatureCardsContainer @cards={{this.cards}} />`);
    });
  });
});
