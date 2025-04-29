import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, type TestContext } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | form-field-feedback', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function (this) {
    this.formManager = this.owner.lookup('service:form-manager');
    this.formInstance = this.formManager.getInstance('test-form');
  });

  module('when the form instance has no errors for the field', function () {
    test('it renders no error message if none is found', async function (this: TestContext, assert) {
      await render(
        hbs`<OSS::InputContainer @value="foo" @feedbackMessage={{form-field-feedback this.formInstance.id "name"}} />`
      );
      assert.dom('.oss-input-container + .font-color-error-500').doesNotExist();
    });

    test('it renders no error message if the required params are omitted', async function (this: TestContext, assert) {
      await render(hbs`
        {{! template-lint-disable no-implicit-this }}
        <OSS::InputContainer @value="foo" @feedbackMessage={{form-field-feedback}} />
      `);
      assert.dom('.oss-input-container + .font-color-error-500').doesNotExist();
    });
  });

  module('when the tracking plan manager builder has errors for the field', function (hooks) {
    hooks.beforeEach(function (this: TestContext) {
      this.formManager.formFeedbacks = Object.freeze({
        [this.formInstance.id]: {
          name: { kind: 'foo', message: { type: 'error', value: 'there were an error on the name field' } }
        }
      });
    });

    test('it renders the error message', async function (this: TestContext, assert) {
      await render(
        hbs`<OSS::InputContainer @value="foo" @feedbackMessage={{form-field-feedback this.formInstance.id "name"}} />`
      );
      assert.dom('.oss-input-container + .font-color-error-500').exists();
      assert.dom('.oss-input-container + .font-color-error-500').hasText('there were an error on the name field');
    });
  });
});
