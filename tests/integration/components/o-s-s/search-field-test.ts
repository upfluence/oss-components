import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find, click, typeIn } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupIntl } from 'ember-intl/test-support';

module('Integration | Component | o-s-s/search-field', function (hooks) {
  setupRenderingTest(hooks);
  setupIntl(hooks);

  test('Search Field component is rendered with a placeholder', async function (assert) {
    this.set('placeholder', 'This is a placeholder');
    this.set('value', '');
    this.set('onChange', (value: string) => {
      this.value = value;
    });

    await render(
      hbs`<OSS::SearchField @value={{this.value}} @placeholder={{this.placeholder}} @onChange={{this.onChange}} />`
    );

    assert.strictEqual(
      find('input')?.getAttribute('placeholder'),
      'This is a placeholder',
      'The placeholder is correctly set.'
    );
  });

  test('Input value is reseted when the clear button is clicked', async function (assert) {
    this.set('value', 'Test');
    this.set('onChange', (value: string) => {
      this.value = value;
    });

    await render(hbs`<OSS::SearchField @value={{this.value}} @onChange={{this.onChange}} />`);

    assert.ok(find('[role="button"]'), 'The clear button is shown.');

    await click('[role="button"]');

    assert.strictEqual(this.value, '', 'Input value is reseted when the clear button is clicked');
  });

  test('onChange function is triggered on input change', async function (assert) {
    this.set('value', '');
    this.set('onChange', (value: string) => {
      this.value = value;
    });

    await render(hbs`<OSS::SearchField @value={{this.value}} @onChange={{this.onChange}} />`);
    await typeIn('input', 'Test');

    assert.strictEqual(this.value, 'Test', 'onChange function is triggered on input change');
  });

  test('Clear button is not displayed when the input is empty', async function (assert) {
    this.set('value', '');
    this.set('onChange', (value: string) => {
      this.value = value;
    });

    await render(hbs`<OSS::SearchField @value={{this.value}} @onChange={{this.onChange}} />`);

    assert.notOk(find('[role="button"]'), 'The clear button is not visible when input is empty.');
  });
});
