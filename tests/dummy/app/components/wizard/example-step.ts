import { action } from '@ember/object';
import { WizardBaseStep, type WizardBaseStepSignature } from '@upfluence/oss-components/components/wizard/base-step';

interface WizardExampleStepSignature extends WizardBaseStepSignature {}

export default class WizardExampleStep extends WizardBaseStep<WizardExampleStepSignature> {
  constructor(owner: unknown, args: WizardExampleStepSignature) {
    super(owner, args);
    console.log('WizardExampleStep initialized for step:', this.args.step.id);
  }

  @action
  onStepSubmission(): Promise<boolean> {
    console.log('onStepSubmission called for step:', this.args.step.id);
    return new Promise((resolve) => {
      // Implement the logic for step submission here
      // For example, this can be bound to the submit button of an OSS::Form component
      // we would then validate the inputs and resolve true or false based on the validations
      resolve(true || false);
    });
  }

  @action
  onFirstInsertion(): void {
    console.log('onFirstInsertion called for step:', this.args.step.id);
    // This is triggered the first time the step becomes active
    // You can add any additional logic that should run when the step becomes active
    // ie. set the loading states on the components
    // and run the calls to the API to fetch JACE data
  }

  @action
  onRevisit(): void {
    console.log('onRevisit called for step:', this.args.step.id);
    // This is triggered when the step is revisited
    // We will use it to rerun validations to display any errors that would be present
    this.onStepSubmission();
  }

  override onLeave(): void {
    // Triggered when this step is no longer active (ie. moved to preview)
    console.log('onLeave called for step:', this.args.step.id);
  }

  willDestroy(): void {
    super.willDestroy();
    console.log('onDestroy called for step:', this.args.step.id);
  }
}
