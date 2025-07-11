import Service from '@ember/service';
import { set } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { guidFor } from '@ember/object/internals';

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
    }[];
  }[];
};

export default class WizardManager extends Service {
  @tracked initialized: boolean = false;
  @tracked sections: Section[] = [];
  @tracked declare focusedStepId: string;
  @tracked declare configOptions: ConfigurationOptions;

  get allSteps(): Step[] {
    return this.sections.flatMap((section: Section) => section.steps);
  }

  get currentStep(): Step | undefined {
    return this.currentSection?.steps.find((step: Step) => step.id === this.focusedStepId);
  }

  get previousStep(): Step | undefined {
    const currentIndex = this.allSteps.findIndex((step: Step) => step.id === this.focusedStepId);
    if (currentIndex > 0 && this.allSteps[currentIndex - 1]?.displayState !== 'empty') {
      return this.allSteps[currentIndex - 1];
    }
    return undefined;
  }

  get nextStep(): Step | undefined {
    const currentIndex = this.allSteps.findIndex((step: Step) => step.id === this.focusedStepId);
    if (
      currentIndex >= 0 &&
      currentIndex < this.allSteps.length - 1 &&
      this.allSteps[currentIndex + 1]?.displayState !== 'empty'
    ) {
      return this.allSteps[currentIndex + 1];
    }
    return undefined;
  }

  initialize(configuration: WizardConfiguration): void {
    this.configOptions = configuration.options || {};
    this.initSectionsAndSteps(configuration);
    this.applyConfigOptions();
    this.initialized = true;
    const firstFocusableStep = this.sections[0]?.steps.find((step: Step) => step.displayState !== 'empty');
    if (firstFocusableStep) {
      this.focusedStepId = firstFocusableStep.id;
      this.selectStep(firstFocusableStep.id);
    }
  }

  selectSection(sectionId: string): void {
    const firstFocusableStepOfSection = this.findFirstFocusableStepInSection(sectionId);
    if (firstFocusableStepOfSection) {
      this.selectStep(firstFocusableStepOfSection.id);
    }
  }

  selectStep(stepId: string): void {
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
          if (firstInvalidIndex !== -1) {
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

  findStepsInSection(sectionId: string): Step[] {
    const section = this.sections.find((section: Section) => section.id === sectionId);
    if (section) {
      return section.steps.filter((step: Step) => step.displayState !== 'empty');
    }
    return [];
  }

  private get currentSection(): Section | undefined {
    return this.sections.find((section: Section) => section.steps.some((step: Step) => step.id === this.focusedStepId));
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
      return section.steps.find((step: Step) => step.displayState !== 'empty');
    }
    return undefined;
  }

  private focusStep(stepId: string): void {
    const stepExists = this.sections.some((section: Section) => section.steps.some((step: Step) => step.id === stepId));
    if (stepExists) {
      set(this, 'focusedStepId', stepId);
      this.setDisplayStates();
      document.getElementById(stepId)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
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
      return {
        id: guidFor(section.key),
        key: section.key,
        steps: section.steps.map((step) => {
          return {
            id: guidFor(step.key),
            key: step.key,
            componentClass: step.componentClass,
            validateStep: step.validateStep,
            displayState: 'none',
            visited: false
          };
        })
      };
    });
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
