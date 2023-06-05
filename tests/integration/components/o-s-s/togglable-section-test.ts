import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render, setupOnerror } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { set } from '@ember/object';
import sinon from 'sinon';

module('Integration | Component | o-s-s/togglable-section', function(hooks) {
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
    assert.dom('.upf-banner').exists();
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

  test('When the toggle is enabled, the named-block contents are displayed', async function (assert) {
    await render(hbs`{{! @glint-nocheck: not typesafe yet }}
<OSS::TogglableSection @title={{this.title}} @subtitle={{this.subtitle}}
                                                 @iconUrl={{this.iconUrl}} @toggled={{this.toggled}}
                                                 @onChange={{this.onChange}}>
                       <:contents>
                         <div>contents named block</div>
                       </:contents>
                     </OSS::TogglableSection>`);
    assert.dom('.upf-banner').doesNotContainText('contents named block');
    await click('.upf-toggle');
    assert.dom('.upf-banner').hasTextContaining('contents named block');
  });

  test('When the toggle is disabled, the named-block contents are displayed', async function (assert) {
    this.toggled = true;
    await render(hbs`{{! @glint-nocheck: not typesafe yet }}
<OSS::TogglableSection @title={{this.title}} @subtitle={{this.subtitle}}
                                                 @iconUrl={{this.iconUrl}} @toggled={{this.toggled}}
                                                 @onChange={{this.onChange}}>
                       <:contents>
                         <div>contents named block</div>
                       </:contents>
                     </OSS::TogglableSection>`);
    assert.dom('.upf-banner').hasTextContaining('contents named block');
    await click('.upf-toggle');
    assert.dom('.upf-banner').doesNotContainText('contents named block');
  });

  test('When the toggle is click, the @onChange method is called', async function (assert) {
    this.onChange = sinon.stub();
    await render(hbs`{{! @glint-nocheck: not typesafe yet }}
<OSS::TogglableSection @title={{this.title}} @subtitle={{this.subtitle}}
                                                 @iconUrl={{this.iconUrl}} @toggled={{this.toggled}}
                                                 @onChange={{this.onChange}}>
                       <:contents>
                         <div>contents named block</div>
                       </:contents>
                     </OSS::TogglableSection>`);
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
