import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { set } from '@ember/object';
import { click, render } from '@ember/test-helpers';
import settled from '@ember/test-helpers/settled';
import hbs from 'htmlbars-inline-precompile';
import setupOnerror from '@ember/test-helpers/setup-onerror';
import sinon from 'sinon';

module('Integration | Component | o-s-s/toggle-buttons', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.selectedToggle = '';
    this.onSelection = (value: any) => {
      set(this, 'selectedToggle', value);
    };
    this.toggles = [
      {
        value: 'first',
        label: 'First'
      },
      {
        value: 'second',
        label: 'Second'
      }
    ];
  });

  test('it renders', async function (assert) {
    await render(
      hbs`<OSS::ToggleButtons @onSelection={{this.onSelection}} @toggles={{this.toggles}} @selectedToggle={{this.selectedToggle}}/>`
    );

    assert.ok(true);
  });

  module('error management', () => {
    test('it throws an error if @toggles is not provided', async function (assert) {
      setupOnerror((err: any) => {
        assert.equal(
          err.message,
          'Assertion Failed: [component][OSS::ToggleButtons] The @toggles parameter of type object is mandatory'
        );
      });
      await render(hbs`<OSS::ToggleButtons @onSelection={{this.onSelection}}/>`);
      await settled();
    });

    test('it throws an error if @onSelection is not provided', async function (assert) {
      setupOnerror((err: any) => {
        assert.equal(
          err.message,
          'Assertion Failed: [component][OSS::ToggleButtons] The @onSelection parameter of type function is mandatory'
        );
      });
      await render(hbs`<OSS::ToggleButtons @toggles={{this.toggles}}/>`);
      await settled();
    });
  });

  module('If @selectedToggle is passed', function () {
    test("If the selectedToggle doesn't match an entry from the toggles, then the first toggle is set to selected", async function (assert) {
      this.selectedToggle = 'toto';
      await render(
        hbs`<OSS::ToggleButtons @onSelection={{this.onSelection}} @toggles={{this.toggles}} @selectedToggle={{this.selectedToggle}}/>`
      );
      assert.dom('.oss-toggle-buttons-btn--selected').hasText('First');
    });

    test('If the selectedToggle matches an entry from the toggles, then the toggle is set to selected', async function (assert) {
      this.selectedToggle = 'second';

      await render(
        hbs`<OSS::ToggleButtons @onSelection={{this.onSelection}} @toggles={{this.toggles}} @selectedToggle={{this.selectedToggle}}/>`
      );
      assert.dom('.oss-toggle-buttons-btn--selected').hasText('Second');
    });
  });

  module('When clicking on an item', () => {
    test('the toggle is selected', async function (assert) {
      await render(
        hbs`<OSS::ToggleButtons @onSelection={{this.onSelection}} @toggles={{this.toggles}} @selectedToggle={{this.selectedToggle}}/>`
      );

      await click('.oss-toggle-buttons-btn:first-child');
      assert.dom('.oss-toggle-buttons-btn--selected').hasText('First');

      await click('.oss-toggle-buttons-btn:last-child');
      assert.dom('.oss-toggle-buttons-btn--selected').hasText('Second');
    });

    test('the @onSelection method is triggered with the selected value', async function (assert) {
      this.onSelection = sinon.spy();

      await render(
        hbs`<OSS::ToggleButtons @onSelection={{this.onSelection}} @toggles={{this.toggles}} @selectedToggle={{this.selectedToggle}}/>`
      );

      await click('.oss-toggle-buttons-btn:first-child');
      assert.ok(this.onSelection.calledWith('first'));
      await click('.oss-toggle-buttons-btn:last-child');
      assert.ok(this.onSelection.calledWith('second'));
    });
  });
});
