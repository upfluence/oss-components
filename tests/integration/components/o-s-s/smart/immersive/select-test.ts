import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, fillIn, render, setupOnerror } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import sinon from 'sinon';
import { setupIntl } from 'ember-intl/test-support';

module('Integration | Component | o-s-s/smart/immersive/select', function (hooks) {
  setupRenderingTest(hooks);
  setupIntl(hooks);

  hooks.beforeEach(function () {
    this.selectedItems = [{ value: 'item1' }];
    this.items = [
      { value: 'item1', label: 'Item 1' },
      { value: 'item2', label: 'Item 2' }
    ];
    this.placeholder = 'Default placeholder';
    this.loading = false;
    this.hasError = false;
    this.multiple = true;
    this.displayedItems = 0;
    this.maxItemWidth = 200;
    this.onSearch = sinon.stub();
    this.searchEnabled = true;
    this.onChange = sinon.stub();
  });

  module('It renders', () => {
    test('When missing selected-item name block, it throws an error', async function (assert) {
      setupOnerror((err: { message: string }) => {
        assert.equal(
          err.message,
          'Assertion Failed: [component][OSS::Smart::Immersive::Select] You must pass selected-item named block'
        );
      });

      await render(
        hbs`<OSS::Smart::Immersive::Select @value={{this.value}} @values={{this.selectedItems}} @items={{this.items}} 
                                         @multiple={{this.multiple}} @placeholder={{this.placeholder}}
                                         @loading={{this.loading}} @hasError={{this.hasError}}
                                         @displayedItems={{this.displayedItems}} @maxItemWidth={{this.maxItemWidth}}
                                         @onChange={{this.onChange}} @onSearch={{this.onSearch}}>
            <:option-item as |item|>
              <span class="option-item-label">{{item.label}}</span>
            </:option-item>
          </OSS::Smart::Immersive::Select>`
      );
    });

    test('With missing option-item name block, it throws an error', async function (assert) {
      setupOnerror((err: { message: string }) => {
        assert.equal(
          err.message,
          'Assertion Failed: [component][OSS::Smart::Immersive::Select] You must pass option-item named block'
        );
      });

      await render(
        hbs`<OSS::Smart::Immersive::Select @value={{this.value}} @values={{this.selectedItems}} @items={{this.items}} 
                                         @multiple={{this.multiple}} @placeholder={{this.placeholder}}
                                         @loading={{this.loading}} @hasError={{this.hasError}}
                                         @displayedItems={{this.displayedItems}} @maxItemWidth={{this.maxItemWidth}}
                                         @onChange={{this.onChange}} @onSearch={{this.onSearch}}>
            <:selected-item as |item|>
              <span class="selected-item-label">{{item}}</span>
            </:selected-item>
          </OSS::Smart::Immersive::Select>`
      );
    });

    test('With all required named blocks', async function (assert) {
      await renderComponent();

      assert.dom('.smart-immersive-select-container').exists();
    });
  });

  module('Single select', (hooks) => {
    hooks.beforeEach(function () {
      this.selectedItems = null;
      this.value = { value: 'item1' };
      this.multiple = false;
    });

    test('When clicking on the immersive input, it opens the infinite select', async function (assert) {
      await renderSingleComponent();
      assert.dom('.upf-infinite-select').doesNotExist();
      await click('.smart-immersive-select-container div');
      assert.dom('.upf-infinite-select').exists().hasClass('upf-infinite-select--smart');
    });

    test('Selected items are highlighted with a checkmark', async function (assert) {
      await renderSingleComponent();
      await click('.smart-immersive-select-container div');
      assert.dom('.upf-infinite-select__item .selected').exists();
      assert.dom('.upf-infinite-select__item .selected i').exists();
      assert.dom('.upf-infinite-select__item .selected i').hasClass('font-color-primary-500').hasClass('fa-check');
    });

    test('Selecting an item automatically closes the dropdown', async function (assert) {
      await renderSingleComponent();
      await click('.smart-immersive-select-container div');
      await click('.upf-infinite-select__item:nth-of-type(2)');
      assert.dom('.upf-infinite-select').doesNotExist();
    });

    module('@searchEnabled parameter', () => {
      test('The search input is hidden if the searchEnabled is false', async function (assert) {
        this.searchEnabled = false;
        await renderComponent();
        await click('.smart-immersive-select-container div');

        assert.dom('.upf-infinite-select--search input').doesNotExist();
      });

      test('The search input is visible if the searchEnabled is true', async function (assert) {
        this.searchEnabled = true;
        await renderComponent();
        await click('.smart-immersive-select-container div');

        assert.dom('.upf-infinite-select--search input').exists();
      });
    });
  });

  module('Multiple select', () => {
    test('When clicking on the immersive input, it opens the infinite select', async function (assert) {
      await renderComponent();
      assert.dom('.upf-infinite-select').doesNotExist();
      await click('.smart-immersive-select-container div');
      assert.dom('.upf-infinite-select').exists().hasClass('upf-infinite-select--smart');
    });

    test('Selected items are highlighted with an active checkbox', async function (assert) {
      await renderComponent();
      await click('.smart-immersive-select-container div');

      assert.dom('.upf-infinite-select__item:nth-of-type(1) > div').hasClass('selected');
      assert.dom('.upf-infinite-select__item:nth-of-type(1) > div .upf-checkbox input').isChecked();
      assert.dom('.upf-infinite-select__item:nth-of-type(2) > div').hasNoClass('selected');
      assert.dom('.upf-infinite-select__item:nth-of-type(2) > div .upf-checkbox input').isNotChecked();
    });

    test('When displayedItems is defined, only the X firsts items are displayed, the remaining ones are concatenated', async function (assert) {
      this.displayedItems = 1;
      this.selectedItems = [{ value: 'Item 1' }, { value: 'Item 2' }, { value: 'Item 3' }, { value: 'Item 4' }];
      await renderComponent();

      assert.dom('.smart-immersive-select-container .select-smart-item').exists({ count: 2 });
      assert.dom('.smart-immersive-select-container .select-smart-item:nth-of-type(1)').hasText('Item 1');
      assert.dom('.smart-immersive-select-container .select-smart-item:nth-of-type(2)').exists('+3');
    });

    test('Selecting an item does not automatically close the dropdown', async function (assert) {
      await renderComponent();
      await click('.smart-immersive-select-container div');
      await click('.upf-infinite-select__item:nth-of-type(2)');
      assert.dom('.upf-infinite-select').exists();
    });

    module('@searchEnabled parameter', () => {
      test('The search input is hidden if the searchEnabled is false', async function (assert) {
        this.searchEnabled = false;
        await renderComponent();
        await click('.smart-immersive-select-container div');

        assert.dom('.upf-infinite-select--search input').doesNotExist();
      });

      test('The search input is visible if the searchEnabled is true', async function (assert) {
        this.searchEnabled = true;
        await renderComponent();
        await click('.smart-immersive-select-container div');

        assert.dom('.upf-infinite-select--search input').exists();
      });
    });

    test('When @hideCheckboxes is true, checkboxes are not rendered', async function (assert) {
      this.hideCheckboxes = true;
      await renderComponent();
      await click('.smart-immersive-select-container div');
      assert.dom('.upf-infinite-select__item:nth-of-type(1) .upf-checkbox').doesNotExist();
      assert.dom('.upf-infinite-select__item:nth-of-type(2) .upf-checkbox').doesNotExist();
    });
  });

  test('When maxItemWidth is defined, it applies the max-width style to the selected items', async function (assert) {
    await renderComponent();
    assert.dom('.smart-immersive-select-container .select-smart-item').hasStyle({ 'max-width': '200px' });
  });

  test('When selecting an item in the list, it triggers the onChange action ', async function (assert) {
    await renderComponent();

    assert.ok(this.onChange.notCalled);
    await click('.smart-immersive-select-container div');
    await click('.upf-infinite-select__item:nth-of-type(2)');
    assert.ok(this.onChange.calledOnceWith({ value: 'item2', label: 'Item 2' }));
  });

  test('When updating the search input, it triggers the onSearch action ', async function (assert) {
    await renderComponent();

    assert.ok(this.onSearch.notCalled);
    await click('.smart-immersive-select-container div');
    await fillIn('.upf-infinite-select--search input', 'test');
    assert.ok(this.onSearch.calledOnceWith('test'));
  });

  module('loading', (hooks) => {
    hooks.beforeEach(function () {
      this.loading = true;
    });

    test('When input is loading, it display an animated div instead of the input', async function (assert) {
      await renderComponent();

      assert.dom('.smart-immersive-select-container .loading-placeholder').exists();
      assert.dom('.smart-immersive-select-container .loading-placeholder').hasText(this.placeholder);
    });

    module('Once loading is finished', () => {
      test('It displays an animation once', async function (assert) {
        await renderComponent();
        this.set('loading', false);
        assert.dom('.smart-immersive-select-container').hasClass('smart-rotating-gradient');
      });

      test('If the field is empty, it does not display an animation once', async function (assert) {
        this.selectedItems = [];
        await renderComponent();
        this.set('loading', false);
        assert.dom('.smart-immersive-select-container').hasNoClass('smart-rotating-gradient');
      });
    });
  });

  async function renderComponent(): Promise<void> {
    return await render(
      hbs`<OSS::Smart::Immersive::Select @values={{this.selectedItems}} @items={{this.items}} 
                                         @multiple={{this.multiple}} @placeholder={{this.placeholder}}
                                         @loading={{this.loading}} @hasError={{this.hasError}}
                                         @displayedItems={{this.displayedItems}} @maxItemWidth={{this.maxItemWidth}}
                                         @onChange={{this.onChange}} @onSearch={{this.onSearch}}
                                         @searchEnabled={{this.searchEnabled}} @hideCheckboxes={{this.hideCheckboxes}} >
            <:selected-item as |item|>
              <span class="selected-item-label">{{item.value}}</span>
            </:selected-item>
            <:option-item as |item|>
              <span class="option-item-label">{{item.label}}</span>
            </:option-item>
          </OSS::Smart::Immersive::Select>`
    );
  }

  async function renderSingleComponent(): Promise<void> {
    return await render(
      hbs`<OSS::Smart::Immersive::Select @values={{array this.value}} @items={{this.items}} 
                                         @multiple={{this.multiple}} @placeholder={{this.placeholder}}
                                         @loading={{this.loading}} @hasError={{this.hasError}}
                                         @displayedItems={{this.displayedItems}} @maxItemWidth={{this.maxItemWidth}}
                                         @onChange={{this.onChange}} @onSearch={{this.onSearch}}
                                         @searchEnabled={{this.searchEnabled}}>
            <:selected-item as |item|>
              <span class="selected-item-label">{{item}}</span>
            </:selected-item>
            <:option-item as |item|>
              <span class="option-item-label">{{item.label}}</span>
            </:option-item>
          </OSS::Smart::Immersive::Select>`
    );
  }
});
