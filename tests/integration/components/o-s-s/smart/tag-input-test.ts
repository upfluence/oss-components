import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, triggerKeyEvent, fillIn } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import sinon from 'sinon';
import { setupIntl } from 'ember-intl/test-support';

module('Integration | Component | o-s-s/smart/tag-input', function (hooks) {
  setupRenderingTest(hooks);
  setupIntl(hooks);

  hooks.beforeEach(function () {
    this.onKeydown = sinon.stub();
  });

  test('it renders', async function (assert) {
    await render(hbs`<OSS::Smart::TagInput @value="" @onKeydown={{this.onKeydown}} />`);
    assert.dom('.tag-input-container').exists();
  });

  test('it renders the empty state with the default placeholder', async function (assert) {
    await render(hbs`<OSS::Smart::TagInput @value="" @onKeydown={{this.onKeydown}} />`);
    assert
      .dom('.tag-input-empty-state')
      .hasText(this.intl.t('oss-components.smart.tag_input.placeholder'), 'Placeholder text is rendered');
  });

  test('it displays the custom placeholder when @placeholder is provided', async function (assert) {
    await render(
      hbs`<OSS::Smart::TagInput @value="" @placeholder="Custom Placeholder" @onKeydown={{this.onKeydown}} />`
    );
    assert.dom('.tag-input-empty-state').hasText('Custom Placeholder', 'Custom placeholder is displayed');
  });

  test('it calls @onKeydown when pressing Enter', async function (assert) {
    await render(hbs`<OSS::Smart::TagInput @value="" @onKeydown={{this.onKeydown}} />`);
    await fillIn('[data-control-name="tag-input"]', 'foo');
    await triggerKeyEvent('[data-control-name="tag-input"]', 'keydown', 'Enter');
    assert.true(this.onKeydown.calledOnce, 'onKeydown is called once');
  });

  test('the input is cleared on validation', async function (assert) {
    await render(hbs`<OSS::Smart::TagInput @value="" @onKeydown={{this.onKeydown}} />`);
    await fillIn('[data-control-name="tag-input"]', 'foo');
    assert.dom('[data-control-name="tag-input"]').hasValue('foo', 'Input has value "foo"');
    await triggerKeyEvent('[data-control-name="tag-input"]', 'keydown', 'Enter');
    assert.dom('[data-control-name="tag-input"]').hasValue('', 'Input is cleared after save');
  });

  test('it renders the animated overlay when loading', async function (assert) {
    await render(hbs`<OSS::Smart::TagInput @loading={{true}} @value="" @onKeydown={{this.onKeydown}} />`);
    assert.dom('.animated-overlay').exists('Animated overlay is shown');
  });

  test('it applies the error class when @hasError is true', async function (assert) {
    await render(hbs`<OSS::Smart::TagInput @hasError={{true}} @value="" @onKeydown={{this.onKeydown}} />`);
    assert.dom('.tag-input--error').exists('Error class is present');
  });
});
