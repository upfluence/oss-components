import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import sinon from 'sinon';
import click from '@ember/test-helpers/dom/click';

module('Integration | Component | o-s-s/attribute-text', function (hooks) {
  setupRenderingTest(hooks);

  module('Default behavior', function () {
    test('it renders', async function (assert) {
      await render(hbs`<OSS::Attribute::Text @label="Hello" @value="World" />`);
      assert.dom('.oss-attribute--text').exists();
    });

    test('it renders without a value', async function (assert) {
      await render(hbs`<OSS::Attribute::Text @label="Hello" />`);
      assert.dom('.oss-attribute--text').exists();
    });

    test('it renders with a tooltip when specified', async function (assert) {
      await render(hbs`<OSS::Attribute::Text @label="Hello" @tooltip="Tooltip" />`);
      assert.dom('.oss-attribute--info').exists();
    });

    test('it renders a dash as value when no value is specified', async function (assert) {
      await render(hbs`<OSS::Attribute::Text @label="Hello" />`);
      assert.dom('.oss-attribute--text').exists();
      assert.dom('.oss-attribute--text--value').hasText('-');
    });

    test('it copies the value', async function (assert) {
      const writeTextStub = sinon.stub(navigator.clipboard, 'writeText').resolves();
      this.textForCopy = 'copied value';
      await render(hbs`<OSS::Attribute::Text @label="Hello" @value={{this.textForCopy}} @copyable={{true}} />`);
      assert.dom('.oss-attribute--text').exists();
      assert.dom('.oss-attribute--text--value').hasText(this.textForCopy);
      await click('.oss-copy--inline');
      assert.true(writeTextStub.calledOnceWithExactly(this.textForCopy));
    });
  });
});
