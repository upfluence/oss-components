import Service from '@ember/service';
import { set } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { guidFor } from '@ember/object/internals';
import { next } from '@ember/runloop';

export type Step = {
  id: string;
  key: string;
  displayState?: 'active' | 'previous' | 'next' | 'none' | 'empty';
  componentClass?: any;
  visited?: boolean;
  completed?: boolean;
  validateStep?(): any;

  /**
   * Allow additional properties for outside usage.
   */
  [key: string]: unknown;
};

export type Section = {
  id: string;
  key: string;
  steps: Step[];
  [key: string]: unknown;
};

export type ConfigurationOptions = {
  centerStepsInContainer?: boolean;
  stepWrapperBaseClass?: string;
  containerClass?: string;
};

export type WizardConfiguration = {
  options?: ConfigurationOptions;
  sections: {
    key: string;
    steps: {
      key: string;
      componentClass: any;
      validateStep?: () => Promise<boolean>;
      hidden?: boolean;
      [key: string]: unknown;
    }[];
    [key: string]: unknown;
  }[];
};

export default class WizardManager extends Service {
  @tracked initialized: boolean = false;
  @tracked sections: Section[] = [];
  @tracked declare focusedStepId: string;
  @tracked declare configOptions: ConfigurationOptions;
  @tracked wheelEnabled: boolean = true;

  get allSteps(): Step[] {
    return this.sections.flatMap((section: Section) => section.steps);
  }

  get currentStep(): Step | undefined {
    return this.currentSection?.steps.find((step: Step) => step.id === this.focusedStepId);
  }

  get previousStep(): Step | undefined {
    return this.findPreviousStep(this.currentStep!);
  }

  get nextStep(): Step | undefined {
    return this.findNextStep(this.currentStep!);
  }

  initialize(configuration: WizardConfiguration): void {
    this.configOptions = configuration.options || {};
    this.initSectionsAndSteps(configuration);
    this.applyConfigOptions();
    this.initialized = true;
    const firstFocusableStep = this.sections[0]?.steps.find((step: Step) => step.displayState !== 'empty');
    if (firstFocusableStep) {
      this.focusedStepId = firstFocusableStep.id;
      this.setDisplayStates();
      next(this, () => {
        document.getElementById(firstFocusableStep.id)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      });
    }
  }

  selectSection(sectionId: string): void {
    const firstFocusableStepOfSection = this.findFirstFocusableStepInSection(sectionId);
    if (firstFocusableStepOfSection) {
      this.selectStep(firstFocusableStepOfSection.id);
    }
  }

  selectStep(stepId: string, bypassValidations?: boolean): void {
    if (bypassValidations) {
      this.focusStep(stepId);
      return;
    }

    const targetStep = this.findStepById(stepId);
    if (!targetStep) return;

    const targetStepIndex = this.findIndexOfStep(stepId);
    const currentStepIndex = this.focusedStepId ? this.findIndexOfStep(this.focusedStepId) : -1;
    if (currentStepIndex !== -1) {
      const stepsToValidate = this.allSteps.slice(currentStepIndex, targetStepIndex);
      const validationPromises = stepsToValidate.map((step: Step) => {
        if (step.completed) return Promise.resolve(true);
        return step.validateStep ? step.validateStep() : Promise.resolve(true);
      });

      Promise.all(validationPromises).then((results: boolean[]) => {
        if (results.every((result: boolean) => result)) {
          this.focusStep(stepId);
        } else {
          const firstInvalidIndex = results.findIndex((result: boolean) => !result);
          if (firstInvalidIndex !== -1 && currentStepIndex !== currentStepIndex + firstInvalidIndex) {
            this.focusStep(this.allSteps[currentStepIndex + firstInvalidIndex]?.id ?? '');
          }
        }
      });
    }
  }

  selectNextStep(): void {
    if (this.nextStep) this.selectStep(this.nextStep.id);
  }

  selectPreviousStep(): void {
    if (this.previousStep) this.selectStep(this.previousStep.id);
  }

  findStepsForSectionKey(sectionKey: string): Step[] {
    const section = this.sections.find((section: Section) => section.key === sectionKey);
    if (section) {
      return section.steps.filter((step: Step) => step.displayState !== 'empty');
    }
    return [];
  }

  findStepByKey(stepKey: string): Step | undefined {
    return this.allSteps.find((step: Step) => step.key === stepKey);
  }

  reset(): void {
    this.initialized = false;
    this.sections = [];
    this.focusedStepId = '';
    this.configOptions = {};
  }

  markStepAsCompleted(stepId: string): void {
    const step = this.findStepById(stepId);
    if (step) {
      set(step, 'completed', true);
    }
    this.notifySectionChange();
  }

  toggleStepVisibility(stepId: string, hidden: boolean): void {
    const step = this.findStepById(stepId);
    if (step) {
      set(step, 'hidden', hidden);
      this.setDisplayStates();
      this.notifySectionChange();
    }
  }

  enableWheelScroll(): void {
    this.wheelEnabled = true;
  }

  disableWheelScroll(): void {
    this.wheelEnabled = false;
  }

  private get currentSection(): Section | undefined {
    return this.sections.find((section: Section) => section.steps.some((step: Step) => step.id === this.focusedStepId));
  }

  private notifySectionChange(): void {
    this.sections = [...this.sections];
  }

  private findIndexOfStep(stepId: string): number {
    return this.allSteps.findIndex((step: Step) => step.id === stepId);
  }

  private findStepById(stepId: string): Step | undefined {
    return this.allSteps.find((step: Step) => step.id === stepId);
  }

  private findFirstFocusableStepInSection(sectionId: string): Step | undefined {
    const section = this.sections.find((section: Section) => section.id === sectionId);
    if (section) {
      return section.steps.find((step: Step) => step.displayState !== 'empty' && !step.hidden);
    }
    return undefined;
  }

  private focusStep(stepId: string): void {
    const stepPosition: 'before' | 'after' =
      this.findIndexOfStep(stepId) > this.findIndexOfStep(this.focusedStepId) ? 'after' : 'before';

    let targetStep = stepPosition === 'after' ? this.nextStep : this.previousStep;
    if (!targetStep) {
      targetStep = this.findStepById(stepId);
    }
    if (targetStep) {
      set(this, 'focusedStepId', targetStep.id);
      this.setDisplayStates();
      next(this, () => {
        document.getElementById(stepId)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        if (stepId !== this.focusedStepId) {
          next(this, () => {
            this.focusStep(stepId);
          });
        }
      });
    }
  }

  private setDisplayStates(): void {
    this.resetDisplayStates();
    if (this.currentStep) set(this.currentStep, 'displayState', 'active');
    if (this.previousStep && this.previousStep.displayState !== 'empty')
      set(this.previousStep, 'displayState', 'previous');
    if (this.nextStep && this.nextStep.displayState !== 'empty') set(this.nextStep, 'displayState', 'next');
  }

  private resetDisplayStates(): void {
    this.allSteps
      .filter((step) => step.displayState !== 'empty')
      .forEach((step: Step) => {
        set(step, 'displayState', 'none');
      });
  }

  private initSectionsAndSteps(configuration: WizardConfiguration): void {
    this.sections = configuration.sections.map((section) => {
      const overridingSection: Section = {
        id: guidFor(section.key),
        key: section.key,
        steps: section.steps.map((step) => {
          const defaultStep: Step = {
            id: guidFor(step.key),
            key: step.key,
            componentClass: step.componentClass,
            validateStep: step.validateStep,
            displayState: 'none',
            visited: false
          };
          return { ...defaultStep, ...step };
        })
      };
      return { ...section, ...overridingSection };
    });
  }

  private findPreviousStep(currentStep: Step): Step | undefined {
    const currentIndex = this.allSteps.findIndex((step: Step) => step.id === currentStep.id);
    if (currentIndex > 0 && this.allSteps[currentIndex - 1]?.displayState !== 'empty') {
      const localPreviousStep = this.allSteps[currentIndex - 1];
      return localPreviousStep!.hidden === true ? this.findPreviousStep(localPreviousStep!) : localPreviousStep;
    }
    return undefined;
  }

  private findNextStep(currentStep: Step): Step | undefined {
    const currentIndex = this.allSteps.findIndex((step: Step) => step.id === currentStep.id);
    if (
      currentIndex >= 0 &&
      currentIndex < this.allSteps.length - 1 &&
      this.allSteps[currentIndex + 1]?.displayState !== 'empty'
    ) {
      const localNextStep = this.allSteps[currentIndex + 1];

      return localNextStep!.hidden === true ? this.findNextStep(localNextStep!) : localNextStep;
    }
    return undefined;
  }

  private applyConfigOptions(): void {
    if (this.configOptions?.centerStepsInContainer && this.sections?.length > 0) {
      this.sections[0]!.steps.unshift({ id: guidFor('empty-step-top'), key: '', displayState: 'empty' });
      this.sections[this.sections.length - 1]!.steps.push({
        id: guidFor('empty-step-bottom'),
        key: '',
        displayState: 'empty'
      });
    }
  }
}

declare module '@ember/service' {
  interface Registry {
    'wizard-manager': WizardManager;
  }
}
