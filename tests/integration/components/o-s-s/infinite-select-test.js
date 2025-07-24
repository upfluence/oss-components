import { hbs } from 'ember-cli-htmlbars';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { setupIntl } from 'ember-intl/test-support';
import { click, typeIn, render, scrollTo, setupOnerror, triggerKeyEvent } from '@ember/test-helpers';
import sinon from 'sinon';

function _isFocused(element) {
  return element === document.activeElement;
}

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
  setupIntl(hooks);

  test('the index values from the @items array are available in the option named block', async function (assert) {
    this.items = FAKE_DATA;
    this.checkedIndex = 0;
    this.onSelect = () => {};

    await render(
      hbs`<OSS::InfiniteSelect
            @items={{this.items}}
            @searchEnabled={{false}}
            @onSelect={{this.onSelect}}
          >
            <:option as |item index|>
              <div class="index">{{index}}</div>
            </:option>
          </OSS::InfiniteSelect>
        `
    );

    assert.dom('.index:nth-of-type(1)').hasText(this.checkedIndex.toString());
  });

  module('search is enabled', function () {
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
        assert.dom(
          '.upf-infinite-select__items-container [data-control-name="infinite-select-empty-state-illustration"]'
        );
      });
    });

    module('with inline', function () {
      test('it should render with undefined arg', async function (assert) {
        this.items = FAKE_DATA;
        this.onSelect = () => {};

        await render(
          hbs`<OSS::InfiniteSelect @items={{this.items}} @searchEnabled={{false}} @onSelect={{this.onSelect}}/>`
        );

        assert.dom('.upf-infinite-select.upf-infinite-select--absolute').exists({ count: 1 });
      });
      test('it should render with falsy arg', async function (assert) {
        this.items = FAKE_DATA;
        this.onSelect = () => {};

        await render(
          hbs`<OSS::InfiniteSelect @items={{this.items}} @inline={{false}} @searchEnabled={{false}} @onSelect={{this.onSelect}}/>`
        );

        assert.dom('.upf-infinite-select.upf-infinite-select--absolute').exists({ count: 1 });
      });
      test('it should render with truthy arg', async function (assert) {
        this.items = FAKE_DATA;
        this.onSelect = () => {};

        await render(
          hbs`<OSS::InfiniteSelect @items={{this.items}} @inline={{true}} @searchEnabled={{false}} @onSelect={{this.onSelect}}/>`
        );

        assert.dom('.upf-infinite-select').exists({ count: 1 });
        assert.dom('.upf-infinite-select--absolute').doesNotExist();
      });
    });
  });

  module('with onBottomReached', function () {
    test('it should trigger onBottomReach function', async function (assert) {
      this.items = FAKE_DATA;
      this.onSelect = () => {};
      this.loadingMore = false;
      this.onBottomReached = sinon.stub().callsFake(() => {
        this.set('loadingMore', true);
      });

      await render(
        hbs`
          <OSS::InfiniteSelect @items={{this.items}} @searchEnabled={{false}} @onSelect={{this.onSelect}}
                               @loadingMore={{this.loadingMore}} @onBottomReached={{this.onBottomReached}} />
        `
      );

      await scrollTo('.upf-infinite-select__items-container', 0, 1500);
      this.set('loadingMore', false);
      await scrollTo('.upf-infinite-select__items-container', 0, 1500);

      assert.ok(this.onBottomReached.calledTwice);
    });
  });

  module('Keyboard control management', function (hooks) {
    hooks.beforeEach(function () {
      this.items = FAKE_DATA;
      this.onSelect = () => {};
      this.onSearch = () => {};
    });

    module('If keyboard is disabled', function () {
      test('The first element should not be focused on load', async function (assert) {
        await render(
          hbs`<OSS::InfiniteSelect @items={{this.items}} @inline={{false}} @searchEnabled={{false}} @onSelect={{this.onSelect}} />`
        );

        assert.notOk(_isFocused(document.querySelectorAll('.upf-infinite-select__item')[0]));
      });

      test('The keyboard controls are disabled', async function (assert) {
        await render(
          hbs`<OSS::InfiniteSelect @items={{this.items}} @inline={{false}} @searchEnabled={{false}} @onSelect={{this.onSelect}} />`
        );

        assert.notOk(_isFocused(document.querySelectorAll('.upf-infinite-select__item')[0]));

        await triggerKeyEvent('.upf-infinite-select__items-container', 'keydown', 'ArrowDown');

        assert.notOk(_isFocused(document.querySelectorAll('.upf-infinite-select__item')[0]));
        assert.notOk(_isFocused(document.querySelectorAll('.upf-infinite-select__item')[1]));
      });
    });

    module('If keyboard is enabled', function (hooks) {
      hooks.beforeEach(function () {
        this.enableKeyboard = true;
      });

      module('If Search is enabled', function () {
        test('Search input should be focused', async function (assert) {
          await render(
            hbs`<OSS::InfiniteSelect @items={{this.items}} @inline={{false}} @searchEnabled={{true}} @onSelect={{this.onSelect}}
                                     @enableKeyboard={{this.enableKeyboard}} @onSearch={{this.onSearch}}/>`
          );

          assert.ok(_isFocused(document.querySelector('.upf-input')));
          assert.notOk(_isFocused(document.querySelectorAll('.upf-infinite-select__item')[0]));
        });

        test('On keydown Enter it should focus the first element', async function (assert) {
          await render(
            hbs`<OSS::InfiniteSelect @items={{this.items}} @inline={{false}} @searchEnabled={{true}} @onSelect={{this.onSelect}}
                                     @enableKeyboard={{this.enableKeyboard}} @onSearch={{this.onSearch}}/>`
          );

          assert.ok(_isFocused(document.querySelector('.upf-input')));

          await triggerKeyEvent('.upf-input', 'keydown', 'Enter');

          assert.notOk(_isFocused(document.querySelector('.upf-input')));
          assert.ok(_isFocused(document.querySelectorAll('.upf-infinite-select__item')[0]));
        });

        test('On keydown ArrowDown it should focus the first element', async function (assert) {
          await render(
            hbs`<OSS::InfiniteSelect @items={{this.items}} @inline={{false}} @searchEnabled={{true}} @onSelect={{this.onSelect}}
                                     @enableKeyboard={{this.enableKeyboard}} @onSearch={{this.onSearch}}/>`
          );

          assert.ok(_isFocused(document.querySelector('.upf-input')));

          await triggerKeyEvent('.upf-input', 'keydown', 'ArrowDown');

          assert.notOk(_isFocused(document.querySelector('.upf-input')));
          assert.ok(_isFocused(document.querySelectorAll('.upf-infinite-select__item')[0]));
        });

        test('On keydown Enter it should call the onClose action', async function (assert) {
          this.onClose = sinon.stub();

          await render(
            hbs`<OSS::InfiniteSelect @items={{this.items}} @inline={{false}} @searchEnabled={{true}} @onSelect={{this.onSelect}}
                                     @enableKeyboard={{this.enableKeyboard}} @onSearch={{this.onSearch}} @onClose={{this.onClose}}/>`
          );

          assert.ok(_isFocused(document.querySelector('.upf-input')));
          assert.ok(this.onClose.notCalled);

          await triggerKeyEvent('.upf-input', 'keydown', 'Escape');

          assert.ok(this.onClose.calledOnce);
        });
      });

      test('The first element should be focuses on load', async function (assert) {
        await render(
          hbs`<OSS::InfiniteSelect @items={{this.items}} @inline={{false}} @searchEnabled={{false}} @onSelect={{this.onSelect}}
                                   @enableKeyboard={{this.enableKeyboard}}/>`
        );

        assert.ok(_isFocused(document.querySelectorAll('.upf-infinite-select__item')[0]));
      });

      test('On keydown ArrowUp & ArrowDown it should control the focused element', async function (assert) {
        await render(
          hbs`<OSS::InfiniteSelect @items={{this.items}} @inline={{false}} @searchEnabled={{false}} @onSelect={{this.onSelect}}
                                   @enableKeyboard={{this.enableKeyboard}}/>`
        );

        assert.ok(_isFocused(document.querySelectorAll('.upf-infinite-select__item')[0]));

        await triggerKeyEvent('.upf-infinite-select__items-container', 'keydown', 'ArrowDown');

        assert.notOk(_isFocused(document.querySelectorAll('.upf-infinite-select__item')[0]));
        assert.ok(_isFocused(document.querySelectorAll('.upf-infinite-select__item')[1]));

        await triggerKeyEvent('.upf-infinite-select__items-container', 'keydown', 'ArrowUp');

        assert.notOk(_isFocused(document.querySelectorAll('.upf-infinite-select__item')[1]));
        assert.ok(_isFocused(document.querySelectorAll('.upf-infinite-select__item')[0]));
      });

      test('On keydown Enter it should select the focused element', async function (assert) {
        this.onSelect = sinon.stub();

        await render(
          hbs`<OSS::InfiniteSelect @items={{this.items}} @inline={{false}} @searchEnabled={{false}} @onSelect={{this.onSelect}}
                                   @enableKeyboard={{this.enableKeyboard}}/>`
        );

        const el = document.querySelectorAll('.upf-infinite-select__item')[0];
        assert.ok(_isFocused(el));
        assert.ok(this.onSelect.notCalled);

        await triggerKeyEvent('.upf-infinite-select__items-container', 'keydown', 'Enter');

        assert.ok(this.onSelect.calledOnceWith(FAKE_DATA[0]));
      });

      test('On keydown Tab/Escape it should call the onClose action', async function (assert) {
        this.onClose = sinon.stub();

        await render(
          hbs`<OSS::InfiniteSelect @items={{this.items}} @inline={{false}} @searchEnabled={{false}} @onSelect={{this.onSelect}}
                                   @enableKeyboard={{this.enableKeyboard}} @onClose={{this.onClose}}/>`
        );

        assert.ok(this.onClose.notCalled);
        await triggerKeyEvent('.upf-infinite-select__items-container', 'keydown', 'Tab');
        assert.ok(this.onClose.calledOnce);
        await triggerKeyEvent('.upf-infinite-select__items-container', 'keydown', 'Escape');
        assert.ok(this.onClose.calledTwice);
      });
    });
  });

  module('Skin', function (hooks) {
    hooks.beforeEach(function () {
      this.items = FAKE_DATA;
      this.onSelect = () => {};
    });

    test('When @skin is not specified the "default" skin is applied', async function (assert) {
      await render(
        hbs`<OSS::InfiniteSelect @items={{this.items}} @searchEnabled={{false}} @onSelect={{this.onSelect}}/>`
      );

      assert.dom('.upf-infinite-select').hasClass('upf-infinite-select--default');
    });

    test('it should render with the smart skin', async function (assert) {
      await render(
        hbs`<OSS::InfiniteSelect @items={{this.items}} @searchEnabled={{false}} @onSelect={{this.onSelect}} @skin="smart"/>`
      );

      assert.dom('.upf-infinite-select').hasClass('upf-infinite-select--smart');
    });
  });

  module('Error management', function () {
    module('On item selection, if onSelect is not passed', function () {
      test('it should throw an error', async function (assert) {
        setupOnerror((err) => {
          assert.equal(
            err.message,
            'Assertion Failed: [component][OSS::InfiniteSelect] `onSelect` action is mandatory'
          );
        });

        await render(hbs`<OSS::InfiniteSelect @items={{this.items}} @searchEnabled={{false}} />`);
      });
    });

    module('When the search is enabled, if no onSearch hook has been passed', function () {
      test('should throw an error', async function (assert) {
        setupOnerror((err) => {
          assert.equal(
            err.message,
            'Assertion Failed: [component][OSS::InfiniteSelect] Search is enabled without an `onSearch` action being passed'
          );
        });

        await render(hbs`<OSS::InfiniteSelect @items={{this.items}} @searchEnabled={{true}} />`);
      });
    });
  });
});
