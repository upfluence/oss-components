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
    await render(hbs`{{! @glint-nocheck: not typesafe yet }}
<OSS::TogglableSection @title={{this.title}} @subtitle={{this.subtitle}}
                                                 @iconUrl={{this.iconUrl}} @toggled={{this.toggled}}
                                                 @onChange={{this.onChange}} />`);
    assert.dom('.togglable-section').exists();
  });

  test('It throws an error if the @title param is not passed', async function (assert) {
    setupOnerror((err: any) => {
      assert.equal(err.message, 'Assertion Failed: [OSS::TogglableSection] The @title parameter is mandatory');
    });
    await render(hbs`{{! @glint-nocheck: not typesafe yet }}
<OSS::TogglableSection @subtitle={{this.subtitle}}
                                                 @iconUrl={{this.iconUrl}} @toggled={{this.toggled}}
                                                 @onChange={{this.onChange}} />`);
  });

  test('It throws an error if the @toggled param is not passed', async function (assert) {
    setupOnerror((err: any) => {
      assert.equal(err.message, 'Assertion Failed: [OSS::TogglableSection] The @toggled parameter is mandatory');
    });
    await render(hbs`{{! @glint-nocheck: not typesafe yet }}
<OSS::TogglableSection @title={{this.title}} @subtitle={{this.subtitle}}
                                                 @iconUrl={{this.iconUrl}}
                                                 @onChange={{this.onChange}} />`);
  });

  test('It throws an error if the @onChange function is not passed', async function (assert) {
    setupOnerror((err: any) => {
      assert.equal(err.message, 'Assertion Failed: [OSS::TogglableSection] The @onChange function is mandatory');
    });
    await render(hbs`{{! @glint-nocheck: not typesafe yet }}
<OSS::TogglableSection @title={{this.title}} @subtitle={{this.subtitle}}
                                                 @iconUrl={{this.iconUrl}} @toggled={{this.toggled}} />`);
  });

  test('It displays no image if @iconUrl param is not passed', async function (assert) {
    await render(hbs`{{! @glint-nocheck: not typesafe yet }}
<OSS::TogglableSection @title={{this.title}} @subtitle={{this.subtitle}}
                                                 @toggled={{this.toggled}}
                                                 @onChange={{this.onChange}} />`);
    assert.dom('img').doesNotExist();
  });

  test('It displays a font-awesome icon if the @icon parameter is filled in', async function (assert) {
    await render(
      hbs`{{! @glint-nocheck }}<OSS::TogglableSection @title="title" @icon="far fa-hourglass" @onChange={{this.onChange}} @toggled={{false}} />`
    );
    assert.dom('.far.fa-hourglass').exists();
  });

  module('Toggle behavior', () => {
    async function renderComponent() {
      await render(hbs`{{! @glint-nocheck: not typesafe yet }}
<OSS::TogglableSection @title={{this.title}} @subtitle={{this.subtitle}}
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
      assert.true(
        this.onChange.calledOnceWithExactly(
          true,
          sinon.match((propablyEvent: unknown) => {
            return propablyEvent instanceof Event;
          })
        )
      );
    });
  });
});
