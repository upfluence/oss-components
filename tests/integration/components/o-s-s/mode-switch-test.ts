import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render, triggerEvent } from '@ember/test-helpers';
import type { TestContext } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import sinon from 'sinon';

module('Integration | Component | o-s-s/mode-switch', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function (this: TestContext) {
    this.onSelect = sinon.stub();
    this.options = [
      {
        key: 'option1',
        label: 'Option one'
      },
      {
        key: 'option2',
        label: 'Option two'
      }
    ];
  });

  test('it renders with the correct wording', async function (assert) {
    await render(hbs`<OSS::ModeSwitch @options={{this.options}} @onSelect={{this.onSelect}} />`);

    assert.dom('[data-control-name="option1-input"]').exists();
    assert.dom('[data-control-name="option2-input"]').exists();
    assert.dom('[data-control-name="option1-label"]').hasText('Option one');
    assert.dom('[data-control-name="option2-label"]').hasText('Option two');
  });

  test('it renders with the first option selected by default', async function (assert) {
    await render(hbs`<OSS::ModeSwitch @options={{this.options}} @onSelect={{this.onSelect}} />`);

    assert.dom('[data-control-name="option1-input"]').isChecked();
    assert.dom('[data-control-name="option2-input"]').isNotChecked();
  });

  module('selected option parameter', function (hooks) {
    test('it renders with option 1 as selected parameter', async function (assert) {
      await render(hbs`<OSS::ModeSwitch @options={{this.options}} @selected='option1' @onSelect={{this.onSelect}} />`);

      assert.dom('[data-control-name="option1-input"]').isChecked();
      assert.dom('[data-control-name="option2-input"]').isNotChecked();
    });

    test('it renders with option 2 as selected parameter', async function (assert) {
      await render(hbs`<OSS::ModeSwitch @options={{this.options}} @selected='option2' @onSelect={{this.onSelect}} />`);

      assert.dom('[data-control-name="option1-input"]').isNotChecked();
      assert.dom('[data-control-name="option2-input"]').isChecked();
    });
  });

  test('it renders with a tag', async function (this: TestContext, assert) {
    this.options = [
      {
        key: 'option1',
        label: 'Option one'
      },
      {
        key: 'option2',
        label: 'Option two',
        tag: {
          label: 'Tag'
        }
      }
    ];

    await render(hbs`<OSS::ModeSwitch @options={{this.options}} @onSelect={{this.onSelect}} />`);

    assert.dom('[data-control-name="option1-input"]').exists();
    assert.dom('[data-control-name="option2-input"]').exists();
    assert.dom('[data-control-name="option1-label"] .upf-tag').doesNotExist();
    assert.dom('[data-control-name="option2-label"] .upf-tag').exists();
    assert.dom('[data-control-name="option2-label"] .upf-tag').hasText('Tag');
  });

  test('it renders with an icon', async function (this: TestContext, assert) {
    this.options = [
      {
        key: 'option1',
        label: 'Option one'
      },
      {
        key: 'option2',
        label: 'Option two',
        icon: 'fa-exclamation-circle'
      }
    ];

    await render(hbs`<OSS::ModeSwitch @options={{this.options}} @onSelect={{this.onSelect}} />`);

    assert.dom('[data-control-name="option1-input"]').exists();
    assert.dom('[data-control-name="option2-input"]').exists();
    assert.dom('[data-control-name="option1-label"] i').doesNotExist();
    assert.dom('[data-control-name="option2-label"] i').exists();
    assert.dom('[data-control-name="option2-label"] i').hasClass('fa-exclamation-circle');
  });

  test('clicking a radio button changes the selection option and calls the onselect function', async function (this: TestContext, assert) {
    await render(hbs`<OSS::ModeSwitch @options={{this.options}} @onSelect={{this.onSelect}} />`);

    await click('[data-control-name="option2-label"]');
    assert.ok(this.onSelect.calledWith('option2'));
    assert.dom('[data-control-name="option1-input"]').isNotChecked();
    assert.dom('[data-control-name="option2-input"]').isChecked();

    await click('[data-control-name="option1-label"]');
    assert.ok(this.onSelect.calledWith('option1'));
    assert.dom('[data-control-name="option1-input"]').isChecked();
    assert.dom('[data-control-name="option1-input"]').isChecked();
    assert.dom('[data-control-name="option2-input"]').isNotChecked();
  });

  test('keyboard interaction on label triggers click on input', async function (this: TestContext, assert) {
    await render(hbs`<OSS::ModeSwitch @options={{this.options}} @onSelect={{this.onSelect}} />`);

    await triggerEvent('[data-control-name="option2-label"]', 'keydown', { key: 'Enter' });
    assert.ok(this.onSelect.calledWith('option2'));
    assert.dom('[data-control-name="option1-input"]').isNotChecked();
    assert.dom('[data-control-name="option2-input"]').isChecked();

    await triggerEvent('[data-control-name="option1-label"]', 'keydown', { key: ' ' });
    assert.ok(this.onSelect.calledWith('option1'));
    assert.dom('[data-control-name="option1-input"]').isChecked();
    assert.dom('[data-control-name="option2-input"]').isNotChecked();
  });
});
