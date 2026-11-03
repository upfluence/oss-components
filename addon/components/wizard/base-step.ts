import Component from '@glimmer/component';
import { action, set } from '@ember/object';
import type { Step } from '@upfluence/oss-components/services/wizard-manager';
import type Owner from '@ember/owner';

export interface WizardBaseStepSignature {
  step: Step;
}

export abstract class WizardBaseStep<T extends WizardBaseStepSignature> extends Component<T> {
  constructor(owner: Owner, args: T) {
    super(owner, args);
    set(args.step, 'validateStep', this.onStepSubmission?.bind(this));
  }

  abstract onStepSubmission(): Promise<boolean>;
  abstract onFirstInsertion(): void;
  abstract onRevisit(): void;
  protected onLeave(): void {}

  @action
  onVisibleState(): void {
    if (this.args.step.displayState === 'active' && !this.args.step.visited) {
      this.onFirstInsertion();
      this.args.step.visited = true;
    } else if (this.args.step.displayState === 'active' && this.args.step.visited) {
      this.onRevisit();
    }
    if (['previous', 'next'].includes(this.args.step.displayState as string)) this.onLeave();
  }
}
