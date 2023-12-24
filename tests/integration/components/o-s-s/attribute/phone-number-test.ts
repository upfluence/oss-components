import { hbs } from 'ember-cli-htmlbars';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';

module('Integration | Component | o-s-s/attribute/phone-number', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<OSS::Attribute::PhoneNumber />`);

    assert.dom('[data-control-name="attribute-phone-number"]').exists();
  });

  test('If the number is passed, it is displayed', async function (assert) {
    await render(hbs`<OSS::Attribute::PhoneNumber @number="+1 212 666 666" />`);

    assert.dom('.oss-attribute__value').hasText('+1 212 666 666');
  });

  test('If the number is undefined, a dash is displayed', async function (assert) {
    await render(hbs`<OSS::Attribute::PhoneNumber @prefix="+44" @number="" />`);

    assert.dom('.oss-attribute__value').hasText('-');
  });

  test('If the prefix is passed with a number, they are both displayed', async function (assert) {
    await render(hbs`<OSS::Attribute::PhoneNumber @prefix="+44" @number="123 123" />`);

    assert.dom('.oss-attribute__value').hasText('+44 123 123');
  });

  test('If the countryCode matches one in the dictionary, a flag is displayed', async function (assert) {
    await render(hbs`<OSS::Attribute::PhoneNumber @countryCode="US" @prefix="+1" @number="123 123" />`);

    assert.dom('.oss-attribute__value').hasText('+1 123 123');
    assert.dom('.fflag-US').exists();
  });

  test("If the countryCode doesn't match one in the dictionary, no flag is displayed", async function (assert) {
    await render(hbs`<OSS::Attribute::PhoneNumber @countryCode="random" @prefix="+1" @number="123 123" />`);

    assert.dom('.oss-attribute__value').hasText('+1 123 123');
    assert.dom('.fflag-US').doesNotExist();
  });
});
