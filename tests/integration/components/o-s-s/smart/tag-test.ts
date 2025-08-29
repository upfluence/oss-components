import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import sinon from 'sinon';

const SIZES = ['md', 'lg'];

module('Integration | Component | o-s-s/smart/tag', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders with default (keyword) type', async function (assert) {
    await render(hbs`<OSS::Smart::Tag @label="foo" />`);
    assert.dom('.smart-tag').hasClass('smart-tag--color-yellow', 'Has yellow color for keyword');
    assert.dom('.smart-tag .fa-hashtag, .smart-tag .fa-at').doesNotExist('No icon for keyword');
    assert.dom('.smart-tag span').hasText('foo', 'Displays label');
  });

  test('it renders with hashtag type', async function (assert) {
    await render(hbs`<OSS::Smart::Tag @label="bar" @type="hashtag" />`);
    assert.dom('.smart-tag').hasClass('smart-tag--color-cyan', 'Has cyan color for hashtag');
    assert.dom('.smart-tag .fa-hashtag').exists('Has hashtag icon');
    assert.dom('.smart-tag span').hasText('bar');
  });

  test('it renders with mention type', async function (assert) {
    await render(hbs`<OSS::Smart::Tag @label="baz" @type="mention" />`);
    assert.dom('.smart-tag').hasClass('smart-tag--color-violet', 'Has violet color for mention');
    assert.dom('.smart-tag .fa-at').exists('Has at icon');
    assert.dom('.smart-tag span').hasText('baz');
  });

  test('clicking on the close button calls the @onRemove method', async function (assert) {
    this.onRemove = sinon.stub();
    await render(hbs`<OSS::Smart::Tag @label="foo" @onRemove={{this.onRemove}} />`);
    assert.dom('[data-control-name="remove-tag-button"]').exists('Remove button is rendered');
    await click('[data-control-name="remove-tag-button"]');
    assert.ok(this.onRemove.calledOnce, 'onRemove action is called once');
  });

  test('it applies the correct size class', async function (assert) {
    await render(hbs`<OSS::Smart::Tag @label="foo" @size="lg" />`);
    assert.dom('.smart-tag-container').hasClass('smart-tag-container--lg', 'Has large size class');
  });

  module('size attribute', () => {
    test(`it applies the default size class when no size is specified`, async function (assert) {
      await render(hbs`<OSS::Smart::Tag @label="foo" />`);
      assert.dom('.smart-tag-container').hasClass('smart-tag-container--md', 'Has default medium size class');
    });

    SIZES.forEach((size) => {
      test(`it applies the ${size} size class`, async function (assert) {
        this.size = size;
        await render(hbs`<OSS::Smart::Tag @label="foo" @size={{this.size}} />`);
        assert.dom('.smart-tag-container').hasClass(`smart-tag-container--${size}`, `Has ${size} size class`);
      });
    });
  });

  test('it applies success animation class when @successAnimationOnInsertion is truthy', async function (assert) {
    await render(hbs`<OSS::Smart::Tag @label="foo" @successAnimationOnInsertion={{true}} />`);
    assert.dom('.smart-tag-container').hasClass('smart-rotating-gradient');
  });
});
