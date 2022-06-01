import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, setupOnerror, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import sinon from 'sinon';

module('Integration | Component | o-s-s/link', function (hooks) {
  setupRenderingTest(hooks);

  test('it fails if no label nor icon argument are present', async function (assert: Assert) {
    setupOnerror((err: Error) => {
      assert.equal(err.message, '[component][OSS::Link] You must pass either a @label or an @icon argument.');
    });

    await render(hbs`<OSS::Link />`);
  });

  test('it renders with icon only', async function (assert: Assert) {
    await render(hbs`<OSS::Link @icon="fab fa-facebook" />`);

    assert.dom('.upf-link i').hasClass('fa-facebook');
  });

  test('it renders with label only', async function (assert: Assert) {
    await render(hbs`<OSS::Link @label="Super Label" />`);

    assert.dom('.upf-link span').hasText('Super Label');
  });

  test('it renders with both label and icon', async function (assert: Assert) {
    await render(hbs`<OSS::Link @icon="fab fa-facebook" @label="Facebook" />`);

    assert.dom('.upf-link i').hasClass('fa-facebook');
    assert.dom('.upf-link span').hasClass('margin-left-xxx-sm');
    assert.dom('.upf-link span').hasText('Facebook');
  });

  test('it opens link with href and target', async function (assert: Assert) {
    let windowOpenStub = sinon.stub(window, 'open');

    await render(hbs`
      <OSS::Link @icon="fab fa-facebook" @label="Facebook" 
                 @link={{hash href="https://www.google.fr" target="_blank"}} />
    `);

    await click('.upf-link');
    assert.true(windowOpenStub.calledOnceWithExactly('https://www.google.fr', '_blank'));
  });

  test('it transits to the route', async function (assert: Assert) {
    let transitionToStub = sinon.stub(this.owner.lookup('service:router'), 'transitionTo');

    await render(hbs`<OSS::Link @icon="fab fa-facebook" @label="Facebook" @transitionTo={{"workflow.create"}} />`);

    await click('.upf-link');
    assert.true(transitionToStub.calledOnceWithExactly('workflow.create'));
  });
});
