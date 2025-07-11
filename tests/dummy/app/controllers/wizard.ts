import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import type WizardManager from '@upfluence/oss-components/services/wizard-manager';
import type { WizardConfiguration } from '@upfluence/oss-components/services/wizard-manager';
import WizardExampleStep from '../components/wizard/example-step';
import WizardExampleStepWithScroll from '../components/wizard/example-step-with-scroll';
import OSSInputContainer from '@upfluence/oss-components/components/o-s-s/input-container';
import { action } from '@ember/object';

const WIZARD_CONFIG: WizardConfiguration = {
  options: {
    centerStepsInContainer: true
  },
  sections: [
    {
      key: 'Section 1',
      steps: [
        { key: 'Step 1', componentClass: WizardExampleStepWithScroll },
        { key: 'Step 2', componentClass: WizardExampleStep },
        // Usage with a random component that is not extending WizardBaseStep:
        { key: 'Step 3', componentClass: OSSInputContainer, validateStep: () => Promise.resolve(true) }
      ]
    },
    {
      key: 'Section 2',
      steps: [
        { key: 'Step 4', componentClass: WizardExampleStep },
        { key: 'Step 5', componentClass: WizardExampleStep }
      ]
    }
  ]
};

export default class Wizard extends Controller {
  @service declare wizardManager: WizardManager;

  @action
  initWizard(): void {
    this.wizardManager.initialize(WIZARD_CONFIG);
  }
}
