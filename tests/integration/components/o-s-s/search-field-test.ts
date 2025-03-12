import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click, typeIn } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupIntl } from 'ember-intl/test-support';
import sinon from 'sinon';

module('Integration | Component | o-s-s/search-field', function (hooks) {
  setupRenderingTest(hooks);
  setupIntl(hooks);

  hooks.beforeEach(function () {
    this.onChange = (value: string) => {
      this.value = value;
    };
  });

  test('Search Field component is rendered with a placeholder', async function (assert) {
    this.placeholder = 'This is a placeholder';
    this.value = '';

    await render(
      hbs`<OSS::SearchField @value={{this.value}} @placeholder={{this.placeholder}} @onChange={{this.onChange}} />`
    );

    assert.dom('input').hasAttribute('placeholder', 'This is a placeholder');
  });

  test('Input value is reset when the clear button is clicked', async function (assert) {
    this.value = 'Test';

    await render(hbs`<OSS::SearchField @value={{this.value}} @onChange={{this.onChange}} />`);

    assert.dom('[role="button"]').exists();

    await click('[role="button"]');

    assert.strictEqual(this.value, '');
  });

  test('onChange function is triggered on input change', async function (assert) {
    this.value = '';
    this.onChange = sinon.stub();

    await render(hbs`<OSS::SearchField @value={{this.value}} @onChange={{this.onChange}} />`);
    await typeIn('input', 'Test', { delay: 0 });

    assert.true(this.onChange.lastCall.calledWith('Test'));
  });

  test('Clear button is not displayed when the input is empty', async function (assert) {
    this.value = '';

    await render(hbs`<OSS::SearchField @value={{this.value}} @onChange={{this.onChange}} />`);

    assert.dom('[role="button"]').doesNotExist();
  });
});
