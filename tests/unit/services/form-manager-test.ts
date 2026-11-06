import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { type TestContext } from '@ember/test-helpers';
import { setupIntl } from 'ember-intl/test-support';
import sinon from 'sinon';
import type { Feedback } from '@upfluence/oss-components/services/form-manager';
import { setupToast } from '@upfluence/oss-components/test-support';

const FAKE_UUID = '1234-5678-9101-1121-3141-';

module('Unit | Service | form-manager', function (hooks) {
  setupTest(hooks);
  setupIntl(hooks);
  setupToast(hooks);

  hooks.beforeEach(function () {
    this.randomUUIDStub = sinon.stub(window.crypto, 'randomUUID').returns(FAKE_UUID);

    this.service = this.owner.lookup('service:form-manager');
  });

  hooks.afterEach(function () {
    this.randomUUIDStub.restore();
  });

  module('#generateId', function () {
    test('it generates a unique ID', function (assert) {
      assert.strictEqual(this.service.generateId(), FAKE_UUID);
    });
  });

  module('#getInstance', function () {
    test('it returns a form instance', function (assert) {
      assert.expect(6);
      const instance = this.service.getInstance('test');

      assert.strictEqual(instance.id, 'test');
      ['validateForm', 'validateField', 'getErrors', 'clearErrors', 'displayErrorsToast'].forEach((method) => {
        assert.strictEqual(typeof instance[method], 'function');
      });
    });
  });

  module('#registerField', function () {
    test('it properly registers a field with a validator', function (assert) {
      const id = this.service.generateId();
      const field = 'testField';
      const validator = sinon.stub();

      this.service.registerField(id, field, validator);

      assert.strictEqual(this.service.formValidators[id][field], validator);
    });
  });

  module('#unregisterField', function () {
    test('it properly unregisters a field', function (assert) {
      this.service.registerField('test', 'testField', sinon.stub());

      this.service.unregisterField('test', 'testField');

      assert.strictEqual(this.service.formValidators['test']['testField'], undefined);
    });

    test('it removes the feedback of the unregistered field only', function (this: TestContext, assert) {
      const warningFeedback = { kind: 'be_cautious', message: { type: 'warning', value: 'warning' } } as Feedback;
      const errorFeedback = { kind: 'blank', message: { type: 'error', value: 'Error' } } as Feedback;

      this.service.registerField('test', 'testField', sinon.stub().returns(warningFeedback));
      this.service.registerField('test', 'otherField', sinon.stub().returns(errorFeedback));
      this.service.getInstance('test').validateForm();

      this.service.unregisterField('test', 'testField');

      assert.deepEqual(this.service.formFeedbacks['test'], { otherField: errorFeedback });
    });

    test('the form is valid again once its only field in error is unregistered', function (this: TestContext, assert) {
      const formInstance = this.service.getInstance('test');

      this.service.registerField(
        'test',
        'testField',
        sinon.stub().returns({ kind: 'blank', message: { type: 'error', value: 'Error' } } as Feedback)
      );
      formInstance.validateForm();

      this.service.unregisterField('test', 'testField');

      assert.true(formInstance.validateForm());
    });

    test('it keeps the field when another validator was registered for it since', function (this: TestContext, assert) {
      const previousValidator = sinon.stub();
      const currentValidator = sinon.stub();

      this.service.registerField('test', 'testField', previousValidator);
      this.service.registerField('test', 'testField', currentValidator);

      this.service.unregisterField('test', 'testField', previousValidator);
      this.service.getInstance('test').validateForm();

      assert.true(currentValidator.calledOnceWithExactly());
    });
  });

  module('#unregisterForm', () => {
    test('it removes the feedbacks of the form', function (this: TestContext, assert) {
      const formInstance = this.service.getInstance('test');

      formInstance.setFieldFeedback('testField', {
        kind: 'blank',
        message: { type: 'error', value: 'Error' }
      } as Feedback);

      this.service.unregisterForm('test');

      assert.deepEqual(formInstance.getErrors(), {});
    });

    test('it removes the validators of the form', function (this: TestContext, assert) {
      const validator = sinon.stub();

      this.service.registerField('test', 'testField', validator);

      this.service.unregisterForm('test');
      this.service.getInstance('test').validateForm();

      assert.true(validator.notCalled);
    });

    test('it keeps the feedbacks of the other forms', function (this: TestContext, assert) {
      const errorFeedback = { kind: 'blank', message: { type: 'error', value: 'Error' } } as Feedback;
      const otherFormInstance = this.service.getInstance('other');

      this.service.getInstance('test').setFieldFeedback('testField', errorFeedback);
      otherFormInstance.setFieldFeedback('testField', errorFeedback);

      this.service.unregisterForm('test');

      assert.deepEqual(otherFormInstance.getErrors(), { testField: errorFeedback });
    });
  });

  module('Form instance methods', function (hooks) {
    hooks.beforeEach(function () {
      this.formInstance = this.service.getInstance('test');
    });

    module('#validateField', function () {
      test('the feedbacks are properly populated if any', function (assert) {
        const field = 'testField';
        const validator = sinon
          .stub()
          .returns({ kind: 'blank', message: { type: 'error', value: 'Error' } } as Feedback);

        this.service.registerField('test', field, validator);

        assert.false(this.formInstance.validateField(field));
        assert.deepEqual(this.service.formFeedbacks['test'][field], {
          kind: 'blank',
          message: { type: 'error', value: 'Error' }
        });
      });

      test('it returns true if there is no error feedback', function (assert) {
        const field = 'testField';
        const validator = sinon
          .stub()
          .returns({ kind: 'be_cautious', message: { type: 'warning', value: 'warning' } } as Feedback);

        this.service.registerField('test', field, validator);

        assert.true(this.formInstance.validateField(field));
        assert.deepEqual(this.service.formFeedbacks['test'][field], {
          kind: 'be_cautious',
          message: { type: 'warning', value: 'warning' }
        });
      });

      test('no feedback is populated if there is none', function (assert) {
        const field = 'testField';
        const validator = sinon.stub().returns(undefined);

        this.service.registerField('test', field, validator);

        assert.true(this.formInstance.validateField(field));
        assert.strictEqual(this.service.formFeedbacks['test'], undefined);
      });
    });

    module('#validateForm', function () {
      test('the feedbacks are properly populated if any', function (assert) {
        const field = 'testField';
        const validator = sinon
          .stub()
          .returns({ kind: 'blank', message: { type: 'error', value: 'Error' } } as Feedback);

        this.service.registerField('test', field, validator);

        assert.false(this.formInstance.validateForm());
        assert.deepEqual(this.service.formFeedbacks['test'][field], {
          kind: 'blank',
          message: { type: 'error', value: 'Error' }
        });
      });

      test('it returns true if there is no error feedback', function (assert) {
        const field = 'testField';
        const validator = sinon
          .stub()
          .returns({ kind: 'be_cautious', message: { type: 'warning', value: 'warning' } } as Feedback);

        this.service.registerField('test', field, validator);

        assert.true(this.formInstance.validateForm());
        assert.deepEqual(this.service.formFeedbacks['test'][field], {
          kind: 'be_cautious',
          message: { type: 'warning', value: 'warning' }
        });
      });

      test('no feedback is populated if there is none', function (assert) {
        const field = 'testField';
        const validator = sinon.stub().returns(undefined);

        this.service.registerField('test', field, validator);

        assert.true(this.formInstance.validateForm());
        assert.strictEqual(this.service.formFeedbacks['test'], undefined);
      });
    });

    module('#getErrors', function () {
      test('it returns all error feedbacks if any', function (assert) {
        this.service.registerField(
          'test',
          'testField',
          sinon.stub().returns({ kind: 'blank', message: { type: 'error', value: 'Error' } } as Feedback)
        );
        this.service.registerField(
          'test',
          'testField2',
          sinon.stub().returns({ kind: 'be_cautious', message: { type: 'warning', value: 'warning' } } as Feedback)
        );

        this.formInstance.validateForm();

        assert.deepEqual(this.formInstance.getErrors(), {
          testField: {
            kind: 'blank',
            message: { type: 'error', value: 'Error' }
          }
        });
      });
    });

    module('#clearErrors', function (hooks) {
      hooks.beforeEach(function () {
        this.service.registerField(
          'test',
          'testField',
          sinon.stub().returns({ kind: 'blank', message: { type: 'error', value: 'Error' } } as Feedback)
        );
        this.formInstance.validateForm();
      });

      test('it clears the error feedbacks', function (assert) {
        assert.deepEqual(this.formInstance.getErrors(), {
          testField: {
            kind: 'blank',
            message: { type: 'error', value: 'Error' }
          }
        });

        this.formInstance.clearErrors('testField');

        assert.deepEqual(this.formInstance.getErrors(), {});
      });
    });

    module('#setFieldFeedback', function () {
      test('it sets the feedback for a field', function (assert) {
        const field = 'testField';
        const feedback = { kind: 'blank', message: { type: 'error', value: 'Error' } } as Feedback;

        this.formInstance.setFieldFeedback(field, feedback);

        assert.deepEqual(this.service.formFeedbacks['test'][field], feedback);
      });
    });

    module('#displayErrorsToast', function () {
      test('it displays the requirement toast when only blank errors are present', function (this: TestContext, assert) {
        registerFieldFeedback(this, 'firstName', 'blank', 'error');
        registerFieldFeedback(this, 'lastName', 'blank', 'error');
        this.formInstance.validateForm();

        this.formInstance.displayErrorsToast();

        assert.true(
          this.toastErrorStub.calledOnceWithExactly(
            this.intl.t('oss-components.forms.errors.toast.requirement.message'),
            this.intl.t('oss-components.forms.errors.toast.requirement.title')
          )
        );
      });

      test('it displays the format toast when only invalid errors are present', function (this: TestContext, assert) {
        registerFieldFeedback(this, 'email', 'invalid', 'error');
        this.formInstance.validateForm();

        this.formInstance.displayErrorsToast();

        assert.true(
          this.toastErrorStub.calledOnceWithExactly(
            this.intl.t('oss-components.forms.errors.toast.format.message'),
            this.intl.t('oss-components.forms.errors.toast.format.title')
          )
        );
      });

      test('it displays the format and requirement toast when blank and invalid errors are present', function (this: TestContext, assert) {
        registerFieldFeedback(this, 'firstName', 'blank', 'error');
        registerFieldFeedback(this, 'email', 'invalid', 'error');
        this.formInstance.validateForm();

        this.formInstance.displayErrorsToast();

        assert.true(
          this.toastErrorStub.calledOnceWithExactly(
            this.intl.t('oss-components.forms.errors.toast.format_and_requirement.message'),
            this.intl.t('oss-components.forms.errors.toast.format_and_requirement.title')
          )
        );
      });

      test('it does not display any toast when the form has no error', function (this: TestContext, assert) {
        this.formInstance.validateForm();

        this.formInstance.displayErrorsToast();

        assert.true(this.toastErrorStub.notCalled);
      });

      test('it does not display any toast when only other error kinds are present', function (this: TestContext, assert) {
        registerFieldFeedback(this, 'apiKey', 'api-error', 'error');
        this.formInstance.validateForm();

        this.formInstance.displayErrorsToast();

        assert.true(this.toastErrorStub.notCalled);
      });

      test('it ignores blank feedbacks that are not errors', function (this: TestContext, assert) {
        registerFieldFeedback(this, 'nickname', 'blank', 'warning');
        this.formInstance.validateForm();

        this.formInstance.displayErrorsToast();

        assert.true(this.toastErrorStub.notCalled);
      });
    });
  });

  function registerFieldFeedback(
    context: TestContext,
    field: string,
    kind: string,
    type: Feedback['message']['type']
  ): void {
    context.service.registerField('test', field, sinon.stub().returns({ kind, message: { type, value: kind } }));
  }
});
