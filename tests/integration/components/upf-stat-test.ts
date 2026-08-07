import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { setupIntl } from 'ember-intl/test-support';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { htmlSafe } from '@ember/template';

module('Integration | Component | upf-stat', function (hooks) {
  setupRenderingTest(hooks);
  setupIntl(hooks, { 'upf-stat-test': { label: 'Total <b>revenue</b>' } });

  test('it renders the label', async function (assert) {
    this.label = 'Total revenue';
    await render(hbs`<UpfStat @data="42" @label={{this.label}} />`);

    assert.dom('.upf-stat__label').hasText('Total revenue');
  });

  test('it renders the markup of a plain string label', async function (assert) {
    this.label = 'Total <b>revenue</b>';
    await render(hbs`<UpfStat @data="42" @label={{this.label}} />`);

    assert.dom('.upf-stat__label b').hasText('revenue');
  });

  test('it renders the markup of a translated label', async function (assert) {
    await render(hbs`<UpfStat @data="42" @label={{t "upf-stat-test.label"}} />`);

    assert.dom('.upf-stat__label b').hasText('revenue');
  });

  test('it renders the markup of an already html safe label', async function (assert) {
    this.label = htmlSafe('Total <b>revenue</b>');
    await render(hbs`<UpfStat @data="42" @label={{this.label}} />`);

    assert.dom('.upf-stat__label b').hasText('revenue');
  });

  test('it does not render the label container when no label is provided', async function (assert) {
    await render(hbs`<UpfStat @data="42" />`);

    assert.dom('.upf-stat__label').doesNotExist();
  });
});
