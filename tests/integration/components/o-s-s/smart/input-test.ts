import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
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
    this.placeholder = 'placeholder';
    this.loading = true;

    await render(hbs`
      <OSS::Smart::Input
        @placeholder={{this.placeholder}}
        @loading={{this.loading}}
      />
    `);

    assert.dom('.rainbow_text_animated').hasText(this.placeholder);
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
