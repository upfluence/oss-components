import { hbs } from 'ember-cli-htmlbars';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render, setupOnerror } from '@ember/test-helpers';
import sinon from 'sinon';

module('Integration | Component | o-s-s/checkbox', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.onChange = () => {};
  });

  test('it renders correctly', async function (assert: Assert) {
    this.checked = false;
    await render(hbs`<OSS::Checkbox @checked={{this.checked}} @onChange={{this.onChange}} />`);

    assert.dom('.upf-checkbox input').isNotChecked();
  });

  test('the size arg is handled correctly', async function (assert: Assert) {
    await render(hbs`<OSS::Checkbox @checked={{true}} @onChange={{this.onChange}} @size="sm" />`);

    assert.dom('.upf-checkbox').hasClass('upf-checkbox--sm');
  });

  test('it is correctly updated when the checked argument changes', async function (assert: Assert) {
    this.checked = false;
    await render(hbs`<OSS::Checkbox @checked={{this.checked}} @onChange={{this.onChange}} />`);

    this.set('checked', true);
    assert.dom('.upf-checkbox input').isChecked();
  });

  test('disabled state is handled correctly', async function (assert: Assert) {
    const onChangeSpy = sinon.spy(this.onChange);
    await render(hbs`<OSS::Checkbox @checked={{false}} @onChange={{this.onChange}} @disabled={{true}} />`);
    assert.dom('.upf-checkbox input').hasAttribute('disabled');

    await click('.upf-checkbox');

    assert.ok(onChangeSpy.neverCalledWith());
  });

  test('the onChange hooks is called with the new value', async function (assert: Assert) {
    this.checked = false;
    this.onChange = (value: boolean) => {
      assert.equal(value, true);
    };

    await render(hbs`<OSS::Checkbox @checked={{this.checked}} @onChange={{this.onChange}} />`);
    await click('.upf-checkbox');

    assert.expect(1);
  });

  module('@partial argument', () => {
    test('it is correctly updated when the partial argument changes', async function (assert: Assert) {
      this.checked = true;
      this.partial = false;
      await render(
        hbs`<OSS::Checkbox @checked={{this.checked}} @partial={{this.partial}} @onChange={{this.onChange}} />`
      );

      assert.dom('.upf-checkbox__fake-checkbox').hasNoClass('upf-checkbox__fake-checkbox--partial');
      assert.dom('.upf-checkbox input').isChecked();

      this.set('partial', true);
      assert.dom('.upf-checkbox__fake-checkbox').hasClass('upf-checkbox__fake-checkbox--partial');
    });

    test('if checked is truthy and partial is truthy, the checkbox is partially checked', async function (assert: Assert) {
      this.checked = true;
      this.partial = true;
      await render(
        hbs`<OSS::Checkbox @checked={{this.checked}} @partial={{this.partial}} @onChange={{this.onChange}} />`
      );

      assert.dom('.upf-checkbox__fake-checkbox').hasClass('upf-checkbox__fake-checkbox--partial');
    });

    test('if checked is truthy and partial is falsy, the checkbox is totally checked', async function (assert: Assert) {
      this.checked = true;
      this.partial = false;
      await render(
        hbs`<OSS::Checkbox @checked={{this.checked}} @partial={{this.partial}} @onChange={{this.onChange}} />`
      );

      assert.dom('.upf-checkbox__fake-checkbox').hasNoClass('upf-checkbox__fake-checkbox--partial');
    });
  });

  module('@hasError argument', () => {
    test('When the hasError argument is true, the checkbox has the upf-checkbox--error class', async function (assert: Assert) {
      this.checked = false;
      this.hasError = true;
      await render(
        hbs`<OSS::Checkbox @checked={{this.checked}} @hasError={{this.hasError}} @onChange={{this.onChange}} />`
      );
      assert.dom('.upf-checkbox').hasClass('upf-checkbox--error');
    });

    test('When the hasError argument is false, the checkbox does not have the upf-checkbox--error class', async function (assert: Assert) {
      this.checked = false;
      this.hasError = false;
      await render(
        hbs`<OSS::Checkbox @checked={{this.checked}} @hasError={{this.hasError}} @onChange={{this.onChange}} />`
      );
      assert.dom('.upf-checkbox').doesNotHaveClass('upf-checkbox--error');
    });

    test('When the hasError argument is undefined, the checkbox does not have the upf-checkbox--error class', async function (assert: Assert) {
      this.checked = false;
      this.hasError = undefined;
      await render(
        hbs`<OSS::Checkbox @checked={{this.checked}} @hasError={{this.hasError}} @onChange={{this.onChange}} />`
      );
      assert.dom('.upf-checkbox').doesNotHaveClass('upf-checkbox--error');
    });
  });

  module('Error management', function () {
    test('it throws an error if checked argument is missing', async function (assert) {
      setupOnerror((error: Error) => {
        assert.equal(
          error.message,
          'Assertion Failed: [component][OSS::Checkbox] Boolean @checked argument is mandatory.'
        );
      });
      await render(hbs`<OSS::Checkbox />`);
    });

    test('it throws an error if checked argument is missing', async function (assert) {
      setupOnerror((error: Error) => {
        assert.equal(error.message, 'Assertion Failed: [component][OSS::Checkbox] @onChange argument is mandatory.');
      });

      await render(hbs`<OSS::Checkbox @checked={{true}} />`);
    });
  });
});
