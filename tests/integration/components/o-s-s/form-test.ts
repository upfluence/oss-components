import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, triggerEvent } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import sinon from 'sinon';

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
});
