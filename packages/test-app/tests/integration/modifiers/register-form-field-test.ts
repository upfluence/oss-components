import { render, blur, focus, type TestContext } from '@ember/test-helpers';

import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';
import sinon from 'sinon';

module('Integration | Modifiers | modifiers/register-form-field', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function (this: TestContext) {
    this.formManager = this.owner.lookup('service:form-manager');
    this.formInstance = this.formManager.getInstance('test-form');
    this.validator = sinon.stub();
    this.validateOnBlur = true;
  });

  test('a data-form-field-id attribute is added to the element', async function (this: TestContext, assert) {
    await renderComponent();
    assert.dom('.oss-input-container').hasAttribute('data-form-field-id', 'name');
  });

  module('validateOnBlur behaviour', function () {
    test('when validateOnBlur=true the validator is called when the blur event is triggered', async function (this: TestContext, assert) {
      await renderComponent();
      await focus('input');
      await blur('input');

      assert.ok(this.validator.calledOnce);
    });

    test('when validateOnBlur=false the validator is not called when the blur event is triggered', async function (this: TestContext, assert) {
      this.validateOnBlur = false;

      await renderComponent();
      await focus('input');
      await blur('input');

      assert.ok(this.validator.notCalled);
    });

    test('when validateOnBlur arg is not provided the validator is called when the blur event is triggered', async function (this: TestContext, assert) {
      this.validateOnBlur = undefined;

      await renderComponent();
      await focus('input');
      await blur('input');

      assert.ok(this.validator.calledOnce);
    });
  });

  async function renderComponent(): Promise<void> {
    return await render(
      hbs`
        <OSS::InputContainer @value="foo" {{register-form-field form=this.formInstance.id fieldId="name" validator=this.validator validateOnBlur=this.validateOnBlur}} />
      `
    );
  }
});
