import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, setupOnerror } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { SkinDefinition } from '@upfluence/oss-components/components/o-s-s/badge';
import { setupIntl } from 'ember-intl/test-support';
import {
  ANIMATION_DURATION,
  BACKGROUND_COLOR,
  PROGRESS_COLOR,
  SUCCESS_COLOR
} from '@upfluence/oss-components/components/o-s-s/completion-badge';
import { set } from '@ember/object';
import { CSSVariableToRGB } from 'dummy/tests/integration/utils';

module('Integration | Component | o-s-s/completion-badge', function (hooks) {
  setupRenderingTest(hooks);
  setupIntl(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<OSS::CompletionBadge @icon="fas fa-check" />`);
    assert.dom('.upf-completion-badge-wrapper').exists();
  });

  function getCSSVarValuesInRGB(): {
    backgroundColor: string;
    successColor: string;
    progressColor: string;
  } {
    return {
      successColor: CSSVariableToRGB(SUCCESS_COLOR),
      progressColor: CSSVariableToRGB(PROGRESS_COLOR),
      backgroundColor: CSSVariableToRGB(BACKGROUND_COLOR)
    };
  }

  module('progress', function (hooks) {
    hooks.beforeEach(function () {
      this.rgbValues = getCSSVarValuesInRGB();
    });

    test('it renders only the background border when @progress is undefined', async function (assert) {
      await render(hbs`<OSS::CompletionBadge @icon="fas fa-check" />`);

      assert.dom('.upf-completion-badge-ring').hasStyle({
        backgroundImage: `conic-gradient(${this.rgbValues.progressColor} 0deg, ${this.rgbValues.progressColor} 0deg, ${this.rgbValues.backgroundColor} 0deg, ${this.rgbValues.backgroundColor} 360deg)`
      });
    });

    test('it renders the progress ring with 0% progress', async function (assert) {
      await render(hbs`<OSS::CompletionBadge @progress="0" @icon="fas fa-check" />`);

      assert.dom('.upf-completion-badge-ring').hasStyle({
        backgroundImage: `conic-gradient(${this.rgbValues.progressColor} 0deg, ${this.rgbValues.progressColor} 0deg, ${this.rgbValues.backgroundColor} 0deg, ${this.rgbValues.backgroundColor} 360deg)`
      });
    });

    test('it renders the progress ring with 100% progress', async function (assert) {
      await render(hbs`<OSS::CompletionBadge @progress="100" @icon="fas fa-check" />`);

      await new Promise((resolve) => setTimeout(resolve, ANIMATION_DURATION * 2));
      assert.dom('.upf-completion-badge-ring').hasStyle({
        backgroundImage: `conic-gradient(${this.rgbValues.successColor} 0deg, ${this.rgbValues.successColor} 360deg, ${this.rgbValues.successColor} 360deg, ${this.rgbValues.successColor} 360deg)`
      });
    });

    test('it renders the progress ring with 25% progress', async function (assert) {
      await render(hbs`<OSS::CompletionBadge @progress="25" @icon="fas fa-check" />`);

      await new Promise((resolve) => setTimeout(resolve, ANIMATION_DURATION * 2));
      assert.dom('.upf-completion-badge-ring').hasStyle({
        backgroundImage: `conic-gradient(${this.rgbValues.progressColor} 0deg, ${this.rgbValues.progressColor} 90deg, ${this.rgbValues.backgroundColor} 90deg, ${this.rgbValues.backgroundColor} 360deg)`
      });
    });

    test('it renders the progress ring with 50% progress', async function (assert) {
      await render(hbs`<OSS::CompletionBadge @progress="50" @icon="fas fa-check" />`);

      await new Promise((resolve) => setTimeout(resolve, ANIMATION_DURATION * 2));
      assert.dom('.upf-completion-badge-ring').hasStyle({
        backgroundImage: `conic-gradient(${this.rgbValues.progressColor} 0deg, ${this.rgbValues.progressColor} 180deg, ${this.rgbValues.backgroundColor} 180deg, ${this.rgbValues.backgroundColor} 360deg)`
      });
    });

    test('it renders the progress ring with 75% progress', async function (assert) {
      await render(hbs`<OSS::CompletionBadge @progress="75" @icon="fas fa-check" />`);

      await new Promise((resolve) => setTimeout(resolve, ANIMATION_DURATION * 2));
      assert.dom('.upf-completion-badge-ring').hasStyle({
        backgroundImage: `conic-gradient(${this.rgbValues.progressColor} 0deg, ${this.rgbValues.progressColor} 270deg, ${this.rgbValues.backgroundColor} 270deg, ${this.rgbValues.backgroundColor} 360deg)`
      });
    });

    test('passing a @progress value above 100 caps the value to 100', async function (assert) {
      await render(hbs`<OSS::CompletionBadge @progress="150" @icon="fas fa-check" />`);

      await new Promise((resolve) => setTimeout(resolve, ANIMATION_DURATION * 2));
      assert.dom('.upf-completion-badge-ring').hasStyle({
        backgroundImage: `conic-gradient(${this.rgbValues.successColor} 0deg, ${this.rgbValues.successColor} 360deg, ${this.rgbValues.successColor} 360deg, ${this.rgbValues.successColor} 360deg)`
      });
    });

    test('it updates the progress ring when @progress changes', async function (assert) {
      this.progress = 0;
      await render(hbs`<OSS::CompletionBadge @progress={{this.progress}} @icon="fas fa-check" />`);

      await new Promise((resolve) => setTimeout(resolve, ANIMATION_DURATION * 2));
      assert.dom('.upf-completion-badge-ring').hasStyle({
        backgroundImage: `conic-gradient(${this.rgbValues.progressColor} 0deg, ${this.rgbValues.progressColor} 0deg, ${this.rgbValues.backgroundColor} 0deg, ${this.rgbValues.backgroundColor} 360deg)`
      });

      set(this, 'progress', 50);
      await new Promise((resolve) => setTimeout(resolve, ANIMATION_DURATION * 2));
      assert.dom('.upf-completion-badge-ring').hasStyle({
        backgroundImage: `conic-gradient(${this.rgbValues.progressColor} 0deg, ${this.rgbValues.progressColor} 180deg, ${this.rgbValues.backgroundColor} 180deg, ${this.rgbValues.backgroundColor} 360deg)`
      });
    });
  });

  module('sizes', function () {
    test('it sets the right class when using a supported size', async function (assert: Assert) {
      await render(hbs`<OSS::CompletionBadge @size="lg" @text="2x" />`);

      assert.dom('.upf-badge').exists();
      assert.dom('.upf-badge').hasClass('upf-badge--size-lg');
    });

    test('it defaults to md size if none is passed', async function (assert: Assert) {
      await render(hbs`<OSS::CompletionBadge @text="2x" />`);

      assert.dom('.upf-badge').exists();
      assert.dom('.upf-badge').hasClass('upf-badge--size-md');
    });
  });

  module('skins', function () {
    Object.keys(SkinDefinition).forEach((skin) => {
      test(`it sets the right class when using a supported skin: ${skin}`, async function (assert: Assert) {
        this.skin = skin;
        await render(hbs`<OSS::CompletionBadge @skin={{this.skin}} @text="2x" />`);

        assert.dom('.upf-badge').exists();
        assert
          .dom('.upf-badge')
          .hasClass(`upf-badge--${skin.startsWith('xtd') ? skin.replace('xtd', 'extended') : skin}`);
      });
    });

    test('it adds the plain class when passed', async function (assert: Assert) {
      await render(hbs`<OSS::CompletionBadge @skin="primary" @plain={{true}} @text="2x" />`);

      assert.dom('.upf-badge').hasClass('upf-badge--plain');
    });
  });

  module('content args', function () {
    test('it displays the right icon when using the @icon arg', async function (assert: Assert) {
      await render(hbs`<OSS::CompletionBadge @icon="fas fa-users" />`);

      assert.dom('.upf-badge').exists();
      assert.dom('.upf-badge i').hasAttribute('class', 'fas fa-users');
    });

    test('it displays the right text when using the @text arg', async function (assert: Assert) {
      await render(hbs`<OSS::CompletionBadge @text="2x" />`);

      assert.dom('.upf-badge').exists();
      assert.dom('.upf-badge .upf-badge__text').exists();
      assert.dom('.upf-badge .upf-badge__text').hasText('2x');
    });

    test('it displays the right image when using the @image arg', async function (assert: Assert) {
      await render(hbs`<OSS::CompletionBadge @image="http://foo.co/bar.png" />`);

      assert.dom('.upf-badge').exists();
      assert.dom('.upf-badge img').exists();
      assert.dom('.upf-badge img').hasAttribute('src', 'http://foo.co/bar.png');
    });
  });

  module('Error management', function () {
    test('it throws an error when an unsupported skin is passed', async function (assert: Assert) {
      setupOnerror((err: Error) => {
        assert.equal(
          err.message,
          'Assertion Failed: [component][OSS::CompletionBadge] Unknown skin. Available skins are: primary, success, alert, error, xtd-cyan, xtd-orange, xtd-yellow, xtd-lime, xtd-blue, xtd-violet, xtd-smart'
        );
      });

      await render(hbs`<OSS::CompletionBadge @skin="foo" @text="2x" />`);
    });

    test('it throws an error when an unsupported size is passed', async function (assert: Assert) {
      setupOnerror((err: Error) => {
        assert.equal(
          err.message,
          'Assertion Failed: [component][OSS::CompletionBadge] Unknown size. Available sizes are: sm, md, lg'
        );
      });

      await render(hbs`<OSS::CompletionBadge @size="foo" @text="2x" />`);
    });

    test('it throws an error if no argument is passed', async function (assert: Assert) {
      setupOnerror((err: Error) => {
        assert.equal(
          err.message,
          'Assertion Failed: [component][OSS::CompletionBadge] One of @icon, @image or @text arguments is mandatory. You passed 0 arguments'
        );
      });

      await render(hbs`<OSS::CompletionBadge />`);
    });

    test('it throws an error if more than one content argument is passed', async function (assert: Assert) {
      setupOnerror((err: Error) => {
        assert.equal(
          err.message,
          'Assertion Failed: [component][OSS::CompletionBadge] One of @icon, @image or @text arguments is mandatory. You passed 2 arguments'
        );
      });

      await render(hbs`<OSS::CompletionBadge @icon="fas fa-users" @text="2x" />`);
    });
  });
});
