import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, setupOnerror } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

const ILLUSTRATION_SRC = '/@upfluence/oss-components/assets/images/upfluence-blue-logo.svg';

module('Integration | Component | o-s-s/marketing-banner', function (hooks) {
  setupRenderingTest(hooks);

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

  test('it renders all gradient elements', async function (assert) {
    await render(hbs`<OSS::MarketingBanner @title={{this.title}} @subtitle={{this.subtitle}} />`);
    assert.dom('.upf-marketing-banner__gradient--primary').exists();
    assert.dom('.upf-marketing-banner__gradient--secondary').exists();
    assert.dom('.upf-marketing-banner__gradient--tertiary').exists();
  });

  module('for @options', () => {
    module('for @primaryGradiantColor', () => {
      test('it renders the default colors', async function (assert) {
        await render(hbs`<OSS::MarketingBanner @title={{this.title}} @subtitle={{this.subtitle}} />`);
        assert.dom('.upf-marketing-banner__gradient--primary').exists();
        assert
          .dom('.upf-marketing-banner__gradient--primary')
          .hasStyle({ 'background-color': CSSVariableToRGB('--color-violet-100') });
      });

      test('it renders the custom colors', async function (assert) {
        this.options = {
          primaryGradiantColor: '--color-cyan-100'
        };
        await render(
          hbs`<OSS::MarketingBanner @title={{this.title}} @subtitle={{this.subtitle}} @options={{this.options}} />`
        );

        assert.dom('.upf-marketing-banner__gradient--primary').exists();
        assert
          .dom('.upf-marketing-banner__gradient--primary')
          .hasStyle({ 'background-color': CSSVariableToRGB(this.options.primaryGradiantColor) });
      });
    });

    module('for @secondaryGradiantColor', () => {
      test('it renders the default colors', async function (assert) {
        await render(hbs`<OSS::MarketingBanner @title={{this.title}} @subtitle={{this.subtitle}} />`);
        assert.dom('.upf-marketing-banner__gradient--secondary').exists();
        assert
          .dom('.upf-marketing-banner__gradient--secondary')
          .hasStyle({ 'background-color': CSSVariableToRGB('--color-melon-100') });
      });

      test('it renders the custom colors', async function (assert) {
        this.options = {
          secondaryGradiantColor: '--color-lime-100'
        };
        await render(
          hbs`<OSS::MarketingBanner @title={{this.title}} @subtitle={{this.subtitle}} @options={{this.options}} />`
        );

        assert.dom('.upf-marketing-banner__gradient--secondary').exists();
        assert
          .dom('.upf-marketing-banner__gradient--secondary')
          .hasStyle({ 'background-color': CSSVariableToRGB(this.options.secondaryGradiantColor) });
      });
    });

    module('for @backgroundGridHidden', () => {
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

      module('when the value is true', () => {
        test("it doesn't render the grid", async function (assert) {
          this.options = {
            backgroundGridHidden: true
          };
          await render(
            hbs`<OSS::MarketingBanner @title={{this.title}} @subtitle={{this.subtitle}} @options={{this.options}} />`
          );
          const element = document.querySelector('.upf-marketing-banner__container') as HTMLElement;
          assert.equal(getComputedStyle(element, 'before').display, 'none');
        });

        test('it sets the correct value for --background-grid-display CSS variable', async function (assert) {
          this.options = {
            backgroundGridHidden: true
          };
          await render(
            hbs`<OSS::MarketingBanner @title={{this.title}} @subtitle={{this.subtitle}} @options={{this.options}} />`
          );
          const element = document.querySelector('.upf-marketing-banner') as HTMLElement;
          assert.equal(element.style.getPropertyValue('--background-grid-display'), 'none');
        });
      });

      module('when the value is false', () => {
        test('it renders the grid', async function (assert) {
          this.options = {
            backgroundGridHidden: false
          };
          await render(
            hbs`<OSS::MarketingBanner @title={{this.title}} @subtitle={{this.subtitle}} @options={{this.options}} />`
          );
          const element = document.querySelector('.upf-marketing-banner__container') as HTMLElement;
          assert.equal(getComputedStyle(element, 'before').display, 'flex');
        });

        test('it sets the correct value for --background-grid-display CSS variable', async function (assert) {
          this.options = {
            backgroundGridHidden: false
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

  module('For private tests methods', function () {
    test('CSSVariableToRGB converts CSS variable to RGB', function (assert) {
      const root = document.documentElement;
      root.style.setProperty('--test-hex-color', '#ff5733');
      root.style.setProperty('--test-rgb-color', 'rgb(34, 139, 34)');

      const hexColor = CSSVariableToRGB('--test-hex-color');
      const rgbColor = CSSVariableToRGB('--test-rgb-color');

      assert.equal(hexColor, 'rgb(255, 87, 51)', 'Hex color converted to RGB correctly');
      assert.equal(rgbColor, 'rgba(34, 139, 34, 1)', 'RGB color converted to RGBA correctly');
    });

    test('hexToRGB converts hex color to RGB', function (assert) {
      const shortHex = '#0f0';
      const longHex = '#00ff00';

      const shortHexRGB = hexToRGB(shortHex);
      const longHexRGB = hexToRGB(longHex);

      assert.equal(shortHexRGB, 'rgb(0, 255, 0)', 'Short hex color converted to RGB correctly');
      assert.equal(longHexRGB, 'rgb(0, 255, 0)', 'Long hex color converted to RGB correctly');
    });
  });
});

function CSSVariableToRGB(variable: string): string {
  const rootStyles = getComputedStyle(document.documentElement);
  const colorValue = rootStyles.getPropertyValue(variable).trim();

  if (colorValue.startsWith('rgb')) {
    return colorValue.replace('rgb', 'rgba').replace(')', ', 1)');
  } else if (colorValue.startsWith('#')) {
    return hexToRGB(colorValue);
  } else {
    throw new Error(`Unsupported color format: ${colorValue}`);
  }
}

function hexToRGB(hex: string): string {
  hex = hex.replace('#', '');

  if (hex.length === 3) {
    hex = hex
      .split('')
      .map((char) => char + char)
      .join('');
  }

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return `rgb(${r}, ${g}, ${b})`;
}
