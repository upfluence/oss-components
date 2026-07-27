import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

import type WizardManager from '@upfluence/oss-components/services/wizard-manager';

export default class WizardExampleControls extends Component {
  @service declare wizardManager: WizardManager;

  @action
  selectNextStep(): void {
    this.wizardManager.selectNextStep();
  }

  @action
  selectPreviousStep(): void {
    this.wizardManager.selectPreviousStep();
  }
}
