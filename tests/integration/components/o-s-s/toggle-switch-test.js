import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render, setupOnerror } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import sinon from 'sinon';

module('Integration | Component | o-s-s/toggle-switch', function (hooks) {
  setupRenderingTest(hooks);

  test('it applies the right class on the toggle switch depending on the value', async function (assert) {
    this.value = false;
    this.onChange = (v) => {
      this.set('value', v);
    };

    await render(hbs`<OSS::ToggleSwitch @value={{this.value}} @onChange={{this.onChange}} />`);

    assert.dom('.upf-toggle').hasNoClass('upf-toggle--toggled');

    await click('.upf-toggle');

    assert.dom('.upf-toggle').hasClass('upf-toggle--toggled');
  });

  test('it triggers the onChange action when clicking the button', async function (assert) {
    const onChangeSpy = sinon.spy();
    this.onChange = onChangeSpy;

    await render(hbs`<OSS::ToggleSwitch @value={{true}} @onChange={{this.onChange}} />`);

    await click('.upf-toggle');

    assert.ok(onChangeSpy.calledOnce);
    assert.false(onChangeSpy.firstCall.args[0]);
  });

  module('Error management', function () {
    test('it throws an error if no onChange action is passed', async function (assert) {
      assert.expect(1);
      setupOnerror((err) => {
        assert.strictEqual(
          err.message,
          'Assertion Failed: [component][OSS::ToggleSwitch] Please provide an onChange action'
        );
      });

      await render(hbs`<OSS::ToggleSwitch />`);
    });

    test('it throws an error if no value is passed', async function (assert) {
      assert.expect(1);
      this.onChange = () => {};

      setupOnerror((err) => {
        assert.strictEqual(
          err.message,
          'Assertion Failed: [component][OSS::ToggleSwitch] Please provide a boolean @value. @value is undefined'
        );
      });

      await render(hbs`<OSS::ToggleSwitch @onChange={{this.onChange}} />`);
    });

    test('it throws an error if passed value is not a boolean', async function (assert) {
      assert.expect(1);
      this.onChange = () => {};

      setupOnerror((err) => {
        assert.strictEqual(
          err.message,
          'Assertion Failed: [component][OSS::ToggleSwitch] Please provide a boolean @value. @value is string'
        );
      });

      await render(hbs`<OSS::ToggleSwitch @value="true" @onChange={{this.onChange}} />`);
    });
  });
});
