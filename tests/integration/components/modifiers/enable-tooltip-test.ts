import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { Placement } from '@upfluence/oss-components/test-support/custom-assertions/tooltip';

const PLACEMENTS: Placement[] = [undefined, 'top', 'bottom', 'left', 'right'];

module('Integration | Component | modifiers/enable-tooltip', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the correct title', async function (assert) {
    this.title = 'title';
    await render(hbs`
      <div class="test-container" style="height: 20px; width: 40px" 
           {{enable-tooltip title=this.title}}>
      </div>
    `);
    await assert.tooltip('.test-container').hasTitle(this.title);
  });

  test('it renders the correct subtitle', async function (assert) {
    this.subtitle = 'subtitle';
    await render(hbs`
      <div class="test-container" style="height: 20px; width: 40px" 
           {{enable-tooltip subtitle=this.subtitle}}>
      </div>
    `);
    await assert.tooltip('.test-container').hasSubtitle(this.subtitle);
  });

  module('for placement attribute', () => {
    PLACEMENTS.forEach((placement) => {
      test(`it renders the correct placement ${placement}`, async function (assert) {
        this.placement = placement;
        await render(hbs`
      <div class="test-container" style="height: 20px; width: 40px" 
           {{enable-tooltip placement=this.placement}}>
      </div>
    `);
        await assert.tooltip('.test-container').hasPlacement(placement);
      });
    });
  });
});
