import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import type WizardManager from '@upfluence/oss-components/services/wizard-manager';
import type { Step } from '@upfluence/oss-components/services/wizard-manager';

interface WizardContainerComponentSignature {}

export default class WizardContainerComponent extends Component<WizardContainerComponentSignature> {
  @service declare wizardManager: WizardManager;

  get allSteps(): Step[] {
    return this.wizardManager.allSteps;
  }
}
