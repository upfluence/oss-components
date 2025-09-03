import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, setupOnerror } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import sinon from 'sinon';
import { LOGO_COLORS, LOGO_ICONS } from 'dummy/utils/logo-config';

module('Integration | Component | o-s-s/smart/immersive/logo', function (hooks) {
  setupRenderingTest(hooks);
  hooks.beforeEach(function () {
    this.onEdit = sinon.stub();
  });

  test('it renders with icon mode', async function (assert) {
    this.icon = 'fa:star';
    this.editable = false;

    await render(hbs`<OSS::Smart::Immersive::Logo
      @icon={{this.icon}}
      @editable={{this.editable}}
    />`);

    assert.dom('.logo-icon').exists();
    assert.dom('.logo-icon').hasClass('logo-icon-color_star');
    assert.dom('i.fad.fa-fa').exists();
    assert.dom('.edit-overlay').doesNotExist();
  });

  test('it renders image mode when url is provided', async function (assert) {
    this.url = 'https://example.com/image.png';
    this.editable = false;

    await render(hbs`<OSS::Smart::Immersive::Logo
      @url={{this.url}}
      @editable={{this.editable}}
    />`);

    assert.dom('.campaign-image').exists();
    let style = this.element.querySelector('.campaign-image').style.backgroundImage;
    assert.ok(style.includes(this.url));
    assert.dom('.logo-icon').doesNotExist();
  });

  test('it renders edit overlay when editable', async function (assert) {
    this.icon = 'fa:pen';
    this.editable = true;
    this.onEdit = sinon.stub();

    await render(hbs`<OSS::Smart::Immersive::Logo
      @icon={{this.icon}}
      @editable={{this.editable}}
      @onEdit={{this.onEdit}}
    />`);

    assert.dom('.edit-overlay').exists();
  });

  test('onEdit is called when the component is clicked', async function (assert) {
    this.icon = 'fa:pen';
    this.editable = true;

    await render(hbs`<OSS::Smart::Immersive::Logo
      @icon={{this.icon}}
      @editable={{this.editable}}
      @onEdit={{this.onEdit}}
    />`);

    assert.dom('.edit-overlay').exists();
    await this.element.querySelector('.edit-overlay').click();
    assert.ok(this.onEdit.calledOnce);
  });

  LOGO_ICONS.forEach((iconName) => {
    const icon = `${iconName}:orange`;
    test(`renders icon mode correctly for icon "${icon}"`, async function (assert) {
      this.icon = icon;
      this.editable = false;

      await render(hbs`<OSS::Smart::Immersive::Logo
          @icon={{this.icon}}
          @editable={{this.editable}}
        />`);

      assert.dom(`.logo-icon i.fa-${iconName}`).exists();
    });
  });

  LOGO_COLORS.forEach((color) => {
    const icon = `rabbit:${color}`;
    test(`renders icon mode correctly for color "${color}"`, async function (assert) {
      this.icon = icon;
      this.editable = false;

      await render(hbs`<OSS::Smart::Immersive::Logo
        @icon={{this.icon}}
        @editable={{this.editable}}
      />`);

      assert.dom(`.logo-icon`).hasClass(`logo-icon-color_${color}`);
    });
  });

  test(`it renders the generating animation when loading is true`, async function (assert) {
    this.loading = true;

    await render(hbs`<OSS::Smart::Immersive::Logo
      @icon={{this.icon}}
      @editable={{this.editable}}
      @loading={{this.loading}}
    />`);

    assert.dom('.oss-smart__immersive-icon-container--generating').exists();
  });

  module('@hasError', () => {
    test('it applies the error class when hasError is true', async function (assert) {
      this.hasError = true;

      await render(hbs`<OSS::Smart::Immersive::Logo
        @icon={{this.icon}}
        @editable={{this.editable}}
        @hasError={{this.hasError}}
      />`);

      assert.dom('.oss-smart__immersive-icon-container--errored').exists();
    });

    test('it does not apply the error class when hasError is false', async function (assert) {
      this.hasError = false;

      await render(hbs`<OSS::Smart::Immersive::Logo
        @icon={{this.icon}}
        @editable={{this.editable}}
        @hasError={{this.hasError}}
      />`);

      assert.dom('.oss-smart__immersive-icon-container--errored').doesNotExist();
    });

    test('it does not apply the class by default', async function (assert) {
      await render(hbs`<OSS::Smart::Immersive::Logo
        @icon={{this.icon}}
        @editable={{this.editable}}
        @hasError={{this.hasError}}
      />`);

      assert.dom('.oss-smart__immersive-icon-container--errored').doesNotExist();
    });
  });

  test(`it renders the generated content animation when loading is false`, async function (assert) {
    this.loading = true;

    await render(hbs`<OSS::Smart::Immersive::Logo
      @icon={{this.icon}}
      @editable={{this.editable}}
      @loading={{this.loading}}
    />`);

    this.set('loading', false);
    assert.dom('.smart-rotating-gradient').exists();
  });

  test('it throws an error if icon format is invalid', async function (assert) {
    this.icon = 'invalidFormat';

    setupOnerror((error: Error) => {
      assert.equal(
        error.message,
        `Assertion Failed: Invalid icon format "${this.icon}". Expected format is "iconName:colorName".`
      );
    });

    render(hbs`<OSS::Smart::Immersive::Logo
      @icon={{this.icon}}
      @editable={{this.editable}}
    />`);
  });

  test('it uses the fallback SVG when both icon and url are missing', async function (assert) {
    this.editable = false;

    await render(hbs`<OSS::Smart::Immersive::Logo
      @editable={{this.editable}}
      @onEdit={{this.onEdit}}
    />`);

    assert.dom('.campaign-image').exists('Fallback image container is rendered');
    const style = this.element.querySelector('.campaign-image')?.getAttribute('style');
    assert.ok(style?.includes('background-image: url(/assets/images/picture-frame.svg)'));
  });
});
