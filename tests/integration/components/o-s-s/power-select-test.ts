import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, setupOnerror, findAll, click, typeIn, scrollTo } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import sinon from 'sinon';

module('Integration | Component | o-s-s/power-select', function (hooks) {
  setupRenderingTest(hooks);
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
      assert.dom('.upf-power-infinite-select-container').exists({ count: 1 });
    });
  });

  module('it throws an error', () => {
    test('without selected-item named block', async function (assert) {
      setupOnerror((err: any) => {
        assert.equal(err.message, 'Assertion Failed: [component][OSS::PowerSelect] You must pass selected-item named block');
      });

      await render(hbs`
        <OSS::PowerSelect @onSearch={{this.onSearch}}/>
      `);
    });

    test('without option-item named block', async function (assert) {
      setupOnerror((err: any) => {
        assert.equal(err.message, 'Assertion Failed: [component][OSS::PowerSelect] You must pass option-item named block');
      });

      await render(hbs`
        <OSS::PowerSelect @selectedItems={{this.selectedItems}} @onSearch={{this.onSearch}}>
          <:selected-item as |selectedItem|>
            {{selectedItem.name}}
          </:selected-item>
        </OSS::PowerSelect>
      `);
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

      await scrollTo('.upf-infinite-select__items-container', 0, 1500);
      this.set('loadingMore', false);
      await scrollTo('.upf-infinite-select__items-container', 0, 1500);

      assert.ok(this.onBottomReached.calledTwice);
    });
  });
});
