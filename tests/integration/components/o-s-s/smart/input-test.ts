import { hbs } from 'ember-cli-htmlbars';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find, typeIn, triggerEvent } from '@ember/test-helpers';
import sinon from 'sinon';

module('Integration | Component | o-s-s/smart/input', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<OSS::Smart::Input />`);
    assert.dom('.upf-input').exists();
  });

  module('Input Blocks', () => {
    async function renderComponentWithPrefixSuffix() {
      await render(hbs`
        <OSS::Smart::Input>
          <:prefix>
            <OSS::Icon @style="solid" @icon="fa-user" />
          </:prefix>
          <:input>
            <Input id="custom-input"/>
          </:input>
          <:suffix>
            <OSS::Icon @style="solid" @icon="fa-times" />
          </:suffix>
        </OSS::Smart::Input>`);
    }

    test('Prefix block renders properly', async function (assert) {
      await renderComponentWithPrefixSuffix();
      assert.dom('.fa-user').exists();
    });

    test('Suffix block renders properly', async function (assert) {
      await renderComponentWithPrefixSuffix();
      assert.dom('.fa-times').exists();
    });

    test('Custom input block overrides default', async function (assert) {
      await renderComponentWithPrefixSuffix();
      assert.dom('#custom-input').exists();
    });
  });

  module('Component Parameters', (hooks) => {
    let onValueChange: sinon.SinonSpy<any[], any>;
    hooks.beforeEach(function () {
      onValueChange = sinon.fake();
      this.value = 'smartInput';
      this.placeholder = 'Type here';
      this.onValueChange = onValueChange;
    });

    async function renderComponentWithParams() {
      await render(hbs`
        <OSS::Smart::Input
          @value={{this.value}}
          @onChange={{this.onValueChange}}
          @placeholder={{this.placeholder}}
        />
      `);
    }

    test('Binds @value correctly', async function (assert) {
      await renderComponentWithParams();
      assert.dom('.upf-input').hasValue('smartInput');
    });

    test('Sets @placeholder correctly', async function (assert) {
      await renderComponentWithParams();
      let input = find('.upf-input');
      assert.strictEqual(input?.getAttribute('placeholder'), 'Type here');
    });

    test('Calls @onChange on input', async function (assert) {
      await renderComponentWithParams();
      let input = find('.upf-input');
      assert.ok(input, 'Input element should exist');
      await typeIn(input as Element, 'X');
      assert.ok(onValueChange.called);
    });

    test('Calls @onChange on paste event', async function (assert) {
      this.set('onChange', sinon.stub());
      await render(hbs`
        <OSS::Smart::Input
          data-control-name="smart-input"
          @onChange={{this.onChange}}
        />
      `);
      assert.ok(this.onChange.notCalled);

      await triggerEvent('.oss-input-container input', 'paste', {
        clipboardData: { getData: (format: any) => `clip/${format}` }
      });

      assert.ok(this.onChange.calledWith('clip/Text'));
    });
  });

  module('Smart Input Specific Features', () => {
    test('Displays animated placeholder when loading is true', async function (assert) {
      this.setProperties({ loading: true, placeholder: 'Smart...' });

      await render(hbs`
        <OSS::Smart::Input
          @loading={{this.loading}}
          @placeholder={{this.placeholder}}
        />
      `);

      assert.dom('.rainbow_text_animated').hasText('Smart...');
    });
  });

  module('Feedback and Error States', () => {
    test('Displays success feedback', async function (assert) {
      await render(hbs`
        <OSS::Smart::Input
          @feedbackMessage={{hash type="success" value="All good!"}}
        />
      `);
      assert.dom('.oss-input-container--success').exists();
      assert.dom('.font-color-success-500').hasText('All good!');
    });

    test('Displays error message', async function (assert) {
      await render(hbs`<OSS::Smart::Input @errorMessage="Oops" />`);
      assert.dom('.oss-input-container--errored').exists();
      assert.dom('.text-color-error').hasText('Oops');
    });
  });

  module('Extra attributes', () => {
    test('Custom class is applied', async function (assert) {
      await render(hbs`<OSS::Smart::Input class="extra-class" />`);
      assert.dom('.extra-class').exists();
    });

    test('data-control-name is passed through', async function (assert) {
      await render(hbs`<OSS::Smart::Input data-control-name="smart-name" />`);
      assert.dom('.oss-input-container').hasAttribute('data-control-name', 'smart-name');
    });
  });
});
