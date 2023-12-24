import { hbs } from 'ember-cli-htmlbars';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, waitFor } from '@ember/test-helpers';
import click from '@ember/test-helpers/dom/click';
import triggerKeyEvent from '@ember/test-helpers/dom/trigger-key-event';
import typeIn from '@ember/test-helpers/dom/type-in';
import sinon from 'sinon';

module('Integration | Component | o-s-s/number-input', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<OSS::NumberInput />`);

    assert.dom('.number-input').exists();
  });

  module('@value parameter', () => {
    test('If none present, the default value is 0', async function (assert) {
      await render(hbs`<OSS::NumberInput />`);
      assert.dom('.number-input input').hasValue('0');
    });

    test('If the value is passed, it is set in the input', async function (assert) {
      await render(hbs`<OSS::NumberInput @value={{42}} />`);
      assert.dom('.number-input input').hasValue('42');
    });
  });

  module('@step parameter', () => {
    test('If none present, the default step is 1', async function (assert) {
      await render(hbs`<OSS::NumberInput />`);
      assert.dom('.number-input input').hasValue('0');
      await click('.upf-square-btn:nth-of-type(2)');
      assert.dom('.number-input input').hasValue('1');
    });

    test('If the step is passed, it is used when increasing the value', async function (assert) {
      await render(hbs`<OSS::NumberInput @step={{5}} />`);
      assert.dom('.number-input input').hasValue('0');
      await click('.upf-square-btn:nth-of-type(2)');
      assert.dom('.number-input input').hasValue('5');
    });

    test('If the step is passed, it is used when decreasing the value', async function (assert) {
      await render(hbs`<OSS::NumberInput @step={{5}} />`);
      assert.dom('.number-input input').hasValue('0');
      await click('.upf-square-btn:nth-of-type(1)');
      assert.dom('.number-input input').hasValue('-5');
    });
  });

  module('Value increase', () => {
    test('+ button increases the value by the step', async function (assert) {
      await render(hbs`<OSS::NumberInput />`);
      assert.dom('.number-input input').hasValue('0');
      await click('.upf-square-btn:nth-of-type(2)');
      assert.dom('.number-input input').hasValue('1');
    });

    test('Up arrow increases the value by the step', async function (assert) {
      await render(hbs`<OSS::NumberInput />`);
      assert.dom('.number-input input').hasValue('0');
      // @ts-ignore
      await triggerKeyEvent('.number-input input', 'keydown', 'ArrowUp', { code: 'ArrowUp' });
      assert.dom('.number-input input').hasValue('1');
    });

    test('Right arrow increases the value by the step', async function (assert) {
      await render(hbs`<OSS::NumberInput />`);
      assert.dom('.number-input input').hasValue('0');
      // @ts-ignore
      await triggerKeyEvent('.number-input input', 'keydown', 'ArrowRight', { code: 'ArrowRight' });
      assert.dom('.number-input input').hasValue('1');
    });

    test('If @max parameter is set, increasing the value sets the max value', async function (assert) {
      await render(hbs`<OSS::NumberInput @value={{5}} @max={{5}} />`);
      assert.dom('.number-input input').hasValue('5');
      assert.dom('.upf-square-btn:nth-of-type(2)').isDisabled();
    });

    test('If @max & @maxReachedTooltip parameter are set, it renders the tooltip', async function (assert) {
      await render(hbs`<OSS::NumberInput @value={{5}} @max={{5}} @maxReachedTooltip="max" />`);
      document.querySelector('.upf-square-btn:nth-of-type(2)')?.dispatchEvent(new Event('mouseover'));
      await waitFor('.upf-tooltip');
      assert.dom('.upf-tooltip .title').hasText('max');
    });
  });

  module('Value decrease', () => {
    test('- button increases the value by the step', async function (assert) {
      await render(hbs`<OSS::NumberInput />`);
      assert.dom('.number-input input').hasValue('0');
      await click('.upf-square-btn:nth-of-type(1)');
      assert.dom('.number-input input').hasValue('-1');
    });

    test('Down arrow increases the value by the step', async function (assert) {
      await render(hbs`<OSS::NumberInput />`);
      assert.dom('.number-input input').hasValue('0');
      // @ts-ignore
      await triggerKeyEvent('.number-input input', 'keydown', 'ArrowDown', { code: 'ArrowDown' });
      assert.dom('.number-input input').hasValue('-1');
    });

    test('Left arrow increases the value by the step', async function (assert) {
      await render(hbs`<OSS::NumberInput />`);
      assert.dom('.number-input input').hasValue('0');
      // @ts-ignore
      await triggerKeyEvent('.number-input input', 'keydown', 'ArrowLeft', { code: 'ArrowLeft' });
      assert.dom('.number-input input').hasValue('-1');
    });

    test('If @min parameter is set, decreasing the value sets the min value', async function (assert) {
      await render(hbs`<OSS::NumberInput @value={{5}} @min={{5}} />`);
      assert.dom('.number-input input').hasValue('5');
      assert.dom('.upf-square-btn:nth-of-type(1)').isDisabled();
    });

    test('If @min & @minReachedTooltip parameter are set, it renders the tooltip', async function (assert) {
      await render(hbs`<OSS::NumberInput @value={{5}} @min={{5}} @minReachedTooltip="min" />`);
      document.querySelector('.upf-square-btn:nth-of-type(1)')?.dispatchEvent(new Event('mouseover'));
      await waitFor('.upf-tooltip');
      assert.dom('.upf-tooltip .title').hasText('min');
    });
  });

  module('On user input', () => {
    test('if the inputed value is above the max value, the max value is set', async function (assert) {
      await render(hbs`<OSS::NumberInput @max={{42}} />`);
      await typeIn('.number-input input', '455');
      assert.dom('.number-input input').hasValue('42');
    });

    test('if the inputed value is below the min value, the min value is set', async function (assert) {
      await render(hbs`<OSS::NumberInput @value={{0}} @min={{42}} />`);
      await typeIn('.number-input input', '3');
      assert.dom('.number-input input').hasValue('42');
    });
  });

  test('The @onChange method receives the updated value', async function (assert) {
    this.onChange = sinon.stub();
    await render(hbs`<OSS::NumberInput @value={{0}} @onChange={{this.onChange}} />`);
    await click('.upf-square-btn:nth-of-type(2)');
    assert.true(this.onChange.calledOnceWithExactly(1));
  });
});
