import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupIntl } from 'ember-intl/test-support';

module('Integration | Component | o-s-s/information-section', function (hooks) {
  setupRenderingTest(hooks);
  setupIntl(hooks);
  hooks.beforeEach(function () {
    this.title = 'Information Section Title';
    this.subtitle = 'Information Section subtitle';
    this.namedBlockContent = 'Information Section Custom Content';
    this.icon = 'fa-pen';
    this.imageUrl = '/assets/images/upfluence-white-logo.svg';
    this.actionButton = {
      label: 'Test Button',
      icon: 'fa-pen'
    };
  });

  test('it renders', async function (assert) {
    await render(hbs`<OSS::InformationSection @title={{this.title}}/>`);
    assert.dom("[data-control-name='information-section']").exists();
  });

  test('it renders the @title arg', async function (assert) {
    await render(hbs`<OSS::InformationSection @title={{this.title}}/>`);
    assert.dom("[data-control-name='information-section-title']").hasText(this.title);
  });

  test('it renders the @subtitle arg', async function (assert) {
    await render(hbs`<OSS::InformationSection @title={{this.title}} @subtitle={{this.subtitle}}/>`);
    assert.dom("[data-control-name='information-section-subtitle']").hasText(this.subtitle);
  });

  module('plain arg', function () {
    test('it renders the header with a grey background when @plain is false', async function (assert) {
      await render(hbs`<OSS::InformationSection @title={{this.title}} @plain={{false}}/>`);
      assert.dom("[data-control-name='information-section-header']").hasClass('background-color-gray-50');
    });

    test('it renders the header with a white background when @plain is true', async function (assert) {
      await render(hbs`<OSS::InformationSection @title={{this.title}} @plain={{true}}/>`);
      assert.dom("[data-control-name='information-section-header']").hasClass('background-color-white');
    });

    test('it renders the header with a white background when @plain is unspecified', async function (assert) {
      await render(hbs`<OSS::InformationSection @title={{this.title}} />`);
      assert.dom("[data-control-name='information-section-header']").hasClass('background-color-white');
    });
  });

  module('badge icons', function () {
    test('it renders the icon with @badgeIcon arg', async function (assert) {
      await render(hbs`<OSS::InformationSection @badgeIcon={{this.icon}} @title={{this.title}}/>`);
      assert.dom('.upf-badge i').hasClass(this.icon);
    });

    test('it renders the icon with an svg icon as @badgeIcon arg', async function (assert) {
      await render(hbs`<OSS::InformationSection @imageUrl={{this.imageUrl}} @title={{this.title}}/>`);
      assert.dom('.upf-badge img').hasAttribute('src', this.imageUrl);
    });

    test('it renders the badge with badge named block', async function (assert) {
      await render(hbs`<OSS::InformationSection @title={{this.title}}>
                          <:badge>
                            <OSS::Badge
                              data-control-name="test-badge"
                              @icon={{this.icon}}
                            />
                          </:badge>
                        </OSS::InformationSection>`);
      assert.dom("[data-control-name='test-badge']").exists();
    });
  });

  module('actions named block', function () {
    test('it renders', async function (assert) {
      await render(hbs`<OSS::InformationSection @title={{this.title}}>
                          <:action>
                            <div data-control-name="actions-named-block">
                              <OSS::Button
                                data-control-name="test-button"
                                @label={{this.actionButton.label}}
                                @icon={{this.actionButton.icon}}
                              />
                            </div>
                          </:action>
                        </OSS::InformationSection>`);
      assert.dom("[data-control-name='actions-named-block']").exists();
    });
  });

  module('content named block', function () {
    test('it renders', async function (assert) {
      await render(hbs`<OSS::InformationSection @title={{this.title}}>
                          <:content>
                            <p data-control-name='content-named-block'>{{this.namedBlockContent}}</p>
                          </:content>
                        </OSS::InformationSection>`);
      assert.dom("[data-control-name='content-named-block']").hasText(this.namedBlockContent);
    });
  });
});
