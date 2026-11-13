import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, settled, triggerEvent, type TestContext } from '@ember/test-helpers';
import { tracked } from '@glimmer/tracking';
import { hbs } from 'ember-cli-htmlbars';
import { setupIntl } from 'ember-intl/test-support';
import sinon from 'sinon';
import type { FormInstance } from '@upfluence/oss-components/services/form-manager';
import { setupToast } from '@upfluence/oss-components/test-support';

class FormVisibility {
  @tracked isVisible: boolean = true;
}

module('Integration | Component | o-s-s/form', function (hooks) {
  setupRenderingTest(hooks);
  setupIntl(hooks, 'en-us');
  setupToast(hooks);

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

  module('when the submitted form has errors', (hooks) => {
    hooks.beforeEach(function (this: TestContext) {
      this.onSetup = (formInstance: FormInstance): void => {
        this.formInstance = formInstance;
      };
      this.validator = sinon
        .stub()
        .returns({ kind: 'blank', message: { type: 'error', value: 'This field is required.' } });
    });

    test('no toast is displayed when onSubmit does not call displayErrorsToast', async function (this: TestContext, assert) {
      await renderFormWithField();

      await triggerEvent('form', 'submit');

      assert.true(this.toastErrorStub.notCalled);
    });

    test('the validation errors toast is displayed when onSubmit calls displayErrorsToast', async function (this: TestContext, assert) {
      this.onSubmit = (): void => this.formInstance.displayErrorsToast();
      await renderFormWithField();

      await triggerEvent('form', 'submit');

      assert.true(
        this.toastErrorStub.calledOnceWithExactly(
          this.intl.t('oss-components.forms.errors.toast.requirement.message'),
          this.intl.t('oss-components.forms.errors.toast.requirement.title')
        )
      );
    });

    test('onSubmit can read getErrors to handle custom errors itself', async function (this: TestContext, assert) {
      this.validator.returns({ kind: 'taken', message: { type: 'error', value: 'Name already taken.' } });
      this.onSubmit = (): void => {
        const { name } = this.formInstance.getErrors();
        this.toastService.error(name.message.value, 'Name');
      };
      await renderFormWithField();

      await triggerEvent('form', 'submit');

      assert.true(this.toastErrorStub.calledOnceWithExactly('Name already taken.', 'Name'));
    });
  });

  async function renderFormWithField(): Promise<void> {
    return await render(
      hbs`
        <OSS::Form @onSetup={{this.onSetup}} @onSubmit={{this.onSubmit}}>
          <:content>
            <OSS::InputContainer @value="" {{register-form-field form="foo-id" fieldId="name" validator=this.validator validateOnBlur=false}} />
          </:content>
        </OSS::Form>
      `
    );
  }

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
