import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import sinon from 'sinon';
import click from '@ember/test-helpers/dom/click';
import triggerEvent from '@ember/test-helpers/dom/trigger-event';

module('Integration | Component | o-s-s/attribute-text', function (hooks) {
  setupRenderingTest(hooks);
  module('Default behavior', function () {
    module('Render conditions', function () {
      test('it renders', async function (assert) {
        await render(hbs`<OSS::Attribute::Text @label="Hello" @value="World" />`);
        assert.dom('.oss-attribute').exists();
        assert.dom('.oss-attribute--label').hasText('Hello');
        assert.dom('.oss-attribute--value').hasText('World');
      });

      test('It renders when the @value is undefined', async function (assert) {
        await render(hbs`<OSS::Attribute::Text @label="Hello" />`);
        assert.dom('.oss-attribute').exists();
        assert.dom('.oss-attribute--value').hasText('-');
      });

      test('it renders with a tooltip when specified', async function (assert) {
        await render(hbs`<OSS::Attribute::Text @label="Hello" @tooltip="Tooltip" />`);
        assert.dom('.oss-attribute--info').exists();
        await assert.tooltip('.oss-attribute--info').hasTitle('Tooltip');
      });

      test('it renders a dash as value when no value is specified', async function (assert) {
        await render(hbs`<OSS::Attribute::Text @label="Hello" />`);
        assert.dom('.oss-attribute').exists();
        assert.dom('.oss-attribute--value').hasText('-');
      });

      test('it renders a dash as value when value length is 0', async function (assert) {
        await render(hbs`<OSS::Attribute::Text @label="Hello" @value=""/>`);
        assert.dom('.oss-attribute').exists();
        assert.dom('.oss-attribute--value').hasText('-');
      });
    });

    module('Copy action', function (hooks) {
      hooks.beforeEach(function () {
        this.textForCopy = 'copied value';
        this.displayCopyBtn = true;
      });
      test('the text is copyable by default', async function (assert) {
        await render(hbs`<OSS::Attribute::Text @label="Hello" @value={{this.textForCopy}} />`);

        await triggerEvent('.oss-attribute', 'mouseenter');
        assert.dom('.oss-attribute--copy').exists();
      });

      test('The text is copyable if the @copyable argument is truthy', async function (assert) {
        await render(hbs`<OSS::Attribute::Text @label="Hello" @value={{this.textForCopy}} @copyable={{true}} />`);
        await triggerEvent('.oss-attribute', 'mouseenter');
        assert.dom('.oss-attribute--copy').exists();
      });

      test('The text is not copyable (no copy button) if the argument is falsy', async function (assert) {
        await render(hbs`<OSS::Attribute::Text @label="Hello" @value={{this.textForCopy}} @copyable={{false}} />`);
        await triggerEvent('.oss-attribute', 'mouseenter');
        assert.dom('.oss-attribute--copy').doesNotExist();
      });

      test("The text is not copyable if text value isn't specified or the length is 0", async function (assert) {
        await render(hbs`<OSS::Attribute::Text @label="Hello" @copyable={{true}} />`);
        await triggerEvent('.oss-attribute', 'mouseenter');
        assert.dom('.oss-copy--inline').doesNotExist();
      });

      test('The text is not copyable if text value is specified but the length is 0', async function (assert) {
        await render(hbs`<OSS::Attribute::Text @label="Hello" @value="" @copyable={{true}} />`);
        await triggerEvent('.oss-attribute', 'mouseenter');
        assert.dom('.oss-copy--inline').doesNotExist();
      });

      test('The copy action is successfully called', async function (assert) {
        const writeTextStub = sinon.stub(navigator.clipboard, 'writeText').resolves();
        await render(hbs`<OSS::Attribute::Text @label="Hello" @value={{this.textForCopy}} />`);
        await triggerEvent('.oss-attribute', 'mouseenter');
        assert.dom('.oss-attribute').exists();
        assert.dom('.oss-attribute--value').hasText(this.textForCopy);
        await click('.oss-copy--inline');
        assert.true(writeTextStub.calledOnceWithExactly(this.textForCopy));
        sinon.restore();
      });
    });
  });
});
