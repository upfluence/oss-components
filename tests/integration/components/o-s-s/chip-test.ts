import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render, settled, setupOnerror } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { SkinDefinition, SkinType } from '@upfluence/oss-components/components/o-s-s/chip';
import sinon from 'sinon';

module('Integration | Component | o-s-s/chip', function (hooks) {
  setupRenderingTest(hooks);
  hooks.beforeEach(function () {
    this.onRemove = () => {};
    this.label = 'Test';
  });

  module('Default behavior', () => {
    test('basic render', async function (assert) {
      await render(hbs`<OSS::Chip @label={{this.label}} @onRemove={{this.onRemove}} />`);

      assert.dom('.upf-chip').exists();
      assert.dom('.upf-chip span').exists();
      assert.dom('.upf-chip i').exists();

      assert.dom('.upf-chip').hasClass('upf-chip--default');
      assert.dom('.upf-chip span').hasText(this.label);
    });

    test('It throws an error if @onRemove is not passed', async function (assert) {
      setupOnerror((err: any) => {
        assert.equal(
          err.message,
          'Assertion Failed: [component][OSS::Chip] The parameter @onRemove of type function is mandatory'
        );
      });
      await render(hbs`<OSS::Chip @label={{this.label}}/>`);
      await settled();
    });
    test('It throws an error if @label is not passed', async function (assert) {
      setupOnerror((err: any) => {
        assert.equal(err.message, 'Assertion Failed: [component][OSS::Chip] The parameter @label have to be set');
      });
      await render(hbs`<OSS::Chip @onRemove={{this.onRemove}} />`);
      await settled();
    });

    test('it renders the proper label when @label is passed', async function (assert) {
      await render(hbs`<OSS::Chip @label={{this.label}} @onRemove={{this.onRemove}} />`);

      assert.dom('.upf-chip').exists({ count: 1 });
      assert.dom('.upf-chip').hasText('Test');
    });

    test('The component is disabled if the @disabled parameter is truthy', async function (assert) {
      await render(hbs`<OSS::Chip @label={{this.label}} @onRemove={{this.onRemove}} @disabled={{true}} />`);

      assert.dom('.upf-chip').exists({ count: 1 });
      assert.dom('.upf-chip').hasClass('upf-chip--disabled');
    });
  });
  module('@displayMaxWidth', () => {
    test('The component add ellipsis if the label is widther than @displayMaxWidth', async function (assert) {
      await render(
        hbs`<OSS::Chip @label="Test with a huge label sentence" @onRemove={{this.onRemove}} @displayMaxWidth={{100}}/>`
      );

      assert.dom('.upf-chip').exists({ count: 1 });
      assert.dom('.upf-chip span').hasStyle({
        maxWidth: '100px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      });
    });

    test('When the param isnot set', async function (assert) {
      await render(hbs`<OSS::Chip @label="Test with a huge label sentence" @onRemove={{this.onRemove}} />`);

      assert.dom('.upf-chip').exists({ count: 1 });
      assert.dom('.upf-chip span').doesNotHaveAttribute('style');
      assert.dom('.upf-chip').hasText('Test with a huge label sentence');
      assert.dom('.upf-chip').hasTextContaining('Test with a huge label sentence');
    });
  });

  Object.keys(SkinDefinition).forEach((skin) => {
    test(`it sets the right class when using a supported skin: ${skin}`, async function (assert: Assert) {
      this.skin = skin;
      await render(hbs`<OSS::Chip @skin={{this.skin}} @label={{this.label}} @onRemove={{this.onRemove}} />`);

      assert.dom('.upf-chip').exists();
      assert.dom('.upf-chip').hasClass(`upf-chip--${SkinDefinition[this.skin as SkinType]}`);
    });
  });

  test('When clicking on the close icon, the component triggers the @onRemove method', async function (assert) {
    this.currency = '';
    this.onRemove = sinon.stub();

    await render(hbs`<OSS::Chip @label={{this.label}} @onRemove={{this.onRemove}} />`);
    await click('.upf-chip i');
    assert.true(this.onRemove.calledOnceWithExactly());
  });
});
