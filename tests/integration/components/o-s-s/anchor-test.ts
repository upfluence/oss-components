import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import sinon from 'sinon';
import Service from '@ember/service';

class RoutingMock extends Service {
  currentState = 'index';
  generateURL = sinon.stub().returns('/');
  isActiveForRoute = sinon.stub();
}

module('Integration | Component | o-s-s/anchor', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.router = this.owner.lookup('service:router');

    this.transitionToStub = sinon.stub(this.router, 'transitionTo');
  });

  test('When link is not registered in router it renders as a anchor element', async function (assert) {
    await render(hbs`<OSS::Anchor @link="http://www.google.fr" target="_blank">test</OSS::Anchor>`);

    assert.dom('a').hasNoClass('ember-view');
    assert.dom('a').hasAttribute('href', 'http://www.google.fr');
  });

  module('When link is registered in router', function (hooks) {
    hooks.beforeEach(function () {
      this.owner.register('service:-routing', RoutingMock);
      this.routing = this.owner.lookup('service:-routing');
    });

    test('When routePrefix is defined, it renders as a linkTo helper', async function (assert) {
      const urlForStub = sinon.stub(this.router, 'urlFor').returns('/display');
      await render(hbs`<OSS::Anchor @link="index" @routePrefix="display">test</OSS::Anchor>`);

      assert.ok(urlForStub.calledWithExactly('display.index'));
      assert.dom('a').hasClass('ember-view');
      assert.dom('a').hasAttribute('href', '/');
    });

    test('It renders as a linkTo helper', async function (assert) {
      const urlForSpy = sinon.spy(this.router, 'urlFor');
      await render(hbs`<OSS::Anchor @link="index">test</OSS::Anchor>`);

      assert.ok(urlForSpy.calledWithExactly('index'));
      assert.dom('a').hasClass('ember-view');
      assert.dom('a').hasAttribute('href', '/');
    });

    test('It renders as active by default when on the correct route', async function (assert) {
      this.routing.isActiveForRoute.returns(true);
      await render(hbs`<OSS::Anchor @link="index">test</OSS::Anchor>`);
      console.log(this.routing.currentState);

      assert.dom('a').hasClass('ember-view');
      assert.dom('a').hasClass('active');
    });

    test('When disableAutoActive is true and the route matches, it does not render as active', async function (assert) {
      this.routing.isActiveForRoute.returns(false);
      await render(hbs`<OSS::Anchor @link="index" @disableAutoActive={{true}}>test</OSS::Anchor>`);

      assert.dom('a').hasClass('ember-view');
      assert.dom('a').doesNotHaveClass('active');
    });
  });
});
