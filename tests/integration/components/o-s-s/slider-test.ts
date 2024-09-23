import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { fillIn, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import sinon from 'sinon';

module('Integration | Component | o-s-s/slider', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.value = 10;
    this.min = 0;
    this.max = 100;
    this.step = 1;
    this.displayInputValue = true;
    this.unit = 'percentage';
  });

  test('it renders', async function (assert) {
    await render(
      hbs`<OSS::Slider @value={{this.value}} @displayInputValue={{this.displayInputValue}} @unit={{this.unit}} />`
    );
    assert.dom('.oss-slider__container .oss-slider__range-container').exists();
  });

  test('it renders the slider as disabled when @disabled is truthy', async function (assert) {
    await render(
      hbs`<OSS::Slider @value={{this.value}} @displayInputValue={{this.displayInputValue}} @unit={{this.unit}} @disabled={{true}}/>`
    );
    assert.dom('.oss-slider__container--disabled .oss-slider__range').isDisabled();
  });

  test('it renders the number input as disabled when @disabled is truthy', async function (assert) {
    await render(
      hbs`<OSS::Slider @value={{this.value}} @displayInputValue={{this.displayInputValue}} @unit={{this.unit}} @disabled={{true}}/>`
    );
    assert.dom('.oss-slider__number-input input').isDisabled();
  });

  test('it renders the slider width to the proper size', async function (assert) {
    await render(
      hbs`<OSS::Slider @value={{this.value}} @displayInputValue={{this.displayInputValue}} @unit={{this.unit}} />`
    );
    const element = this.element.querySelector('.oss-slider__range');
    assert.dom(element).exists();
    assert.strictEqual(element.style.getPropertyValue('--range-percentage'), '10%');
  });

  test('the tooltip has the proper value', async function (assert) {
    await render(
      hbs`<OSS::Slider @value={{this.value}} @displayInputValue={{this.displayInputValue}} @unit={{this.unit}} />`
    );
    assert.dom('.oss-slider__tooltip').hasText('10%');
  });

  test('the tooltip is rendered without unit when @unit is not provided', async function (assert) {
    await render(hbs`<OSS::Slider @value={{this.value}} @displayInputValue={{this.displayInputValue}} />`);
    assert.dom('.oss-slider__tooltip').hasText('10');
  });

  test('the @onChange method is called with the proper value', async function (assert) {
    this.onChange = sinon.stub();
    await render(
      hbs`<OSS::Slider @value={{this.value}} @displayInputValue={{this.displayInputValue}} @unit={{this.unit}} @onChange={{this.onChange}}/>`
    );
    await fillIn('.oss-slider__number-input input', '36');
    assert.ok(this.onChange.calledWith(36));
  });

  module('value number input', function () {
    test('it renders the number input when @displayInputValue is truthy', async function (assert) {
      await render(
        hbs`<OSS::Slider @value={{this.value}} @displayInputValue={{this.displayInputValue}} @unit={{this.unit}} />`
      );
      assert.dom('.oss-slider__number-input').exists();
    });

    test('it renders the slider with a value of 0 when @value is not a number', async function (assert) {
      await render(
        hbs`<OSS::Slider @value={{this.value}} @displayInputValue={{this.displayInputValue}} @unit={{this.unit}} />`
      );
      await fillIn('.oss-slider__number-input input', '');
      assert.dom('.oss-slider__number-input').exists().hasText('');
      const element = this.element.querySelector('.oss-slider__range');
      assert.dom(element).exists();
      assert.strictEqual(element.style.getPropertyValue('--range-percentage'), '0%');
    });

    test('it does not render the number input when @displayInputValue is falsy', async function (assert) {
      this.displayInputValue = false;
      await render(
        hbs`<OSS::Slider @value={{this.value}} @displayInputValue={{this.displayInputValue}} @unit={{this.unit}} />`
      );
      assert.dom('.oss-slider__number-input').doesNotExist();
    });
  });

  module('Unit container', function () {
    test('it does not render the unit container if @unit is undefined', async function (assert) {
      await render(hbs`<OSS::Slider @value={{this.value}} />`);
      assert.dom('.oss-slider__unit-container').doesNotExist();
    });

    test('it does not render the unit container if @displayInputValue is falsy', async function (assert) {
      this.displayInputValue = false;
      await render(
        hbs`<OSS::Slider @value={{this.value}} @displayInputValue={{this.displayInputValue}} @unit={{this.unit}} />`
      );
      assert.dom('.oss-slider__unit-container').doesNotExist();
    });

    test('it renders the unit container with the proper unit when @unit is defined', async function (assert) {
      await render(
        hbs`<OSS::Slider @value={{this.value}} @displayInputValue={{this.displayInputValue}} @unit={{this.unit}} />`
      );
      assert.dom('.oss-slider__number-input .fa-percent').exists();
    });
  });

  module('slider option args', function () {
    test('it renders the slider with a minimum value when @min is provided', async function (assert) {
      this.min = 30;
      await render(
        hbs`<OSS::Slider @value={{this.value}} @displayInputValue={{true}} @min={{this.min}} @max={{this.max}} @step={{this.step}} />`
      );

      await fillIn('.oss-slider__number-input input', '30');

      assert.equal(this.min, this.value);
      const element = this.element.querySelector('.oss-slider__range');
      assert.strictEqual(element.style.getPropertyValue('--range-percentage'), '0%');
    });

    test('it renders the slider with a maximum value when @min is provided', async function (assert) {
      this.max = 1000;
      await render(
        hbs`<OSS::Slider @value={{this.value}} @displayInputValue={{true}} @min={{this.min}} @max={{this.max}} @step={{this.step}} @unit="percentage" />`
      );

      await fillIn('.oss-slider__number-input input', '1000');
      const element = this.element.querySelector('.oss-slider__range');
      assert.strictEqual(element.style.getPropertyValue('--range-percentage'), '100%');
    });
  });
});
