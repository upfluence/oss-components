import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { Placement } from '@upfluence/oss-components/test-support/custom-assertions/tooltip';

const PLACEMENTS: Placement[] = [undefined, 'top', 'bottom', 'left', 'right'];

module('Integration | Component | modifiers/enable-tooltip', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.title = 'Title';
  });

  test("it doesn't renders when the title is empty", async function (assert) {
    this.title = '';
    await render(hbs`
      <div class="test-container" style="height: 20px; width: 40px" 
           {{enable-tooltip title=""}}>
      </div>
    `);
    await assert.tooltip('.test-container').doesNotExist();
  });

  test('it renders the correct title', async function (assert) {
    this.title = 'title';
    await render(hbs`
      <div class="test-container" style="height: 20px; width: 40px"
           {{enable-tooltip title=this.title}}>
      </div>
    `);
    await assert.tooltip('.test-container').hasTitle(this.title);
  });

  module('icon attribute', () => {
    test('it renders the correct icon', async function (assert) {
      this.icon = 'far fa-wine-glass-alt';
      await render(hbs`
      <div class="test-container" style="height: 20px; width: 40px"
           {{enable-tooltip title=this.title icon=this.icon}}>
      </div>
    `);
      await assert.tooltip('.test-container').hasIcon(this.icon);
    });

    test("it doesn't renders the icon", async function (assert) {
      await render(hbs`
      <div class="test-container" style="height: 20px; width: 40px"
           {{enable-tooltip title=this.title}}>
      </div>
    `);
      await assert.tooltip('.test-container').doesNotHaveIcon();
    });
  });

  module('subtitle attribute', () => {
    test('it renders the correct subtitle', async function (assert) {
      this.subtitle = 'subtitle';
      await render(hbs`
      <div class="test-container" style="height: 20px; width: 40px"
           {{enable-tooltip title=this.title subtitle=this.subtitle}}>
      </div>
    `);
      await assert.tooltip('.test-container').hasSubtitle(this.subtitle);
    });

    test("it doesn't render the subtitle", async function (assert) {
      await render(hbs`
      <div class="test-container" style="height: 20px; width: 40px"
           {{enable-tooltip title=this.title}}>
      </div>
    `);
      await assert.tooltip('.test-container').doesNotHaveSubtitle();
    });
  });

  module('placement attribute', () => {
    PLACEMENTS.forEach((placement) => {
      test(`it renders the correct placement ${placement}`, async function (assert) {
        this.placement = placement;
        await render(hbs`
      <div class="test-container" style="height: 20px; width: 40px"
           {{enable-tooltip title=this.title placement=this.placement}}>
      </div>
    `);
        await assert.tooltip('.test-container').hasPlacement(placement || 'bottom');
      });
    });
  });

  module('trigger attribute', () => {
    test('it renders when hovering and focusing the element with undefined trigger', async function (assert) {
      await render(hbs`
      <div class="test-container" style="height: 20px; width: 40px"
           {{enable-tooltip title=this.title}}>
      </div>
    `);
      await assert.tooltip('.test-container').exists();
      await assert.tooltip('.test-container').exists('focusin');
    });

    test('it renders when hovering the element', async function (assert) {
      this.trigger = 'hover';
      await render(hbs`
      <div class="test-container" style="height: 20px; width: 40px"
           {{enable-tooltip title=this.title trigger=this.trigger}}>
      </div>
    `);
      await assert.tooltip('.test-container').exists();
    });

    test('it renders when focusing the element', async function (assert) {
      this.trigger = 'focus';
      await render(hbs`
      <div class="test-container" style="height: 20px; width: 40px"
           {{enable-tooltip title=this.title trigger=this.trigger}}>
      </div>
    `);
      await assert.tooltip('.test-container').exists('focusin');
    });
  });

  module('html attribute', () => {
    test("it doesn't renders the html safe by default", async function (assert) {
      await render(hbs`
      <div class="test-container" style="height: 20px; width: 40px"
           {{enable-tooltip title=this.title}}>
      </div>
    `);
      await assert.tooltip('.test-container').isNotHtmlSafe();
    });

    test('it renders the html safe when the value is true', async function (assert) {
      this.html = true;
      await render(hbs`
      <div class="test-container" style="height: 20px; width: 40px"
           {{enable-tooltip title=this.title html=this.html}}>
      </div>
    `);
      await assert.tooltip('.test-container').isHtmlSafe();
    });

    test("it doesn't renders the html safe when the value is false", async function (assert) {
      this.html = false;
      await render(hbs`
      <div class="test-container" style="height: 20px; width: 40px"
           {{enable-tooltip title=this.title html=this.html}}>
      </div>
    `);
      await assert.tooltip('.test-container').isNotHtmlSafe();
    });
  });
});
