import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, setupOnerror } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | o-s-s/empty-state', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders with default properties', async function (assert) {
    await render(hbs`<OSS::EmptyState @title="No Data" @subtitle="Try again later" />`);

    assert.dom('div.font-color-gray-900').hasText('No Data');
    assert.dom('div.font-color-gray-500').hasText('Try again later');
  });

  test('it renders with a badge icon', async function (assert) {
    this.set('image', 'fa-thumbs-up');
    await render(hbs`<OSS::EmptyState @title="No Data" @subtitle="Try again later" @badgeIcon={{this.image}} />`);

    assert.dom('div.font-color-gray-900').hasText('No Data');
    assert.dom('div.font-color-gray-500').hasText('Try again later');
    assert.dom('.upf-badge').exists();
  });

  test('it supports named-block usage for image', async function (assert) {
    await render(hbs`
      <OSS::EmptyState @title="No Data" @subtitle="Try again later">
        <:image>
          <img src="/test-image.png" alt="Test Image" />
        </:image>
      </OSS::EmptyState>
    `);

    assert.dom('div.font-color-gray-900').hasText('No Data');
    assert.dom('div.font-color-gray-500').hasText('Try again later');
    assert.dom('img').exists();
  });

  test('it supports named-block usage for actions', async function (assert) {
    await render(hbs`
      <OSS::EmptyState @title="No Data" @subtitle="Try again later">
        <:actions>
          <button type="button">Retry</button>
        </:actions>
      </OSS::EmptyState>
    `);

    assert.dom('div.font-color-gray-900').hasText('No Data');
    assert.dom('div.font-color-gray-500').hasText('Try again later');
    assert.dom('button').hasText('Retry');
  });

  module('component size', function (hooks) {
    test('it applies md sizes by default', async function (assert) {
      await render(hbs`<OSS::EmptyState @title="No Data" @subtitle="Try again later" />`);
      assert.dom('div.font-color-gray-900').hasClass('font-size-lg');
      assert.dom('div.font-color-gray-500').hasClass('font-size-md');
    });

    test('it applies md sizes when given a wrong size', async function (assert) {
      await render(hbs`<OSS::EmptyState @title="No Data" @subtitle="Try again later" @size="wrong" />`);
      assert.dom('div.font-color-gray-900').hasClass('font-size-lg');
      assert.dom('div.font-color-gray-500').hasClass('font-size-md');
    });

    test('it applies md sizes when specified', async function (assert) {
      await render(hbs`<OSS::EmptyState @title="No Data" @subtitle="Try again later" @size="md" />`);
      assert.dom('div.font-color-gray-900').hasClass('font-size-lg');
      assert.dom('div.font-color-gray-500').hasClass('font-size-md');
    });

    test('it applies sm sizes when specified', async function (assert) {
      await render(hbs`<OSS::EmptyState @title="No Data" @subtitle="Try again later" @size="sm" />`);
      assert.dom('div.font-color-gray-900').hasClass('font-size-md');
      assert.dom('div.font-color-gray-500').hasClass('font-size-sm');
    });
  });

  module('error management', function (hooks) {
    test('it throws an error if the @title parameter is not passed', async function (assert) {
      setupOnerror((err: any) => {
        assert.equal(err.message, 'Assertion Failed: [component][OSS::EmptyState] The title parameter is mandatory');
      });

      await render(hbs`<OSS::EmptyState @subtitle="Try again later" />`);
    });

    test('it throws an error if the @subtitle parameter is not passed', async function (assert) {
      setupOnerror((err: any) => {
        assert.equal(err.message, 'Assertion Failed: [component][OSS::EmptyState] The subtitle parameter is mandatory');
      });

      await render(hbs`<OSS::EmptyState @title="No Data" />`);
    });
  });
});
