import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import OSSInputContainer from '@upfluence/oss-components/components/o-s-s/input-container';
import type { WizardConfiguration } from '@upfluence/oss-components/services/wizard-manager';
import sinon from 'sinon';

const WIZARD_CONFIG: WizardConfiguration = {
  sections: [
    {
      key: 'section-1',
      steps: [{ key: 'step-1', componentClass: OSSInputContainer, validateStep: () => Promise.resolve(true) }]
    }
  ]
};

module('Integration | Component | wizard/step-wrapper', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.wizardManager = this.owner.lookup('service:wizard-manager');
    this.wizardManager.initialize(WIZARD_CONFIG);
    this.step = this.wizardManager.allSteps[0];
  });

  hooks.afterEach(function () {
    this.wizardManager.reset();
  });

  module('Computed classes', () => {
    module('Default config', () => {
      test('By default, it renders with the "step-wrapper" class', async function (assert) {
        await render(hbs`<Wizard::StepWrapper @step={{this.step}} />`);

        assert.dom('.step-wrapper').exists();
      });

      test('It applies the "active" class when the step is focused', async function (assert) {
        this.step.displayState = 'active';
        await render(hbs`<Wizard::StepWrapper @step={{this.step}} @stepWrapperBaseClass="custom-step-wrapper" />`);
        assert.dom('.step-wrapper__active').exists();
      });

      test('Previous step - It applies the "previous" class when the step is not visited', async function (assert) {
        this.step.displayState = 'previous';
        await render(hbs`<Wizard::StepWrapper @step={{this.step}} @stepWrapperBaseClass="custom-step-wrapper" />`);

        assert.dom('.step-wrapper__previous').exists();
      });

      test('Next step - It applies the "next" class when the step is not visited', async function (assert) {
        this.step.displayState = 'next';
        await render(hbs`<Wizard::StepWrapper @step={{this.step}} @stepWrapperBaseClass="custom-step-wrapper" />`);

        assert.dom('.step-wrapper__next').exists();
      });

      test('Hidden step - It applies the "hidden" class when the step is not visited', async function (assert) {
        this.step.hidden = true;
        await render(hbs`<Wizard::StepWrapper @step={{this.step}} @stepWrapperBaseClass="custom-step-wrapper" />`);

        assert.dom('.step-wrapper__hidden').exists();
      });
    });

    module('When a stepWrapperBaseClass is set in the wizard-manager', function (hooks) {
      hooks.beforeEach(function () {
        this.wizardManager.initialize({ ...WIZARD_CONFIG, options: { stepWrapperBaseClass: 'custom-step-wrapper' } });
      });

      test('It applies that base class based of the custom name', async function (assert) {
        await render(
          hbs`<Wizard::StepWrapper @step={{this.step}} @stepWrapperBaseClass={{this.stepWrapperBaseClass}} />`
        );

        assert.dom('.custom-step-wrapper').exists();
      });

      test('It applies the "active" class when the step is focused', async function (assert) {
        this.step.displayState = 'active';
        await render(hbs`<Wizard::StepWrapper @step={{this.step}} @stepWrapperBaseClass="custom-step-wrapper" />`);
        assert.dom('.custom-step-wrapper__active').exists();
      });

      test('Previous step - It applies the "previous" class when the step is not visited', async function (assert) {
        this.step.displayState = 'previous';
        await render(hbs`<Wizard::StepWrapper @step={{this.step}} @stepWrapperBaseClass="custom-step-wrapper" />`);

        assert.dom('.custom-step-wrapper__previous').exists();
      });

      test('Next step - It applies the "next" class when the step is not visited', async function (assert) {
        this.step.displayState = 'next';
        await render(hbs`<Wizard::StepWrapper @step={{this.step}} @stepWrapperBaseClass="custom-step-wrapper" />`);

        assert.dom('.custom-step-wrapper__next').exists();
      });
    });
  });

  module('Component Class', () => {
    ['previous', 'next', 'active'].forEach((state) => {
      test(`It renders the component class when the step is ${state}`, async function (assert) {
        this.step.displayState = state;
        await render(hbs`<Wizard::StepWrapper @step={{this.step}} />`);

        assert.dom('.step-wrapper').exists();
        assert.dom('.oss-input-container').exists();
      });
    });

    test('It does not render the component class when the step is none', async function (assert) {
      this.step.displayState = 'none';
      await render(hbs`<Wizard::StepWrapper @step={{this.step}} />`);

      assert.dom('.step-wrapper').exists();
      assert.dom('.oss-input-container').doesNotExist();
    });
  });

  test('Wheel event down calls wizardManager.selectNextStep', async function (assert) {
    this.step.displayState = 'active';
    this.selectNextStepStub = sinon.stub(this.wizardManager, 'selectNextStep');
    await render(hbs`<Wizard::StepWrapper @step={{this.step}} />`);

    const stepWrapper = document.querySelector('.step-wrapper');
    if (stepWrapper) {
      const wheelEvent = new WheelEvent('wheel', { deltaY: 100 });
      stepWrapper.dispatchEvent(wheelEvent);
    }

    assert.true(this.selectNextStepStub.calledOnce);
  });

  test('Wheel event up calls the wizardManager.selectPreviousStep', async function (assert) {
    this.step.displayState = 'active';
    this.selectPreviousStepStub = sinon.stub(this.wizardManager, 'selectPreviousStep');
    await render(hbs`<Wizard::StepWrapper @step={{this.step}} />`);

    const stepWrapper = document.querySelector('.step-wrapper');
    if (stepWrapper) {
      const wheelEvent = new WheelEvent('wheel', { deltaY: -100 });
      stepWrapper.dispatchEvent(wheelEvent);
    }

    assert.true(this.selectPreviousStepStub.calledOnce);
  });
});
