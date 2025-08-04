import { hbs } from 'ember-cli-htmlbars';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';

module('Integration | Component | o-s-s/tip', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.label = 'Label';
    this.active = false;
    this.icon = 'fa-handshake';
    this.important = false;
    this.size = 'sm';
  });

  test('it renders', async function (assert) {
    await render(hbs`<OSS::Tip @label={{this.label}} @active={{this.active}} />`);
    assert.dom('.oss-tip').exists();
  });

  module('Basic rendering', function () {
    test('it renders with default args', async function (assert) {
      await render(hbs`<OSS::Tip @label={{this.label}} @active={{this.active}} />`);
      assert.dom('.oss-tip').exists();
      assert.dom('.fa-lightbulb-on').exists();
      assert.dom('.font-size-sm').hasText('Label');
      assert.dom('.font-weight-semibold').doesNotExist();
    });

    test('it yields content to custom-icon', async function (assert) {
      await render(hbs`
        <OSS::Tip @label={{this.label}} @active={{this.active}}>
          <:custom-icon><div class="fflag fflag-FR ff-sm ff-round" /></:custom-icon>
        </OSS::Tip>
      `);
      assert.dom('.fflag-FR').exists();
    });
  });

  module('Active state', function () {
    test('it does not add the active class when @active is false', async function (assert) {
      await render(hbs`<OSS::Tip @label={{this.label}} @active={{false}} />`);
      assert.dom('.oss-tip').doesNotHaveClass('oss-tip--active');
    });

    test('it adds the active class when @active is true', async function (assert) {
      await render(hbs`<OSS::Tip @label={{this.label}} @active={{true}} />`);
      assert.dom('.oss-tip').hasClass('oss-tip--active');
    });
  });

  module('Important label', function () {
    test('it adds bold style when @important is true', async function (assert) {
      await render(hbs`<OSS::Tip @label={{this.label}} @active={{this.active}} @important={{true}} />`);
      assert.dom('.font-weight-semibold').exists();
    });

    test('it does not add bold style when @important is false', async function (assert) {
      await render(hbs`<OSS::Tip @label={{this.label}} @active={{this.active}} @important={{false}} />`);
      assert.dom('.font-weight-semibold').doesNotExist();
    });
  });

  module('Size variants', function () {
    test('it uses sm as default size', async function (assert) {
      await render(hbs`<OSS::Tip @label={{this.label}} @active={{true}} />`);
      assert.dom('.font-size-sm').exists();
    });

    test('it renders with size=md', async function (assert) {
      this.set('size', 'md');
      await render(hbs`<OSS::Tip @label={{this.label}} @active={{true}} @size={{this.size}} />`);
      assert.dom('.font-size-md').exists();
    });
  });

  module('Icon rendering', function () {
    test('it renders icon when @icon is provided', async function (assert) {
      await render(hbs`<OSS::Tip @label={{this.label}} @active={{this.active}} @icon={{this.icon}} />`);
      assert.dom('.far.fa-handshake.font-color-gray-400').exists();
    });

    test('it does not render icon when @icon is not provided', async function (assert) {
      await render(hbs`<OSS::Tip @label={{this.label}} @active={{this.active}} />`);
      assert.dom('.font-color-gray-400').doesNotExist();
    });
  });
});
