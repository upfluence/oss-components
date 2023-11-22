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

    test('it renders only the progressBar when only @value is specified', async function (assert) {
      await render(hbs`<OSS::ProgressBar @value={{this.checkedValue}} />`);

      assert.dom('.oss-progress-bar').exists();
      assert.dom('.oss-progress-bar--label').doesNotExist();
      assert.dom('.oss-progress-bar--value').doesNotExist();
    });

    test('It renders the progress bar inner when the @value is specified', async function (assert) {
      await render(hbs`<OSS::ProgressBar @value={{this.checkedValue}} />`);

      assert.dom('.oss-progress-bar').exists();
      const innerBar = this.element.querySelector('.oss-progress-bar--inner');
      assert.dom(innerBar).exists();
    });
  });

  module('@value behaviour', function () {
    test('It renders the progress bar inner with the correct width when @value is specified', async function (assert) {
      await render(hbs`<OSS::ProgressBar @value={{this.checkedValue}} />`);

      assert.dom('.oss-progress-bar').exists();
      const innerBar = this.element.querySelector('.oss-progress-bar--inner');
      if (innerBar) {
        const inlineStyle = innerBar.getAttribute('style');
        assert.ok(inlineStyle?.includes(this.checkedValue), 'The inline style attribute is set to the proper value');
      }
    });

    test('It renders the progress bar inner with the correct width when @value is updated from one value to another', async function (assert) {
      await render(hbs`<OSS::ProgressBar @value={{this.checkedValue}} />`);

      assert.dom('.oss-progress-bar').exists();
      const innerBar = this.element.querySelector('.oss-progress-bar--inner');
      if (innerBar) {
        const inlineStyle = innerBar.getAttribute('style');
        assert.ok(inlineStyle?.includes(this.checkedValue), 'The inline style attribute is set to the proper value');
      }
      this.set('checkedValue', 100);
      if (innerBar) {
        const inlineStyle = innerBar.getAttribute('style');
        assert.ok(inlineStyle?.includes('100'), 'The inline style attribute is set to the proper value');
      }
    });
  });

  module('other args behaviour', function () {
    test('It renders the small progress bar inner when the @small attribute is specified', async function (assert) {
      await render(hbs`<OSS::ProgressBar @value={{this.checkedValue}} @small={{true}} />`);

      assert.dom('.oss-progress-bar').exists();
      const innerBar = this.element.querySelector('.oss-progress-bar--inner');
      assert.dom(innerBar).exists();
      if (innerBar) {
        assert.equal(
          innerBar.clientHeight,
          4,
          'Element has the correct height (replace 100 with your expected height)'
        );
      }
    });

    test('It renders the label when @label is specified', async function (assert) {
      await render(hbs`<OSS::ProgressBar @value={{this.checkedValue}} @label="Hello"/>`);

      assert.dom('.oss-progress-bar--label').exists();
      assert.dom('.oss-progress-bar--label').hasText('Hello');
    });

    test('It renders the value when @valueIsVisible is specified', async function (assert) {
      await render(hbs`<OSS::ProgressBar @value={{this.checkedValue}} @label="Hello" @valueIsVisible={{true}}/>`);

      assert.dom('.oss-progress-bar--value').exists();
      assert.dom('.oss-progress-bar--value').hasText(this.checkedValue + '%');
    });
  });
});
