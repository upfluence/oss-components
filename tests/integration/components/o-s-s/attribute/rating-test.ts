import { hbs } from 'ember-cli-htmlbars';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';

module('Integration | Component | o-s-s/attribute/rating', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.testRating = 3;
  });

  test('it renders', async function (assert) {
    await render(hbs`<OSS::Attribute::Rating @label="Hello" @rating={{this.testRating}}/>`);
    assert.dom('[data-control-name="attribute-rating"]').exists();
  });

  test('it displays a dash when no @rating is provided', async function (assert) {
    await render(hbs`<OSS::Attribute::Rating @label="Hello" />`);
    assert.dom('.oss-attribute__value').hasText('-');
  });

  test('it displays the proper number of stars when @rating is provided', async function (assert) {
    await render(hbs`<OSS::Attribute::Rating @label="Hello" @rating={{this.testRating}}/>`);
    assert.dom('.fas.fa-star.color-yellow').exists({ count: this.testRating });
  });

  test('it displays a label when @label is provided', async function (assert) {
    await render(hbs`<OSS::Attribute::Rating @label="Hello" @rating={{this.testRating}}/>`);
    assert.dom('.oss-attribute__label').hasText('Hello');
  });
});
