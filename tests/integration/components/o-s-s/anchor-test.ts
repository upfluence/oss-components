import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import sinon from 'sinon';

module('Integration | Component | o-s-s/anchor', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.router = this.owner.lookup('service:router');

    this.transitionToStub = sinon.stub(this.router, 'transitionTo');
  });

  test('When link is registered in router it render as a anchor element', async function (assert) {
    await render(hbs`<OSS::Anchor @link="http://www.google.fr" target="_blank" >test</OSS::Anchor>`);

    assert.dom('a').hasNoClass('ember-view');
  });

  test('When link is registered in router it render as a linkTo helper', async function (assert) {
    await render(hbs`<OSS::Anchor @link="index" >test</OSS::Anchor>`);

    assert.dom('a').hasClass('ember-view');
  });
});
