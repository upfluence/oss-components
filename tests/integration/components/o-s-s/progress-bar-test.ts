import { hbs } from 'ember-cli-htmlbars';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';

module('Integration | Component | o-s-s/progress-bar', function (hooks) {
  setupRenderingTest(hooks);
  hooks.beforeEach(function () {
    this.checkedValue = 42;
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
});
