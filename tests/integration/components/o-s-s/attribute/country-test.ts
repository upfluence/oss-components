import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | o-s-s/attribute/country', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<OSS::Attribute::Country />`);

    assert.dom('[data-control-name="attribute-country"]').exists();
  });

  module('If the @countryCode matches a dictionnary entry', () => {
    test('The flag icon is displayed', async function (assert) {
      await render(hbs`<OSS::Attribute::Country @countryCode="US" />`);

      assert.dom('.oss-attribute--label .fflag-US').exists();
    });

    test('The country name is displayed', async function (assert) {
      await render(hbs`<OSS::Attribute::Country @countryCode="US" />`);

      assert.dom('.oss-attribute--value').hasText('United States');
    });
  });

  module('If the @countryCode does not match a dictionnary entry', () => {
    test('The flag icon is not displayed', async function (assert) {
      await render(hbs`<OSS::Attribute::Country @countryCode="" />`);

      assert.dom('.oss-attribute--label .fflag').doesNotExist();
    });

    test('The empty state is displayed', async function (assert) {
      await render(hbs`<OSS::Attribute::Country />`);

      assert.dom('.oss-attribute--value').hasText('-');
    });
  });
});
