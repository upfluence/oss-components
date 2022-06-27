import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render, setupOnerror } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import sinon from 'sinon';

module('Integration | Helper | transition-to', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.transitionToStub = sinon.stub(this.owner.lookup('service:router'), 'transitionTo');
  });

  module('mandatory arguments checks', function () {
    test('it throws an error if the route argument is missing', async function (assert) {
      setupOnerror((err: Error) => {
        assert.equal(err.message, 'Assertion Failed: [helper][OSS::transition-to] route argument is mandatory');
      });

      await render(hbs`<a {{on "click" (transition-to)}}>link</a>`);
    });

    test('it throws an error if both models and model arguments are passed', async function (assert) {
      setupOnerror((err: Error) => {
        assert.equal(
          err.message,
          'Assertion Failed: [helper][OSS::transition-to] only one of model or models argument must be provided'
        );
      });

      await render(hbs`<a {{on "click" (transition-to route="foo" models=(array '1' '2') model='3')}}>link</a>`);
    });

    test('it throws an error if queryParams argument is passed but is not an object', async function (assert) {
      setupOnerror((err: Error) => {
        assert.equal(
          err.message,
          'Assertion Failed: [helper][OSS::transition-to] queryParams argument must be an object'
        );
      });

      await render(hbs`<a {{on "click" (transition-to route="foo" queryParams='string')}}>link</a>`);
    });
  });

  module('only a route has been passed', function () {
    test('it triggers the RouterService#transitionTo method with the route only', async function (assert) {
      await render(hbs`<a {{on "click" (transition-to route="foo")}}>link</a>`);
      await click('a');

      assert.ok(this.transitionToStub.calledWithExactly('foo', { queryParams: {} }));
    });
  });

  module('a model has been passed to the transition', function () {
    test('it triggers the RouterService#transitionTo method with the route only', async function (assert) {
      await render(hbs`<a {{on "click" (transition-to route="foo" model="1")}}>link</a>`);
      await click('a');

      assert.ok(this.transitionToStub.calledWithExactly('foo', '1', { queryParams: {} }));
    });
  });

  module('multiple models have been passed to the transition', function () {
    test('it triggers the RouterService#transitionTo method with the route only', async function (assert) {
      await render(hbs`<a {{on "click" (transition-to route="foo" models=(array 'fizz' 'buzz'))}}>link</a>`);
      await click('a');

      assert.ok(this.transitionToStub.calledWithExactly('foo', 'fizz', 'buzz', { queryParams: {} }));
    });
  });

  module('with queryParams', function () {
    test('it triggers the RouterService#transitionTo method with the route and queryParams', async function (assert) {
      await render(hbs`<a {{on "click" (transition-to route="foo" queryParams=(hash myParam="bruh"))}}>link</a>`);
      await click('a');

      assert.ok(this.transitionToStub.calledWithExactly('foo', { queryParams: { myParam: 'bruh' } }));
    });
  });
});
