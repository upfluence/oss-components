import { hbs } from 'ember-cli-htmlbars';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';

module('Integration | Component | o-s-s/banner', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`{{! @glint-nocheck }}<OSS::Banner />`);

    assert.dom('.upf-banner').exists();
  });

  test('passing a font-awesome icon in the @icon parameter, displays the icon in a rounded badge', async function (assert) {
    await render(hbs`{{! @glint-nocheck }}<OSS::Banner @icon="fas fa-check" />`);

    assert.dom('.upf-banner .fa-check').exists();
  });

  test('passing an image url in the @image parameter, displays the image in a rounded badge', async function (assert) {
    this.url =
      'https://thepressfree.com/wp-content/uploads/2021/11/Voici-pourquoi-Bruce-Banner-netait-plus-Smart-Hulk-dans-la-800x445.jpg';
    await render(hbs`{{! @glint-nocheck }}<OSS::Banner @image={{this.url}} />`);

    assert.dom('.upf-banner img').exists();
    assert.dom('img').hasAttribute('src', this.url);
  });

  test('passing a title in the @title parameter, displays the title in the component', async function (assert) {
    await render(hbs`{{! @glint-nocheck }}<OSS::Banner @title="Test Title" />`);

    assert.dom('.upf-banner .font-weight-semibold').hasText('Test Title');
  });

  test('passing a subtitle in the @subtitle parameter, displays the title in the component', async function (assert) {
    await render(hbs`{{! @glint-nocheck }}<OSS::Banner @subtitle="Test subtitle" />`);

    assert.dom('.upf-banner .font-color-gray-500.text-size-4').hasText('Test subtitle');
  });

  module('when passing a plain in the @plain parameter', function () {
    test('when value is truthy, it sets gray-50 background', async function (assert) {
      await render(hbs`{{! @glint-nocheck }}<OSS::Banner @plain={{true}} />`);
      assert.dom('.upf-banner.background-color-gray-50').exists();
    });

    test('when value is falsy, it sets white background', async function (assert) {
      await render(hbs`{{! @glint-nocheck }}<OSS::Banner @plain={{false}} />`);
      assert.dom('.upf-banner.background-color-white').exists();
    });

    test('when value is undefined, it sets white background', async function (assert) {
      await render(hbs`{{! @glint-nocheck }}<OSS::Banner />`);
      assert.dom('.upf-banner.background-color-white').exists();
    });
  });

  module('when passing a selected in the @selected parameter', function () {
    test('when value is truthy, it adds upf-banner--selected class', async function (assert) {
      await render(hbs`{{! @glint-nocheck }}<OSS::Banner @selected={{true}} />`);
      assert.dom('.upf-banner.upf-banner--selected').exists();
    });

    test("when value is falsy, it doesn't add upf-banner--selected class", async function (assert) {
      await render(hbs`{{! @glint-nocheck }}<OSS::Banner @selected={{false}} />`);
      assert.dom('.upf-banner.upf-banner--selected').doesNotExist();
    });

    test("when value is undefined, it doesn't add upf-banner--selected class", async function (assert) {
      await render(hbs`{{! @glint-nocheck }}<OSS::Banner />`);
      assert.dom('.upf-banner.upf-banner--selected').doesNotExist();
    });
  });

  test('passing a custom-icon named block, renders inside the component', async function (assert) {
    await render(hbs`
      {{! @glint-nocheck: not typesafe yet }}
      <OSS::Banner @subtitle="Test subtitle">
        <:custom-icon>
          <OSS::Badge @text="2x" />
        </:custom-icon>
      </OSS::Banner>
    `);

    assert.dom('.upf-badge').exists();
  });

  test('passing an actions named block, renders inside the component', async function (assert) {
    await render(hbs`
      {{! @glint-nocheck: not typesafe yet }}
      <OSS::Banner @subtitle="Test subtitle">
        <:actions>
          <OSS::Button @skin="primary" @label="browse" @icon="fas fa-box-open" @size="md" />
        </:actions>
      </OSS::Banner>
    `);

    assert.dom('.upf-btn').exists();
  });
});
