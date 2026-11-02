import { render, blur, focus, settled, type TestContext } from '@ember/test-helpers';
import { tracked } from '@glimmer/tracking';

import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';
import sinon from 'sinon';

class FieldVisibility {
  @tracked isVisible: boolean = true;
}

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

  module('when the field in error is removed', (hooks) => {
    hooks.beforeEach(function (this: TestContext) {
      this.fieldVisibility = new FieldVisibility();
      this.validator.returns({ kind: 'blank', message: { type: 'error', value: 'This field is required.' } });
    });

    test('the form is invalid while the field is displayed', async function (this: TestContext, assert) {
      await renderRemovableField();

      assert.false(this.formInstance.validateForm());
    });

    test('the form is valid again once the field is removed', async function (this: TestContext, assert) {
      await renderRemovableField();

      this.formInstance.validateForm();

      this.fieldVisibility.isVisible = false;
      await settled();

      assert.true(this.formInstance.validateForm());
    });

    test('the errors of the field are cleared', async function (this: TestContext, assert) {
      await renderRemovableField();

      this.formInstance.validateForm();

      this.fieldVisibility.isVisible = false;
      await settled();

      assert.deepEqual(this.formInstance.getErrors(), {});
    });
  });

  async function renderComponent(): Promise<void> {
    return await render(
      hbs`
        <OSS::InputContainer @value="foo" {{register-form-field form=this.formInstance.id fieldId="name" validator=this.validator validateOnBlur=this.validateOnBlur}} />
      `
    );
  }

  async function renderRemovableField(): Promise<void> {
    return await render(
      hbs`
        {{#if this.fieldVisibility.isVisible}}
          <OSS::InputContainer @value="" {{register-form-field form=this.formInstance.id fieldId="name" validator=this.validator validateOnBlur=false}} />
        {{/if}}
      `
    );
  }
});
