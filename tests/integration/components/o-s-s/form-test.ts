import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, settled, triggerEvent, type TestContext } from '@ember/test-helpers';
import { tracked } from '@glimmer/tracking';
import { hbs } from 'ember-cli-htmlbars';
import sinon from 'sinon';

class FormVisibility {
  @tracked isVisible: boolean = true;
}

module('Integration | Component | o-s-s/form', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.formManager = this.owner.lookup('service:form-manager');
    sinon.stub(this.formManager, 'generateId').returns('foo-id');
    this.onSetup = sinon.stub();
    this.onSubmit = sinon.stub();
  });

  test('it properly renders & calls the onSetup arg upon entry', async function (assert) {
    await render(hbs`
      <OSS::Form @onSetup={{this.onSetup}} @onSubmit={{this.onSubmit}}>
        <:content>
          Foo
        </:content>
      </OSS::Form>
    `);

    assert.dom('form').hasAttribute('id', 'foo-id');
    assert.ok(
      this.onSetup.calledOnceWithExactly(
        sinon.match((obj: unknown) => {
          return (
            obj &&
            typeof obj === 'object' &&
            ['validateForm', 'validateField', 'getErrors', 'clearErrors'].every((func) => func in obj)
          );
        })
      )
    );
    assert.dom().hasText('Foo');
  });

  test('hitting Enter properly submits the form', async function (assert) {
    const validateFormStub = sinon.stub(this.formManager, 'validateForm').returns(true);

    await render(hbs`
      <OSS::Form @onSetup={{this.onSetup}} @onSubmit={{this.onSubmit}}>
        <:content>
          Foo
        </:content>
      </OSS::Form>
    `);
    await triggerEvent('form', 'submit');

    assert.ok(validateFormStub.calledOnce);
  });

  module('when the form is destroyed', (hooks) => {
    hooks.beforeEach(function (this: TestContext) {
      this.formVisibility = new FormVisibility();
      this.validator = sinon
        .stub()
        .returns({ kind: 'blank', message: { type: 'error', value: 'This field is required.' } });
    });

    test('the feedbacks set on the form are cleared', async function (this: TestContext, assert) {
      await renderRemovableForm();

      const formInstance = this.onSetup.firstCall.firstArg;
      formInstance.setFieldFeedback('email', {
        kind: 'taken',
        message: { type: 'error', value: 'Email already taken.' }
      });

      this.formVisibility.isVisible = false;
      await settled();

      assert.deepEqual(formInstance.getErrors(), {});
    });

    test('the service keeps no validators for the form', async function (this: TestContext, assert) {
      await renderRemovableForm();

      this.formVisibility.isVisible = false;
      await settled();

      assert.deepEqual(this.formManager.formValidators, {});
    });

    test('the service keeps no feedbacks for the form', async function (this: TestContext, assert) {
      await renderRemovableForm();

      this.onSetup.firstCall.firstArg.validateForm();

      this.formVisibility.isVisible = false;
      await settled();

      assert.deepEqual(this.formManager.formFeedbacks, {});
    });
  });

  async function renderRemovableForm(): Promise<void> {
    return await render(
      hbs`
        {{#if this.formVisibility.isVisible}}
          <OSS::Form @onSetup={{this.onSetup}} @onSubmit={{this.onSubmit}}>
            <:content>
              <OSS::InputContainer @value="" {{register-form-field form="foo-id" fieldId="name" validator=this.validator validateOnBlur=false}} />
            </:content>
          </OSS::Form>
        {{/if}}
      `
    );
  }
});
