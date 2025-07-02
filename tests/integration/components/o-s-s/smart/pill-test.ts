import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

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

  test('it displays the correct icon when using the @icon arg', async function (assert) {
    await render(hbs`<OSS::Smart::Pill @label="Pill" @icon="fa-gift"/>`);

    assert.dom('.icon.fa-gift').exists();
  });

  test('it renders the corresponding style when the component is selected', async function (assert) {
    await render(hbs`<OSS::Smart::Pill @label="Pill" @selected={{true}} />`);

    assert.dom('.oss-smart-pill').hasClass('oss-smart-pill--selected');
  });

  test('it renders the corresponding style when the component is disabled', async function (assert) {
    await render(hbs`<OSS::Smart::Pill @label="Pill" @disabled={{true}} />`);

    assert.dom('.oss-smart-pill').hasClass('oss-smart-pill--disabled');
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
