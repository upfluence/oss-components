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
      await render(hbs`<div class="field"><label {{required-input}}>Name</label><input /></div>`);

      assert.formField('.field').isRequired();
    });

    test('it fails when the label has no required marker', async function (this: TestContext, assert) {
      assert.expect(1);
      await render(hbs`<div class="field"><label>Name</label><input /></div>`);

      const pushResultStub = capturePushResult(assert, () => assert.formField('.field').isRequired());

      assert.true(
        pushResultStub.calledOnceWithExactly({
          result: false,
          actual: false,
          expected: true,
          message: '.field is a required field'
        })
      );
    });

    test('it fails when the required marker precedes the text', async function (this: TestContext, assert) {
      assert.expect(1);
      await render(hbs`<div class="field"><label><span class="font-color-error-500">*</span>Name</label></div>`);

      const pushResultStub = capturePushResult(assert, () => assert.formField('.field').isRequired());

      assert.true(
        pushResultStub.calledOnceWithExactly({
          result: false,
          actual: false,
          expected: true,
          message: '.field is a required field'
        })
      );
    });
  });

  module('isNotRequired', () => {
    test('it passes when the label has no required marker', async function (this: TestContext, assert) {
      await render(hbs`<div class="field"><label>Name</label><input /></div>`);

      assert.formField('.field').isNotRequired();
    });

    test('it fails when the label ends with the required marker', async function (this: TestContext, assert) {
      assert.expect(1);
      await render(hbs`<div class="field"><label {{required-input}}>Name</label><input /></div>`);

      const pushResultStub = capturePushResult(assert, () => assert.formField('.field').isNotRequired());

      assert.true(
        pushResultStub.calledOnceWithExactly({
          result: false,
          actual: true,
          expected: false,
          message: '.field is not a required field'
        })
      );
    });
  });

  module('hasLabel', () => {
    test('it passes when the text matches, without the required marker', async function (this: TestContext, assert) {
      await render(hbs`<div class="field"><label {{required-input}}>Name</label><input /></div>`);

      assert.formField('.field').hasLabel('Name');
    });

    test('it passes when the label is written on several lines', async function (this: TestContext, assert) {
      await render(hbs`
        <div class="field">
          <label {{required-input}}>
            Name
          </label>
        </div>
      `);

      assert.formField('.field').hasLabel('Name');
    });

    test('it passes when the expected label is a SafeString', async function (this: TestContext, assert) {
      await render(hbs`<div class="field"><label {{required-input}}>Name</label><input /></div>`);

      assert.formField('.field').hasLabel(htmlSafe('Name'));
    });

    test('it ignores HTML comments in the label', async function (this: TestContext, assert) {
      await render(hbs`<div class="field"><label><!-- explanation -->Name</label></div>`);

      assert.formField('.field').hasLabel('Name');
    });

    test('it fails when the text differs', async function (this: TestContext, assert) {
      assert.expect(1);
      await render(hbs`<div class="field"><label {{required-input}}>Email</label><input /></div>`);

      const pushResultStub = capturePushResult(assert, () => assert.formField('.field').hasLabel('Name'));

      assert.true(
        pushResultStub.calledOnceWithExactly({
          result: false,
          actual: 'Email',
          expected: 'Name',
          message: '.field has the label "Name"'
        })
      );
    });
  });

  module('when the field does not exist', () => {
    test('isRequired fails with the custom message', async function (this: TestContext, assert) {
      assert.expect(1);
      await render(hbs`<div></div>`);

      const pushResultStub = capturePushResult(assert, () =>
        assert.formField('.field').isRequired('The name field is required')
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

      const pushResultStub = capturePushResult(assert, () => assert.formField('.field').isNotRequired());

      assert.true(
        pushResultStub.calledOnceWithExactly({
          result: false,
          actual: null,
          expected: false,
          message: '.field is not a required field'
        })
      );
    });

    test('hasLabel fails', async function (this: TestContext, assert) {
      assert.expect(1);
      await render(hbs`<div></div>`);

      const pushResultStub = capturePushResult(assert, () => assert.formField('.field').hasLabel('Name'));

      assert.true(
        pushResultStub.calledOnceWithExactly({
          result: false,
          actual: null,
          expected: 'Name',
          message: '.field has the label "Name"'
        })
      );
    });
  });

  module('when the field does not contain exactly one label', () => {
    test('it fails when the field has no label', async function (this: TestContext, assert) {
      assert.expect(1);
      await render(hbs`<div class="field"><input /></div>`);

      const pushResultStub = capturePushResult(assert, () => assert.formField('.field').isNotRequired());

      assert.true(
        pushResultStub.calledOnceWithExactly({
          result: false,
          actual: null,
          expected: false,
          message: '.field is not a required field'
        })
      );
    });

    test('it fails when the field has several labels', async function (this: TestContext, assert) {
      assert.expect(1);
      await render(hbs`
        <div class="field">
          <label {{required-input}}>Name</label>
          <label {{required-input}}>Email</label>
        </div>
      `);

      const pushResultStub = capturePushResult(assert, () => assert.formField('.field').hasLabel('Name'));

      assert.true(
        pushResultStub.calledOnceWithExactly({
          result: false,
          actual: null,
          expected: 'Name',
          message: '.field has the label "Name"'
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
