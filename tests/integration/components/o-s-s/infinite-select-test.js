import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, typeIn, render, setupOnerror } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

const FAKE_DATA = [
  { name: 'Batman', characters: 'Bruce Wayne' },
  { name: 'Superman', characters: 'Kal-El' },
  { name: 'Green Arrow', characters: 'Oliver Queen' },
  { name: 'Wonder Woman', characters: 'Princess Diana' },
  { name: 'Martian Manhunter', characters: 'Martian Manhunter' },
  { name: 'Robin/Nightwing', characters: 'Dick Grayson' },
  { name: 'Spider Man', characters: 'Peter Parker' },
  { name: 'Iron Man', characters: 'Tony Stark' },
  { name: 'Thor', characters: 'Thor Odinson' },
  { name: 'Hulk', characters: 'Bruce Banner' },
  { name: 'Wolverine', characters: 'James Howlett' }
];

module('Integration | Component | o-s-s/infinite-select', function (hooks) {
  setupRenderingTest(hooks);

  module('search is enabled', function () {
    module('no onSearch hook has been passed', function () {
      test('should throw an error', async function (assert) {
        setupOnerror((err) => {
          assert.equal(
            err.message,
            '[component][OSS::InfiniteSelect] Search is enabled without an `onSearch` action being passed'
          );
        });

        await render(hbs`<OSS::InfiniteSelect @items={{this.items}} @searchEnabled={{true}} />`);
      });
    });

    module('with onSearch hook', function () {
      test('it calls the onSearch hook with the typed keyword', async function (assert) {
        this.onSearch = (keyword) => {
          assert.equal(keyword, 'b', 'Enters the onSearch hook');
        };

        this.onSelect = () => {};

        await render(
          hbs`<OSS::InfiniteSelect
                @items={{this.items}} @searchEnabled={{true}} @onSearch={{this.onSearch}} @onSelect={{this.onSelect}}/>`
        );

        assert.dom('.upf-infinite-select input.upf-input').exists();
        await typeIn('.upf-infinite-select input.upf-input', 'b');
      });

      test('it uses the passed placeholder when present', async function (assert) {
        this.onSearch = () => {};
        this.onSelect = () => {};

        await render(
          hbs`
            <OSS::InfiniteSelect
              @items={{this.items}} @searchEnabled={{true}} @onSearch={{this.onSearch}} @searchPlaceholder="Foobar"
              @onSelect={{this.onSelect}}/>
          `
        );

        assert.dom('.upf-infinite-select input.upf-input').exists();
        assert.dom('.upf-infinite-select input.upf-input').hasAttribute('placeholder', 'Foobar');
      });
    });
  });

  module('item selection', function () {
    module('onSelect is not passed', function () {
      test('should throw an error', async function (assert) {
        setupOnerror((err) => {
          assert.equal(err.message, '[component][OSS::InfiniteSelect] `onSelect` action is mandatory');
        });

        await render(hbs`<OSS::InfiniteSelect @items={{this.items}} @searchEnabled={{false}} />`);
      });
    });

    module('onSelect is passed', function () {
      test('it calls the onSelect hook with the clicked item', async function (assert) {
        this.items = FAKE_DATA;
        this.onSelect = (item) => {
          assert.equal(item.name, 'Batman');
        };

        await render(
          hbs`<OSS::InfiniteSelect @items={{this.items}} @searchEnabled={{false}} @onSelect={{this.onSelect}}/>`
        );

        await click('.upf-infinite-select__items-container .upf-infinite-select__item:first-child');
      });
    });
  });

  module('loading states', function () {
    module('full content loading', function () {
      test('should display rows of skeleton loading in place of the content', async function (assert) {
        this.items = FAKE_DATA;
        this.onSelect = () => {};

        await render(
          hbs`<OSS::InfiniteSelect @items={{this.items}} @loading={{true}} @searchEnabled={{false}} @onSelect={{this.onSelect}}/>`
        );

        assert.dom('.upf-infinite-select__items-container .upf-infinite-select__item').doesNotExist();
        assert.dom('.upf-infinite-select__items-container .upf-skeleton-effect').exists({ count: 5 });
      });
    });

    module('additional content loading', function () {
      test('should display rows of skeleton loading after the existing content', async function (assert) {
        this.items = FAKE_DATA;
        this.onSelect = () => {};

        await render(
          hbs`<OSS::InfiniteSelect @items={{this.items}} @loadingMore={{true}} @searchEnabled={{false}} @onSelect={{this.onSelect}}/>`
        );

        assert
          .dom('.upf-infinite-select__items-container .upf-infinite-select__item')
          .exists({ count: FAKE_DATA.length });
        assert.dom('.upf-infinite-select__items-container .upf-skeleton-effect').exists({ count: 3 });
      });
    });
  });

  module('it renders', function () {
    module('with itemLabel', function () {
      test('it uses the passed itemLabel argument as display key', async function (assert) {
        this.items = FAKE_DATA;
        this.onSelect = () => {};

        await render(
          hbs`<OSS::InfiniteSelect @items={{this.items}} @itemLabel="characters" @searchEnabled={{false}} @onSelect={{this.onSelect}}/>`
        );

        assert
          .dom('.upf-infinite-select__items-container .upf-infinite-select__item')
          .exists({ count: FAKE_DATA.length });

        let displayedNames = [];
        document.querySelectorAll('.upf-infinite-select__items-container .upf-infinite-select__item').forEach((x) => {
          displayedNames.push(x.textContent.trim());
        });

        assert.deepEqual(
          displayedNames,
          FAKE_DATA.map((x) => x.characters)
        );
      });
    });

    module('with option block', function () {
      test('it uses the passed block to display options', async function (assert) {
        this.items = FAKE_DATA;
        this.onSelect = () => {};

        await render(
          hbs`
            <OSS::InfiniteSelect @items={{this.items}} @searchEnabled={{false}} @onSelect={{this.onSelect}}>
              <:option as |opt|>
                Comics - {{opt.name}}
              </:option>
            </OSS::InfiniteSelect>
          `
        );

        assert
          .dom('.upf-infinite-select__items-container .upf-infinite-select__item')
          .exists({ count: FAKE_DATA.length });

        let displayedNames = [];
        document.querySelectorAll('.upf-infinite-select__items-container .upf-infinite-select__item').forEach((x) => {
          console.log(x.textContent);
          displayedNames.push(x.textContent.trim());
        });

        assert.deepEqual(
          displayedNames,
          FAKE_DATA.map((x) => `Comics - ${x.name}`)
        );
      });
    });

    module('with empty items', function () {
      test('it should render the empty state', async function (assert) {
        this.items = [];
        this.onSelect = () => {};

        await render(
          hbs`<OSS::InfiniteSelect @items={{this.items}} @searchEnabled={{false}} @onSelect={{this.onSelect}}/>`
        );

        assert.dom('.upf-infinite-select__items-container').hasClass('upf-infinite-select__items-container--empty');
        assert
          .dom('.upf-infinite-select__items-container img')
          .hasAttribute('src', '/@upfluence/oss-components/assets/images/empty-state-skeleton.png');
      });
    });
  });
});
