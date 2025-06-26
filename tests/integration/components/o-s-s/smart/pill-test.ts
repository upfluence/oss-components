import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import sinon from 'sinon';

module('Integration | Component | o-s-s/smart/pill', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<OSS::Smart::Pill @label="Pill" />`);

    assert.dom('.oss-smart-pill-container').exists();
  });

  test('it renders the label correctly', async function (assert) {
    await render(hbs`<OSS::Smart::Pill @label="Pill" />`);

    assert.dom('.label').hasText('Pill');
  });

  test('it renders the corresponding style when the component is selected', async function (assert) {
    await render(hbs`<OSS::Smart::Pill @label="Pill" @selected={{true}} />`);

    assert.dom('.oss-smart-pill').hasClass('oss-smart-pill--selected');
  });

  test('it renders the corresponding style when the component is disabled', async function (assert) {
    await render(hbs`<OSS::Smart::Pill @label="Pill" @disabled={{true}} />`);

    assert.dom('.oss-smart-pill').hasClass('oss-smart-pill--disabled');
  });

  test('the onChange function is called on click', async function (assert) {
    this.onChange = sinon.stub();
    await render(hbs`<OSS::Smart::Pill @label="Pill" @onChange={{this.onChange}} />`);

    assert.true(this.onChange.notCalled);
    await click('.oss-smart-pill');
    assert.true(this.onChange.calledOnce);
  });

  module('loading', (hooks) => {
    hooks.beforeEach(function () {
      this.loading = true;
    });

    test('during loading, it displays the corresponding animation', async function (assert) {
      await render(hbs`<OSS::Smart::Pill @label="Pill" @loading={{this.loading}} />`);

      assert.dom('.label').hasClass('loading-animation');
    });

    test('Once loading is over, it displays the corresponding animation', async function (assert) {
      await render(hbs`<OSS::Smart::Pill @label="Pill" @loading={{this.loading}} />`);

      this.set('loading', false);
      assert.dom('.oss-smart-pill-container').hasClass('smart-rotating-gradient');
    });
  });
});
