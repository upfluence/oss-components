import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { setupIntl } from 'ember-intl/test-support';
import { click, find, findAll, render, setupOnerror, typeIn } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import sinon from 'sinon';

module('Integration | Component | o-s-s/select', function (hooks) {
  setupRenderingTest(hooks);
  setupIntl(hooks);

  hooks.beforeEach(function () {
    this.onChange = sinon.stub();
    this.items = [
      { name: 'foo', label: 'First item' },
      { name: 'bar', label: 'Second item' }
    ];
  });

  module('value changes', function () {
    test('the onChange function is called with the selected item', async function (assert) {
      this.value = this.items[0];
      await render(
        hbs`
          <OSS::Select @onChange={{this.onChange}} @items={{this.items}} @value={{this.value}}>
            <:option as |item|>
              {{item.name}}
            </:option>
          </OSS::Select>
        `
      );

      await click('.upf-input div');
      await click(document.querySelector('.upf-infinite-select .upf-infinite-select__item:last-child')!);
      assert.ok(this.onChange.calledOnceWithExactly(this.items[1]));
    });
  });

  module('items display', function () {
    test('the option block properly displays each item', async function (assert) {
      await render(
        hbs`
          <OSS::Select @onChange={{this.onChange}} @items={{this.items}} @value={{this.value}}>
            <:option as |item|>
              {{item.name}}
            </:option>
          </OSS::Select>
        `
      );

      await click('.upf-input div');
      assert.dom(document.querySelector('.upf-infinite-select')).exists();
      assert.equal(document.querySelectorAll('.upf-infinite-select .upf-infinite-select__item').length, 2);
      assert.dom(document.querySelector('.upf-infinite-select .upf-infinite-select__item:first-child')).hasText('foo');
      assert.dom(document.querySelector('.upf-infinite-select .upf-infinite-select__item:last-child')).hasText('bar');
    });
  });

  module('selected value display', function () {
    test('the default placeholder is displayed if the @value arg is null-ish', async function (assert) {
      this.value = null;
      await render(
        hbs`
          <OSS::Select @onChange={{this.onChange}} @items={{this.items}} @value={{this.value}}>
            <:option as |item|>
              {{item.name}}
            </:option>
          </OSS::Select>
        `
      );

      assert.dom('.upf-input').hasText('Select');
    });

    test('the passed @placeholder arg is displayed if the @value arg is null-ish', async function (assert) {
      this.value = null;
      await render(
        hbs`
          <OSS::Select @onChange={{this.onChange}} @items={{this.items}} @value={{this.value}} @placeholder="my placeholder">
            <:option as |item|>
              {{item.name}}
            </:option>
          </OSS::Select>
        `
      );

      assert.dom('.upf-input').hasText('my placeholder');
    });

    test("the current value's label attr is displayed", async function (assert) {
      this.value = this.items[0];
      await render(
        hbs`
          <OSS::Select @onChange={{this.onChange}} @items={{this.items}} @value={{this.value}} @placeholder="my placeholder">
            <:option as |item|>
              {{item.name}}
            </:option>
          </OSS::Select>
        `
      );

      assert.dom('.upf-input').hasText('First item');
    });

    test("the current value's is displayed with the targetLabel arg when passed", async function (assert) {
      this.value = this.items[0];
      await render(
        hbs`
          <OSS::Select @onChange={{this.onChange}} @items={{this.items}} @value={{this.value}} @placeholder="my placeholder" @targetLabel="name">
            <:option as |item|>
              {{item.name}}
            </:option>
          </OSS::Select>
        `
      );

      assert.dom('.upf-input').hasText('foo');
    });

    test("the current value's is displayed with the right class and active icon in the options", async function (assert) {
      this.value = this.items[0];
      await render(
        hbs`
          <OSS::Select @onChange={{this.onChange}} @items={{this.items}} @value={{this.value}} @placeholder="my placeholder" @targetLabel="name">
            <:option as |item|>
              {{item.name}}
            </:option>
          </OSS::Select>
        `
      );

      await click('.upf-input div');
      assert.true(
        document
          .querySelector('.upf-infinite-select .upf-infinite-select__item:first-child .item-wrapper')
          ?.classList.contains('selected')
      );
      assert.true(
        document.querySelector(
          '.upf-infinite-select .upf-infinite-select__item:first-child .item-wrapper i.far.fa-check'
        ) instanceof Element
      );
    });

    test('the selected value is displayed using the selected named block if provided', async function (assert) {
      this.value = this.items[0];
      await render(
        hbs`
          <OSS::Select @onChange={{this.onChange}} @items={{this.items}} @value={{this.value}} @placeholder="my placeholder">
            <:selected as |value|>
              Selected value: {{value.name}}
            </:selected>
            <:option as |item|>
              {{item.name}}
            </:option>
          </OSS::Select>
        `
      );

      assert.dom('.upf-input').hasText('Selected value: foo');
    });
  });

  module('disabled state', function () {
    test('the dropdown does not open when the select is clicked', async function (assert) {
      await render(
        hbs`
          <OSS::Select @onChange={{this.onChange}} @items={{this.items}} @value={{this.value}} @disabled={{true}}>
            <:option as |item|>
              {{item.name}}
            </:option>
          </OSS::Select>
        `
      );

      await click('.upf-input div');
      assert.dom(find('.upf-infinite-select')).doesNotExist();
    });
  });

  module('feedback states', function () {
    module('errorful state', function () {
      test('the right class is applied to the select container', async function (assert) {
        await render(
          hbs`
          <OSS::Select @onChange={{this.onChange}} @items={{this.items}} @value={{this.value}} @errorMessage="error !">
            <:option as |item|>
              {{item.name}}
            </:option>
          </OSS::Select>
        `
        );

        assert.dom('.oss-select-container').hasClass('oss-select-container--errorful');
      });

      test('the error message is displayed under the select field', async function (assert) {
        await render(
          hbs`
          <OSS::Select @onChange={{this.onChange}} @items={{this.items}} @value={{this.value}} @errorMessage="error !">
            <:option as |item|>
              {{item.name}}
            </:option>
          </OSS::Select>
        `
        );

        assert.dom('.oss-select-container .upf-input + .font-color-error-500').hasText('error !');
      });
    });

    module('successful state', function () {
      test('the right class is applied to the select container', async function (assert) {
        await render(
          hbs`
          <OSS::Select @onChange={{this.onChange}} @items={{this.items}} @value={{this.value}} @successMessage="good !">
            <:option as |item|>
              {{item.name}}
            </:option>
          </OSS::Select>
        `
        );

        assert.dom('.oss-select-container').hasClass('oss-select-container--successful');
      });

      test('the error message is displayed under the select field', async function (assert) {
        await render(
          hbs`
          <OSS::Select @onChange={{this.onChange}} @items={{this.items}} @value={{this.value}} @successMessage="good !">
            <:option as |item|>
              {{item.name}}
            </:option>
          </OSS::Select>
        `
        );

        assert.dom('.oss-select-container .upf-input + .font-color-success-500').hasText('good !');
      });
    });
  });

  module('searching through the options', function () {
    test('the search is not displayed if no onSearch arg is provided', async function (assert) {
      this.value = this.items[0];
      await render(
        hbs`
          <OSS::Select @onChange={{this.onChange}} @items={{this.items}} @value={{this.value}}>
            <:option as |item|>
              {{item.name}}
            </:option>
          </OSS::Select>
        `
      );

      await click('.upf-input div');
      assert.dom('.upf-infinite-select .upf-input').doesNotExist();
    });

    test('the search is displayed if the @onSearch arg is provided', async function (assert) {
      assert.expect(4);

      this.value = this.items[0];
      this.onSearch = (keyword: string) => {
        assert.equal(keyword, 'F');
        this.set(
          'items',
          this.items.filter(
            (item: { name: string; label: string }) => item.name.toLowerCase().indexOf(keyword.toLowerCase()) >= 0
          )
        );
      };

      await render(
        hbs`
          <OSS::Select @onChange={{this.onChange}} @onSearch={{this.onSearch}} @items={{this.items}} @value={{this.value}}>
            <:option as |item|>
              {{item.name}}
            </:option>
          </OSS::Select>
        `
      );

      await click('.upf-input div');
      assert.dom(document.querySelector('.upf-infinite-select .upf-input')).exists();
      await typeIn(document.querySelector('.upf-infinite-select .upf-input')!, 'F');
      assert.equal(document.querySelectorAll('.upf-infinite-select .upf-infinite-select__item').length, 1);
      assert.dom(document.querySelector('.upf-infinite-select .upf-infinite-select__item')).hasText('foo');
    });
  });

  module('Error management', function () {
    test('it throws an error if no @onChange arg is passed', async function (assert) {
      setupOnerror((err: Error) => {
        assert.equal(
          err.message,
          'Assertion Failed: [component][OSS::Select] The parameter @onChange of type function is mandatory'
        );
      });

      await render(hbs`<OSS::Select />`);
    });

    test('it throws an error if the component is invoked with no option named blocked', async function (assert) {
      setupOnerror((err: Error) => {
        assert.equal(err.message, 'Assertion Failed: [component][OSS::Select] You must pass option named block');
      });

      await render(hbs`<OSS::Select @onChange={{this.onChange}} />`);
    });
  });
});
