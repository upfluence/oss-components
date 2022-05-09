import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find, typeIn } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import sinon, { SinonSpy } from 'sinon';

module('Integration | Component | o-s-s/input-container', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<OSS::InputContainer />`);
    assert.dom('.upf-input').exists();
  });

  module('Input Blocks', () => {
    async function renderComponentWithPrefixSuffix() {
      await render(hbs`
      <OSS::InputContainer>
        <:prefix>
          <i class="fas fa-user"></i>
        </:prefix>
        <:input>
          <Input id="custom-input"/>
        </:input>
        <:suffix>
          <i class="fas fa-times"></i>
        </:suffix>
      </OSS::InputContainer>`);
    }

    test('Passing a :prefix named-block renders the block properly', async function (assert) {
      await renderComponentWithPrefixSuffix();
      assert.dom('.fa-user').exists();
    });

    test('Passing a :suffix named-block renders the block properly', async function (assert) {
      await renderComponentWithPrefixSuffix();
      assert.dom('.fa-times').exists();
    });

    test('Passing an :input named-block overloads the default input', async function (assert) {
      await renderComponentWithPrefixSuffix();
      assert.dom('#custom-input').exists();
    });
  });

  module('Component Parameters', (hooks) => {
    let onValueChange: SinonSpy<any, any>;

    hooks.beforeEach(function () {
      onValueChange = sinon.fake.returns(true);
      this.set('value', 'testValue');
      this.set('placeholder', 'Type your text');
      this.set('onValueChange', onValueChange);
    });
    async function renderComponentWithParameters() {
      await render(hbs`
        <OSS::InputContainer @value={{this.value}}
                             @onChange={{this.onValueChange}}
                             @placeholder={{this.placeholder}} />`);
    }

    test('Passing a @value parameter works', async function (assert) {
      await renderComponentWithParameters();
      assert.dom('.upf-input').hasValue('testValue');
    });

    test('Passing a @placeholder parameter works', async function (assert) {
      await renderComponentWithParameters();
      let inputElement: Element = find('.upf-input');
      assert.equal(inputElement.getAttribute('placeholder'), 'Type your text');
    });

    test('Passing an @onChange method works and is triggered on input changes', async function (assert) {
      await renderComponentWithParameters();
      let inputElement: Element = find('.upf-input');
      await typeIn(inputElement, 'a');
      assert.ok(onValueChange.called);
    });
  });

  module('Extra attributes', () => {
    test('passing an extra class is applied to the component', async function (assert) {
      await render(hbs`<OSS::InputContainer class="my-extra-class" />`);
      assert.dom('.my-extra-class').exists();
    });

    test('passing data-control-name works', async function (assert) {
      await render(hbs`<OSS::InputContainer data-control-name="firstname-input" />`);
      let inputWrapper: Element = find('.oss-input-container');
      assert.equal(inputWrapper.getAttribute('data-control-name'), 'firstname-input');
    });
  });
});
