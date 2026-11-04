import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, type TestContext } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import sinon from 'sinon';

module('Test Support | Custom Assertions | requiredLabel', function (hooks) {
  setupRenderingTest(hooks);

  module('when the label is marked as required', () => {
    test('it passes when the text matches', async function (this: TestContext, assert) {
      await render(hbs`<label {{required-input}}>Name</label>`);

      assert.requiredLabel('label', 'Name');
    });

    test('it passes when the label is written on several lines', async function (this: TestContext, assert) {
      await render(hbs`
        <label {{required-input}}>
          Name
        </label>
      `);

      assert.requiredLabel('label', 'Name');
    });

    test('it fails when the text differs', async function (this: TestContext, assert) {
      assert.expect(1);
      await render(hbs`<label {{required-input}}>Email</label>`);

      const pushResultStub = sinon.stub(assert, 'pushResult');

      assert.requiredLabel('label', 'Name');
      pushResultStub.restore();

      assert.true(
        pushResultStub.calledOnceWithExactly({
          result: false,
          actual: { label: 'Email', required: true },
          expected: { label: 'Name', required: true },
          message: 'label is a required label with the text "Name"'
        })
      );
    });
  });

  module('when the label is not marked as required', () => {
    test('it fails', async function (this: TestContext, assert) {
      assert.expect(1);
      await render(hbs`<label>Name</label>`);

      const pushResultStub = sinon.stub(assert, 'pushResult');

      assert.requiredLabel('label', 'Name');
      pushResultStub.restore();

      assert.true(
        pushResultStub.calledOnceWithExactly({
          result: false,
          actual: { label: 'Name', required: false },
          expected: { label: 'Name', required: true },
          message: 'label is a required label with the text "Name"'
        })
      );
    });
  });

  module('when the element does not exist', () => {
    test('it fails', async function (this: TestContext, assert) {
      assert.expect(1);
      await render(hbs`<div></div>`);

      const pushResultStub = sinon.stub(assert, 'pushResult');

      assert.requiredLabel('label', 'Name', 'The name label is required');
      pushResultStub.restore();

      assert.true(
        pushResultStub.calledOnceWithExactly({
          result: false,
          actual: { label: null, required: false },
          expected: { label: 'Name', required: true },
          message: 'The name label is required'
        })
      );
    });
  });
});
