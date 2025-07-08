import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | wizard/step-wrapper', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.set('step', {
      id: 'step1',
      title: 'Step 1',
      displayState: 'active',
      visited: false,
      validateStep: () => Promise.resolve(true)
    });
  });

  test('it renders', async function (assert) {
    await render(hbs`<Wizard::StepWrapper @step={{this.step}} />`);

    assert.dom('.step-wrapper').exists();
  });
});
