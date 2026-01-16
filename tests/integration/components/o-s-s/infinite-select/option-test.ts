import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import sinon from 'sinon';
import { setupOnerror } from '@ember/test-helpers';

module('Integration | Component | o-s-s/infinite-select/option', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.title = 'Title';
    this.onSelect = sinon.stub();
  });

  test('it renders', async function (assert) {
    await render(hbs`<OSS::InfiniteSelect::Option @title={{this.title}} @onSelect={{this.onSelect}} />`);
    assert.dom('.oss-infinite-select-option').exists();
  });

  module('for @selectionType argument', () => {
    module('for "single" value', () => {
      test('it renders the correct class', async function (assert) {
        await render(
          hbs`<OSS::InfiniteSelect::Option @title={{this.title}} @selectionType="single" @onSelect={{this.onSelect}} />`
        );
        assert.dom('.oss-infinite-select-option--single').exists();
      });

      test('it sets selectionType to "single" by default', async function (assert) {
        await render(hbs`<OSS::InfiniteSelect::Option @title={{this.title}} @onSelect={{this.onSelect}} />`);
        assert.dom('.oss-infinite-select-option--single').exists();
      });
    });

    test('for "multiple" value, it renders  the correct class', async function (assert) {
      await render(
        hbs`<OSS::InfiniteSelect::Option @title={{this.title}} @selectionType="multiple" @onSelect={{this.onSelect}} />`
      );
      assert.dom('.oss-infinite-select-option--multiple').exists();
    });
  });

  module('for @selected argument', () => {
    test('it renders the correct class', async function (assert) {
      await render(
        hbs`<OSS::InfiniteSelect::Option @title={{this.title}} @selected={{true}} @onSelect={{this.onSelect}} />`
      );
      assert.dom('.oss-infinite-select-option--selected').exists();
    });

    module('for true value', () => {
      test('for single @selectionType argument, it renders the check icon', async function (assert) {
        await render(
          hbs`<OSS::InfiniteSelect::Option @title={{this.title}} @selected={{true}} @onSelect={{this.onSelect}} />`
        );
        assert.dom('i.fa-check').exists();
        assert.dom('.upf-checkbox').doesNotExist();
      });

      test('for multiple @selectionType argument, it renders the checked checkbox', async function (assert) {
        await render(
          hbs`<OSS::InfiniteSelect::Option @title={{this.title}} @selectionType="multiple" @selected={{true}} @onSelect={{this.onSelect}} />`
        );
        assert.dom('.upf-checkbox input').isChecked();
        assert.dom('i.fa-check').doesNotExist();
      });
    });

    module('for false value', () => {
      test('it renders it as default value', async function (assert) {
        await render(hbs`<OSS::InfiniteSelect::Option @title={{this.title}} @onSelect={{this.onSelect}} />`);
        assert.dom('i.fa-check').doesNotExist();
        assert.dom('.upf-checkbox').doesNotExist();
      });

      test("for single @selectionType argument, it doesn't renders the check icon", async function (assert) {
        await render(
          hbs`<OSS::InfiniteSelect::Option @title={{this.title}} @selected={{false}} @onSelect={{this.onSelect}} />`
        );
        assert.dom('i.fa-check').doesNotExist();
        assert.dom('.upf-checkbox').doesNotExist();
      });

      test('for multiple @selectionType argument, it renders the checkbox without check', async function (assert) {
        await render(
          hbs`<OSS::InfiniteSelect::Option @title={{this.title}} @selectionType="multiple" @selected={{false}} @onSelect={{this.onSelect}} />`
        );
        assert.dom('.upf-checkbox input').isNotChecked();
        assert.dom('i.fa-check').doesNotExist();
      });
    });
  });

  module('for @disabled argument', () => {
    test('it renders the correct class', async function (assert) {
      await render(
        hbs`<OSS::InfiniteSelect::Option @title={{this.title}} @disabled={{true}} @onSelect={{this.onSelect}} />`
      );
      assert.dom('.oss-infinite-select-option--disabled').exists();
    });

    module('for multiple @selectionType argument', () => {
      test('it renders false value as default value', async function (assert) {
        await render(
          hbs`<OSS::InfiniteSelect::Option @title={{this.title}} @selectionType="multiple" @onSelect={{this.onSelect}} />`
        );
        assert.dom('.upf-checkbox input').isNotDisabled();
      });

      test('for true value, it renders the disabled checkbox', async function (assert) {
        await render(
          hbs`<OSS::InfiniteSelect::Option @title={{this.title}} @selectionType="multiple" @disabled={{true}} @onSelect={{this.onSelect}} />`
        );
        assert.dom('.upf-checkbox input').isDisabled();
      });

      test('for false value, it renders it as default value', async function (assert) {
        await render(
          hbs`<OSS::InfiniteSelect::Option @title={{this.title}} @selectionType="multiple" @disabled={{false}} @onSelect={{this.onSelect}} />`
        );
        assert.dom('.upf-checkbox input').isNotDisabled();
      });
    });
  });

  module('@onSelect action', () => {
    test('it calls the onSelect action when clicked', async function (assert) {
      await render(hbs`<OSS::InfiniteSelect::Option @title={{this.title}} @onSelect={{this.onSelect}} />`);
      await click('.oss-infinite-select-option');
      assert.ok(this.onSelect.calledOnceWithExactly(true));
    });

    test('if @selected is true, it calls the onSelect action with correct value', async function (assert) {
      await render(
        hbs`<OSS::InfiniteSelect::Option @title={{this.title}} @selected={{true}} @onSelect={{this.onSelect}} />`
      );
      await click('.oss-infinite-select-option');
      assert.ok(this.onSelect.calledOnceWithExactly(false));
    });

    test("if @disabled is true, it doesn't call the onSelect action", async function (assert) {
      await render(
        hbs`<OSS::InfiniteSelect::Option @title={{this.title}} @disabled={{true}} @onSelect={{this.onSelect}} />`
      );
      await click('.oss-infinite-select-option');
      assert.ok(this.onSelect.notCalled);
    });

    module('for multiple @selectionType argument', () => {
      test('it calls the onSelect action when clicked', async function (assert) {
        await render(
          hbs`<OSS::InfiniteSelect::Option @title={{this.title}} @selectionType="multiple" @onSelect={{this.onSelect}} />`
        );
        await click('.upf-checkbox input');
        assert.ok(this.onSelect.calledOnceWithExactly(true));
      });

      test('if @selected is true, it calls the onSelect action with correct value', async function (assert) {
        await render(
          hbs`<OSS::InfiniteSelect::Option @title={{this.title}} @selectionType="multiple" @selected={{true}} @onSelect={{this.onSelect}} />`
        );
        await click('.upf-checkbox input');
        assert.ok(this.onSelect.calledOnceWithExactly(false));
      });
    });
  });

  module('for named blocks', () => {
    test('it renders the prefix named block', async function (assert) {
      await render(hbs`
        <OSS::InfiniteSelect::Option @title={{this.title}} @onSelect={{this.onSelect}}>
          <:prefix>
            <span class="prefix-content">Prefix</span>
          </:prefix>
        </OSS::InfiniteSelect::Option>
      `);
      assert.dom('.prefix-content').exists();
    });

    test('it renders the suffix named block', async function (assert) {
      await render(hbs`
        <OSS::InfiniteSelect::Option @title={{this.title}} @onSelect={{this.onSelect}}>
          <:suffix>
            <span class="suffix-content">Prefix</span>
          </:suffix>
        </OSS::InfiniteSelect::Option>
      `);
      assert.dom('.suffix-content').exists();
    });

    test('it renders both prefix argument and prefix block when provided', async function (assert) {
      this.prefixIcon = { icon: 'far fa-thumbs-up' };
      await render(hbs`
        <OSS::InfiniteSelect::Option @title={{this.title}} @onSelect={{this.onSelect}} @prefixIcon={{this.prefixIcon}}>
          <:prefix>
            <span class="prefix-block-content">Prefix Block</span>
          </:prefix>
        </OSS::InfiniteSelect::Option>
      `);
      assert.dom('.oss-infinite-select-option__prefix-icon').exists();
      assert.dom('.prefix-block-content').exists();
    });

    test('it renders both suffix argument and suffix block when provided', async function (assert) {
      this.suffixIcon = { icon: 'far fa-thumbs-up' };
      await render(hbs`
        <OSS::InfiniteSelect::Option @title={{this.title}} @onSelect={{this.onSelect}} @suffixIcon={{this.suffixIcon}}>
          <:suffix>
            <span class="suffix-block-content">Suffix Block</span>
          </:suffix>
        </OSS::InfiniteSelect::Option>
      `);
      assert.dom('.oss-infinite-select-option__suffix-icon').exists();
      assert.dom('.suffix-block-content').exists();
    });
  });

  module('for @prefixAvatar argument', () => {
    test('it renders the prefix avatar when provided', async function (assert) {
      this.prefixAvatar = { initials: 'JV' };
      await render(hbs`
        <OSS::InfiniteSelect::Option @title={{this.title}} @onSelect={{this.onSelect}} @prefixAvatar={{this.prefixAvatar}} />
      `);
      assert.dom('.oss-infinite-select-option__prefix-avatar').exists();
    });

    test('it does not render the prefix avatar when not provided', async function (assert) {
      await render(hbs`<OSS::InfiniteSelect::Option @title={{this.title}} @onSelect={{this.onSelect}} /> `);
      assert.dom('.oss-infinite-select-option__prefix-avatar').doesNotExist();
    });
  });

  module('for @prefixBadge argument', () => {
    test('it renders the prefix badge when provided', async function (assert) {
      this.prefixBadge = { icon: 'far fa-thumbs-up' };
      await render(hbs`
        <OSS::InfiniteSelect::Option @title={{this.title}} @onSelect={{this.onSelect}} @prefixBadge={{this.prefixBadge}} />
      `);
      assert.dom('.oss-infinite-select-option__prefix-badge').exists();
    });

    test('it does not render the prefix badge when not provided', async function (assert) {
      await render(hbs`<OSS::InfiniteSelect::Option @title={{this.title}} @onSelect={{this.onSelect}} /> `);
      assert.dom('.oss-infinite-select-option__prefix-badge').doesNotExist();
    });
  });

  module('for @prefixIcon argument', () => {
    test('it renders the prefix icon when provided', async function (assert) {
      this.prefixIcon = { icon: 'far fa-thumbs-up' };
      await render(hbs`
        <OSS::InfiniteSelect::Option @title={{this.title}} @onSelect={{this.onSelect}} @prefixIcon={{this.prefixIcon}} />
      `);
      assert.dom('.oss-infinite-select-option__prefix-icon').exists();
    });

    test('it renders the prefix icon tooltip when provided', async function (assert) {
      this.prefixIcon = { icon: 'far fa-thumbs-up', tooltip: { title: 'Tooltip' } };
      await render(hbs`
        <OSS::InfiniteSelect::Option @title={{this.title}} @onSelect={{this.onSelect}} @prefixIcon={{this.prefixIcon}} />
      `);
      await assert.tooltip('.oss-infinite-select-option__prefix-icon').hasTitle('Tooltip');
    });

    test('it does not render the prefix icon when not provided', async function (assert) {
      await render(hbs`<OSS::InfiniteSelect::Option @title={{this.title}} @onSelect={{this.onSelect}} /> `);
      assert.dom('.oss-infinite-select-option__prefix-icon').doesNotExist();
    });
  });

  module('for @prefixCountry argument', () => {
    test('it renders the prefix country when provided', async function (assert) {
      await render(hbs`
        <OSS::InfiniteSelect::Option @title={{this.title}} @onSelect={{this.onSelect}} @prefixCountry="FR" />
      `);
      assert.dom('.oss-infinite-select-option__prefix-country').exists();
    });

    test('it does not render the prefix country when not provided', async function (assert) {
      await render(hbs`<OSS::InfiniteSelect::Option @title={{this.title}} @onSelect={{this.onSelect}} /> `);
      assert.dom('.oss-infinite-select-option__prefix-country').doesNotExist();
    });
  });

  module('for multiple prefix elements', () => {
    test('it renders all prefix elements when provided', async function (assert) {
      this.prefixAvatar = { initials: 'JV' };
      this.prefixBadge = { icon: 'far fa-star' };
      this.prefixIcon = { icon: 'far fa-thumbs-up' };
      await render(hbs`
        <OSS::InfiniteSelect::Option
          @title={{this.title}}
          @onSelect={{this.onSelect}}
          @prefixAvatar={{this.prefixAvatar}}
          @prefixBadge={{this.prefixBadge}}
          @prefixIcon={{this.prefixIcon}}
          @prefixCountry="FR"
        />
      `);
      assert.dom('.oss-infinite-select-option__prefix-avatar').exists();
      assert.dom('.oss-infinite-select-option__prefix-badge').exists();
      assert.dom('.oss-infinite-select-option__prefix-icon').exists();
      assert.dom('.oss-infinite-select-option__prefix-country').exists();
    });

    test('it renders them in the correct order', async function (assert) {
      this.prefixAvatar = { initials: 'JV' };
      this.prefixBadge = { icon: 'far fa-star' };
      this.prefixIcon = { icon: 'far fa-thumbs-up' };
      await render(hbs`
        <OSS::InfiniteSelect::Option
          @title={{this.title}}
          @onSelect={{this.onSelect}}
          @prefixAvatar={{this.prefixAvatar}}
          @prefixBadge={{this.prefixBadge}}
          @prefixIcon={{this.prefixIcon}}
          @prefixCountry="FR"
        />
      `);

      const container = this.element.querySelector('.oss-infinite-select-option__container');
      const elements = Array.from(container!.children);

      const avatarIndex = elements.findIndex((el) =>
        (el as Element).classList.contains('oss-infinite-select-option__prefix-avatar')
      );
      const badgeIndex = elements.findIndex((el) =>
        (el as Element).classList.contains('oss-infinite-select-option__prefix-badge')
      );
      const iconIndex = elements.findIndex((el) =>
        (el as Element).classList.contains('oss-infinite-select-option__prefix-icon')
      );
      const countryIndex = elements.findIndex((el) =>
        (el as Element).classList.contains('oss-infinite-select-option__prefix-country')
      );
      const titleIndex = elements.findIndex((el) =>
        (el as Element).classList.contains('oss-infinite-select-option__title')
      );

      assert.ok(avatarIndex < badgeIndex, 'Avatar should come before Badge');
      assert.ok(badgeIndex < iconIndex, 'Badge should come before Icon');
      assert.ok(iconIndex < countryIndex, 'Icon should come before Country');
      assert.ok(countryIndex < titleIndex, 'Country should come before Title');
    });
  });

  module('for @title argument', () => {
    test('it renders correct class', async function (assert) {
      await render(hbs`
        <OSS::InfiniteSelect::Option @title={{this.title}} @onSelect={{this.onSelect}} @prefixCountry="FR" />
      `);
      assert.dom('.oss-infinite-select-option__title').exists();
    });

    test('it renders the correct value', async function (assert) {
      await render(hbs`<OSS::InfiniteSelect::Option @title={{this.title}} @onSelect={{this.onSelect}} /> `);
      assert.dom('.oss-infinite-select-option__title').hasText('Title');
    });
  });

  module('for @subtitle argument', () => {
    module('when provided', () => {
      test('it renders correct class', async function (assert) {
        await render(hbs`
        <OSS::InfiniteSelect::Option @title={{this.title}} @onSelect={{this.onSelect}} @subtitle="Subtitle" />
      `);
        assert.dom('.oss-infinite-select-option__subtitle').exists();
      });

      test('it renders correct value', async function (assert) {
        await render(hbs`
        <OSS::InfiniteSelect::Option @title={{this.title}} @onSelect={{this.onSelect}} @subtitle="Subtitle" />
      `);
        assert.dom('.oss-infinite-select-option__subtitle').hasText('Subtitle');
      });
    });

    test('it does not render the subtitle when not provided', async function (assert) {
      await render(hbs`<OSS::InfiniteSelect::Option @title={{this.title}} @onSelect={{this.onSelect}} /> `);
      assert.dom('.oss-infinite-select-option__subtitle').doesNotExist();
    });
  });

  module('for @icon argument', () => {
    test('it renders the icon when provided', async function (assert) {
      this.icon = { icon: 'far fa-thumbs-up' };
      await render(hbs`
        <OSS::InfiniteSelect::Option @title={{this.title}} @onSelect={{this.onSelect}} @icon={{this.icon}} />
      `);
      assert.dom('.oss-infinite-select-option__icon').exists();
    });

    test('it renders the icon tooltip when provided', async function (assert) {
      this.icon = { icon: 'far fa-thumbs-up', tooltip: { title: 'Tooltip' } };
      await render(hbs`
        <OSS::InfiniteSelect::Option @title={{this.title}} @onSelect={{this.onSelect}} @icon={{this.icon}} />
      `);
      await assert.tooltip('.oss-infinite-select-option__icon').hasTitle('Tooltip');
    });

    test('it does not render the icon when not provided', async function (assert) {
      await render(hbs`<OSS::InfiniteSelect::Option @title={{this.title}} @onSelect={{this.onSelect}} /> `);
      assert.dom('.oss-infinite-select-option__icon').doesNotExist();
    });
  });

  module('for @suffix-hint argument', () => {
    module('when provided', () => {
      test('it renders correct class', async function (assert) {
        await render(hbs`
        <OSS::InfiniteSelect::Option @title={{this.title}} @onSelect={{this.onSelect}} @suffixHint="Hint" />
      `);
        assert.dom('.oss-infinite-select-option__suffix-hint').exists();
      });

      test('it renders correct value', async function (assert) {
        await render(hbs`
        <OSS::InfiniteSelect::Option @title={{this.title}} @onSelect={{this.onSelect}} @suffixHint="Hint" />
      `);
        assert.dom('.oss-infinite-select-option__suffix-hint').hasText('Hint');
      });
    });

    test('it does not render the suffix hint when not provided', async function (assert) {
      await render(hbs`<OSS::InfiniteSelect::Option @title={{this.title}} @onSelect={{this.onSelect}} /> `);
      assert.dom('.oss-infinite-select-option__suffix-hint').doesNotExist();
    });
  });

  module('for @suffixTag argument', () => {
    test('it renders the suffix tag when provided', async function (assert) {
      this.suffixTag = { label: 'Tag' };
      await render(hbs`
        <OSS::InfiniteSelect::Option @title={{this.title}} @onSelect={{this.onSelect}} @suffixTag={{this.suffixTag}} />
      `);
      assert.dom('.oss-infinite-select-option__suffix-tag').exists();
    });

    test('it does not render the suffix tag when not provided', async function (assert) {
      await render(hbs`<OSS::InfiniteSelect::Option @title={{this.title}} @onSelect={{this.onSelect}} /> `);
      assert.dom('.oss-infinite-select-option__suffix-tag').doesNotExist();
    });
  });

  module('for @suffixIcon argument', () => {
    test('it renders the suffix icon when provided', async function (assert) {
      this.suffixIcon = { icon: 'far fa-thumbs-up' };
      await render(hbs`
        <OSS::InfiniteSelect::Option @title={{this.title}} @onSelect={{this.onSelect}} @suffixIcon={{this.suffixIcon}} />
      `);
      assert.dom('.oss-infinite-select-option__suffix-icon').exists();
    });

    test('it renders the suffix icon tooltip when provided', async function (assert) {
      this.suffixIcon = { icon: 'far fa-thumbs-up', tooltip: { title: 'Tooltip' } };
      await render(hbs`
        <OSS::InfiniteSelect::Option @title={{this.title}} @onSelect={{this.onSelect}} @suffixIcon={{this.suffixIcon}} />
      `);
      await assert.tooltip('.oss-infinite-select-option__suffix-icon').hasTitle('Tooltip');
    });

    test('it does not render the suffix icon when not provided', async function (assert) {
      await render(hbs`<OSS::InfiniteSelect::Option @title={{this.title}} @onSelect={{this.onSelect}} /> `);
      assert.dom('.oss-infinite-select-option__suffix-icon').doesNotExist();
    });
  });

  module('for multiple suffix elements', () => {
    test('it renders all suffix elements with check icon for single selection when selected', async function (assert) {
      this.suffixTag = { label: 'Tag' };
      this.suffixIcon = { icon: 'far fa-thumbs-up' };
      await render(hbs`
        <OSS::InfiniteSelect::Option
          @title={{this.title}}
          @onSelect={{this.onSelect}}
          @selected={{true}}
          @suffixHint="Hint Text"
          @suffixTag={{this.suffixTag}}
          @suffixIcon={{this.suffixIcon}}
        />
      `);
      assert.dom('.oss-infinite-select-option__suffix-hint').exists();
      assert.dom('.oss-infinite-select-option__suffix-tag').exists();
      assert.dom('.oss-infinite-select-option__suffix-icon').exists();
      assert.dom('i.fa-check').exists();
    });

    test('it renders them in the correct order', async function (assert) {
      this.suffixTag = { label: 'Tag' };
      this.suffixIcon = { icon: 'far fa-thumbs-up' };
      await render(hbs`
        <OSS::InfiniteSelect::Option
          @title={{this.title}}
          @onSelect={{this.onSelect}}
          @selected={{true}}
          @suffixHint="Hint Text"
          @suffixTag={{this.suffixTag}}
          @suffixIcon={{this.suffixIcon}}
        />
      `);

      const containers = this.element.querySelectorAll('.oss-infinite-select-option__container');
      const suffixContainer = containers[1]; // Second container holds suffix elements
      const elements = Array.from(suffixContainer.children);

      const hintIndex = elements.findIndex((el) =>
        (el as Element).classList.contains('oss-infinite-select-option__suffix-hint')
      );
      const tagIndex = elements.findIndex((el) =>
        (el as Element).classList.contains('oss-infinite-select-option__suffix-tag')
      );
      const iconIndex = elements.findIndex((el) =>
        (el as Element).classList.contains('oss-infinite-select-option__suffix-icon')
      );
      const checkIconIndex = elements.findIndex((el) => (el as Element).classList.contains('fa-check'));

      assert.ok(hintIndex < tagIndex, 'Hint should come before Tag');
      assert.ok(tagIndex < iconIndex, 'Tag should come before Icon');
      assert.ok(iconIndex < checkIconIndex, 'Suffix Icon should come before Check Icon');
    });
  });

  module('for errors management', () => {
    test('The component throws an error if the title parameter is not passed', async function (assert) {
      setupOnerror((err: any) => {
        assert.equal(err.message, 'Assertion Failed: [component][OSS::InfiniteSelect::Option] @title is required');
      });
      await render(hbs`<OSS::InfiniteSelect::Option />`);
    });

    test('The component throws an error if the onSelect function parameter is not passed', async function (assert) {
      setupOnerror((err: any) => {
        assert.equal(
          err.message,
          'Assertion Failed: [component][OSS::InfiniteSelect::Option] The parameter @onSelect of type function is mandatory'
        );
      });
      await render(hbs`<OSS::InfiniteSelect::Option @title={{this.title}} />`);
    });
  });
});
