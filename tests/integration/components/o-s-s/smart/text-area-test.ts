import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, setupOnerror, typeIn } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import sinon from 'sinon';

module('Integration | Component | o-s-s/smart/text-area', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.value = 'Data';

    this.textareaSelector = '.oss-smart-text-area-container  .oss-textarea';
    this.placeholder = 'Multiline\nplaceholder';
  });

  test('it renders', async function (assert) {
    await render(hbs`<OSS::Smart::TextArea @label='test' />`);
    assert.dom('.oss-smart-text-area-container').exists();
  });

  module('@resize', function () {
    test('Default it has the none resize class', async function (assert) {
      await render(hbs`<OSS::Smart::TextArea />`);
      assert.dom(this.textareaSelector).hasNoClass('oss-textarea--resize-v');
      assert.dom(this.textareaSelector).hasNoClass('oss-textarea--resize-h');
      assert.dom(this.textareaSelector).hasClass('oss-textarea--resize-none');
    });

    test('When resize is vertical should have class resize-v', async function (assert) {
      this.resize = 'vertical';
      await render(hbs`<OSS::Smart::TextArea @resize={{this.resize}}/>`);
      assert.dom(this.textareaSelector).hasClass('oss-textarea--resize-v');
      assert.dom(this.textareaSelector).hasNoClass('oss-textarea--resize-h');
      assert.dom(this.textareaSelector).hasNoClass('oss-textarea--resize-none');
    });

    test('When resize is horizontal should have class resize-h', async function (assert) {
      this.resize = 'horizontal';
      await render(hbs`<OSS::Smart::TextArea @resize={{this.resize}}/>`);
      assert.dom(this.textareaSelector).hasNoClass('oss-textarea--resize-v');
      assert.dom(this.textareaSelector).hasClass('oss-textarea--resize-h');
      assert.dom(this.textareaSelector).hasNoClass('oss-textarea--resize-none');
    });
  });

  module('@rows', function () {
    test('Default height', async function (assert) {
      await render(hbs`<OSS::Smart::TextArea />`);

      assert.equal(document.querySelector(this.textareaSelector).offsetHeight, 52);
    });

    test('Row change height', async function (assert) {
      this.rows = 2;
      await render(hbs`<OSS::Smart::TextArea @rows={{this.rows}}/>`);

      const twoRowHeight = document.querySelector(this.textareaSelector).offsetHeight;
      assert.ok(twoRowHeight > 36);

      await this.set('rows', 8);
      const heightRowHeight = document.querySelector(this.textareaSelector).offsetHeight;

      assert.ok(heightRowHeight > twoRowHeight);
    });
  });

  test('When the field is updated, the @onChange method is called', async function (assert) {
    this.onChange = sinon.spy();

    await render(hbs`<OSS::Smart::TextArea @value={{this.value}} @onChange={{this.onChange}}/>`);
    await typeIn(this.textareaSelector, 'b');

    assert.ok(this.onChange.calledOnceWithExactly('Datab'));
  });

  module('Extra attributes', () => {
    test('passing an extra class is applied to the component', async function (assert) {
      await render(hbs`<OSS::Smart::TextArea class="my-extra-class" />`);
      assert.dom('.my-extra-class').exists();
    });

    test('passing data-control-name works', async function (assert) {
      await render(hbs`<OSS::Smart::TextArea data-control-name="description-input" />`);
      let inputWrapper: Element | null = document.querySelector('.oss-smart-text-area-container');

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
      await render(hbs`<OSS::Smart::TextArea @resize={{this.resize}} />`);
    });
  });

  module('loading', (hooks) => {
    hooks.beforeEach(function () {
      this.loading = true;
    });

    test('When input is loading, it display an animated div instead of the input', async function (assert) {
      await render(hbs`<OSS::Smart::TextArea @placeholder={{this.placeholder}} @loading={{this.loading}}/>`);

      assert.dom('.oss-smart-text-area-container .oss-textarea').hasClass('oss-textarea--loading');
      assert.dom('.loading-placeholder').exists();
      assert.dom('.loading-placeholder').hasText(this.placeholder);
    });

    test('When input is loading, and a value is set it use the value instead of placeholder', async function (assert) {
      this.set('value', 'Small value');
      await render(
        hbs`<OSS::Smart::TextArea @placeholder={{this.placeholder}} @loading={{this.loading}} @value={{this.value}}/>`
      );

      assert.dom('.oss-smart-text-area-container .oss-textarea').hasClass('oss-textarea--loading');
      assert.dom('.loading-placeholder').exists();
      assert.dom('.loading-placeholder').hasText(this.value);
    });

    module('Once loading is finished', () => {
      test('If value is empty, it does not display an animation once', async function (assert) {
        await render(hbs`<OSS::Smart::TextArea @placeholder={{this.placeholder}} @loading={{this.loading}}/>`);

        this.set('loading', false);
        assert.dom('.oss-smart-text-area-container').hasNoClass('smart-rotating-gradient');
      });

      test('If value is filled, it display an animation once', async function (assert) {
        await render(
          hbs`<OSS::Smart::TextArea @value="filled" @placeholder={{this.placeholder}} @loading={{this.loading}}/>`
        );

        this.set('loading', false);
        assert.dom('.oss-smart-text-area-container').hasClass('smart-rotating-gradient');
      });
    });
  });
});
