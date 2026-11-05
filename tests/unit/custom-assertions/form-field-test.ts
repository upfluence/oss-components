import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, type TestContext } from '@ember/test-helpers';
import { htmlSafe } from '@ember/template';
import { hbs } from 'ember-cli-htmlbars';
import sinon from 'sinon';

module('Test Support | Custom Assertions | formField', (hooks) => {
  setupRenderingTest(hooks);

  module('isRequired', () => {
    test('it passes when the label ends with the required marker', async function (this: TestContext, assert) {
      await render(hbs`<label class="name-label" {{required-input}}>Name</label>`);

      assert.formField('.name-label').isRequired();
    });

    test('it passes when the label is not a label element', async function (this: TestContext, assert) {
      await render(hbs`<div class="name-label" {{required-input}}>Name</div>`);

      assert.formField('.name-label').isRequired();
    });

    test('it fails when the label has no required marker', async function (this: TestContext, assert) {
      assert.expect(1);
      await render(hbs`<label class="name-label">Name</label>`);

      const pushResultStub = capturePushResult(assert, () => assert.formField('.name-label').isRequired());

      assert.true(
        pushResultStub.calledOnceWithExactly({
          result: false,
          actual: false,
          expected: true,
          message: '.name-label is a required field'
        })
      );
    });

    test('it fails when the required marker precedes the text', async function (this: TestContext, assert) {
      assert.expect(1);
      await render(hbs`<label class="name-label"><span class="font-color-error-500">*</span>Name</label>`);

      const pushResultStub = capturePushResult(assert, () => assert.formField('.name-label').isRequired());

      assert.true(
        pushResultStub.calledOnceWithExactly({
          result: false,
          actual: false,
          expected: true,
          message: '.name-label is a required field'
        })
      );
    });
  });

  module('isNotRequired', () => {
    test('it passes when the label has no required marker', async function (this: TestContext, assert) {
      await render(hbs`<label class="name-label">Name</label>`);

      assert.formField('.name-label').isNotRequired();
    });

    test('it fails when the label ends with the required marker', async function (this: TestContext, assert) {
      assert.expect(1);
      await render(hbs`<label class="name-label" {{required-input}}>Name</label>`);

      const pushResultStub = capturePushResult(assert, () => assert.formField('.name-label').isNotRequired());

      assert.true(
        pushResultStub.calledOnceWithExactly({
          result: false,
          actual: true,
          expected: false,
          message: '.name-label is not a required field'
        })
      );
    });
  });

  module('hasLabel', () => {
    test('it passes when the text matches, without the required marker', async function (this: TestContext, assert) {
      await render(hbs`<label class="name-label" {{required-input}}>Name</label>`);

      assert.formField('.name-label').hasLabel('Name');
    });

    test('it passes when the label is written on several lines', async function (this: TestContext, assert) {
      await render(hbs`
        <label class="name-label" {{required-input}}>
          Name
        </label>
      `);

      assert.formField('.name-label').hasLabel('Name');
    });

    test('it passes when the expected label is a SafeString', async function (this: TestContext, assert) {
      await render(hbs`<label class="name-label" {{required-input}}>Name</label>`);

      assert.formField('.name-label').hasLabel(htmlSafe('Name'));
    });

    test('it ignores HTML comments in the label', async function (this: TestContext, assert) {
      await render(hbs`<label class="name-label"><!-- explanation -->Name</label>`);

      assert.formField('.name-label').hasLabel('Name');
    });

    test('it fails when the text differs', async function (this: TestContext, assert) {
      assert.expect(1);
      await render(hbs`<label class="name-label" {{required-input}}>Email</label>`);

      const pushResultStub = capturePushResult(assert, () => assert.formField('.name-label').hasLabel('Name'));

      assert.true(
        pushResultStub.calledOnceWithExactly({
          result: false,
          actual: 'Email',
          expected: 'Name',
          message: '.name-label has the label "Name"'
        })
      );
    });
  });

  module('when the label does not exist', () => {
    test('isRequired fails with the custom message', async function (this: TestContext, assert) {
      assert.expect(1);
      await render(hbs`<div></div>`);

      const pushResultStub = capturePushResult(assert, () =>
        assert.formField('.name-label').isRequired('The name field is required')
      );

      assert.true(
        pushResultStub.calledOnceWithExactly({
          result: false,
          actual: null,
          expected: true,
          message: 'The name field is required'
        })
      );
    });

    test('isNotRequired fails', async function (this: TestContext, assert) {
      assert.expect(1);
      await render(hbs`<div></div>`);

      const pushResultStub = capturePushResult(assert, () => assert.formField('.name-label').isNotRequired());

      assert.true(
        pushResultStub.calledOnceWithExactly({
          result: false,
          actual: null,
          expected: false,
          message: '.name-label is not a required field'
        })
      );
    });

    test('hasLabel fails', async function (this: TestContext, assert) {
      assert.expect(1);
      await render(hbs`<div></div>`);

      const pushResultStub = capturePushResult(assert, () => assert.formField('.name-label').hasLabel('Name'));

      assert.true(
        pushResultStub.calledOnceWithExactly({
          result: false,
          actual: null,
          expected: 'Name',
          message: '.name-label has the label "Name"'
        })
      );
    });
  });

  function capturePushResult(assert: Assert, run: () => void): sinon.SinonStub {
    const pushResultStub = sinon.stub(assert, 'pushResult');

    run();
    pushResultStub.restore();

    return pushResultStub;
  }
});
