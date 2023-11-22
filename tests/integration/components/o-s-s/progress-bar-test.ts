import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | o-s-s/progress-bar', function (hooks) {
  setupRenderingTest(hooks);
  hooks.beforeEach(function () {
    this.checkedValue = 31;
  });

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

  test('It renders the progress bar inner with the correct width when @value is specified', async function (assert) {
    await render(hbs`<OSS::ProgressBar @value={{this.checkedValue}} />`);

    assert.dom('.oss-progress-bar').exists();
    const innerBar = this.element.querySelector('.oss-progress-bar--inner');
    if (innerBar) {
      const inlineStyle = innerBar.getAttribute('style');
      assert.ok(inlineStyle?.includes(this.checkedValue), 'The inline style attribute is set to the proper value');
    } else {
      assert.ok(false, 'Inner bar element not found');
    }
  });

  test('It renders the progress bar inner with the correct width when @value is updated from one value to another', async function (assert) {
    await render(hbs`<OSS::ProgressBar @value={{this.checkedValue}} />`);

    assert.dom('.oss-progress-bar').exists();
    const innerBar = this.element.querySelector('.oss-progress-bar--inner');
    if (innerBar) {
      const inlineStyle = innerBar.getAttribute('style');
      assert.ok(inlineStyle?.includes(this.checkedValue), 'The inline style attribute is set to the proper value');
    } else {
      assert.ok(false, 'Inner bar element not found');
    }
    this.set('checkedValue', 100);
    if (innerBar) {
      const inlineStyle = innerBar.getAttribute('style');
      assert.ok(inlineStyle?.includes('100'), 'The inline style attribute is set to the proper value');
    } else {
      assert.ok(false, 'Inner bar element not found');
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
    assert.dom('.oss-progress-bar--value').hasText('31%');
  });
});
