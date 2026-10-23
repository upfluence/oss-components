import { render } from '@ember/test-helpers';

import { hbs } from 'ember-cli-htmlbars';
import { setupIntl } from 'ember-intl/test-support';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';
import { formatMoneyHelper as appFormatMoney } from 'test-app/helpers/format-money';
import { formatNumericHelper as appFormatNumeric } from 'test-app/helpers/format-numeric';
import { stopPropagation as appStopPropagation } from 'test-app/helpers/stop-propagation';
import { transitionTo as appTransitionTo } from 'test-app/helpers/transition-to';

import { formatMoneyHelper } from '@upfluence/oss-components/helpers/format-money';
import { formatNumericHelper } from '@upfluence/oss-components/helpers/format-numeric';
import { stopPropagation } from '@upfluence/oss-components/helpers/stop-propagation';
import { transitionTo } from '@upfluence/oss-components/helpers/transition-to';
import { initialize } from '@upfluence/oss-components/instance-initializers/override-intl';

module('Integration | v2 package contracts', function (hooks) {
  setupRenderingTest(hooks);
  setupIntl(hooks, 'en-us');

  test('existing aliases resolve to their canonical implementations', function (assert) {
    const aliases = {
      'o-s-s/benjamin-button': 'o-s-s/button',
      'o-s-s/bruce': 'o-s-s/banner',
      'o-s-s/charger': 'o-s-s/pill',
      'o-s-s/chip-n-fish': 'o-s-s/chip',
      'o-s-s/multi-select': 'o-s-s/power-select',
      'o-s-s/province-selector': 'o-s-s/country-selector',
      'o-s-s/attribute/tagada': 'o-s-s/attribute/tag-array',
      'o-s-s/smart/charger': 'o-s-s/smart/pill'
    };

    assert.expect(Object.keys(aliases).length);
    for (const [alias, canonical] of Object.entries(aliases)) {
      assert.strictEqual(
        this.owner.factoryFor(`component:${alias}`).class,
        this.owner.factoryFor(`component:${canonical}`).class,
        alias
      );
    }
  });

  test('app helper modules retain named exports', function (assert) {
    assert.strictEqual(appFormatMoney, formatMoneyHelper);
    assert.strictEqual(appFormatNumeric, formatNumericHelper);
    assert.strictEqual(appStopPropagation, stopPropagation);
    assert.strictEqual(appTransitionTo, transitionTo);
  });

  test('legacy components carry their relocated templates', async function (assert) {
    await render(hbs`
      <InputWrapper>Wrapped content</InputWrapper>
      <LoadingState />
      <UpfStat @name="Followers" @data="123" />
    `);

    assert.dom('.upf-input-container').hasText('Wrapped content');
    assert.dom('.spinner .bounce3').exists();
    assert.dom('.upf-stat__name').hasText('Followers');
    assert.dom('.upf-stat__data').hasText('123');
  });

  test('app-only helper, translations, and initializer remain registered', async function (assert) {
    await render(hbs`{{truncate "Migration" 4}}`);
    assert.dom(this.element).hasText('Migr...');
    assert.strictEqual(this.owner.lookup('service:intl').t('oss-components.copy.tooltip'), 'Copy');
    assert.strictEqual(this.owner.resolveRegistration('instance-initializer:override-intl').initialize, initialize);
  });
});
