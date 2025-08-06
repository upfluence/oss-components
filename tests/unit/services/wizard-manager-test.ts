import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import type WizardManager from '@upfluence/oss-components/services/wizard-manager';
import type { WizardConfiguration } from '@upfluence/oss-components/services/wizard-manager';
import sinon from 'sinon';
import { settled } from '@ember/test-helpers';

function createStep(key: string, opts: any = {}) {
  return { key, componentClass: {}, ...opts };
}

function createSection(key: string, steps: any[]) {
  return { key, steps };
}

module('Unit | Service | wizard-manager', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(function () {
    this.service = this.owner.lookup('service:wizard-manager') as WizardManager;
    this.config = {
      sections: [createSection('section-1', [createStep('step-1'), createStep('step-2')])]
    };
  });

  hooks.afterEach(function () {
    this.service.reset();
  });

  module('Configuration & Initialization', function () {
    test('Sections are properly initialized', function (assert) {
      this.service.initialize(this.config as WizardConfiguration);

      assert.equal(this.service.sections.length, 1);
      assert.equal(this.service.sections[0].key, 'section-1');
    });

    test('Steps are properly initialized', function (assert) {
      this.service.initialize(this.config as WizardConfiguration);

      assert.equal(this.service.allSteps.length, 2);
      assert.equal(this.service.allSteps[0].key, 'step-1');
      assert.equal(this.service.allSteps[1].key, 'step-2');
    });

    test('Extra step properties are preserved', function (assert) {
      const extraProperty = { customProp: 'customValue' };
      this.config = {
        sections: [createSection('section-1', [createStep('step-1', extraProperty), createStep('step-2')])]
      };
      this.service.initialize(this.config as WizardConfiguration);
      const step1 = this.service.allSteps[0];
      assert.equal(step1.customProp, 'customValue', 'Extra properties are preserved in steps');
    });

    test('Setting a visited attribute on steps overwrites the default', function (assert) {
      this.config = {
        sections: [createSection('section-1', [createStep('step-1', { visited: true }), createStep('step-2')])]
      };
      this.service.initialize(this.config as WizardConfiguration);
      const step1 = this.service.allSteps[0];
      const step2 = this.service.allSteps[1];
      assert.true(step1.visited);
      assert.false(step2.visited);
    });

    test('Focused step is set to first step', function (assert) {
      this.service.initialize(this.config as WizardConfiguration);

      assert.equal(this.service.focusedStepId, this.service.allSteps[0].id);
    });

    test('Setting centerStepsInContainer option to true adds empty steps to the start and end', function (assert) {
      this.config.options = { centerStepsInContainer: true };
      this.service.initialize(this.config as WizardConfiguration);
      const steps = this.service.sections[0].steps;
      assert.equal(steps[0].displayState, 'empty');
      assert.equal(steps[steps.length - 1].displayState, 'empty');
    });

    test('Not setting centerStepsInContainer does not add empty steps', function (assert) {
      this.service.initialize(this.config as WizardConfiguration);
      const steps = this.service.sections[0].steps;
      assert.notEqual(steps[0].displayState, 'empty');
      assert.notEqual(steps[steps.length - 1].displayState, 'empty');
    });
  });

  module('Step Navigation', function (hooks) {
    hooks.beforeEach(function () {
      this.config = {
        sections: [
          createSection('section-1', [
            createStep('step-1', { validateStep: () => sinon.stub().resolves(true) }),
            createStep('step-2', { validateStep: () => sinon.stub().resolves(true) }),
            createStep('step-3', { validateStep: () => sinon.stub().resolves(true) })
          ])
        ]
      };
    });

    test('selectStep focuses the step and updates focusedStepId', async function (assert) {
      this.service.initialize(this.config as WizardConfiguration);
      const step2Id = this.service.allSteps[1].id;

      this.service.selectStep(step2Id);

      await settled();
      assert.equal(this.service.focusedStepId, step2Id);
    });

    test('calling selectStep with a bypassValidations flag focuses the step without validation', async function (assert) {
      const step1 = createStep('step-1', { validateStep: () => sinon.stub().resolves(true) });
      const step2 = createStep('step-2', { validateStep: () => sinon.stub().resolves(true) });
      this.config = {
        sections: [createSection('section-1', [step1, step2])]
      };

      this.service.initialize(this.config as WizardConfiguration);
      const step1Id = this.service.allSteps[0].id;
      const step2Id = this.service.allSteps[1].id;
      this.validateStub = sinon.stub(this.service.allSteps[0], 'validateStep').resolves(true);

      assert.equal(this.service.focusedStepId, step1Id);

      this.service.selectStep(step2Id, true);
      await settled();
      assert.equal(this.service.focusedStepId, step1Id);
      assert.true(this.validateStub.notCalled, 'validateStep was not called when bypassValidations is true');
    });

    test("selectStep runs the current step's validateStep if provided", async function (assert) {
      this.service.initialize(this.config as WizardConfiguration);
      this.validateStub = sinon.stub(this.service.allSteps[0], 'validateStep').resolves(true);
      const step1 = this.service.allSteps[0];
      const step2 = this.service.allSteps[1];
      step1.validateStep = this.validateStub;

      this.service.selectStep(step2.id);
      assert.ok(this.validateStub.calledOnce, 'validateStep was called');
    });

    test('selectStep does not change focusedStepId if validation fails', async function (assert) {
      this.service.initialize(this.config as WizardConfiguration);
      const step1 = this.service.allSteps[0];
      const step2 = this.service.allSteps[1];
      step1.validateStep = () => Promise.resolve(false);

      this.service.selectStep(step2.id);

      assert.notEqual(this.service.focusedStepId, step2.id);
    });

    test('selectStep runs all validation steps from current section to target step', async function (assert) {
      this.service.initialize(this.config as WizardConfiguration);
      const step1 = this.service.allSteps[0];
      const step2 = this.service.allSteps[1];
      const step3 = this.service.allSteps[2];
      const stub1 = sinon.stub().resolves(true);
      const stub2 = sinon.stub().resolves(true);

      step1.validateStep = stub1;
      step2.validateStep = stub2;

      this.service.selectStep(step3.id);

      await settled();
      assert.equal(this.service.focusedStepId, step3.id, 'Focused on step 3 after validation');
      assert.true(stub1.calledOnce);
      assert.true(stub2.calledOnce);
    });

    test('selectStep focuses the first failing step if validation fails', async function (assert) {
      this.service.initialize(this.config as WizardConfiguration);
      const step1 = this.service.allSteps[0];
      const step2 = this.service.allSteps[1];
      const step3 = this.service.allSteps[2];
      const stub1 = sinon.stub().resolves(true);
      const stub2 = sinon.stub().resolves(false);

      step1.validateStep = stub1;
      step2.validateStep = stub2;

      this.service.selectStep(step3.id);

      await settled();
      assert.equal(this.service.focusedStepId, step2.id);
    });
  });

  module('Service getters', function () {
    test('currentStep returns the step with focusedStepId', function (assert) {
      this.service.initialize(this.config as WizardConfiguration);
      const step1 = this.service.allSteps[0];
      this.service.focusedStepId = step1.id;

      assert.strictEqual(this.service.currentStep?.id, step1.id);
    });

    test('previousStep returns the step before the current step', async function (assert) {
      this.service.initialize(this.config as WizardConfiguration);
      const step1 = this.service.allSteps[0];
      const step2 = this.service.allSteps[1];
      this.service.selectStep(step2.id);

      await settled();
      assert.strictEqual(this.service.previousStep?.id, step1.id);
    });

    test('nextStep returns the step after the current step', async function (assert) {
      this.service.initialize(this.config as WizardConfiguration);
      const step1 = this.service.allSteps[0];
      const step2 = this.service.allSteps[1];
      this.service.selectStep(step1.id);

      await settled();
      assert.strictEqual(this.service.nextStep?.id, step2.id);
    });

    test('allSteps returns all steps across sections', function (assert) {
      this.service.initialize(this.config as WizardConfiguration);
      const allSteps = this.service.allSteps;

      assert.strictEqual(allSteps.length, 2);
      assert.strictEqual(allSteps[0].key, 'step-1');
      assert.strictEqual(allSteps[1].key, 'step-2');
    });

    test('findStepByKey returns the step with the given key', function (assert) {
      this.service.initialize(this.config as WizardConfiguration);
      const step1 = this.service.findStepByKey('step-1');
      const step2 = this.service.findStepByKey('step-2');
      const step3 = this.service.findStepByKey('step-3');
      assert.strictEqual(step1?.key, 'step-1');
      assert.strictEqual(step2?.key, 'step-2');
      assert.strictEqual(step3, undefined, 'Step with key step-3 does not exist');
    });
  });

  module('Select Next/Previous Step', function (hooks) {
    hooks.beforeEach(function () {
      this.config = {
        sections: [createSection('section-1', [createStep('step-1'), createStep('step-2'), createStep('step-3')])]
      };
      this.service.initialize(this.config as WizardConfiguration);
    });

    test('selectNextStep focuses the next step', async function (assert) {
      const step1Id = this.service.allSteps[0].id;
      const step2Id = this.service.allSteps[1].id;

      this.service.focusedStepId = step1Id;
      this.service.selectNextStep();

      await settled();
      assert.strictEqual(this.service.focusedStepId, step2Id);
    });

    test('selectPreviousStep focuses the previous step', async function (assert) {
      const step2Id = this.service.allSteps[1].id;
      const step1Id = this.service.allSteps[0].id;

      this.service.focusedStepId = step2Id;
      this.service.selectPreviousStep();

      await settled();
      assert.strictEqual(this.service.focusedStepId, step1Id);
    });
  });

  test('findStepsForSectionKey returns steps for a given section key', function (assert) {
    this.service.initialize(this.config as WizardConfiguration);
    const steps = this.service.findStepsForSectionKey('section-1');

    assert.strictEqual(steps.length, 2);
    assert.strictEqual(steps[0].key, 'step-1');
    assert.strictEqual(steps[1].key, 'step-2');
  });

  test('reset clears all sections and steps', function (assert) {
    this.service.initialize(this.config as WizardConfiguration);
    this.service.reset();

    assert.strictEqual(this.service.sections.length, 0);
    assert.strictEqual(this.service.allSteps.length, 0);
    assert.strictEqual(this.service.focusedStepId, '');
    assert.strictEqual(this.service.initialized, false);
  });
});
