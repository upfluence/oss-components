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
