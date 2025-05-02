import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import sinon from 'sinon';
import type { Feedback } from '@upfluence/oss-components/services/form-manager';

const FAKE_UUID = '1234-5678-9101-1121-3141-';

module('Unit | Service | form-manager', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(function () {
    this.randomUUIDStub = sinon.stub(window.crypto, 'randomUUID').returns(FAKE_UUID);

    this.service = this.owner.lookup('service:form-manager');
  });

  hooks.afterEach(function () {
    this.randomUUIDStub.restore();
  });

  module('#generateId', function () {
    test('it generates a unique ID', function (assert) {
      assert.equal(this.service.generateId(), FAKE_UUID);
    });
  });

  module('#getInstance', function () {
    test('it returns a form instance', function (assert) {
      const instance = this.service.getInstance('test');

      assert.equal(instance.id, 'test');
      ['validateForm', 'validateField', 'getErrors', 'clearErrors'].forEach((method) => {
        assert.equal(typeof instance[method], 'function');
      });
    });
  });

  module('#registerField', function () {
    test('it properly registers a field with a validator', function (assert) {
      const id = this.service.generateId();
      const field = 'testField';
      const validator = sinon.stub();

      this.service.registerField(id, field, validator);

      assert.equal(this.service.formValidators[id][field], validator);
    });
  });

  module('#unregisterField', function () {
    test('it properly unregisters a field', function (assert) {
      this.service.registerField('test', 'testField', sinon.stub());

      this.service.unregisterField('test', 'testField');

      assert.equal(this.service.formValidators['test']['testField'], undefined);
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

        assert.equal(this.formInstance.validateField(field), false);
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

        assert.equal(this.formInstance.validateField(field), true);
        assert.deepEqual(this.service.formFeedbacks['test'][field], {
          kind: 'be_cautious',
          message: { type: 'warning', value: 'warning' }
        });
      });

      test('no feedback is populated if there is none', function (assert) {
        const field = 'testField';
        const validator = sinon.stub().returns(undefined);

        this.service.registerField('test', field, validator);

        assert.equal(this.formInstance.validateField(field), true);
        assert.equal(this.service.formFeedbacks['test'], undefined);
      });
    });

    module('#validateForm', function () {
      test('the feedbacks are properly populated if any', function (assert) {
        const field = 'testField';
        const validator = sinon
          .stub()
          .returns({ kind: 'blank', message: { type: 'error', value: 'Error' } } as Feedback);

        this.service.registerField('test', field, validator);

        assert.equal(this.formInstance.validateForm(), false);
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

        assert.equal(this.formInstance.validateForm(), true);
        assert.deepEqual(this.service.formFeedbacks['test'][field], {
          kind: 'be_cautious',
          message: { type: 'warning', value: 'warning' }
        });
      });

      test('no feedback is populated if there is none', function (assert) {
        const field = 'testField';
        const validator = sinon.stub().returns(undefined);

        this.service.registerField('test', field, validator);

        assert.equal(this.formInstance.validateForm(), true);
        assert.equal(this.service.formFeedbacks['test'], undefined);
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
  });
});
