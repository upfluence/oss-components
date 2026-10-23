import { inject as service } from '@ember/service';
import Component from '@glimmer/component';

import type WizardManager from '../../services/wizard-manager';
import type { Step } from '../../services/wizard-manager';

interface WizardContainerComponentSignature {}

export default class WizardContainerComponent extends Component<WizardContainerComponentSignature> {
  @service declare wizardManager: WizardManager;

  get allSteps(): Step[] {
    return this.wizardManager.allSteps;
  }
}
