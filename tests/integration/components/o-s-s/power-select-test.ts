import { hbs } from 'ember-cli-htmlbars';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { setupIntl } from 'ember-intl/test-support';
import { render, setupOnerror, findAll, click, typeIn, scrollTo, type TestContext } from '@ember/test-helpers';
import sinon from 'sinon';

module('Integration | Component | o-s-s/power-select', function (hooks) {
  setupRenderingTest(hooks);
  setupIntl(hooks);

  const onSearch = sinon.stub();
  const onChange = sinon.stub();

  hooks.beforeEach(function () {
    this.selectedItems = [];
    this.items = [];
    this.onSearch = onSearch;
  });

  module('it renders', () => {
    test('with all required named blocks', async function (assert) {
      await render(hbs`
        <OSS::PowerSelect @selectedItems={{this.selectedItems}} @items={{this.items}}
                          @onSearch={{this.onSearch}}>
          <:selected-item as |selectedItem|>
            {{selectedItem}}
          </:selected-item>
          <:option-item as |item|>
            {{item}}
          </:option-item>
        </OSS::PowerSelect>
      `);

      assert.dom('.upf-power-select').exists({ count: 1 });
      assert.dom('.upf-power-select__array-container').exists({ count: 1 });
      assert.dom('.upf-power-select').hasNoAttribute('open');
      await click('.upf-power-select__array-container');
      assert.dom('.upf-power-select').hasAttribute('open');
    });

    test('without a border when @borderless is true', async function (assert) {
      await render(hbs`
        <OSS::PowerSelect @selectedItems={{this.selectedItems}} @items={{this.items}}
                          @onSearch={{this.onSearch}} @borderless={{true}}>
          <:selected-item as |selectedItem|>
            {{selectedItem}}
          </:selected-item>
          <:option-item as |item|>
            {{item}}
          </:option-item>
        </OSS::PowerSelect>
      `);

      assert.dom('.upf-power-select').hasClass('upf-power-select--borderless');
    });

    test('custom empty state is properly rendered', async function (assert) {
      await render(hbs`
        <OSS::PowerSelect @selectedItems={{this.selectedItems}} @items={{this.items}}
                          @onSearch={{this.onSearch}}>
          <:selected-item as |selectedItem|>
            {{selectedItem}}
          </:selected-item>
          <:option-item as |item|>
            {{item}}
          </:option-item>
          <:empty-state>
            <div class="foobar">custom empty state</div>
          </:empty-state>
        </OSS::PowerSelect>
      `);

      assert.dom('.upf-power-select').exists({ count: 1 });
      assert.dom('.upf-power-select__array-container').exists({ count: 1 });
      assert.dom('.upf-power-select').hasNoAttribute('open');
      await click('.upf-power-select__array-container');
      assert.dom('.upf-power-select').hasAttribute('open');
      assert.dom('.foobar').exists();
      assert.dom('.foobar').hasText('custom empty state');
    });
  });

  module('with @selectedItems', () => {
    test('Passing @selectedItems parameter displays the items', async function (assert) {
      this.selectedItems = ['value1', 'value2'];

      await render(hbs`
        <OSS::PowerSelect @selectedItems={{this.selectedItems}} @items={{this.items}}
                          @onSearch={{this.onSearch}}>
          <:selected-item as |selectedItem|>
            <span>{{selectedItem}}</span>
          </:selected-item>
          <:option-item as |item|>
            {{item}}
          </:option-item>
        </OSS::PowerSelect>
      `);

      const domTags = findAll('.array-input-container span');
      assert.dom(domTags[0]).hasText('value1');
      assert.dom(domTags[1]).hasText('value2');
    });

    test('Passing empty @selectedItems parameter displays nothing', async function (assert) {
      await render(hbs`
        <OSS::PowerSelect @selectedItems={{this.selectedItems}} @items={{this.items}}
                          @onSearch={{this.onSearch}}>
          <:selected-item as |selectedItem|>
            <span id="selectedItemTest">{{selectedItem}}</span>
          </:selected-item>
          <:option-item as |item|>
            {{item}}
          </:option-item>
        </OSS::PowerSelect>
      `);

      assert.dom('.array-input-container #selectedItemTest').doesNotExist();
    });

    test('Passing empty @selectedItems and @placeholder parameters displays placeholder', async function (assert) {
      await render(hbs`
        <OSS::PowerSelect @selectedItems={{this.selectedItems}} @items={{this.items}}
                          @onSearch={{this.onSearch}} @placeholder="placeholder">
          <:selected-item as |selectedItem|>
            {{selectedItem}}
          </:selected-item>
          <:option-item as |item|>
            {{item}}
          </:option-item>
        </OSS::PowerSelect>
      `);

      assert.dom('.array-input-container').hasText('placeholder');
    });
  });

  module('with @items', (hooks) => {
    hooks.beforeEach(function () {
      this.items = ['value1', 'value2'];
    });

    test('Passing @items parameter displays the items in InfiniteSelect', async function (assert) {
      await render(hbs`
        <OSS::PowerSelect @selectedItems={{this.selectedItems}} @items={{this.items}}
                          @onSearch={{this.onSearch}}>
          <:selected-item as |selectedItem|>
            {{selectedItem}}
          </:selected-item>
          <:option-item as |item|>
            {{item}}
          </:option-item>
        </OSS::PowerSelect>
      `);

      await click('.upf-power-select__array-container');
      const domTags = findAll('.upf-infinite-select__item');
      assert.dom(domTags[0]).hasText('value1');
      assert.dom(domTags[1]).hasText('value2');
    });
  });

  module('with @onChange', (hooks) => {
    hooks.beforeEach(function () {
      this.selectedItems = ['value1', 'value2'];
      this.items = ['value1', 'value2'];
      this.onChange = onChange;
    });

    test('selecting item triggers onChange with selection operation', async function (assert) {
      await render(hbs`
        <OSS::PowerSelect @selectedItems={{this.selectedItems}} @items={{this.items}}
                          @onSearch={{this.onSearch}} @onChange={{this.onChange}}>
          <:selected-item as |selectedItem|>
            {{selectedItem}}
          </:selected-item>
          <:option-item as |item|>
            {{item}}
          </:option-item>
        </OSS::PowerSelect>
      `);

      await click('.upf-power-select__array-container');
      await click('.upf-infinite-select__item:nth-child(1)');

      assert.ok(this.onChange.calledWith('value1', 'selection'));
    });
  });

  module('with @searchPlaceholder', () => {
    test('Passing @items parameter displays the items in InfiniteSelect', async function (assert) {
      await render(hbs`
        <OSS::PowerSelect @selectedItems={{this.selectedItems}} @items={{this.items}}
                          @onSearch={{this.onSearch}} @searchPlaceholder='searchPlaceholder'>
          <:selected-item as |selectedItem|>
            {{selectedItem}}
          </:selected-item>
          <:option-item as |item|>
            {{item}}
          </:option-item>
        </OSS::PowerSelect>
      `);

      await click('.upf-power-select__array-container');
      assert.dom('.upf-infinite-select input').hasAttribute('placeholder', 'searchPlaceholder');
    });
  });

  module('with @onSearch', () => {
    test('search is correctly called', async function (assert) {
      await render(hbs`
        <OSS::PowerSelect @selectedItems={{this.selectedItems}} @items={{this.items}}
                          @onSearch={{this.onSearch}}>
          <:selected-item as |selectedItem|>
            {{selectedItem}}
          </:selected-item>
          <:option-item as |item|>
            {{item}}
          </:option-item>
        </OSS::PowerSelect>
      `);

      await click('.upf-power-select__array-container');
      await typeIn('.upf-infinite-select input', 's');

      assert.ok(this.onSearch.calledWith('s'));
    });
  });

  module('with @onBottomReached', (hooks) => {
    hooks.beforeEach(function () {
      this.items = ['value1', 'value2', 'value3'];
      this.loadingMore = false;
      this.onBottomReached = sinon.stub().callsFake(() => {
        this.set('loadingMore', true);
      });
    });

    test('search is correctly call', async function (assert) {
      await render(hbs`
        <div style="height:150px">
          <OSS::PowerSelect @selectedItems={{this.selectedItems}} @items={{this.items}} @loadingMore={{this.loadingMore}}
                            @onSearch={{this.onSearch}} @onBottomReached={{this.onBottomReached}}>
            <:selected-item as |selectedItem|>
              {{selectedItem}}
            </:selected-item>
            <:option-item as |item|>
              {{item}}
            </:option-item>
          </OSS::PowerSelect>
        </div>
      `);

      await click('.upf-power-select__array-container');
      await scrollTo('.upf-infinite-select__items-container', 0, 1500);
      this.set('loadingMore', false);
      await scrollTo('.upf-infinite-select__items-container', 0, 1500);

      assert.ok(this.onBottomReached.calledTwice);
    });
  });

  module('with @addressableAs', (hooks) => {
    hooks.beforeEach(function () {
      this.items = ['value1', 'value2', 'value3'];
    });

    test('the dropdown has the right class assigned to it', async function (assert) {
      await render(hbs`
        <div style="height:150px">
          <OSS::PowerSelect @selectedItems={{this.selectedItems}} @items={{this.items}} @onSearch={{this.onSearch}} @addressableAs="foobar-select">
            <:selected-item as |selectedItem|>
              {{selectedItem}}
            </:selected-item>
            <:option-item as |item|>
              {{item}}
            </:option-item>
          </OSS::PowerSelect>
        </div>
      `);

      await click('.upf-power-select__array-container');
      assert.dom('.upf-infinite-select').exists();
      assert.dom('.upf-infinite-select').hasClass('foobar-select__dropdown');
    });
  });

  module('with @feedbackMessage', () => {
    async function renderComponentWithFeedbackMessage(): Promise<void> {
      await render(hbs`
        <OSS::PowerSelect @selectedItems={{this.selectedItems}} @items={{this.items}}
                          @onSearch={{this.onSearch}} @feedbackMessage={{this.feedbackMessage}}>
          <:selected-item as |selectedItem|>
            {{selectedItem}}
          </:selected-item>
          <:option-item as |item|>
            {{item}}
          </:option-item>
        </OSS::PowerSelect>
      `);
    }

    module('For "error" type', () => {
      test('Passing the error type sets the proper border class on the input container', async function (assert) {
        this.feedbackMessage = { type: 'error', value: 'error message' };
        await renderComponentWithFeedbackMessage();

        assert.dom('.upf-power-select .array-input-container').hasClass('array-input-container--error');
      });

      test('Passing the error type along with a message will display the message', async function (assert) {
        this.feedbackMessage = { type: 'error', value: 'error message' };
        await renderComponentWithFeedbackMessage();

        assert.dom('[data-control-name="power-select-feedback-message"]').hasText('error message');
      });
    });

    module('For "warning" type', () => {
      test('Passing the warning type sets the proper border class on the input container', async function (assert) {
        this.feedbackMessage = { type: 'warning', value: 'warning message' };
        await renderComponentWithFeedbackMessage();

        assert.dom('.upf-power-select .array-input-container').hasClass('array-input-container--warning');
      });

      test('Passing the warning type along with a message will display the message', async function (assert) {
        this.feedbackMessage = { type: 'warning', value: 'warning message' };
        await renderComponentWithFeedbackMessage();

        assert.dom('[data-control-name="power-select-feedback-message"]').hasText('warning message');
      });
    });

    module('For "success" type', () => {
      test('Passing the success type sets the proper border class on the input container', async function (assert) {
        this.feedbackMessage = { type: 'success', value: 'success message' };
        await renderComponentWithFeedbackMessage();

        assert.dom('.upf-power-select .array-input-container').hasClass('array-input-container--success');
      });

      test('Passing the success type along with a message will display the message', async function (assert) {
        this.feedbackMessage = { type: 'success', value: 'success message' };
        await renderComponentWithFeedbackMessage();

        assert.dom('[data-control-name="power-select-feedback-message"]').hasText('success message');
      });
    });

    test('Failing to pass the type will not display a border or a message', async function (assert) {
      this.feedbackMessage = undefined;
      await renderComponentWithFeedbackMessage();
      assert.dom('.upf-power-select .array-input-container').doesNotHaveClass('array-input-container--error');
      assert.dom('[data-control-name="power-select-feedback-message"]').doesNotExist();
    });
  });

  module('with @hasError', () => {
    test('Passing @hasError parameter sets the proper border class on the input container', async function (assert) {
      this.selectedItems = ['value1', 'value2'];
      this.items = ['value1', 'value2'];
      this.hasError = true;

      await render(hbs`
        <OSS::PowerSelect @selectedItems={{this.selectedItems}} @items={{this.items}} @hasError={{true}}
                          @onSearch={{this.onSearch}}>
          <:selected-item as |selectedItem|>
            {{selectedItem}}
          </:selected-item>
          <:option-item as |item|>
            {{item}}
          </:option-item>
        </OSS::PowerSelect />
      `);

      assert.dom('.upf-power-select .array-input-container').hasClass('array-input-container--error');
    });
  });

  module('Error management', () => {
    test('without selected-item named block', async function (assert) {
      setupOnerror((err: any) => {
        assert.equal(
          err.message,
          'Assertion Failed: [component][OSS::PowerSelect] You must pass selected-item named block'
        );
      });

      await render(hbs`
        <OSS::PowerSelect @onSearch={{this.onSearch}}/>
      `);
    });

    test('without option-item named block', async function (assert) {
      setupOnerror((err: any) => {
        assert.equal(
          err.message,
          'Assertion Failed: [component][OSS::PowerSelect] You must pass option-item named block'
        );
      });

      await render(hbs`
        <OSS::PowerSelect @onSearch={{this.onSearch}}>
          <:selected-item as |selectedItem|>
            {{selectedItem.name}}
          </:selected-item>
        </OSS::PowerSelect>
      `);
    });
  });
});
