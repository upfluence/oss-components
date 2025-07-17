import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import OSSInputContainer from '@upfluence/oss-components/components/o-s-s/input-container';
import type { WizardConfiguration } from '@upfluence/oss-components/services/wizard-manager';

const WIZARD_CONFIG: WizardConfiguration = {
  sections: [
    {
      key: 'section-1',
      steps: [
        { key: 'step-1', componentClass: OSSInputContainer },
        { key: 'step-2', componentClass: OSSInputContainer }
      ]
    }
  ]
};

module('Integration | Component | wizard/container', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.wizardManager = this.owner.lookup('service:wizard-manager');
  });

  hooks.afterEach(function () {
    this.wizardManager.reset();
  });

  test('By default the container has the class "wizard-container"', async function (assert) {
    await render(hbs`<Wizard::Container />`);

    assert.dom('.wizard-container').exists();
  });

  test('Customizing the class of the container via the service properly applies the class', async function (assert) {
    this.wizardManager.initialize({ ...WIZARD_CONFIG, options: { containerClass: 'custom-container-class' } });
    await render(hbs`<Wizard::Container />`);
    assert.dom('.custom-container-class').exists();
  });

  test('It does not render steps when the wizard manager is not initialized', async function (assert) {
    await render(hbs`<Wizard::Container />`);

    assert.dom('.step-wrapper').doesNotExist();
  });

  test('It renders all step wrappers when wizard manager is initialized', async function (assert) {
    this.wizardManager.initialize(WIZARD_CONFIG);

    await render(hbs`<Wizard::Container />`);
    assert.dom('.step-wrapper').exists({ count: this.wizardManager.allSteps.length });
  });
});
