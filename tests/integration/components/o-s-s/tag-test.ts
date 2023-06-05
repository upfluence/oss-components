import { hbs } from 'ember-cli-htmlbars';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, setupOnerror } from '@ember/test-helpers';
import { SkinDefinition, SkinType } from '@upfluence/oss-components/components/o-s-s/tag';

module('Integration | Component | o-s-s/tag', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`{{! @glint-nocheck }}<OSS::Tag @label='test' />`);
    assert.dom('.upf-tag').exists();
  });

  test('it renders the proper label when @label is passed', async function (assert) {
    await render(hbs`{{! @glint-nocheck }}<OSS::Tag @label="Test" />`);

    assert.dom('.upf-tag').exists({ count: 1 });
    assert.dom('.upf-tag').hasText('Test');
  });

  test('it renders the proper icon when @icon is passed', async function (assert) {
    await render(hbs`{{! @glint-nocheck }}<OSS::Tag @icon="far fa-thumbs-up" />`);

    assert.dom('.upf-tag').exists({ count: 1 });
    assert.dom('.upf-tag i').hasClass('fa-thumbs-up');
  });

  module('@plain', () => {
    test('the right class is applied on the tag', async function (assert) {
      await render(hbs`{{! @glint-nocheck }}<OSS::Tag @icon="far fa-thumbs-up" @plain={{true}} />`);
      assert.dom('.upf-tag').hasClass('upf-tag--plain');
    });
  });

  module('@hasEllipsis', () => {
    test('When the param is true then the ellipsis is shown', async function (assert) {
      await render(hbs`{{! @glint-nocheck }}<OSS::Tag @label='Test with a huge label sentence' @hasEllipsis='true' />`);

      assert.dom('.upf-tag').exists({ count: 1 });
      assert.dom('.upf-tag span').hasStyle({
        maxWidth: '80px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      });
    });

    test('When the param is false then the ellipsis is shown', async function (assert) {
      await render(hbs`{{! @glint-nocheck }}<OSS::Tag @label='Test with a huge label sentence' />`);

      assert.dom('.upf-tag').exists({ count: 1 });
      assert.dom('.upf-tag span').doesNotExist();
      assert.dom('.upf-tag').hasText('Test with a huge label sentence');
    });
  });

  Object.keys(SkinDefinition).forEach((skin) => {
    test(`it sets the right class when using a supported skin: ${skin}`, async function (assert: Assert) {
      this.skin = skin;
      await render(hbs`{{! @glint-nocheck }}<OSS::Tag @skin={{this.skin}} @label="Test Skin" />`);

      assert.dom('.upf-tag').exists();
      assert.dom('.upf-tag').hasClass(`upf-tag--${SkinDefinition[this.skin as SkinType]}`);
    });
  });

  test('it fails if @label and @icon are missing', async function (assert) {
    setupOnerror((err: { message: string }) => {
      assert.equal(
        err.message,
        'Assertion Failed: [component][OSS::Tag] You must pass either a @label or an @icon argument.'
      );
    });

    await render(hbs`{{! @glint-nocheck }}<OSS::Tag />`);
  });
});
