import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render, setupOnerror } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import sinon from 'sinon';

module('Integration | Helper | redirect-to', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.redirectStub = sinon.stub(window, 'open');
    this.url = 'https://github.com/upfluence/oss-components';
  });

  module('mandatory arguments checks', function () {
    test('it throws an error if the url argument is missing', async function (assert) {
      setupOnerror((err: Error) => {
        assert.equal(err.message, 'Assertion Failed: [helper][OSS::redirect-to] url argument is mandatory.');
      });

      await render(hbs`<div {{on "click" (redirect-to)}}>link</div>`);
    });

    test('it throws an error if the target is not a valid one', async function (assert) {
      setupOnerror((err: Error) => {
        assert.equal(
          err.message,
          'Assertion Failed: [helper][OSS::redirect-to] the target argument must be a valid one: https://www.w3schools.com/tags/att_a_target.asp.'
        );
      });

      await render(hbs`<div {{on "click" (redirect-to url=this.url target="_foo")}}>link</div>`);
    });
  });

  test('it redirects to the url on the current tab if not target is passed', async function (assert) {
    await render(hbs`<div {{on "click" (redirect-to url=this.url)}}>link</div>`);
    await click('div');
    assert.ok(this.redirectStub.calledOnceWithExactly(this.url, '_self'));
    sinon.restore();
  });

  test('it redirects to the url on the provided target', async function (assert) {
    await render(hbs`<div {{on "click" (redirect-to url=this.url target="_blank")}}>link</div>`);
    await click('div');
    assert.ok(this.redirectStub.calledOnceWithExactly(this.url, '_blank'));
    sinon.restore();
  });
});
