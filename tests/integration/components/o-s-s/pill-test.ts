import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render, setupOnerror } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import sinon from 'sinon';

module('Integration | Component | o-s-s/pill', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<OSS::Pill @label="Pill"/>`);

    assert.dom('.oss-pill').exists();
  });

  test('it renders the label correctly', async function (assert) {
    await render(hbs`<OSS::Pill @label="Pill" />`);

    assert.dom('.oss-pill').hasText('Pill');
  });

  test('it renders the corresponding style when the component is selected', async function (assert) {
    await render(hbs`<OSS::Pill @label="Pill" @selected={{true}} />`);

    assert.dom('.oss-pill').hasClass('oss-pill--selected');
  });

  test('it renders the corresponding style when the component is disabled', async function (assert) {
    await render(hbs`<OSS::Pill @label="Pill" @disabled={{true}} />`);

    assert.dom('.oss-pill').hasClass('oss-pill--disabled');
  });

  test('the onChange function is called on click', async function (assert) {
    this.onChange = sinon.stub();
    await render(hbs`<OSS::Pill @label="Pill" @onChange={{this.onChange}} />`);

    assert.true(this.onChange.notCalled);
    await click('.oss-pill');
    assert.true(this.onChange.calledOnce);
  });

  module('Error management', function () {
    test('it fails if @label is missing', async function (assert) {
      setupOnerror((err: { message: string }) => {
        assert.equal(err.message, 'Assertion Failed: [component][OSS::Pill] You must pass a @label argument.');
      });

      await render(hbs`<OSS::Pill />`);
    });
  });
});
