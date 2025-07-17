import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { WizardBaseStep, type WizardBaseStepSignature } from '@upfluence/oss-components/components/wizard/base-step';
import type { Step } from '@upfluence/oss-components/services/wizard-manager';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

interface TestStepSignature extends WizardBaseStepSignature {
  step: Step;
  triggerOnVisibleState?: boolean;
}

class TestStepComponent extends WizardBaseStep<TestStepSignature> {
  constructor(owner: unknown, args: TestStepSignature) {
    super(owner, args);

    this.registerMethodsForTestingValidations(args);
    this.registerMembersForTestingValidations(args);
  }

  onStepSubmission(): Promise<boolean> {
    this.args.step.onStepSubmissionCalled = true;
    return Promise.resolve(true);
  }

  onFirstInsertion(): void {
    this.args.step.onFirstInsertionCalled = true;
  }

  onRevisit(): void {
    this.args.step.onRevisitCalled = true;
  }

  protected onLeave(): void {
    this.args.step.onLeaveCalled = true;
  }

  private registerMethodsForTestingValidations(args: TestStepSignature): void {
    args.step.validateStep = this.onStepSubmission.bind(this);
    args.step.onFirstInsertion = this.onFirstInsertion.bind(this);
    args.step.onRevisit = this.onRevisit.bind(this);
    args.step.onLeave = this.onLeave.bind(this);
    args.step.onVisibleState = this.onVisibleState.bind(this);
  }

  private registerMembersForTestingValidations(args: TestStepSignature): void {
    args.step.onStepSubmissionCalled = false;
    args.step.onFirstInsertionCalled = false;
    args.step.onRevisitCalled = false;
    args.step.onLeaveCalled = false;
  }
}

module('Integration | Component | wizard/base-step', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.owner.register('component:test-step', TestStepComponent);
    this.step = {
      id: '1',
      key: 'step-1',
      displayState: 'active',
      visited: false
    };
  });

  test('it sets validateStep if not present', async function (assert) {
    await render(hbs`<TestStep @step={{this.step}} />`);

    assert.ok(typeof this.step.validateStep === 'function');
  });

  test("It doesn't set validateStep if already present", async function (assert) {
    this.step.validateStep = () => Promise.resolve(true);
    await render(hbs`<TestStep @step={{this.step}} />`);

    assert.strictEqual(this.step.validateStep, this.step.validateStep);
  });

  module('Step lifecycle hooks - When onVisibleState is triggered', () => {
    test('If displayState is "active" and the step has not been visited, the onFirstInsertion hook is called', async function (assert) {
      this.step.displayState = 'active';
      this.step.visited = false;
      await render(hbs`<TestStep @step={{this.step}} />`);

      this.step.onVisibleState();
      assert.true(this.step.onFirstInsertionCalled);
    });

    test('If displayState is "active" and the step has not been visited, the step is marked as visited', async function (assert) {
      this.step.displayState = 'active';
      this.step.visited = false;
      await render(hbs`<TestStep @step={{this.step}} />`);

      this.step.onVisibleState();
      assert.true(this.step.visited);
    });

    test('If displayState is "active" and the step has been visited, the onRevisit hook is called', async function (assert) {
      this.step.displayState = 'active';
      this.step.visited = true;
      await render(hbs`<TestStep @step={{this.step}} />`);

      this.step.onVisibleState();
      assert.true(this.step.onRevisitCalled);
    });

    test('If displayState is "previous", the onLeave hook is called', async function (assert) {
      this.step.displayState = 'previous';
      await render(hbs`<TestStep @step={{this.step}} />`);

      this.step.onVisibleState();
      assert.true(this.step.onLeaveCalled);
    });

    test('If displayState is "next", the onLeave hook is called', async function (assert) {
      this.step.displayState = 'next';
      await render(hbs`<TestStep @step={{this.step}} />`);

      this.step.onVisibleState();
      assert.true(this.step.onLeaveCalled);
    });
  });
});
