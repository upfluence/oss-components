import { hbs } from 'ember-cli-htmlbars';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render, setupOnerror } from '@ember/test-helpers';
import sinon from 'sinon';

module('Integration | Component | o-s-s/button-dropdown', function (hooks) {
  setupRenderingTest(hooks);

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

  test('the button is displayed as square when @square is provided', async function (assert) {
    await render(
      hbs`<OSS::ButtonDropdown @icon="far fa-users" @square={{true}}><:items><div class="oss-button-dropdown__item">foo</div></:items></OSS::ButtonDropdown>`
    );

    assert.dom('.oss-button-dropdown__trigger-square').exists();
  });

  test('the arrow is hidden when @hideArrow is provided', async function (assert) {
    await render(
      hbs`<OSS::ButtonDropdown @icon="far fa-users" @square={{true}} @hideArrow={{true}}>
            <:items><div class="oss-button-dropdown__item">foo</div></:items>
          </OSS::ButtonDropdown>`
    );

    assert.dom('.fa-caret-down').doesNotExist();
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

  module('If @mainAction is undefined', function () {
    test('Clicking on the button opens the dropdown', async function (assert) {
      await render(
        hbs`<OSS::ButtonDropdown @icon="far fa-users" @label="label">
              <:items>
                <div class="oss-button-dropdown__item">foo</div>
              </:items>
            </OSS::ButtonDropdown>`
      );

      assert.dom('.oss-button-dropdown__items').doesNotExist();
      assert.dom('.oss-button-dropdown__trigger').hasAttribute('role', 'button');

      await click('.oss-button-dropdown__trigger');
      assert.dom('.oss-button-dropdown__items').exists();
      assert.dom('.oss-button-dropdown__items .oss-button-dropdown__item').exists({ count: 1 });
      assert.dom('.oss-button-dropdown__items .oss-button-dropdown__item').hasText('foo');
    });

    test("Hasn't inner border separator", async function (assert) {
      await render(
        hbs`<OSS::ButtonDropdown @icon="far fa-users" @label="label" @mainAction={{this.mainAction}}>
              <:items>
                <div class="oss-button-dropdown__item">foo</div>
              </:items>
            </OSS::ButtonDropdown>`
      );

      assert
        .dom('.oss-button-dropdown__trigger .fx-row:last-child')
        .doesNotHaveStyle({ 'border-left': '1px solid rgb(229, 231, 235)' });
    });
  });

  module('If @mainAction is defined', function (hooks) {
    hooks.beforeEach(function () {
      this.mainAction = sinon.stub();
    });

    test('Clicking on the button should not open the dropdown', async function (assert) {
      await render(
        hbs`<OSS::ButtonDropdown @icon="far fa-users" @label="label" @mainAction={{this.mainAction}}><:items><div class="oss-button-dropdown__item">foo</div></:items></OSS::ButtonDropdown>`
      );

      assert.dom('.oss-button-dropdown__items').doesNotExist();
      assert.dom('.oss-button-dropdown__trigger').hasNoAttribute('role', 'button');

      await click('.oss-button-dropdown__trigger');
      assert.dom('.oss-button-dropdown__items').doesNotExist();
    });

    test('Clicking on the left part should trigger mainAction', async function (assert) {
      await render(
        hbs`<OSS::ButtonDropdown @icon="far fa-users" @label="label" @mainAction={{this.mainAction}}><:items><div class="oss-button-dropdown__item">foo</div></:items></OSS::ButtonDropdown>`
      );

      assert.ok(this.mainAction.notCalled);
      assert.dom('.oss-button-dropdown__trigger .fx-row:first-child').hasAttribute('role', 'button');

      await click('.oss-button-dropdown__trigger .fx-row:first-child');
      assert.ok(this.mainAction.calledOnce);
    });

    test('Clicking on the caret container part opens the dropdown', async function (assert) {
      await render(
        hbs`<OSS::ButtonDropdown @icon="far fa-users" @label="label" @mainAction={{this.mainAction}}><:items><div class="oss-button-dropdown__item">foo</div></:items></OSS::ButtonDropdown>`
      );

      assert.dom('.oss-button-dropdown__items').doesNotExist();

      assert.dom('.oss-button-dropdown__trigger .fx-row:last-child').hasAttribute('role', 'button');

      await click('.oss-button-dropdown__trigger .fx-row:last-child');
      assert.dom('.oss-button-dropdown__trigger').hasClass('oss-button-dropdown__trigger--active');
      assert.dom('.oss-button-dropdown__items').exists();
      assert.dom('.oss-button-dropdown__items .oss-button-dropdown__item').exists({ count: 1 });
      assert.dom('.oss-button-dropdown__items .oss-button-dropdown__item').hasText('foo');
    });

    test('Has inner border separator', async function (assert) {
      await render(
        hbs`<OSS::ButtonDropdown @icon="far fa-users" @label="label" @mainAction={{this.mainAction}}><:items><div class="oss-button-dropdown__item">foo</div></:items></OSS::ButtonDropdown>`
      );

      assert
        .dom('.oss-button-dropdown__trigger .fx-row:last-child')
        .hasStyle({ 'border-left': '1px solid rgb(229, 231, 235)' });
    });
  });

  module('When the dropdown is opened', function (hooks) {
    hooks.beforeEach(function () {
      this.mainAction = sinon.stub();
    });

    test('Clicking on an item should close the dropdown', async function (assert) {
      await render(
        hbs`<OSS::ButtonDropdown @icon="far fa-users" @label="label" @mainAction={{this.mainAction}}>
              <:items>
                <div class="oss-button-dropdown__item">foo</div>
              </:items>
            </OSS::ButtonDropdown>`
      );

      await click('.oss-button-dropdown__trigger .fx-row:last-child');
      await click('.oss-button-dropdown__items .oss-button-dropdown__item');

      assert.dom('.oss-button-dropdown__items .oss-button-dropdown__item').doesNotExist();
    });

    test('Clicking on an item with stopPropagation should keep the dropdown opened', async function (assert) {
      this.stopPropagation = function (e: MouseEvent) {
        e.stopImmediatePropagation();
      };

      await render(
        hbs`<OSS::ButtonDropdown @icon="far fa-users" @label="label" @mainAction={{this.mainAction}}>
              <:items>
                <div class="oss-button-dropdown__item" {{on "click" this.stopPropagation}}>bar</div>
              </:items>
            </OSS::ButtonDropdown>`
      );

      await click('.oss-button-dropdown__trigger .fx-row:last-child');
      await click('.oss-button-dropdown__items .oss-button-dropdown__item');

      assert.dom('.oss-button-dropdown__items .oss-button-dropdown__item').exists();
    });
  });

  module('Error management', function () {
    test('it throws an error if no icon or label args is provided', async function (assert) {
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

    test('it throws an error if mainAction exists and is not a function', async function (assert) {
      setupOnerror((err: { message: string }) => {
        assert.equal(
          err.message,
          'Assertion Failed: [component][OSS::ButtonDropdown] The parameter @mainAction should be a function.'
        );
      });

      await render(
        hbs`<OSS::ButtonDropdown  @label="test" @mainAction="foo" ><:items><div class="oss-button-dropdown__item">foo</div></:items></OSS::ButtonDropdown>`
      );
    });
  });
});
