import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, setupOnerror, click, typeIn } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | o-s-s/password-input', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<OSS::PasswordInput @value="" />`);
    assert.dom('.oss-input-container').exists();
  });

  test('it renders the @placeholder', async function (assert) {
    await render(hbs`<OSS::PasswordInput @value="" @placeholder="test" />`);
    assert.dom('.oss-input-container input').hasProperty('placeholder', 'test');
  });

  test('it throws an error when the @value parameter is missing', async function (assert) {
    setupOnerror((err: any) => {
      assert.equal(err.message, 'Assertion Failed: [component][OSS::PasswordInput] The @value parameter is mandatory');
    });

    await render(hbs`<OSS::PasswordInput />`);
  });

  test('it displays the error message when the @errorMessage is non-empty', async function (assert) {
    await render(hbs`<OSS::PasswordInput @value="" @errorMessage="This is the error message" />`);
    assert.dom('.oss-input-container').hasClass('oss-input-container--errored');
    assert.dom('.text-color-error').hasText('This is the error message');
  });

  test('The input is set to password, thus hiding characters, by default', async function (assert) {
    await render(hbs`<OSS::PasswordInput @value="azeaze" />`);
    assert.dom('input').hasAttribute('type', 'password');
  });

  test('Clicking on the eye icon sets the input type to text, thus making the text readable', async function (assert) {
    await render(hbs`<OSS::PasswordInput @value="azeaze" />`);
    assert.dom('input').hasAttribute('type', 'password');
    await click('.fa-eye');
    assert.dom('input').hasAttribute('type', 'text');
  });

  test('Clicking on the eye-slash icon sets the input type to password, thus hiding the text', async function (assert) {
    await render(hbs`<OSS::PasswordInput @value="azeaze" />`);
    assert.dom('input').hasAttribute('type', 'password');
    await click('.fa-eye');
    assert.dom('input').hasAttribute('type', 'text');
    await click('.fa-eye-slash');
    assert.dom('input').hasAttribute('type', 'password');
  });

  test('If the password regex isnt matched, then the error message is displayed', async function (assert) {
    this.value = '';
    await render(hbs`<OSS::PasswordInput @value={{this.value}} />`);
    await typeIn('input', 'az');
    assert
      .dom('.text-color-error')
      .hasText(
        'Your password should have at least 8 characters with at least one lower-case character, one upper-case character and one digit.'
      );
  });

  test('If the password regex is matched, and the @validates method is passed, then the status of the validation is returned', async function (assert) {
    this.value = '1Aaaaaa';
    this.validates = (x: boolean) => {
      assert.equal(x, true);
    };
    await render(hbs`<OSS::PasswordInput @value={{this.value}} @validates={{this.validates}} />`);
    await typeIn('input', 'a');
  });

  test('If the password regex isnt matched, and the @validates method is passed, then the status of the validation is returned', async function (assert) {
    this.value = '1A';
    this.validates = (x: boolean) => {
      assert.equal(x, false);
    };
    await render(hbs`<OSS::PasswordInput @value={{this.value}} @validates={{this.validates}} />`);
    await typeIn('input', 'a');
  });
});
