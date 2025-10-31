import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, setupOnerror } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | o-s-s/marketing-banner', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.title = 'Title';
    this.subtitle = 'Subtitle';
  });

  test('it renders', async function (assert) {
    await render(hbs`<OSS::MarketingBanner @title={{this.title}} @subtitle={{this.subtitle}} />`);
    assert.dom('.upf-marketing-banner').exists();
  });

  test('for @title, it renders the correct value', async function (assert) {
    await render(hbs`<OSS::MarketingBanner  @title={{this.title}} @subtitle={{this.subtitle}} />`);
    assert.dom('.upf-marketing-banner__title').hasText('Title');
  });

  test('for @subtitle, it renders the correct value', async function (assert) {
    await render(hbs`<OSS::MarketingBanner  @title={{this.title}} @subtitle={{this.subtitle}} />`);
    assert.dom('.upf-marketing-banner__subtitle').hasText('Subtitle');
  });

  module('for @options', () => {
    module('for @primaryGradiantColor', () => {
      test('it renders the default colors', async function (assert) {
        await render(hbs`<OSS::MarketingBanner  @title={{this.title}} @subtitle={{this.subtitle}} />`);
        assert.dom('.upf-marketing-banner__gradient--primary').exists();
        assert.dom('.upf-marketing-banner__gradient--primary').hasStyle({ 'background-color': 'rgb(237, 233, 254)' });
      });

      test('it renders the custom colors', async function (assert) {
        this.options = {
          primaryGradiantColor: '--color-cyan-100'
        };
        await render(
          hbs`<OSS::MarketingBanner  @title={{this.title}} @subtitle={{this.subtitle}} @options={{this.options}} />`
        );

        assert.dom('.upf-marketing-banner__gradient--primary').exists();
        assert.dom('.upf-marketing-banner__gradient--primary').hasStyle({ 'background-color': 'rgb(207, 250, 254)' });
      });
    });

    module('for @secondaryGradiantColor', () => {
      test('it renders the default colors', async function (assert) {
        await render(hbs`<OSS::MarketingBanner  @title={{this.title}} @subtitle={{this.subtitle}} />`);
        assert.dom('.upf-marketing-banner__gradient--secondary').exists();
        assert.dom('.upf-marketing-banner__gradient--secondary').hasStyle({ 'background-color': 'rgb(254, 205, 214)' });
      });

      test('it renders the custom colors', async function (assert) {
        this.options = {
          secondaryGradiantColor: '--color-lime-100'
        };
        await render(
          hbs`<OSS::MarketingBanner  @title={{this.title}} @subtitle={{this.subtitle}} @options={{this.options}} />`
        );

        assert.dom('.upf-marketing-banner__gradient--secondary').exists();
        assert.dom('.upf-marketing-banner__gradient--secondary').hasStyle({ 'background-color': 'rgb(236, 252, 203)' });
      });
    });

    module('for @backgroundGridHidden', () => {
      module('by default', () => {
        test('it renders it', async function (assert) {
          await render(hbs`<OSS::MarketingBanner  @title={{this.title}} @subtitle={{this.subtitle}} />`);
          const element = document.querySelector('.upf-marketing-banner__container') as HTMLElement;
          assert.equal(getComputedStyle(element, 'before').display, 'flex');
        });

        test('it sets the correct value for --background-grid-display CSS variable', async function (assert) {
          await render(hbs`<OSS::MarketingBanner  @title={{this.title}} @subtitle={{this.subtitle}} />`);
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
            hbs`<OSS::MarketingBanner  @title={{this.title}} @subtitle={{this.subtitle}} @options={{this.options}} />`
          );
          const element = document.querySelector('.upf-marketing-banner__container') as HTMLElement;
          assert.equal(getComputedStyle(element, 'before').display, 'none');
        });

        test('it sets the correct value for --background-grid-display CSS variable', async function (assert) {
          this.options = {
            backgroundGridHidden: true
          };
          await render(
            hbs`<OSS::MarketingBanner  @title={{this.title}} @subtitle={{this.subtitle}} @options={{this.options}} />`
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
            hbs`<OSS::MarketingBanner  @title={{this.title}} @subtitle={{this.subtitle}} @options={{this.options}} />`
          );
          const element = document.querySelector('.upf-marketing-banner__container') as HTMLElement;
          assert.equal(getComputedStyle(element, 'before').display, 'flex');
        });

        test('it sets the correct value for --background-grid-display CSS variable', async function (assert) {
          this.options = {
            backgroundGridHidden: false
          };
          await render(
            hbs`<OSS::MarketingBanner  @title={{this.title}} @subtitle={{this.subtitle}} @options={{this.options}} />`
          );
          const element = document.querySelector('.upf-marketing-banner') as HTMLElement;
          assert.equal(element.style.getPropertyValue('--background-grid-display'), 'flex');
        });
      });
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
