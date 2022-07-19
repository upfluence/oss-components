import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render, settled, setupOnerror } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { SkinDefinition, SkinType } from '@upfluence/oss-components/components/o-s-s/chip';
import sinon from 'sinon';

module('Integration | Component | o-s-s/chip', function (hooks) {
  setupRenderingTest(hooks);
  hooks.beforeEach(function () {
    this.onClick = () => {};
  });

  module('it renders with good display', () => {
    test('basic render', async function (assert) {
      await render(hbs`<OSS::Chip @label='test' @onClick={{this.onClick}} />`);

      assert.dom('.upf-chip').exists();
      assert.dom('.upf-chip span').exists();
      assert.dom('.upf-chip i').exists();

      assert.dom('.upf-chip').hasClass('upf-chip--primary');
      assert.dom('.upf-chip span').hasText('test');
    });

    test('It throws an error if @onClick is not passed', async function (assert) {
      setupOnerror((err: any) => {
        assert.equal(
          err.message,
          'Assertion Failed: [component][OSS::Chip] The parameter @onClick of type function is mandatory'
        );
      });
      await render(hbs`<OSS::Chip />`);
      await settled();
    });

    test('it renders the proper label when @label is passed', async function (assert) {
      await render(hbs`<OSS::Chip @label="Test" @onClick={{this.onClick}} />`);

      assert.dom('.upf-chip').exists({ count: 1 });
      assert.dom('.upf-chip').hasText('Test');
    });

    test('it renders the disable class when @disabled is true', async function (assert) {
      await render(hbs`<OSS::Chip @label="Test" @onClick={{this.onClick}} @disabled={{true}} />`);

      assert.dom('.upf-chip').exists({ count: 1 });
      assert.dom('.upf-chip').hasClass('upf-chip--disabled');
    });
  });
  module('@ellipsisWidth', () => {
    test('Define max-width before ellipsis was apply', async function (assert) {
      await render(
        hbs`<OSS::Chip @label="Test with a huge label sentence" @onClick={{this.onClick}} @disabled={{true}} @ellipsisWidth={{100}}/>`
      );

      assert.dom('.upf-chip').exists({ count: 1 });
      assert.dom('.upf-chip span').hasClass('text-ellipsis-100');
      assert.dom('.upf-chip span').hasStyle({
        maxWidth: '100px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      });
    });

    test('When the param is different of existant class then the ellipsis is shown', async function (assert) {
      await render(
        hbs`<OSS::Chip @label="Test with a huge label sentence" @onClick={{this.onClick}} @disabled={{true}} @ellipsisWidth={{110}} />`
      );

      assert.dom('.upf-chip').exists({ count: 1 });
      assert.dom('.upf-chip span').hasClass('text-ellipsis-110');
      assert.dom('.upf-chip').hasText('Test with a huge label sentence');
      assert.dom('.upf-chip').hasTextContaining('Test with a huge label sentence');
    });
  });

  Object.keys(SkinDefinition).forEach((skin) => {
    test(`it sets the right class when using a supported skin: ${skin}`, async function (assert: Assert) {
      this.skin = skin;
      await render(hbs`<OSS::Chip @skin={{this.skin}} @label="Test Skin" @onClick={{this.onClick}} />`);

      assert.dom('.upf-chip').exists();
      assert.dom('.upf-chip').hasClass(`upf-chip--${SkinDefinition[this.skin as SkinType]}`);
    });
  });

  test('trigger onClick function', async function (assert) {
    this.currency = '';
    this.onClick = sinon.stub();

    await render(hbs`<OSS::Chip @label="Test function" @onClick={{this.onClick}} />`);
    await click('.upf-chip i');
    assert.true(this.onClick.calledOnceWithExactly(true));
  });
});
