import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { fillIn, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import sinon from 'sinon';

async function getSliderWidth(element: any): Promise<string | null> {
  const computedStyle = await getComputedStyle(element);
  const rangePercentage = computedStyle.getPropertyValue('--range-percentage').trim();

  if (rangePercentage.endsWith('%')) {
    return rangePercentage;
  }

  console.warn('The value of --range-percentage is not a percentage:', rangePercentage);
  return null;
}

module('Integration | Component | o-s-s/slider', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.value = 10;
    this.displayInputValue = false;
    this.unit = 'percentage';
  });

  test('it renders', async function (assert) {
    await render(
      hbs`<OSS::Slider @value={{this.value}} @displayInputValue={{this.displayInputValue}} @unit={{this.unit}} />`
    );
    assert.dom('.oss-slider--range-container').exists();
  });

  test('it renders the slider as disabled when @disabled is truthy', async function (assert) {
    this.displayInputValue = true;
    await render(
      hbs`<OSS::Slider @value={{this.value}} @displayInputValue={{this.displayInputValue}} @unit={{this.unit}} @disabled={{true}}/>`
    );
    assert.dom('.oss-slider--range').isDisabled();
  });

  test('it renders the number input as disabled when @disabled is truthy', async function (assert) {
    this.displayInputValue = true;
    await render(
      hbs`<OSS::Slider @value={{this.value}} @displayInputValue={{this.displayInputValue}} @unit={{this.unit}} @disabled={{true}}/>`
    );
    assert.dom('.oss-slider--number-input').isDisabled();
  });

  test('it renders the slider width to the proper size', async function (assert) {
    this.displayInputValue = true;
    await render(
      hbs`<OSS::Slider @value={{this.value}} @displayInputValue={{this.displayInputValue}} @unit={{this.unit}} />`
    );
    await fillIn('.oss-slider--number-input', '10');
    let element = this.element.querySelector('.oss-slider--range');
    assert.dom(element).exists();
    assert.strictEqual(await getSliderWidth(element), '10%');
  });

  test('the tooltip has the proper value', async function (assert) {
    this.displayInputValue = true;
    this.onChange = sinon.stub();
    await render(
      hbs`<OSS::Slider @value={{this.value}} @displayInputValue={{this.displayInputValue}} @unit={{this.unit}} />`
    );
    await fillIn('.oss-slider--number-input', '10');
    assert.dom('.oss-slider--tooltip').hasText('10%');
  });

  test('the tooltip is rendered without unit when @unit is not provided', async function (assert) {
    this.displayInputValue = true;
    this.onChange = sinon.stub();
    await render(hbs`<OSS::Slider @value={{this.value}} @displayInputValue={{this.displayInputValue}} />`);
    await fillIn('.oss-slider--number-input', '10');
    assert.dom('.oss-slider--tooltip').hasText('10');
  });

  test('the @onChange method is called with the proper value', async function (assert) {
    this.displayInputValue = true;
    this.onChange = sinon.stub();
    await render(
      hbs`<OSS::Slider @value={{this.value}} @displayInputValue={{this.displayInputValue}} @unit={{this.unit}} @onChange={{this.onChange}}/>`
    );
    await fillIn('.oss-slider--number-input', '10');
    assert.ok(this.onChange.calledWith(10));
  });

  module('value number input', function () {
    test('it renders the number input when @displayInputValue is truthy', async function (assert) {
      this.displayInputValue = true;
      await render(
        hbs`<OSS::Slider @value={{this.value}} @displayInputValue={{this.displayInputValue}} @unit={{this.unit}} />`
      );
      assert.dom('.oss-slider--number-input').exists();
    });

    test('it renders the slider with a value of 0 when @value is not a number', async function (assert) {
      this.displayInputValue = true;
      await render(
        hbs`<OSS::Slider @value={{this.value}} @displayInputValue={{this.displayInputValue}} @unit={{this.unit}} />`
      );
      await fillIn('.oss-slider--number-input', '');
      assert.dom('.oss-slider--number-input').exists().hasText('');
      let element = this.element.querySelector('.oss-slider--range');
      assert.dom(element).exists();
      console.log(await getSliderWidth(element));
      assert.strictEqual(await getSliderWidth(element), '0%');
    });

    test('it does not render the number input when @displayInputValue is falsy', async function (assert) {
      this.displayInputValue = false;
      await render(
        hbs`<OSS::Slider @value={{this.value}} @displayInputValue={{this.displayInputValue}} @unit={{this.unit}} />`
      );
      assert.dom('.oss-slider--number-input').doesNotExist();
    });
  });

  module('Unit container', function () {
    hooks.beforeEach(function () {
      this.displayInputValue = false;
    });

    test('it does not render the unit container if @unit is undefined', async function (assert) {
      await render(hbs`<OSS::Slider @value={{this.value}} @displayInputValue={{true}} />`);
      assert.dom('.oss-slider--unit-container').doesNotExist();
    });

    test('it does not render the unit container if @displayInputValue is falsy', async function (assert) {
      await render(
        hbs`<OSS::Slider @value={{this.value}} @displayInputValue={{this.displayInputValue}} @unit={{this.unit}} />`
      );
      assert.dom('.oss-slider--unit-container').doesNotExist();
    });

    test('it renders the unit container with the proper unit when @unit is defined', async function (assert) {
      this.displayInputValue = true;
      await render(
        hbs`<OSS::Slider @value={{this.value}} @displayInputValue={{this.displayInputValue}} @unit={{this.unit}} />`
      );
      assert.dom('.oss-slider--unit-container .fa-percent').exists();
    });
  });
});
