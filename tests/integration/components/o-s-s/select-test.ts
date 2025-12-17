import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { setupIntl } from 'ember-intl/test-support';
import { click, render, setupOnerror, typeIn } from '@ember/test-helpers';
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

  test('the index values from the @items array are available in the option named block', async function (assert) {
    this.value = this.items[0];
    this.checkedIndex = 0;
    await render(
      hbs`
          <OSS::Select @onChange={{this.onChange}} @items={{this.items}} @value={{this.value}}>
            <:option as |item index|>
              {{item.name}}
              <div class="index">{{index}}</div>
            </:option>
          </OSS::Select>
        `
    );

    await click('.upf-input div');
    assert.dom('.index:nth-of-type(1)').hasText(this.checkedIndex.toString());
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
      await click('.upf-infinite-select .upf-infinite-select__item:last-child');
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
      assert.dom('.upf-infinite-select').exists();
      assert.dom('.upf-infinite-select .upf-infinite-select__item').exists({ count: 2 });
      assert.dom('.upf-infinite-select .upf-infinite-select__item:first-child').hasText('foo');
      assert.dom('.upf-infinite-select .upf-infinite-select__item:last-child').hasText('bar');
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
      assert.dom('.upf-infinite-select .upf-infinite-select__item:first-child .item-wrapper').hasClass('selected');
      assert.dom('.upf-infinite-select .upf-infinite-select__item:first-child .item-wrapper i.far.fa-check').exists();
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
      assert.dom('.upf-infinite-select').doesNotExist();
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
      assert.dom('.upf-infinite-select .upf-input').exists();
      await typeIn('.upf-infinite-select .upf-input', 'F');
      assert.dom('.upf-infinite-select .upf-infinite-select__item').exists({ count: 1 });
      assert.dom('.upf-infinite-select .upf-infinite-select__item').hasText('foo');
    });
  });

  module('with @addressableAs', () => {
    test('the dropdown has the right class assigned to it', async function (assert) {
      await render(
        hbs`
          <OSS::Select @onChange={{this.onChange}} @items={{this.items}} @value={{this.value}} @addressableAs="foobar-select">
            <:option as |item|>
              {{item.name}}
            </:option>
          </OSS::Select>
        `
      );

      await click('.upf-input div');
      assert.dom('.upf-infinite-select').exists();
      assert.dom('.upf-infinite-select').hasClass('foobar-select__dropdown');
    });
  });

  module('Action argument', function (hooks) {
    hooks.beforeEach(function () {
      this.onActionClick = sinon.stub();
      this.action = {
        skin: 'tertiary',
        label: 'Add Item',
        icon: 'fa-plus',
        onClick: this.onActionClick
      };
      this.value = this.items[0];
    });

    async function renderWithAction() {
      await render(
        hbs`
          <OSS::Select
            @onChange={{this.onChange}} @items={{this.items}} @value={{this.value}}
            @action={{this.action}}>
            <:option as |item|>
              {{item.name}}
            </:option>
          </OSS::Select>
        `
      );
    }

    test('if the @action arg is provided, the action button is displayed in the footer', async function (assert) {
      await renderWithAction();

      await click('.upf-input div');
      assert.dom('.upf-infinite-select').exists();
      assert.dom('.upf-infinite-select .upf-btn').hasClass('upf-btn--default');
      assert.dom('.upf-infinite-select .upf-btn i.fa-plus').exists();
      assert.dom('.upf-infinite-select .upf-btn').hasText('Add Item');
    });

    test('clicking the action button calls the provided onClick function', async function (assert) {
      await renderWithAction();

      await click('.upf-input div');
      await click('[data-control-name="infinite-select-footer-action-button"]');
      assert.ok(this.onActionClick.calledOnce);
    });

    test('if the closeOnClick property of the @action arg is true, clicking the action button closes the dropdown', async function (assert) {
      this.action.closeOnClick = true;
      await renderWithAction();

      await click('.upf-input div');
      assert.dom('.upf-infinite-select').exists();
      await click('[data-control-name="infinite-select-footer-action-button"]');
      assert.ok(this.onActionClick.calledOnce);
      assert.dom('.upf-infinite-select').doesNotExist();
    });

    test('if the closeOnClick property of the @action arg is false, clicking the action button does not close the dropdown', async function (assert) {
      this.action.closeOnClick = false;
      await renderWithAction();

      await click('.upf-input div');
      assert.dom('.upf-infinite-select').exists();
      await click('[data-control-name="infinite-select-footer-action-button"]');
      assert.ok(this.onActionClick.calledOnce);
      assert.dom('.upf-infinite-select').exists();
    });

    test('if the closeOnClick property of the @action arg is not provided, clicking the action button closes the dropdown', async function (assert) {
      this.action.closeOnClick = undefined;
      await renderWithAction();

      await click('.upf-input div');
      assert.dom('.upf-infinite-select').exists();
      await click('[data-control-name="infinite-select-footer-action-button"]');
      assert.ok(this.onActionClick.calledOnce);
      assert.dom('.upf-infinite-select').doesNotExist();
    });

    test('if the @action arg is not provided, no action button is displayed in the footer', async function (assert) {
      await render(
        hbs`
          <OSS::Select
            @onChange={{this.onChange}} @items={{this.items}} @value={{this.value}}>
            <:option as |item|>
            </:option>
          </OSS::Select>
        `
      );
      assert.dom('[data-control-name="infinite-select-footer-action-button"]').doesNotExist();
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

  test('When hasError is true, the error style is applied to the select', async function (assert) {
    await render(
      hbs`
          <OSS::Select @onChange={{this.onChange}} @onSearch={{this.onSearch}} @items={{this.items}} 
                       @value={{this.value}} @hasError={{true}}>
            <:option as |item|>
              {{item.name}}
            </:option>
          </OSS::Select>
        `
    );

    assert.dom('.oss-select-container').hasClass('oss-select-container--errorful');
  });

  module('empty state named block', () => {
    test('When named block is defined, a custom empty state is properly rendered', async function (assert) {
      this.items = [];
      await render(hbs`
        <OSS::Select @onChange={{this.onChange}} @onSearch={{this.onSearch}} @items={{this.items}} 
                      @value={{this.value}}>
          <:option as |item|>
            {{item.name}}
          </:option>
          <:empty-state>
            <div class="foobar">custom empty state</div>
          </:empty-state>
        </OSS::Select>
      `);

      assert.dom('.oss-select-container').exists();
      await click('.oss-select-container .upf-input');

      assert.dom('.oss-select-container').hasAttribute('open');
      assert.dom('.upf-infinite-select .foobar').exists();
      assert.dom('.upf-infinite-select .foobar').hasText('custom empty state');
    });

    test('When named block is not defined, it uses the default empty state', async function (assert) {
      this.items = [];
      await render(hbs`
        <OSS::Select @onChange={{this.onChange}} @onSearch={{this.onSearch}} @items={{this.items}} 
                      @value={{this.value}}>
          <:option as |item|>
            {{item.name}}
          </:option>
        </OSS::Select>
      `);

      assert.dom('.oss-select-container').exists();
      await click('.oss-select-container .upf-input');
      assert.dom('.oss-select-container').hasAttribute('open');
      assert.dom('.upf-infinite-select .foobar').doesNotExist();
    });
  });
});
