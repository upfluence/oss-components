import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action, computed } from '@ember/object';
import { ensureSafeComponent } from '@embroider/util';
import { later } from '@ember/runloop';

import type WizardManager from '@upfluence/oss-components/services/wizard-manager';
import { tracked } from '@glimmer/tracking';
import type { Step } from '@upfluence/oss-components/services/wizard-manager';

const SCROLL_EVENTS_DELAY = 1500;
const DEFAULT_BASE_CLASS = 'step-wrapper';
const DEFAULT_CLASS_TO_SKIP_SCROLL_LISTENER = 'prevent-wizard-scroll-events';

interface WizardStepWrapperComponentSignature {
  step: Step;
}

export default class WizardStepWrapperComponent extends Component<WizardStepWrapperComponentSignature> {
  @service declare wizardManager: WizardManager;

  @tracked scrollPosition: 'top' | 'middle' | 'bottom' | undefined = undefined;
  @tracked declare element: HTMLElement;
  @tracked wheelListenerEnabled: boolean = false;
  @tracked wheelHandled: boolean = false;

  private wheelListenerTimeoutId?: number;

  @computed('args.step.displayState')
  get isVisible(): boolean {
    return this.args.step.displayState !== 'none';
  }

  @computed('args.step.{displayState,hidden}')
  get computedClasses(): string {
    const classArray = [this.baseClass];
    if (this.args.step.displayState === 'previous') {
      classArray.push(`${this.baseClass}__previous`);
    } else if (this.args.step.displayState === 'next') {
      classArray.push(`${this.baseClass}__next`);
    } else if (this.args.step.displayState === 'active') {
      classArray.push(`${this.baseClass}__active`);
    } else if (this.args.step.hidden === true) {
      classArray.push(`${this.baseClass}__hidden`);
    }
    return classArray.join(' ');
  }

  get baseClass(): string {
    return this.wizardManager.configOptions?.stepWrapperBaseClass ?? DEFAULT_BASE_CLASS;
  }

  get componentToDisplay(): any {
    return ensureSafeComponent(this.args.step.componentClass, this);
  }

  @action
  initStepView(element: HTMLElement): void {
    this.element = element;
    this.handleScrollPosition();
  }

  @action
  onDisplayStateUpdate(): void {
    this.handleScrollPosition();
  }

  @action
  handleWheelEvent(event: WheelEvent): void {
    let target = event.target as HTMLElement | null;
    while (target) {
      if (
        target.classList &&
        target.classList.contains(
          this.wizardManager.configOptions.skipScrollEventsClass ?? DEFAULT_CLASS_TO_SKIP_SCROLL_LISTENER
        )
      ) {
        return;
      }
      target = target.parentElement;
    }

    if (!this.wizardManager.wheelEnabled || !this.wheelListenerEnabled || this.wheelHandled) return;
    if (!this.scrollPosition && !this.wheelListenerEnabled) return;
    if (this.scrollPosition === 'middle') return;
    this.wheelHandled = true;
    if (event.deltaY > 0 && (this.scrollPosition === 'bottom' || !this.scrollPosition)) {
      this.wizardManager.selectNextStep();
      setTimeout(() => {
        this.wheelHandled = false;
      }, SCROLL_EVENTS_DELAY);
    } else if ((event.deltaY < 0 && this.scrollPosition === 'top') || !this.scrollPosition) {
      this.wizardManager.selectPreviousStep();
      setTimeout(() => {
        this.wheelHandled = false;
      }, SCROLL_EVENTS_DELAY);
    }
  }

  @action
  handleScrollEvent(event: Event): void {
    const target = event.target as HTMLElement;
    const Tolerance = 1;

    if (target.scrollHeight - target.scrollTop - target.clientHeight <= Tolerance) {
      this.scrollPosition = 'bottom';
      this.enableWheelListenerAfterDelay(SCROLL_EVENTS_DELAY);
    } else if (target.scrollTop === 0) {
      this.scrollPosition = 'top';
      this.enableWheelListenerAfterDelay(SCROLL_EVENTS_DELAY);
    } else {
      this.scrollPosition = 'middle';
      if (this.wheelListenerTimeoutId) {
        window.clearTimeout(this.wheelListenerTimeoutId);
        this.wheelListenerTimeoutId = undefined;
      }
      this.wheelListenerEnabled = false;
      this.wheelHandled = false;
    }
  }

  private handleScrollPosition() {
    if (this.element.scrollHeight > this.element.clientHeight) {
      this.scrollPosition = 'top';
      this.element.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      this.wheelListenerEnabled = false;
    } else {
      this.wheelListenerEnabled = true;
    }
  }

  private enableWheelListenerAfterDelay(delay: number): void {
    if (this.wheelListenerTimeoutId) {
      window.clearTimeout(this.wheelListenerTimeoutId);
    }
    this.wheelListenerTimeoutId = later(() => {
      this.wheelListenerEnabled = true;
      this.wheelListenerTimeoutId = undefined;
    }, delay) as unknown as number;
  }
}
