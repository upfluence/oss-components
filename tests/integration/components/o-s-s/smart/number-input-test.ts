import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click, typeIn, find } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import sinon from 'sinon';

module('Integration | Component | o-s-s/smart/number-input', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<OSS::Smart::NumberInput />`);

    assert.dom('.smart-number-input').exists();
    assert.dom('.upf-square-btn').exists({ count: 2 });
    assert.dom('.oss-input-container').exists();
  });

  module('Basic Functionality', (hooks) => {
    let onChangeStub: sinon.SinonSpy<any[], any>;

    hooks.beforeEach(function () {
      onChangeStub = sinon.fake();
      this.value = 10;
      this.onChange = onChangeStub;
    });

    async function renderComponent() {
      await render(hbs`
        <OSS::Smart::NumberInput
          @value={{this.value}}
          @onChange={{this.onChange}}
        />
      `);
    }

    test('displays the current value', async function (assert) {
      await renderComponent();
      assert.dom('.upf-input').hasValue('10');
    });

    test('increases value when plus button is clicked', async function (assert) {
      await renderComponent();
      await click('.upf-square-btn:last-child');
      assert.ok(onChangeStub.calledWith(11));
    });

    test('decreases value when minus button is clicked', async function (assert) {
      await renderComponent();
      await click('.upf-square-btn:first-child');
      assert.ok(onChangeStub.calledWith(9));
    });
  });

  module('Loading State', (hooks) => {
    hooks.beforeEach(function () {
      this.loading = true;
      this.placeholder = 'Loading...';
    });

    test('disables buttons when loading', async function (assert) {
      await render(hbs`
        <OSS::Smart::NumberInput
          @loading={{this.loading}}
          @placeholder={{this.placeholder}}
        />
      `);

      assert.dom('.upf-square-btn').hasAttribute('disabled', '');
    });

    test('applies loading class to container', async function (assert) {
      await render(hbs`
        <OSS::Smart::NumberInput
          @loading={{this.loading}}
          @placeholder={{this.placeholder}}
        />
      `);

      assert.dom('.smart-number-input').hasClass('smart-number-input--loading');
    });
  });

  module('Smart Gradient Animation', (hooks) => {
    hooks.beforeEach(function () {
      this.loading = true;
      this.value = 100;
      this.placeholder = 'Loading...';
    });

    test('applies smart-rotating-gradient class when loading changes from true to false with value', async function (assert) {
      await render(hbs`
        <OSS::Smart::NumberInput
          @loading={{this.loading}}
          @value={{this.value}}
          @placeholder={{this.placeholder}}
        />
      `);

      assert.dom('.smart-number-input').hasClass('smart-number-input--loading');
      assert.dom('.smart-number-input').doesNotHaveClass('smart-rotating-gradient');

      this.loading = false;

      assert.dom('.smart-number-input').hasClass('smart-rotating-gradient');
      assert.dom('.smart-number-input').doesNotHaveClass('smart-number-input--loading');
    });

    test('does not apply smart-rotating-gradient when loading changes from true to false without value', async function (assert) {
      this.value = undefined;

      await render(hbs`
        <OSS::Smart::NumberInput
          @loading={{this.loading}}
          @value={{this.value}}
          @placeholder={{this.placeholder}}
        />
      `);

      assert.dom('.smart-number-input').hasClass('smart-number-input--loading');

      this.loading = false;

      assert.dom('.smart-number-input').doesNotHaveClass('smart-rotating-gradient');
      assert.dom('.smart-number-input').doesNotHaveClass('smart-number-input--loading');
    });

    test('does not apply smart-rotating-gradient when loading changes from true to false with empty value', async function (assert) {
      this.value = 0;

      await render(hbs`
        <OSS::Smart::NumberInput
          @loading={{this.loading}}
          @value={{this.value}}
          @placeholder={{this.placeholder}}
        />
      `);

      assert.dom('.smart-number-input').hasClass('smart-number-input--loading');

      this.loading = false;

      assert.dom('.smart-number-input').hasClass('smart-rotating-gradient');
    });
  });

  module('Error State', (hooks) => {
    hooks.beforeEach(function () {
      this.value = 50;
      this.hasError = true;
      this.errorMessage = 'Invalid value';
    });

    test('applies error styling when hasError is true', async function (assert) {
      await render(hbs`
        <OSS::Smart::NumberInput
          @value={{this.value}}
          @hasError={{this.hasError}}
          @errorMessage={{this.errorMessage}}
        />
      `);

      assert.dom('.smart-number-input').hasClass('smart-number-input--errored');
    });

    test('displays error message', async function (assert) {
      await render(hbs`
        <OSS::Smart::NumberInput
          @value={{this.value}}
          @hasError={{this.hasError}}
          @errorMessage={{this.errorMessage}}
        />
      `);

      assert.dom('.text-color-error').hasText('Invalid value');
    });

    test('applies error styling when errorMessage is provided', async function (assert) {
      this.hasError = false;

      await render(hbs`
        <OSS::Smart::NumberInput
          @value={{this.value}}
          @errorMessage={{this.errorMessage}}
        />
      `);

      assert.dom('.smart-number-input').hasClass('smart-number-input--errored');
    });
  });

  module('Filled State', () => {
    test('applies filled styling when value is present', async function (assert) {
      await render(hbs`
        <OSS::Smart::NumberInput
          @value={{100}}
        />
      `);

      assert.dom('.smart-number-input').hasClass('smart-number-input--filled');
    });

    test('does not apply filled styling when value is undefined', async function (assert) {
      await render(hbs`
        <OSS::Smart::NumberInput
          @value={{undefined}}
        />
      `);

      assert.dom('.smart-number-input').doesNotHaveClass('smart-number-input--filled');
    });

    test('does not apply filled styling when value is null', async function (assert) {
      await render(hbs`
        <OSS::Smart::NumberInput
          @value={{null}}
        />
      `);

      assert.dom('.smart-number-input').doesNotHaveClass('smart-number-input--filled');
    });
  });

  module('State Priority', (hooks) => {
    test('error state takes priority over filled state', async function (assert) {
      await render(hbs`
        <OSS::Smart::NumberInput
          @value={{100}}
          @hasError={{true}}
        />
      `);

      assert.dom('.smart-number-input').hasClass('smart-number-input--errored');
      assert.dom('.smart-number-input').hasClass('smart-number-input--filled');
    });
  });

  module('Number Input Specific Features', (hooks) => {
    hooks.beforeEach(function () {
      this.min = 5;
      this.max = 15;
      this.step = 2;
    });

    test('respects min and max values', async function (assert) {
      await render(hbs`
        <OSS::Smart::NumberInput
          @value={{10}}
          @min={{this.min}}
          @max={{this.max}}
          @step={{this.step}}
        />
      `);

      assert.dom('.upf-square-btn:first-child').doesNotHaveAttribute('disabled');
      assert.dom('.upf-square-btn:last-child').doesNotHaveAttribute('disabled');
    });

    test('disables min button when at minimum value', async function (assert) {
      await render(hbs`
        <OSS::Smart::NumberInput
          @value={{this.min}}
          @min={{this.min}}
          @max={{this.max}}
        />
      `);

      assert.dom('.upf-square-btn:first-child').hasAttribute('disabled');
    });

    test('disables max button when at maximum value', async function (assert) {
      await render(hbs`
        <OSS::Smart::NumberInput
          @value={{this.max}}
          @min={{this.min}}
          @max={{this.max}}
        />
      `);

      assert.dom('.upf-square-btn:last-child').hasAttribute('disabled');
    });
  });
});
