import { hbs } from 'ember-cli-htmlbars';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, setupOnerror } from '@ember/test-helpers';

module('Integration | Component | o-s-s/progress-bar', function (hooks) {
  setupRenderingTest(hooks);
  hooks.beforeEach(function () {
    this.checkedValue = 42;
    this.skins = { pending: 10, success: 30, warning: 25, danger: 15 };
  });

  test('it renders', async function (assert) {
    await render(hbs`<OSS::ProgressBar @value={{this.checkedValue}} />`);

    assert.dom('.oss-progress-bar').exists();
  });

  module('@value arg behaviour', function () {
    test('It renders the progress-bar--inner with the correct width when @value is specified', async function (assert) {
      await render(hbs`<OSS::ProgressBar @value={{this.checkedValue}} />`);

      assert.dom('.oss-progress-bar').exists();
      const innerBar = this.element.querySelector('.oss-progress-bar__inner') as Element;
      const inlineStyle = innerBar.getAttribute('style');
      assert.ok(inlineStyle?.includes(this.checkedValue), 'The inline style attribute is set to the proper value');
    });

    test('It renders the progress-bar--inner with the correct width when @value is updated from one value to another', async function (assert) {
      await render(hbs`<OSS::ProgressBar @value={{this.checkedValue}} />`);

      assert.dom('.oss-progress-bar').exists();
      const innerBar = this.element.querySelector('.oss-progress-bar__inner') as Element;

      let inlineStyle = innerBar.getAttribute('style');
      assert.ok(inlineStyle?.includes(this.checkedValue), 'The inline style attribute is set to the proper value');
      this.set('checkedValue', 100);
      inlineStyle = innerBar.getAttribute('style');
      assert.ok(inlineStyle?.includes('100'), 'The inline style attribute is set to the proper value');
    });
  });

  module('@size arg behaviour', function () {
    test('if the value is "xs", the progress bar height is the proper height', async function (assert) {
      await render(hbs`<OSS::ProgressBar @value={{this.checkedValue}} @size="xs" />`);

      assert.dom('.oss-progress-bar').exists();
      const innerBar = this.element.querySelector('.oss-progress-bar__inner') as Element;
      assert.equal(innerBar.clientHeight, 1, 'Element has the correct height');
    });

    test('if the value is "sm", the progress bar height is the proper height', async function (assert) {
      await render(hbs`<OSS::ProgressBar @value={{this.checkedValue}} @size="sm" />`);

      assert.dom('.oss-progress-bar').exists();
      const innerBar = this.element.querySelector('.oss-progress-bar__inner') as Element;
      assert.equal(innerBar.clientHeight, 4, 'Element has the correct height');
    });

    test('if the value is "lg", the progress bar height is the proper height', async function (assert) {
      await render(hbs`<OSS::ProgressBar @value={{this.checkedValue}} @size="lg" />`);

      assert.dom('.oss-progress-bar').exists();
      const innerBar = this.element.querySelector('.oss-progress-bar__inner') as Element;
      assert.equal(innerBar.clientHeight, 10, 'Element has the correct height');
    });

    test('if the value is unspecified, the progress bar height is the proper height', async function (assert) {
      await render(hbs`<OSS::ProgressBar @value={{this.checkedValue}} />`);

      assert.dom('.oss-progress-bar').exists();
      const innerBar = this.element.querySelector('.oss-progress-bar__inner') as Element;
      assert.equal(innerBar.clientHeight, 10, 'Element has the correct height');
    });
  });

  module('@label arg behaviour', function () {
    test('if the value is specified, the label is displayed', async function (assert) {
      await render(hbs`<OSS::ProgressBar @value={{this.checkedValue}} @label="Hello"/>`);

      assert.dom('.oss-progress-bar__label').exists();
      assert.dom('.oss-progress-bar__label').hasText('Hello');
    });

    test('if the value is not specified, the label is not displayed', async function (assert) {
      await render(hbs`<OSS::ProgressBar @value={{this.checkedValue}}/>`);

      assert.dom('.oss-progress-bar__label').doesNotExist();
    });
  });

  module('@displayValue arg behaviour', function () {
    test('if the value is true, the value is displayed', async function (assert) {
      await render(hbs`<OSS::ProgressBar @value={{this.checkedValue}} @label="Hello" @displayValue={{true}}/>`);

      assert.dom('.oss-progress-bar__value').exists();
      assert.dom('.oss-progress-bar__value').hasText(this.checkedValue + '%');
    });

    test('if the value is false, the value is not displayed', async function (assert) {
      await render(hbs`<OSS::ProgressBar @value={{this.checkedValue}} @label="Hello" @displayValue={{false}}/>`);

      assert.dom('.oss-progress-bar__value').doesNotExist();
    });

    test('if the value is unspecified, the value is not displayed', async function (assert) {
      await render(hbs`<OSS::ProgressBar @value={{this.checkedValue}} @label="Hello" />`);

      assert.dom('.oss-progress-bar__value').doesNotExist();
    });
  });

  module('@skin arg behaviour', function () {
    test('if the value is "warning", the progress bar has the correct class', async function (assert) {
      await render(hbs`<OSS::ProgressBar @value={{this.checkedValue}} @skin="warning" />`);

      assert.dom('.oss-progress-bar').hasClass('oss-progress-bar--warning');
    });

    test('if the value is "success", the progress bar has the correct class', async function (assert) {
      await render(hbs`<OSS::ProgressBar @value={{this.checkedValue}} @skin="success" />`);

      assert.dom('.oss-progress-bar').hasClass('oss-progress-bar--success');
    });

    test('if the value is "danger", the progress bar has the correct class', async function (assert) {
      await render(hbs`<OSS::ProgressBar @value={{this.checkedValue}} @skin="danger" />`);

      assert.dom('.oss-progress-bar').hasClass('oss-progress-bar--danger');
    });

    test('if the value is unspecified, the progress bar has the correct class', async function (assert) {
      await render(hbs`<OSS::ProgressBar @value={{this.checkedValue}} />`);

      assert.dom('.oss-progress-bar').hasClass('oss-progress-bar');
    });
  });

  module('@coloredBackground arg behaviour', function () {
    test('if the value is true, the colored-background class is added', async function (assert) {
      await render(hbs`<OSS::ProgressBar @value={{this.checkedValue}} @coloredBackground={{true}} />`);

      assert.dom('.oss-progress-bar').hasClass('oss-progress-bar--colored-background');
    });

    test('if the value is false, the colored-background class is not added', async function (assert) {
      await render(hbs`<OSS::ProgressBar @value={{this.checkedValue}} @coloredBackground={{false}} />`);

      assert.dom('.oss-progress-bar').doesNotHaveClass('oss-progress-bar--colored-background');
    });

    test('if the value is unspecified, the colored-background class is not added', async function (assert) {
      await render(hbs`<OSS::ProgressBar @value={{this.checkedValue}} />`);

      assert.dom('.oss-progress-bar').doesNotHaveClass('oss-progress-bar--colored-background');
    });
  });

  module('@secondarySkin arg behaviour', function () {
    test('if the value is "warning", the progress bar has the correct secondary class', async function (assert) {
      await render(hbs`<OSS::ProgressBar @value={{this.checkedValue}} @secondarySkin="warning" />`);

      assert.dom('.oss-progress-bar').hasClass('oss-progress-bar--secondary-skin--warning');
    });

    test('if the value is "success", the progress bar has the correct secondary class', async function (assert) {
      await render(hbs`<OSS::ProgressBar @value={{this.checkedValue}} @secondarySkin="success" />`);

      assert.dom('.oss-progress-bar').hasClass('oss-progress-bar--secondary-skin--success');
    });

    test('if the value is "danger", the progress bar has the correct secondary class', async function (assert) {
      await render(hbs`<OSS::ProgressBar @value={{this.checkedValue}} @secondarySkin="danger" />`);

      assert.dom('.oss-progress-bar').hasClass('oss-progress-bar--secondary-skin--danger');
    });

    test('if the value is unspecified, the progress bar does not have a secondary class', async function (assert) {
      await render(hbs`<OSS::ProgressBar @value={{this.checkedValue}} />`);

      assert.dom('.oss-progress-bar').doesNotHaveClass('oss-progress-bar--secondary-skin--warning');
      assert.dom('.oss-progress-bar').doesNotHaveClass('oss-progress-bar--secondary-skin--success');
      assert.dom('.oss-progress-bar').doesNotHaveClass('oss-progress-bar--secondary-skin--danger');
    });
  });

  module('@skins arg behaviour', function () {
    test('if the value is defined, the progress bar has the correct multi skin class', async function (assert) {
      await render(hbs`<OSS::ProgressBar @value={{this.checkedValue}} @skins={{this.skins}} />`);

      assert.dom('.oss-progress-bar').hasClass('oss-progress-bar--multi-skin');
    });

    test('if the value is defined, the progress bar has the correct success, warning, and danger classes', async function (assert) {
      await render(hbs`<OSS::ProgressBar @value={{this.checkedValue}} @skins={{this.skins}} />`);

      assert.dom('.oss-progress-bar__inner').hasClass('oss-progress-bar__inner--pending');
      assert.dom('.oss-progress-bar__inner:nth-of-type(2)').hasClass('oss-progress-bar__inner--success');
      assert.dom('.oss-progress-bar__inner:nth-of-type(3)').hasClass('oss-progress-bar__inner--warning');
      assert.dom('.oss-progress-bar__inner:nth-of-type(4)').hasClass('oss-progress-bar__inner--danger');
    });

    test('if the value is defined, the progress bar has the correct pending value', async function (assert) {
      await render(hbs`<OSS::ProgressBar @value={{this.checkedValue}} @skins={{this.skins}} />`);

      assert.dom('.oss-progress-bar__inner--pending').hasAttribute('aria-valuenow', '10');
    });

    test('if the value is defined, the progress bar has the correct success value', async function (assert) {
      await render(hbs`<OSS::ProgressBar @value={{this.checkedValue}} @skins={{this.skins}} />`);

      assert.dom('.oss-progress-bar__inner--success').hasAttribute('aria-valuenow', '30');
    });

    test('if the value is defined, the progress bar has the correct warning value', async function (assert) {
      await render(hbs`<OSS::ProgressBar @value={{this.checkedValue}} @skins={{this.skins}} />`);

      assert.dom('.oss-progress-bar__inner--warning').hasAttribute('aria-valuenow', '25');
    });

    test('if the value is defined, the progress bar has the correct danger value', async function (assert) {
      await render(hbs`<OSS::ProgressBar @value={{this.checkedValue}} @skins={{this.skins}} />`);

      assert.dom('.oss-progress-bar__inner--danger').hasAttribute('aria-valuenow', '15');
    });

    test('if the value is higher than 100, it throws an error', async function (assert) {
      setupOnerror((error: Error) => {
        assert.equal(
          error.message,
          'Assertion Failed: [component][OSS::ProgressBar] The sum of all skins values must be between 0 and 100'
        );
      });

      await render(
        hbs`<OSS::ProgressBar @value={{this.checkedValue}} @skins={{hash success=30 warning=45 danger=35}} />`
      );
    });

    test('if the value is updated, the classes also update', async function (assert) {
      await render(hbs`<OSS::ProgressBar @value={{this.checkedValue}} @skins={{this.skins}} />`);

      this.set('skins', { success: 50, warning: 30, danger: 20 });

      assert.dom('.oss-progress-bar__inner--pending').doesNotExist();
      assert.dom('.oss-progress-bar__inner--success').hasAttribute('aria-valuenow', '50');
      assert.dom('.oss-progress-bar__inner--warning').hasAttribute('aria-valuenow', '30');
      assert.dom('.oss-progress-bar__inner--danger').hasAttribute('aria-valuenow', '20');
    });

    test('if only the pending value is defined, the progress bar has the correct pending value', async function (assert) {
      await render(hbs`<OSS::ProgressBar @value={{this.checkedValue}} @skins={{hash pending=33}} />`);

      assert.dom('.oss-progress-bar__inner--pending').exists();
      assert.dom('.oss-progress-bar__inner--pending').hasAttribute('aria-valuenow', '33');
    });

    test('if only the success value is defined, the progress bar has the correct success value', async function (assert) {
      await render(hbs`<OSS::ProgressBar @value={{this.checkedValue}} @skins={{hash success=33}} />`);

      assert.dom('.oss-progress-bar__inner--success').exists();
      assert.dom('.oss-progress-bar__inner--success').hasAttribute('aria-valuenow', '33');
    });

    test('if only the warning value is defined, the progress bar has the correct warning value', async function (assert) {
      await render(hbs`<OSS::ProgressBar @value={{this.checkedValue}} @skins={{hash warning=33}} />`);

      assert.dom('.oss-progress-bar__inner--warning').exists();
      assert.dom('.oss-progress-bar__inner--warning').hasAttribute('aria-valuenow', '33');
    });

    test('if only the danger value is defined, the progress bar has the correct danger value', async function (assert) {
      await render(hbs`<OSS::ProgressBar @value={{this.checkedValue}} @skins={{hash danger=33}} />`);

      assert.dom('.oss-progress-bar__inner--danger').exists();
      assert.dom('.oss-progress-bar__inner--danger').hasAttribute('aria-valuenow', '33');
    });
  });
});
