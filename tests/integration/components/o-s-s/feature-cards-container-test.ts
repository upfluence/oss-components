import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, setupOnerror } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import type { OSSFeatureCardArgs } from '@upfluence/oss-components/components/o-s-s/feature-card';

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
        image: this.image,
        colorVariant: 'yellow',
        shadowVariant: 'lg'
      },
      {
        title: 'Audience & content insights',
        description: 'Pull demographics and media performance into your BI.',
        image: this.image,
        colorVariant: 'blue'
      },
      {
        title: 'Campaign performance tracking',
        description: 'Track contribution stages and ROI.',
        image: this.image
      }
    ];

    this.defaultedCards = this.cards.map((card: OSSFeatureCardArgs) => ({
      title: card.title,
      description: card.description,
      image: card.image
    }));
  });

  test('it renders', async function (assert) {
    this.cards = this.cards.slice(0, 3);

    await render(hbs`<OSS::FeatureCardsContainer @cards={{this.cards}} />`);

    assert.dom('.oss-feature-cards-container').exists();
    assert.dom('.oss-feature-cards-container .oss-feature-card').exists({ count: 3 });
  });

  test('it supports 1 card layout', async function (assert) {
    this.cards = this.cards.slice(0, 1);

    await render(hbs`<OSS::FeatureCardsContainer @cards={{this.cards}} />`);

    assert.dom('.oss-feature-cards-container .oss-feature-card').exists({ count: 1 });
    assert.dom('.oss-feature-cards-container>:nth-child(1)').hasClass('oss-feature-cards-container__item');

    assert.dom('.oss-feature-cards-container>:nth-child(1)').hasClass('oss-feature-card--color-yellow');
    assert.dom('.oss-feature-cards-container>:nth-child(1)').hasClass('oss-feature-card--shadow-lg');
  });

  test('it supports 2 cards layout', async function (assert) {
    this.set('cards', this.cards.slice(0, 2));

    await render(hbs`<OSS::FeatureCardsContainer @cards={{this.cards}} />`);

    assert.dom('.oss-feature-cards-container .oss-feature-card').exists({ count: 2 });

    assert.dom('.oss-feature-cards-container>:nth-child(1)').hasClass('oss-feature-card--color-yellow');

    assert.dom('.oss-feature-cards-container>:nth-child(1)').hasClass('oss-feature-card--shadow-lg');
    assert.dom('.oss-feature-cards-container>:nth-child(2)').hasClass('oss-feature-card--color-blue');

    assert.dom('.oss-feature-cards-container>:nth-child(2)').hasClass('oss-feature-card--shadow-sm');
  });

  test('it applies computed layout rules for 3 cards', async function (assert) {
    this.cards = this.cards.slice(0, 3);

    await render(hbs`<OSS::FeatureCardsContainer @cards={{this.cards}} />`);

    assert.dom('.oss-feature-cards-container>:nth-child(1)').hasClass('oss-feature-card--color-yellow');
    assert.dom('.oss-feature-cards-container>:nth-child(1)').hasClass('oss-feature-card--shadow-lg');

    assert.dom('.oss-feature-cards-container>:nth-child(2)').hasClass('oss-feature-cards-container__item');
    assert.dom('.oss-feature-cards-container>:nth-child(2)').hasClass('oss-feature-card--color-blue');
    assert.dom('.oss-feature-cards-container>:nth-child(2)').hasClass('oss-feature-card--shadow-lg');

    assert.dom('.oss-feature-cards-container>:nth-child(3)').hasClass('oss-feature-card--color-yellow');
    assert.dom('.oss-feature-cards-container>:nth-child(3)').hasClass('oss-feature-card--shadow-sm');
  });

  test('it sets default color and shadow variants when missing', async function (assert) {
    this.cards = this.defaultedCards;

    await render(hbs`<OSS::FeatureCardsContainer @cards={{this.cards}} />`);

    assert.dom('.oss-feature-cards-container .oss-feature-card').exists({ count: 3 });

    assert.dom('.oss-feature-cards-container>:nth-child(1)').hasClass('oss-feature-card--color-blue');
    assert.dom('.oss-feature-cards-container>:nth-child(1)').hasClass('oss-feature-card--shadow-sm');

    assert.dom('.oss-feature-cards-container>:nth-child(2)').hasClass('oss-feature-card--color-violet');
    assert.dom('.oss-feature-cards-container>:nth-child(2)').hasClass('oss-feature-card--shadow-lg');

    assert.dom('.oss-feature-cards-container>:nth-child(3)').hasClass('oss-feature-card--color-yellow');
    assert.dom('.oss-feature-cards-container>:nth-child(3)').hasClass('oss-feature-card--shadow-sm');
  });

  module('Error management', () => {
    test('it throws when @cards is missing', async function (assert) {
      setupOnerror((err: any) => {
        assert.equal(err.message, 'Assertion Failed: [OSS::FeatureCardsContainer] The @cards parameter is mandatory');
      });

      await render(hbs`<OSS::FeatureCardsContainer />`);
    });

    test('it throws when @cards has invalid count', async function (assert) {
      this.cards = [];

      setupOnerror((err: any) => {
        assert.equal(
          err.message,
          'Assertion Failed: [OSS::FeatureCardsContainer] @cards must contain between 1 and 3 cards'
        );
      });

      await render(hbs`<OSS::FeatureCardsContainer @cards={{this.cards}} />`);
    });
  });
});
