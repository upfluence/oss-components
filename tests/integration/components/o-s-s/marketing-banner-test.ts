import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, setupOnerror } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupIntl } from 'ember-intl/test-support';

import { CSSVariableToRGB } from 'dummy/tests/integration/utils';

const ILLUSTRATION_SRC = '/@upfluence/oss-components/assets/images/upfluence-blue-logo.svg';

module('Integration | Component | o-s-s/marketing-banner', function (hooks) {
  setupRenderingTest(hooks);
  setupIntl(hooks);

  hooks.beforeEach(function () {
    this.title = 'Title';
    this.subtitle = 'Subtitle';
    this.illustrationSrc = ILLUSTRATION_SRC;
  });

  test('it renders', async function (assert) {
    await render(hbs`<OSS::MarketingBanner @title={{this.title}} @subtitle={{this.subtitle}} />`);
    assert.dom('.upf-marketing-banner').exists();
    assert.dom('.upf-marketing-banner__container').exists();
    assert.dom('.upf-marketing-banner__content').exists();
  });

  test("it doesn't renders unnecessary named blocks", async function (assert) {
    await render(hbs`<OSS::MarketingBanner @title={{this.title}} @subtitle={{this.subtitle}} />`);
    assert.dom('.upf-marketing-banner__illustration').doesNotExist();
    assert.dom('.upf-marketing-banner__actions').doesNotExist();
  });

  test('for @title, it renders the correct value', async function (assert) {
    await render(hbs`<OSS::MarketingBanner @title={{this.title}} @subtitle={{this.subtitle}} />`);
    assert.dom('.upf-marketing-banner__title').hasText('Title');
  });

  test('for @subtitle, it renders the correct value', async function (assert) {
    await render(hbs`<OSS::MarketingBanner @title={{this.title}} @subtitle={{this.subtitle}} />`);
    assert.dom('.upf-marketing-banner__subtitle').hasText('Subtitle');
  });

  test('it renders all background effect elements', async function (assert) {
    await render(hbs`<OSS::MarketingBanner @title={{this.title}} @subtitle={{this.subtitle}} />`);
    assert.dom('.upf-marketing-banner__background--primary').exists();
    assert.dom('.upf-marketing-banner__background--secondary').exists();
    assert.dom('.upf-marketing-banner__background--tertiary').exists();
  });

  module('for @options', () => {
    module('for @primaryGradiantColor', () => {
      test('it renders the default colors', async function (assert) {
        await render(hbs`<OSS::MarketingBanner @title={{this.title}} @subtitle={{this.subtitle}} />`);
        assert.dom('.upf-marketing-banner__background--primary').exists();
        assert
          .dom('.upf-marketing-banner__background--primary')
          .hasStyle({ 'background-color': CSSVariableToRGB('--color-violet-100') });
      });

      test('it renders the custom colors', async function (assert) {
        this.options = {
          primaryGradiantColor: '--color-cyan-100'
        };
        await render(
          hbs`<OSS::MarketingBanner @title={{this.title}} @subtitle={{this.subtitle}} @options={{this.options}} />`
        );

        assert.dom('.upf-marketing-banner__background--primary').exists();
        assert
          .dom('.upf-marketing-banner__background--primary')
          .hasStyle({ 'background-color': CSSVariableToRGB(this.options.primaryGradiantColor) });
      });
    });

    module('for @secondaryGradiantColor', () => {
      test('it renders the default colors', async function (assert) {
        await render(hbs`<OSS::MarketingBanner @title={{this.title}} @subtitle={{this.subtitle}} />`);
        assert.dom('.upf-marketing-banner__background--secondary').exists();
        assert
          .dom('.upf-marketing-banner__background--secondary')
          .hasStyle({ 'background-color': CSSVariableToRGB('--color-melon-100') });
      });

      test('it renders the custom colors', async function (assert) {
        this.options = {
          secondaryGradiantColor: '--color-lime-100'
        };
        await render(
          hbs`<OSS::MarketingBanner @title={{this.title}} @subtitle={{this.subtitle}} @options={{this.options}} />`
        );

        assert.dom('.upf-marketing-banner__background--secondary').exists();
        assert
          .dom('.upf-marketing-banner__background--secondary')
          .hasStyle({ 'background-color': CSSVariableToRGB(this.options.secondaryGradiantColor) });
      });
    });

    module('for @backgroundGridDisplayed', () => {
      module('by default', () => {
        test('it renders it', async function (assert) {
          await render(hbs`<OSS::MarketingBanner @title={{this.title}} @subtitle={{this.subtitle}} />`);
          const element = document.querySelector('.upf-marketing-banner__container') as HTMLElement;
          assert.equal(getComputedStyle(element, 'before').display, 'flex');
        });

        test('it sets the correct value for --background-grid-display CSS variable', async function (assert) {
          await render(hbs`<OSS::MarketingBanner @title={{this.title}} @subtitle={{this.subtitle}} />`);
          const element = document.querySelector('.upf-marketing-banner') as HTMLElement;
          assert.equal(element.style.getPropertyValue('--background-grid-display'), 'flex');
        });
      });

      module('when the value is false', () => {
        test("it doesn't render the grid", async function (assert) {
          this.options = {
            backgroundGridDisplayed: false
          };
          await render(
            hbs`<OSS::MarketingBanner @title={{this.title}} @subtitle={{this.subtitle}} @options={{this.options}} />`
          );
          const element = document.querySelector('.upf-marketing-banner__container') as HTMLElement;
          assert.equal(getComputedStyle(element, 'before').display, 'none');
        });

        test('it sets the correct value for --background-grid-display CSS variable', async function (assert) {
          this.options = {
            backgroundGridDisplayed: false
          };
          await render(
            hbs`<OSS::MarketingBanner @title={{this.title}} @subtitle={{this.subtitle}} @options={{this.options}} />`
          );
          const element = document.querySelector('.upf-marketing-banner') as HTMLElement;
          assert.equal(element.style.getPropertyValue('--background-grid-display'), 'none');
        });
      });

      module('when the value is true', () => {
        test('it renders the grid', async function (assert) {
          this.options = {
            backgroundGridDisplayed: true
          };
          await render(
            hbs`<OSS::MarketingBanner @title={{this.title}} @subtitle={{this.subtitle}} @options={{this.options}} />`
          );
          const element = document.querySelector('.upf-marketing-banner__container') as HTMLElement;
          assert.equal(getComputedStyle(element, 'before').display, 'flex');
        });

        test('it sets the correct value for --background-grid-display CSS variable', async function (assert) {
          this.options = {
            backgroundGridDisplayed: true
          };
          await render(
            hbs`<OSS::MarketingBanner @title={{this.title}} @subtitle={{this.subtitle}} @options={{this.options}} />`
          );
          const element = document.querySelector('.upf-marketing-banner') as HTMLElement;
          assert.equal(element.style.getPropertyValue('--background-grid-display'), 'flex');
        });
      });
    });

    module('for @illustrationAlwaysVisible', () => {
      test('it is visible on small screen', async function (assert) {
        this.options = { illustrationAlwaysVisible: true };
        await render(
          hbs`<OSS::MarketingBanner style="max-width:340px" @title={{this.title}} @subtitle={{this.subtitle}} @options={{this.options}}>
                <:illustration>
                    <img width="100" height="100" src={{this.illustrationSrc}} />
                </:illustration>
            </OSS::MarketingBanner>
            `
        );
        const element = document.querySelector('.upf-marketing-banner') as HTMLElement;

        assert.equal(element.style.getPropertyValue('--illustration-display'), 'flex');
        assert.dom('.upf-marketing-banner__illustration').hasStyle({ display: 'flex' });
        assert.dom('.upf-marketing-banner__illustration img').hasAttribute('src', ILLUSTRATION_SRC);
      });
    });
  });

  module('for illustration named block', () => {
    test('it renders it', async function (assert) {
      await render(
        hbs`<OSS::MarketingBanner @title={{this.title}} @subtitle={{this.subtitle}}>
                <:illustration>
                    <img width="100" height="100" src={{this.illustrationSrc}} />
                </:illustration>
            </OSS::MarketingBanner>
            `
      );
      assert.dom('.upf-marketing-banner__illustration').hasStyle({ display: 'flex' });
      assert.dom('.upf-marketing-banner__illustration img').hasAttribute('src', ILLUSTRATION_SRC);
    });

    test('by default, it is not visible on small screen', async function (assert) {
      await render(
        hbs`<OSS::MarketingBanner style="max-width:340px" @title={{this.title}} @subtitle={{this.subtitle}}>
                <:illustration>
                    <img width="100" height="100" src={{this.illustrationSrc}} />
                </:illustration>
            </OSS::MarketingBanner>
            `
      );
      const element = document.querySelector('.upf-marketing-banner') as HTMLElement;

      assert.equal(element.style.getPropertyValue('--illustration-display'), 'none');
      assert.dom('.upf-marketing-banner__illustration').hasStyle({ display: 'none' });
    });
  });

  module('for actions named block', () => {
    test('it renders it', async function (assert) {
      await render(
        hbs`<OSS::MarketingBanner style="max-width:340px" @title={{this.title}} @subtitle={{this.subtitle}}>
                <:actions>
                    <button class="test-action-button">Click me</button>
                </:actions>
            </OSS::MarketingBanner>
            `
      );
      assert.dom('.upf-marketing-banner__actions').exists();
      assert.dom('.upf-marketing-banner__actions .test-action-button').exists();
    });
  });

  module('Error management', function () {
    test('It throws an error if @title is not passed', async function (assert) {
      setupOnerror((err: any) => {
        assert.equal(err.message, 'Assertion Failed: [component][OSS::MarketingBanner] @title is required');
      });
      await render(hbs`<OSS::MarketingBanner @subtitle={{this.subtitle}} />`);
    });

    test('It throws an error if @subtitle is not passed', async function (assert) {
      setupOnerror((err: any) => {
        assert.equal(err.message, 'Assertion Failed: [component][OSS::MarketingBanner] @subtitle is required');
      });
      await render(hbs`<OSS::MarketingBanner @title={{this.title}} />`);
    });
  });
});
