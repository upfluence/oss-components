import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find, findAll, settled } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | o-s-s/smart/input', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.value = '';
    this.loading = false;
    this.label = '';
  });

  test('it renders empty by default', async function (assert) {
    await render(hbs`<OSS::Smart::Input />`);
    assert.dom().exists();
  });

  test('it renders a label if passed', async function (assert) {
    await render(hbs`<OSS::Smart::Input @label="Username" />`);
    assert.dom('label, span').hasText('Username');
  });

  test('it renders placeholder if passed', async function (assert) {
    await render(hbs`<OSS::Smart::Input @placeholder="Enter email" />`);
    assert.dom('input').hasAttribute('placeholder', 'Enter email');
  });

  test('it binds @value to the input', async function (assert) {
    this.value = 'demo@example.com';
    await render(hbs`<OSS::Smart::Input @value={{this.value}} />`);
    assert.dom('input').hasValue('demo@example.com');
  });

  test('it shows animated text when loading is true', async function (assert) {
    this.value = 'Value';
    this.set('loading', true);

    await render(hbs`
      <OSS::Smart::Input
        @value={{this.value}}
        @loading={{this.loading}}
      />
    `);

    assert.dom('.smart-input__animated-text').exists('');
    assert.dom('.smart-input__animated-text--normal').hasText('Value');
  });

  test('it transitions back to normal input when loading becomes false', async function (assert) {
    this.setProperties({
      value: 'Done',
      loading: true
    });

    await render(hbs`
      <OSS::Smart::Input
        @value={{this.value}}
        @loading={{this.loading}}
      />
    `);

    assert.dom('.smart-input__animated-text').exists();

    // Simulate loading -> false
    this.set('loading', false);
    await settled();

    assert.dom('input').hasValue('Done');
  });

  test('it shows error message when @errorMessage is passed', async function (assert) {
    await render(hbs`
      <OSS::Smart::Input
        @errorMessage="Something went wrong"
      />
    `);

    assert.dom('.text-color-error').hasText('Something went wrong');
  });
});
