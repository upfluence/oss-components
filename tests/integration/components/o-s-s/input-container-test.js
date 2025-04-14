import { hbs } from 'ember-cli-htmlbars';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find, typeIn, triggerEvent } from '@ember/test-helpers';
import sinon from 'sinon';

module('Integration | Component | o-s-s/input-container', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<OSS::InputContainer />`);
    assert.dom('.upf-input').exists();
  });

  module('Input Blocks', () => {
    async function renderComponentWithPrefixSuffix() {
      await render(hbs`
      <OSS::InputContainer>
        <:prefix>
          <OSS::Icon @style="solid" @icon="fa-user" />
        </:prefix>
        <:input>
          <Input id="custom-input"/>
        </:input>
        <:suffix>
          <OSS::Icon @style="solid" @icon="fa-times" />
        </:suffix>
      </OSS::InputContainer>`);
    }

    test('Passing a :prefix named-block renders the block properly', async function (assert) {
      await renderComponentWithPrefixSuffix();
      assert.dom('.fa-user').exists();
    });

    test('Passing a :suffix named-block renders the block properly', async function (assert) {
      await renderComponentWithPrefixSuffix();
      assert.dom('.fa-times').exists();
    });

    test('Passing an :input named-block overloads the default input', async function (assert) {
      await renderComponentWithPrefixSuffix();
      assert.dom('#custom-input').exists();
    });
  });

  module('Component Parameters', (hooks) => {
    let onValueChange;

    hooks.beforeEach(function () {
      onValueChange = sinon.fake.returns(true);
      this.set('value', 'testValue');
      this.set('placeholder', 'Type your text');
      this.set('onValueChange', onValueChange);
    });
    async function renderComponentWithParameters() {
      await render(hbs`
        <OSS::InputContainer @value={{this.value}}
                             @onChange={{this.onValueChange}}
                             @placeholder={{this.placeholder}} />`);
    }

    test('Passing a @value parameter works', async function (assert) {
      await renderComponentWithParameters();
      assert.dom('.upf-input').hasValue('testValue');
    });

    test('Passing a @placeholder parameter works', async function (assert) {
      await renderComponentWithParameters();
      let inputElement = find('.upf-input');
      assert.equal(inputElement.getAttribute('placeholder'), 'Type your text');
    });

    test('Passing an @onChange method works and is triggered on input changes', async function (assert) {
      await renderComponentWithParameters();
      let inputElement = find('.upf-input');
      await typeIn(inputElement, 'a');
      assert.ok(onValueChange.called);
    });

    test('Passing an @onChange method works and is triggered on copy event', async function (assert) {
      this.onChange = sinon.stub();
      await render(hbs`<OSS::InputContainer data-control-name="firstname-input" @onChange={{this.onChange}} />`);

      assert.ok(this.onChange.notCalled);
      await triggerEvent('.oss-input-container input', 'paste', {
        clipboardData: { getData: (format) => `clipboardFormat/${format}` }
      });
      assert.ok(this.onChange.calledOnceWith('clipboardFormat/Text'));
    });
  });

  module('feedback messages', () => {
    test('Passing success as @feedbackMessage.type displays the success message and sets the border to green', async function (assert) {
      await render(
        hbs`<OSS::InputContainer @feedbackMessage={{hash type="success" value="This is a success message"}} />`
      );
      assert.dom('.oss-input-container').hasClass('oss-input-container--success');
      assert.dom('i.far').hasClass('fa-check-circle');
      assert.dom('.font-color-success-500').hasText('This is a success message');
    });

    test('Passing warning as @feedbackMessage.type displays the warning message and sets the border to yellow', async function (assert) {
      await render(
        hbs`<OSS::InputContainer @feedbackMessage={{hash type="warning" value="This is a warning message"}} />`
      );
      assert.dom('.oss-input-container').hasClass('oss-input-container--warning');
      assert.dom('i.far').hasClass('fa-exclamation-circle');
      assert.dom('.font-color-warning-500').hasText('This is a warning message');
    });

    test('Passing error as @feedbackMessage.type displays the error message and sets the border to red', async function (assert) {
      await render(
        hbs`<OSS::InputContainer @feedbackMessage={{hash type="error" value="This is an error message"}} />`
      );
      assert.dom('.oss-input-container').hasClass('oss-input-container--error');
      assert.dom('.font-color-error-500').hasText('This is an error message');
    });

    test("Passing an invalid feedbackMessage type doesn't display any message", async function (assert) {
      await render(
        hbs`<OSS::InputContainer @feedbackMessage={{hash type="invalid" value="This is an invalid message"}} />`
      );
      assert.dom('.upf-input').exists();
      assert.dom('.font-color-success-500').doesNotExist();
      assert.dom('.font-color-warning-500').doesNotExist();
      assert.dom('.font-color-error-500').doesNotExist();
      assert.dom('.oss-input-container').doesNotHaveTextContaining('This is an invalid message');
    });
  });

  module('Error States', () => {
    test('Passing an @errorMessage parameter displays an error message and sets the input border to red', async function (assert) {
      await render(hbs`<OSS::InputContainer @errorMessage="This is an error message" />`);
      assert.dom('.oss-input-container').hasClass('oss-input-container--errored');
      assert.dom('.text-color-error').hasText('This is an error message');
    });

    test('Setting @errorMessage parameter to an empty string does not display an error message', async function (assert) {
      await render(hbs`<OSS::InputContainer @errorMessage="" />`);
      assert.dom('.oss-input-container').doesNotHaveClass('oss-input-container--errored');
      assert.dom('.text-color-error').doesNotExist();
    });

    test('Passing a @hasError parameter displays a red border around the input', async function (assert) {
      await render(hbs`<OSS::InputContainer @hasError={{true}} />`);
      assert.dom('.oss-input-container').hasClass('oss-input-container--errored');
    });

    test('Setting @hasError parameter to false does not display a red border around the input', async function (assert) {
      await render(hbs`<OSS::InputContainer @hasError={{false}} />`);
      assert.dom('.oss-input-container').doesNotHaveClass('oss-input-container--errored');
    });

    test('Setting @hasError parameter to undefined does not display a red border around the input', async function (assert) {
      await render(hbs`<OSS::InputContainer @hasError={{undefined}} />`);
      assert.dom('.oss-input-container').doesNotHaveClass('oss-input-container--errored');
    });

    test('Having both @errorMessage and @hasError parameters set to true displays the error message', async function (assert) {
      await render(hbs`<OSS::InputContainer @errorMessage="This is an error message" @hasError={{true}} />`);
      assert.dom('.oss-input-container').hasClass('oss-input-container--errored');
      assert.dom('.text-color-error').hasText('This is an error message');
    });
  });

  module('Extra attributes', () => {
    test('passing an extra class is applied to the component', async function (assert) {
      await render(hbs`<OSS::InputContainer class="my-extra-class" />`);
      assert.dom('.my-extra-class').exists();
    });

    test('passing data-control-name works', async function (assert) {
      await render(hbs`<OSS::InputContainer data-control-name="firstname-input" />`);
      let inputWrapper = find('.oss-input-container');
      assert.equal(inputWrapper.getAttribute('data-control-name'), 'firstname-input');
    });
  });
});
