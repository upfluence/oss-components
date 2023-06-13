import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, typeIn, setupOnerror } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import sinon from 'sinon';

module('Integration | Component | o-s-s/text-area', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.value = 'Data';

    this.textareaSelector = '.oss-textarea-container  .oss-textarea';
  });

  test('it renders', async function (assert) {
    await render(hbs`<OSS::TextArea @label='test' />`);
    assert.dom('.oss-textarea-container').exists();
  });

  module('@resize', function () {
    test('Default has no class resize', async function (assert) {
      await render(hbs`<OSS::TextArea />`);
      assert.dom(this.textareaSelector).hasNoClass('oss-textarea--resize-v');
      assert.dom(this.textareaSelector).hasNoClass('oss-textarea--resize-h');
      assert.dom(this.textareaSelector).hasNoClass('oss-textarea--resize-none');
    });

    test('When resize is vertical should have class resize-v', async function (assert) {
      this.resize = 'vertical';
      await render(hbs`<OSS::TextArea @resize={{this.resize}}/>`);
      assert.dom(this.textareaSelector).hasClass('oss-textarea--resize-v');
      assert.dom(this.textareaSelector).hasNoClass('oss-textarea--resize-h');
      assert.dom(this.textareaSelector).hasNoClass('oss-textarea--resize-none');
    });

    test('When resize is horizontal should have class resize-h', async function (assert) {
      this.resize = 'horizontal';
      await render(hbs`<OSS::TextArea @resize={{this.resize}}/>`);
      assert.dom(this.textareaSelector).hasNoClass('oss-textarea--resize-v');
      assert.dom(this.textareaSelector).hasClass('oss-textarea--resize-h');
      assert.dom(this.textareaSelector).hasNoClass('oss-textarea--resize-none');
    });

    test('When resize is none should have class resize-none', async function (assert) {
      this.resize = 'none';
      await render(hbs`<OSS::TextArea @resize={{this.resize}}/>`);
      assert.dom(this.textareaSelector).hasNoClass('oss-textarea--resize-v');
      assert.dom(this.textareaSelector).hasNoClass('oss-textarea--resize-h');
      assert.dom(this.textareaSelector).hasClass('oss-textarea--resize-none');
    });
  });

  module('@rows', function () {
    test('Default height', async function (assert) {
      await render(hbs`<OSS::TextArea />`);

      assert.equal(document.querySelector(this.textareaSelector).offsetHeight, 52);
    });

    test('Row change height', async function (assert) {
      this.rows = 2;
      await render(hbs`<OSS::TextArea @rows={{this.rows}}/>`);

      const twoRowHeight = document.querySelector(this.textareaSelector).offsetHeight;
      assert.ok(twoRowHeight > 36);

      await this.set('rows', 8);
      const heightRowHeight = document.querySelector(this.textareaSelector).offsetHeight;

      assert.ok(heightRowHeight > twoRowHeight);
    });
  });

  test('When the field is updated, the @onChange method is called', async function (assert) {
    this.onChange = sinon.spy();

    await render(hbs`<OSS::TextArea @value={{this.value}} @onChange={{this.onChange}}/>`);
    await typeIn(this.textareaSelector, 'base');

    assert.ok(this.onChange.calledOnceWithExactly('Database'));
  });

  module('Extra attributes', () => {
    test('passing an extra class is applied to the component', async function (assert) {
      await render(hbs`<OSS::TextArea class="my-extra-class" />`);
      assert.dom('.my-extra-class').exists();
    });

    test('passing data-control-name works', async function (assert) {
      await render(hbs`<OSS::TextArea data-control-name="description-input" />`);
      let inputWrapper: Element | null = document.querySelector('.fx-1');
      assert.equal(inputWrapper?.getAttribute('data-control-name'), 'description-input');
    });
  });

  module('error management', () => {
    test('it throws an error if @resize is not a correct value', async function (assert) {
      setupOnerror((err: any) => {
        assert.equal(
          err.message,
          'Assertion Failed: [component][OSS::TextArea] The @resize parameter should be a value of resize'
        );
      });

      this.resize = 'NotACorrectValue';
      await render(hbs`<OSS::TextArea @resize={{this.resize}} />`);
    });
  });
});
