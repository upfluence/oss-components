import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render, setupOnerror } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { set } from '@ember/object';
import sinon from 'sinon';

module('Integration | Component | o-s-s/togglable-section', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.iconUrl = 'https://fr.wikipedia.org/wiki/Fichier:How_to_use_icon.svg';
    this.title = 'Fake title';
    this.subtitle = 'Some subtitle contents. Some subtitle contents. Some subtitle contents.';
    this.toggled = false;
    this.onChange = (value: boolean) => {
      set(this, 'toggled', value);
    };
  });

  test('it renders', async function (assert) {
    await render(hbs`<OSS::TogglableSection @title={{this.title}} @subtitle={{this.subtitle}}
                                            @iconUrl={{this.iconUrl}} @toggled={{this.toggled}}
                                            @onChange={{this.onChange}} />`);
    assert.dom('.togglable-section').exists();
  });

  test('It throws an error if the @title param is not passed', async function (assert) {
    setupOnerror((err: any) => {
      assert.equal(err.message, 'Assertion Failed: [OSS::TogglableSection] The @title parameter is mandatory');
    });
    await render(hbs`<OSS::TogglableSection @subtitle={{this.subtitle}}
                                                 @iconUrl={{this.iconUrl}} @toggled={{this.toggled}}
                                                 @onChange={{this.onChange}} />`);
  });

  test('It throws an error if the @toggled param is not passed', async function (assert) {
    setupOnerror((err: any) => {
      assert.equal(err.message, 'Assertion Failed: [OSS::TogglableSection] The @toggled parameter is mandatory');
    });
    await render(hbs`<OSS::TogglableSection @title={{this.title}} @subtitle={{this.subtitle}}
                                                 @iconUrl={{this.iconUrl}}
                                                 @onChange={{this.onChange}} />`);
  });

  test('It throws an error if the @onChange function is not passed', async function (assert) {
    setupOnerror((err: any) => {
      assert.equal(err.message, 'Assertion Failed: [OSS::TogglableSection] The @onChange function is mandatory');
    });
    await render(hbs`<OSS::TogglableSection @title={{this.title}} @subtitle={{this.subtitle}}
                                                 @iconUrl={{this.iconUrl}} @toggled={{this.toggled}} />`);
  });

  test('It displays no image if @iconUrl param is not passed', async function (assert) {
    await render(hbs`<OSS::TogglableSection @title={{this.title}} @subtitle={{this.subtitle}}
                                                 @toggled={{this.toggled}}
                                                 @onChange={{this.onChange}} />`);
    assert.dom('img').doesNotExist();
  });

  test('It displays a font-awesome icon if the @icon parameter is filled in', async function (assert) {
    await render(
      hbs`<OSS::TogglableSection @title="title" @icon="far fa-hourglass" @onChange={{this.onChange}} @toggled={{false}} />`
    );
    assert.dom('.far.fa-hourglass').exists();
  });

  test('It displays a default badge with an icon if @badgeIcon is passed', async function (assert) {
    await render(
      hbs`<OSS::TogglableSection @title="title" @badgeIcon="far fa-hourglass" @onChange={{this.onChange}} @toggled={{false}} />`
    );
    assert.dom('.upf-badge .far.fa-hourglass').exists();
  });

  module('Toggle behavior', () => {
    async function renderComponent() {
      await render(hbs`<OSS::TogglableSection @title={{this.title}} @subtitle={{this.subtitle}}
                                              @iconUrl={{this.iconUrl}} @toggled={{this.toggled}}
                                              @onChange={{this.onChange}}>
                        <:contents>
                          <div>contents named block</div>
                        </:contents>
                      </OSS::TogglableSection>`);
    }

    test('When the toggle is enabled, the named-block contents are displayed', async function (assert) {
      await renderComponent();
      assert.dom('.togglable-section').doesNotContainText('contents named block');
      await click('.upf-toggle');
      assert.dom('.togglable-section').hasTextContaining('contents named block');
    });

    test('When the toggle is enabled, the header part turns grey', async function (assert) {
      await renderComponent();
      assert.dom('.inner-header').doesNotHaveClass('background-color-gray-50');
      await click('.upf-toggle');
      assert.dom('.inner-header').hasClass('background-color-gray-50');
    });

    test('When the toggle is disabled, the named-block contents are displayed', async function (assert) {
      this.toggled = true;
      await renderComponent();
      assert.dom('.togglable-section').hasTextContaining('contents named block');
      await click('.upf-toggle');
      assert.dom('.togglable-section').doesNotContainText('contents named block');
    });

    test('When the toggle is clicked, the @onChange method is called', async function (assert) {
      this.onChange = sinon.stub();
      await renderComponent();
      await click('.upf-toggle');
      assert.true(this.onChange.calledOnceWithExactly(true));
    });
  });

  module('Size behavior', () => {
    test('If the @size param is not passed, the default size is md', async function (assert) {
      await render(hbs`
        <OSS::TogglableSection @title={{this.title}} @toggled={{this.toggled}} @onChange={{this.onChange}}>
          <:contents>
            <div>contents named block</div>
          </:contents>
        </OSS::TogglableSection>`);
      assert.dom('.togglable-section .header-block').hasClass('padding-px-18');
      await click('.upf-toggle');
      assert.dom('.togglable-section .content-block').hasClass('padding-px-18');
    });

    test('If the @size param is set to sm, the size is sm', async function (assert) {
      await render(hbs`
        <OSS::TogglableSection @title={{this.title}} @toggled={{this.toggled}} @onChange={{this.onChange}} @size="sm">
          <:contents>
            <div>contents named block</div>
          </:contents>
        </OSS::TogglableSection>`);
      assert.dom('.togglable-section .header-block').hasClass('padding-px-12');
      await click('.upf-toggle');
      assert.dom('.togglable-section .content-block').hasClass('padding-px-12');
    });

    test('If the @size param is set to md, the size is md', async function (assert) {
      await render(hbs`
        <OSS::TogglableSection @title={{this.title}} @toggled={{this.toggled}} @onChange={{this.onChange}} @size="md">
          <:contents>
            <div>contents named block</div>
          </:contents>
        </OSS::TogglableSection>`);
      assert.dom('.togglable-section .header-block').hasClass('padding-px-18');
      await click('.upf-toggle');
      assert.dom('.togglable-section .content-block').hasClass('padding-px-18');
    });
  });

  module('@Disabled behaviour', () => {
    test('If @disabled is truthy, the toggle is disabled', async function (assert) {
      await render(
        hbs`<OSS::TogglableSection @title={{this.title}} @toggled={{this.toggled}} @onChange={{this.onChange}} @disabled={{true}} />`
      );
      assert.dom('.upf-toggle').hasClass('upf-toggle--disabled');
    });

    test('If @disabled is falsy, the toggle is enabled', async function (assert) {
      await render(
        hbs`<OSS::TogglableSection @title={{this.title}} @toggled={{this.toggled}} @onChange={{this.onChange}} @disabled={{false}} />`
      );
      assert.dom('.upf-toggle').doesNotHaveClass('upf-toggle--disabled');
    });

    test('If @disabled is truthy, the toggle can still be active', async function (assert) {
      this.toggled = true;
      await render(
        hbs`<OSS::TogglableSection @title={{this.title}} @toggled={{this.toggled}} @onChange={{this.onChange}} @disabled={{true}} />`
      );
      assert.dom('.upf-toggle').hasClass('upf-toggle--disabled');
      assert.dom('.upf-toggle').hasClass('upf-toggle--toggled');
    });
  });

  test('When `header-actions` named block is passed, the content is rendered in the header', async function (assert) {
    await render(
      hbs`<OSS::TogglableSection @title={{this.title}} @toggled={{this.toggled}} @onChange={{this.onChange}} @disabled={{true}} >
            <:header-actions>
              <div data-control-name="action-named-block-content" />
            </:header-actions>
          </OSS::TogglableSection>`
    );
    assert.dom('.togglable-section .header-block [data-control-name="action-named-block-content"]').exists();
  });
});
