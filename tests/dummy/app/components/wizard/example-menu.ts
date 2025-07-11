import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { helper } from '@ember/component/helper';
import { action } from '@ember/object';

import type WizardManager from '@upfluence/oss-components/services/wizard-manager';
import type { Section } from '@upfluence/oss-components/services/wizard-manager';

interface WizardExampleMenuSignature {}

export default class WizardExampleMenu extends Component<WizardExampleMenuSignature> {
  @service declare wizardManager: WizardManager;

  isSectionExpanded = helper((_, { sectionId }: { sectionId: string }): boolean => {
    return this.wizardManager.sections.some((section) => {
      return section.id === sectionId && section.steps.some((step) => step.id === this.wizardManager.focusedStepId);
    });
  });

  get sections(): Section[] {
    return this.wizardManager.sections;
  }

  @action
  selectStep(stepId: string): void {
    this.wizardManager.selectStep(stepId);
  }

  @action
  selectSection(sectionId: string): void {
    this.wizardManager.selectSection(sectionId);
  }
}
