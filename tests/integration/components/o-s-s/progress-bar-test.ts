import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | o-s-s/progress-bar', function (hooks) {
  setupRenderingTest(hooks);
  hooks.beforeEach(function () {
    this.checkedValue = 42;
  });

  module('Successful render', function () {
    test('it renders', async function (assert) {
      await render(hbs`<OSS::ProgressBar @value={{this.checkedValue}} />`);

      assert.dom('.oss-progress-bar').exists();
    });

    test('It renders the progress bar inner when the @value is specified', async function (assert) {
      await render(hbs`<OSS::ProgressBar @value={{this.checkedValue}} />`);

      assert.dom('.oss-progress-bar').exists();
      const innerBar = this.element.querySelector('.oss-progress-bar--inner');
      assert.dom(innerBar).exists();
    });
  });

  module('@value arg behaviour', function () {
    test('It renders the progress bar inner with the correct width when @value is specified', async function (assert) {
      await render(hbs`<OSS::ProgressBar @value={{this.checkedValue}} />`);

      assert.dom('.oss-progress-bar').exists();
      const innerBar = this.element.querySelector('.oss-progress-bar--inner') as Element;
      const inlineStyle = innerBar.getAttribute('style');
      assert.ok(inlineStyle?.includes(this.checkedValue), 'The inline style attribute is set to the proper value');
    });

    test('It renders the progress bar inner with the correct width when @value is updated from one value to another', async function (assert) {
      await render(hbs`<OSS::ProgressBar @value={{this.checkedValue}} />`);

      assert.dom('.oss-progress-bar').exists();
      const innerBar = this.element.querySelector('.oss-progress-bar--inner') as Element;

      let inlineStyle = innerBar.getAttribute('style');
      assert.ok(inlineStyle?.includes(this.checkedValue), 'The inline style attribute is set to the proper value');
      this.set('checkedValue', 100);
      inlineStyle = innerBar.getAttribute('style');
      assert.ok(inlineStyle?.includes('100'), 'The inline style attribute is set to the proper value');
    });
  });

  module('@small arg behaviour', function () {
    test('if the value is true, the progress bar height is the proper height', async function (assert) {
      await render(hbs`<OSS::ProgressBar @value={{this.checkedValue}} @small={{true}} />`);

      assert.dom('.oss-progress-bar').exists();
      const innerBar = this.element.querySelector('.oss-progress-bar--inner') as Element;
      assert.equal(innerBar.clientHeight, 4, 'Element has the correct height');
    });

    test('if the value is false, the progress bar height is the proper height', async function (assert) {
      await render(hbs`<OSS::ProgressBar @value={{this.checkedValue}} @small={{false}}/>`);

      assert.dom('.oss-progress-bar').exists();
      const innerBar = this.element.querySelector('.oss-progress-bar--inner') as Element;
      assert.equal(innerBar.clientHeight, 10, 'Element has the correct height');
    });

    test('if the value is unspecified, the progress bar height is the proper height', async function (assert) {
      await render(hbs`<OSS::ProgressBar @value={{this.checkedValue}} />`);

      assert.dom('.oss-progress-bar').exists();
      const innerBar = this.element.querySelector('.oss-progress-bar--inner') as Element;
      assert.equal(innerBar.clientHeight, 10, 'Element has the correct height');
    });
  });

  module('@label arg behaviour', function () {
    test('if the value is specified, the label is displayed', async function (assert) {
      await render(hbs`<OSS::ProgressBar @value={{this.checkedValue}} @label="Hello"/>`);

      assert.dom('.oss-progress-bar--label').exists();
      assert.dom('.oss-progress-bar--label').hasText('Hello');
    });

    test('if the value is not specified, the label is not displayed', async function (assert) {
      await render(hbs`<OSS::ProgressBar @value={{this.checkedValue}}/>`);

      assert.dom('.oss-progress-bar--label').doesNotExist();
    });
  });

  module('@valueIsVisible arg behaviour', function () {
    test('if the value is true, the value is displayed', async function (assert) {
      await render(hbs`<OSS::ProgressBar @value={{this.checkedValue}} @label="Hello" @valueIsVisible={{true}}/>`);

      assert.dom('.oss-progress-bar--value').exists();
      assert.dom('.oss-progress-bar--value').hasText(this.checkedValue + '%');
    });

    test('if the value is false, the value is not displayed', async function (assert) {
      await render(hbs`<OSS::ProgressBar @value={{this.checkedValue}} @label="Hello" @valueIsVisible={{false}}/>`);

      assert.dom('.oss-progress-bar--value').doesNotExist();
    });

    test('if the value is unspecified, the value is not displayed', async function (assert) {
      await render(hbs`<OSS::ProgressBar @value={{this.checkedValue}} @label="Hello" />`);

      assert.dom('.oss-progress-bar--value').doesNotExist();
    });
  });
});
