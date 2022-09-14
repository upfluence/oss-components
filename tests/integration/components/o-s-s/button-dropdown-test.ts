import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render, setupOnerror } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | o-s-s/button-dropdown', function (hooks) {
  setupRenderingTest(hooks);

  test('it throws an error if nor icon or label args are provided', async function (assert) {
    setupOnerror((err: { message: string }) => {
      assert.equal(
        err.message,
        'Assertion Failed: [component][OSS::ButtonDropdown] You must pass either a @label or an @icon argument.'
      );
    });

    await render(
      hbs`<OSS::ButtonDropdown><:items><div class="oss-button-dropdown__item">foo</div></:items></OSS::ButtonDropdown>`
    );
  });

  test('the icon is not displayed if not provided', async function (assert) {
    await render(
      hbs`<OSS::ButtonDropdown @label="label"><:items><div class="oss-button-dropdown__item">foo</div></:items></OSS::ButtonDropdown>`
    );

    assert.dom('.oss-button-dropdown__trigger .fx-row:first-child i').doesNotExist();
  });

  test('the label is not displayed if not provided', async function (assert) {
    await render(
      hbs`<OSS::ButtonDropdown @icon="far fa-users"><:items><div class="oss-button-dropdown__item">foo</div></:items></OSS::ButtonDropdown>`
    );

    assert.dom('.oss-button-dropdown__trigger .fx-row:first-child span').doesNotExist();
  });

  test('the icon and label are displayed correctly when provided', async function (assert) {
    await render(
      hbs`<OSS::ButtonDropdown @icon="far fa-users" @label="label"><:items><div class="oss-button-dropdown__item">foo</div></:items></OSS::ButtonDropdown>`
    );

    assert.dom('.oss-button-dropdown__trigger .fx-row:first-child i').exists();
    assert.dom('.oss-button-dropdown__trigger .fx-row:first-child i').hasClass('far');
    assert.dom('.oss-button-dropdown__trigger .fx-row:first-child i').hasClass('fa-users');
    assert.dom('.oss-button-dropdown__trigger .fx-row:first-child span').exists();
    assert.dom('.oss-button-dropdown__trigger .fx-row:first-child span').hasText('label');
  });

  test('clicking on the caret container part opens the dropdown', async function (assert) {
    await render(
      hbs`<OSS::ButtonDropdown @icon="far fa-users" @label="label"><:items><div class="oss-button-dropdown__item">foo</div></:items></OSS::ButtonDropdown>`
    );

    assert.dom('.oss-button-dropdown__items').exists();
    assert.dom('.oss-button-dropdown__items').hasNoClass('oss-button-dropdown__items--visible');

    await click('.oss-button-dropdown__trigger .fx-row:last-child')
    assert.dom('.oss-button-dropdown__items').hasClass('oss-button-dropdown__items--visible');
    assert.dom('.oss-button-dropdown__items .oss-button-dropdown__item').exists({ count: 1 });
    assert.dom('.oss-button-dropdown__items .oss-button-dropdown__item').hasText('foo');
  });
});
