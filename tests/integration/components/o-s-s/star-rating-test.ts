import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, setupOnerror } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { StarColor } from '@upfluence/oss-components/components/o-s-s/star-rating';

module('Integration | Component | o-s-s/star-rating', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<OSS::StarRating @rating={{3}} @totalStars={{5}} />`);

    assert.dom('.star-rating').exists();
  });

  for (const starColor in StarColor) {
    test('Passing @activeColor and @passiveColor applies the correct classes to the component', async function (assert) {
      this.activeColor = starColor;
      this.passiveColor = starColor;
      await render(hbs`<OSS::StarRating @rating={{5}} @totalStars={{8}}
                                        @activeColor={{this.activeColor}}
                                        @passiveColor={{this.passiveColor}} />`);
      assert.dom('.fas').hasClass(`color-${starColor}`);
    });
  }

  module('Error management', function () {
    test('failing to pass @rating throws an error', async function (assert) {
      setupOnerror((err: any) => {
        assert.equal(
          err.message,
          'Assertion Failed: [component][OSS::StarRating] @rating argument is mandatory and must be a number'
        );
      });

      await render(hbs`<OSS::StarRating @totalStars={{5}} />`);
    });

    test('failing to pass @totalStart throws an error', async function (assert) {
      setupOnerror((err: any) => {
        assert.equal(
          err.message,
          'Assertion Failed: [component][OSS::StarRating] @totalStars argument is mandatory and must be a number'
        );
      });

      await render(hbs`<OSS::StarRating @rating={{5}} />`);
    });
  });
});
