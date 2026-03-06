import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import sinon from 'sinon';

module('Test Support | Custom Assertions | infinite-select-option', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.title = 'Test Option';
    this.onSelect = sinon.stub();
  });

  module('.exists()', () => {
    test('it passes when the option exists', async function (assert) {
      await render(hbs`<OSS::InfiniteSelect::Option @title={{this.title}} @onSelect={{this.onSelect}} />`);

      assert.infiniteSelectOption('.oss-infinite-select-option').exists();
    });
  });

  module('.doesNotExist()', () => {
    test('it passes when the option does not exist', async function (assert) {
      await render(hbs`<div></div>`);

      assert.infiniteSelectOption('.non-existent').doesNotExist();
    });
  });

  module('.hasTitle()', () => {
    test('it passes when the title matches', async function (assert) {
      await render(hbs`<OSS::InfiniteSelect::Option @title="My Title" @onSelect={{this.onSelect}} />`);

      assert.infiniteSelectOption('.oss-infinite-select-option').hasTitle('My Title');
    });
  });

  module('.hasSubtitle()', () => {
    test('it passes when the subtitle matches', async function (assert) {
      await render(hbs`
        <OSS::InfiniteSelect::Option
          @title={{this.title}}
          @subtitle="My Subtitle"
          @onSelect={{this.onSelect}}
        />
      `);

      assert.infiniteSelectOption('.oss-infinite-select-option').hasSubtitle('My Subtitle');
    });
  });

  module('.doesNotHaveSubtitle()', () => {
    test('it passes when there is no subtitle', async function (assert) {
      await render(hbs`<OSS::InfiniteSelect::Option @title={{this.title}} @onSelect={{this.onSelect}} />`);

      assert.infiniteSelectOption('.oss-infinite-select-option').doesNotHaveSubtitle();
    });
  });

  module('.isSelected()', () => {
    test('it passes when the option is selected', async function (assert) {
      await render(hbs`
        <OSS::InfiniteSelect::Option
          @title={{this.title}}
          @selected={{true}}
          @onSelect={{this.onSelect}}
        />
      `);

      assert.infiniteSelectOption('.oss-infinite-select-option').isSelected();
    });
  });

  module('.isNotSelected()', () => {
    test('it passes when the option is not selected', async function (assert) {
      await render(hbs`
        <OSS::InfiniteSelect::Option
          @title={{this.title}}
          @selected={{false}}
          @onSelect={{this.onSelect}}
        />
      `);

      assert.infiniteSelectOption('.oss-infinite-select-option').isNotSelected();
    });
  });

  module('.isDisabled()', () => {
    test('it passes when the option is disabled', async function (assert) {
      await render(hbs`
        <OSS::InfiniteSelect::Option
          @title={{this.title}}
          @disabled={{true}}
          @onSelect={{this.onSelect}}
        />
      `);

      assert.infiniteSelectOption('.oss-infinite-select-option').isDisabled();
    });
  });

  module('.isNotDisabled()', () => {
    test('it passes when the option is not disabled', async function (assert) {
      await render(hbs`
        <OSS::InfiniteSelect::Option
          @title={{this.title}}
          @disabled={{false}}
          @onSelect={{this.onSelect}}
        />
      `);

      assert.infiniteSelectOption('.oss-infinite-select-option').isNotDisabled();
    });
  });

  module('.hasSelectionType()', () => {
    test('it passes when selectionType is single', async function (assert) {
      await render(hbs`
        <OSS::InfiniteSelect::Option
          @title={{this.title}}
          @selectionType="single"
          @onSelect={{this.onSelect}}
        />
      `);

      assert.infiniteSelectOption('.oss-infinite-select-option').hasSelectionType('single');
    });

    test('it passes when selectionType is multiple', async function (assert) {
      await render(hbs`
        <OSS::InfiniteSelect::Option
          @title={{this.title}}
          @selectionType="multiple"
          @onSelect={{this.onSelect}}
        />
      `);

      assert.infiniteSelectOption('.oss-infinite-select-option').hasSelectionType('multiple');
    });
  });

  module('.hasPrefix()', () => {
    test('it passes when prefix avatar is present', async function (assert) {
      this.prefixAvatar = { initials: 'JD' };
      await render(hbs`
        <OSS::InfiniteSelect::Option
          @title={{this.title}}
          @prefixAvatar={{this.prefixAvatar}}
          @onSelect={{this.onSelect}}
        />
      `);

      assert.infiniteSelectOption('.oss-infinite-select-option').hasPrefix('avatar');
    });

    test('it passes when prefix badge is present', async function (assert) {
      this.prefixBadge = { icon: 'fa-star' };
      await render(hbs`
        <OSS::InfiniteSelect::Option
          @title={{this.title}}
          @prefixBadge={{this.prefixBadge}}
          @onSelect={{this.onSelect}}
        />
      `);

      assert.infiniteSelectOption('.oss-infinite-select-option').hasPrefix('badge');
    });

    test('it passes when prefix icon is present', async function (assert) {
      this.prefixIcon = { icon: 'fa-star' };
      await render(hbs`
        <OSS::InfiniteSelect::Option
          @title={{this.title}}
          @prefixIcon={{this.prefixIcon}}
          @onSelect={{this.onSelect}}
        />
      `);

      assert.infiniteSelectOption('.oss-infinite-select-option').hasPrefix('icon');
    });

    test('it passes when prefix country is present', async function (assert) {
      await render(hbs`
        <OSS::InfiniteSelect::Option
          @title={{this.title}}
          @prefixCountry="US"
          @onSelect={{this.onSelect}}
        />
      `);

      assert.infiniteSelectOption('.oss-infinite-select-option').hasPrefix('country');
    });
  });

  module('.doesNotHavePrefix()', () => {
    test('it passes when prefix avatar is not present', async function (assert) {
      await render(hbs`<OSS::InfiniteSelect::Option @title={{this.title}} @onSelect={{this.onSelect}} />`);

      assert.infiniteSelectOption('.oss-infinite-select-option').doesNotHavePrefix('avatar');
    });

    test('it passes when prefix badge is not present', async function (assert) {
      await render(hbs`<OSS::InfiniteSelect::Option @title={{this.title}} @onSelect={{this.onSelect}} />`);

      assert.infiniteSelectOption('.oss-infinite-select-option').doesNotHavePrefix('badge');
    });

    test('it passes when prefix icon is not present', async function (assert) {
      await render(hbs`<OSS::InfiniteSelect::Option @title={{this.title}} @onSelect={{this.onSelect}} />`);

      assert.infiniteSelectOption('.oss-infinite-select-option').doesNotHavePrefix('icon');
    });

    test('it passes when prefix country is not present', async function (assert) {
      await render(hbs`<OSS::InfiniteSelect::Option @title={{this.title}} @onSelect={{this.onSelect}} />`);

      assert.infiniteSelectOption('.oss-infinite-select-option').doesNotHavePrefix('country');
    });
  });

  module('.hasIcon()', () => {
    test('it passes when icon is present', async function (assert) {
      this.icon = { icon: 'fa-info-circle' };
      await render(hbs`
        <OSS::InfiniteSelect::Option
          @title={{this.title}}
          @icon={{this.icon}}
          @onSelect={{this.onSelect}}
        />
      `);

      assert.infiniteSelectOption('.oss-infinite-select-option').hasIcon();
    });
  });

  module('.doesNotHaveIcon()', () => {
    test('it passes when icon is not present', async function (assert) {
      await render(hbs`<OSS::InfiniteSelect::Option @title={{this.title}} @onSelect={{this.onSelect}} />`);

      assert.infiniteSelectOption('.oss-infinite-select-option').doesNotHaveIcon();
    });
  });

  module('.hasSuffix()', () => {
    test('it passes when suffix hint matches', async function (assert) {
      await render(hbs`
        <OSS::InfiniteSelect::Option
          @title={{this.title}}
          @suffixHint="+5"
          @onSelect={{this.onSelect}}
        />
      `);

      assert.infiniteSelectOption('.oss-infinite-select-option').hasSuffix('hint', '+5');
    });

    test('it passes when suffix tag is present', async function (assert) {
      this.suffixTag = { label: 'Premium' };
      await render(hbs`
        <OSS::InfiniteSelect::Option
          @title={{this.title}}
          @suffixTag={{this.suffixTag}}
          @onSelect={{this.onSelect}}
        />
      `);

      assert.infiniteSelectOption('.oss-infinite-select-option').hasSuffix('tag');
    });

    test('it passes when suffix icon is present', async function (assert) {
      this.suffixIcon = { icon: 'fa-chevron-right' };
      await render(hbs`
        <OSS::InfiniteSelect::Option
          @title={{this.title}}
          @suffixIcon={{this.suffixIcon}}
          @onSelect={{this.onSelect}}
        />
      `);

      assert.infiniteSelectOption('.oss-infinite-select-option').hasSuffix('icon');
    });
  });

  module('.doesNotHaveSuffix()', () => {
    test('it passes when suffix hint is not present', async function (assert) {
      await render(hbs`<OSS::InfiniteSelect::Option @title={{this.title}} @onSelect={{this.onSelect}} />`);

      assert.infiniteSelectOption('.oss-infinite-select-option').doesNotHaveSuffix('hint');
    });

    test('it passes when suffix tag is not present', async function (assert) {
      await render(hbs`<OSS::InfiniteSelect::Option @title={{this.title}} @onSelect={{this.onSelect}} />`);

      assert.infiniteSelectOption('.oss-infinite-select-option').doesNotHaveSuffix('tag');
    });

    test('it passes when suffix icon is not present', async function (assert) {
      await render(hbs`<OSS::InfiniteSelect::Option @title={{this.title}} @onSelect={{this.onSelect}} />`);

      assert.infiniteSelectOption('.oss-infinite-select-option').doesNotHaveSuffix('icon');
    });
  });

  module('chaining assertions', () => {
    test('it supports multiple assertions on the same element', async function (assert) {
      await render(hbs`
        <OSS::InfiniteSelect::Option
          @title="Complex Option"
          @subtitle="With subtitle"
          @selected={{true}}
          @selectionType="single"
          @onSelect={{this.onSelect}}
        />
      `);

      assert.infiniteSelectOption('.oss-infinite-select-option').exists();
      assert.infiniteSelectOption('.oss-infinite-select-option').hasTitle('Complex Option');
      assert.infiniteSelectOption('.oss-infinite-select-option').hasSubtitle('With subtitle');
      assert.infiniteSelectOption('.oss-infinite-select-option').isSelected();
      assert.infiniteSelectOption('.oss-infinite-select-option').hasSelectionType('single');
    });
  });
});
