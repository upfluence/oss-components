import { hbs } from 'ember-cli-htmlbars';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { set } from '@ember/object';
import { click, render } from '@ember/test-helpers';
import settled from '@ember/test-helpers/settled';
import setupOnerror from '@ember/test-helpers/setup-onerror';
import sinon from 'sinon';

module('Integration | Component | o-s-s/toggle-buttons', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.selectedToggle = 'first';
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

    assert.dom('.oss-toggle-buttons-container').exists();
  });

  module('If @selectedToggle is passed', function () {
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

    test('the @onSelection method is not triggered if the item is already selected', async function (assert) {
      this.onSelectionStub = sinon.stub();

      await render(
        hbs`<OSS::ToggleButtons @onSelection={{this.onSelectionStub}} @toggles={{this.toggles}} @selectedToggle={{this.selectedToggle}}/>`
      );

      await click('.oss-toggle-buttons-btn:first-child');
      assert.ok(this.onSelectionStub.notCalled);
    });

    test('the @onSelection method is triggered with the selected value', async function (assert) {
      this.onSelection = sinon.spy();

      await render(
        hbs`<OSS::ToggleButtons @onSelection={{this.onSelection}} @toggles={{this.toggles}} @selectedToggle={{this.selectedToggle}}/>`
      );

      await click('.oss-toggle-buttons-btn:last-child');
      assert.ok(this.onSelection.calledWith('second'));
    });
  });

  module('Error management', () => {
    test('it throws an error if @toggles is not provided', async function (assert) {
      setupOnerror((err: any) => {
        assert.equal(
          err.message,
          'Assertion Failed: [component][OSS::ToggleButtons] The @toggles parameter of type Toggle[] is mandatory'
        );
      });
      await render(
        hbs`<OSS::ToggleButtons @onSelection={{this.onSelection}} @selectedToggle={{this.selectedToggle}}/>`
      );
      await settled();
    });

    test('it throws an error if @onSelection is not provided', async function (assert) {
      setupOnerror((err: any) => {
        assert.equal(
          err.message,
          'Assertion Failed: [component][OSS::ToggleButtons] The @onSelection parameter of type function is mandatory'
        );
      });
      await render(hbs`<OSS::ToggleButtons @toggles={{this.toggles}} @selectedToggle={{this.selectedToggle}}/>`);
      await settled();
    });

    test('it throws an error if @selectedToggle is not provided', async function (assert) {
      setupOnerror((err: any) => {
        assert.equal(
          err.message,
          'Assertion Failed: [component][OSS::ToggleButtons] The @selectedToggle parameter of type string is mandatory'
        );
      });
      await render(hbs`<OSS::ToggleButtons @toggles={{this.toggles}} @onSelection={{this.onSelection}}  />`);
      await settled();
    });

    test('it throws an error if @selectedToggle is not a value of toggles', async function (assert) {
      this.selectedToggle = 'toto';

      setupOnerror((err: any) => {
        assert.equal(
          err.message,
          'Assertion Failed: [component][OSS::ToggleButtons] The @selectedToggle parameter should be a value of toggles'
        );
      });
      await render(
        hbs`<OSS::ToggleButtons @toggles={{this.toggles}} @onSelection={{this.onSelection}} @selectedToggle={{this.selectedToggle}}/>`
      );
      await settled();
    });
  });
});
