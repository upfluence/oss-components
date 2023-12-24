import { hbs } from 'ember-cli-htmlbars';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, setupOnerror, click, typeIn } from '@ember/test-helpers';
import sinon from 'sinon';

module('Integration | Component | o-s-s/password-input', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.validates = sinon.stub();
  });

  test('it renders', async function (assert) {
    await render(hbs`<OSS::PasswordInput @value="" />`);
    assert.dom('.oss-input-container').exists();
  });

  test('it renders the @placeholder', async function (assert) {
    await render(hbs`<OSS::PasswordInput @value="" @placeholder="test" />`);
    assert.dom('.oss-input-container input').hasProperty('placeholder', 'test');
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

  test('If the password regex is matched, and the @validates method is passed, then the status of the validation is returned', async function (assert) {
    this.value = '1Aaaaaa';
    this.validates = (x: boolean) => {
      assert.equal(x, true);
    };
    await render(hbs`{{! @glint-nocheck }}<OSS::PasswordInput @value={{this.value}} @validates={{this.validates}} />`);
    await typeIn('input', 'a');
  });

  test('If the password regex isnt matched, and the @validates method is passed, then the status of the validation is returned', async function (assert) {
    this.value = '1A';
    this.validates = (x: boolean) => {
      assert.equal(x, false);
    };
    await render(hbs`{{! @glint-nocheck }}<OSS::PasswordInput @value={{this.value}} @validates={{this.validates}} />`);
    await typeIn('input', 'a');
  });

  test('The password validation is not enabled if the @validates method is not passed', async function (assert) {
    this.value = '';
    await render(hbs`{{! @glint-nocheck }}<OSS::PasswordInput @value={{this.value}} />`);
    await typeIn('input', 'az');
    assert.dom('.text-color-error').doesNotExist();
    assert.dom('[data-control-name="password-input-validators"]').doesNotExist();
  });

  test('If the @validates method is passed, the validators states are visible', async function (assert) {
    this.value = '';
    await render(hbs`{{! @glint-nocheck }}<OSS::PasswordInput @value={{this.value}} @validates={{this.validates}} />`);
    assert.dom('[data-control-name="password-input-validators"]').exists();
  });

  module('Validators', () => {
    test('Uppercase - if no uppercase character is inputed, a validator error is shown', async function (assert) {
      this.value = 'aze';
      await render(hbs`{{! @glint-nocheck }}<OSS::PasswordInput @value={{this.value}} @validates={{this.validates}} />`);
      assert.dom('[data-control-name="password-input-validator-uppercase"] i.visible').hasClass('font-color-error-500');
    });

    test('Uppercase - if an uppercase character is inputed, a validator success is shown', async function (assert) {
      this.value = 'AZE';
      await render(hbs`{{! @glint-nocheck }}<OSS::PasswordInput @value={{this.value}} @validates={{this.validates}} />`);
      assert
        .dom('[data-control-name="password-input-validator-uppercase"] i.visible')
        .hasClass('font-color-success-500');
    });

    test('Number - if no number is inputed, a validator error is shown', async function (assert) {
      this.value = 'aze';
      await render(hbs`{{! @glint-nocheck }}<OSS::PasswordInput @value={{this.value}} @validates={{this.validates}} />`);
      assert.dom('[data-control-name="password-input-validator-number"] i.visible').hasClass('font-color-error-500');
    });

    test('Uppercase - if a number is inputed, a validator success is shown', async function (assert) {
      this.value = '123';
      await render(hbs`{{! @glint-nocheck }}<OSS::PasswordInput @value={{this.value}} @validates={{this.validates}} />`);
      assert.dom('[data-control-name="password-input-validator-number"] i.visible').hasClass('font-color-success-500');
    });

    test('Length - if the password is not at least 8 characters long, a validator error is shown', async function (assert) {
      this.value = '123';
      await render(hbs`{{! @glint-nocheck }}<OSS::PasswordInput @value={{this.value}} @validates={{this.validates}} />`);
      assert.dom('[data-control-name="password-input-validator-length"] i.visible').hasClass('font-color-error-500');
    });

    test('Length - if the password has 8 characters, a validator success is shown', async function (assert) {
      this.value = '12345678';
      await render(hbs`{{! @glint-nocheck }}<OSS::PasswordInput @value={{this.value}} @validates={{this.validates}} />`);
      assert.dom('[data-control-name="password-input-validator-length"] i.visible').hasClass('font-color-success-500');
    });

    test('When all validators are matched, the @validates method sends a truthy argument', async function (assert) {
      this.value = '123azeAZE';
      await render(hbs`{{! @glint-nocheck }}<OSS::PasswordInput @value={{this.value}} @validates={{this.validates}} />`);
      await typeIn('input', 'a');
      assert.true(this.validates.calledOnceWith(true));
    });
  });

  module('Passing a @validorSet sets uses the custom validators', (hooks) => {
    hooks.beforeEach(function () {
      this.validatorSet = {
        lowercase: { labelKey: 'oss-components.password-input.validators.lowercase', regex: /(?=.*[a-z]).*/ }
      };
    });

    test('The custom validator is visible', async function (assert) {
      this.value = '';
      await render(hbs`{{! @glint-nocheck: not typesafe yet }}
<OSS::PasswordInput @value={{this.value}} @validates={{this.validates}}
                                           @validatorSet={{this.validatorSet}} />`);
      assert.dom('[data-control-name="password-input-validator-lowercase"]').exists();
    });

    test('Lowercase - if no lowercase character is inputed, a validator error is shown', async function (assert) {
      this.value = 'AZE';
      await render(hbs`{{! @glint-nocheck: not typesafe yet }}
<OSS::PasswordInput @value={{this.value}} @validates={{this.validates}}
                                           @validatorSet={{this.validatorSet}} />`);
      assert.dom('[data-control-name="password-input-validator-lowercase"] i.visible').hasClass('font-color-error-500');
    });

    test('Lowercase - if an lowercase character is inputed, a validator success is shown', async function (assert) {
      this.value = 'aze';
      await render(hbs`{{! @glint-nocheck: not typesafe yet }}
<OSS::PasswordInput @value={{this.value}} @validates={{this.validates}}
                                           @validatorSet={{this.validatorSet}} />`);
      assert
        .dom('[data-control-name="password-input-validator-lowercase"] i.visible')
        .hasClass('font-color-success-500');
    });

    test('When all validators are matched, the @validates method sends a truthy argument', async function (assert) {
      this.value = '123azeAZE';
      await render(hbs`{{! @glint-nocheck: not typesafe yet }}
<OSS::PasswordInput @value={{this.value}} @validates={{this.validates}}
                                           @validatorSet={{this.validatorSet}} />`);
      await typeIn('input', 'a');
      assert.true(this.validates.calledOnceWith(true));
    });
  });

  test('it throws an error when the @value parameter is missing', async function (assert) {
    setupOnerror((err: any) => {
      assert.equal(err.message, 'Assertion Failed: [component][OSS::PasswordInput] The @value parameter is mandatory');
    });

    await render(hbs`{{! @glint-nocheck }}<OSS::PasswordInput />`);
  });
});
