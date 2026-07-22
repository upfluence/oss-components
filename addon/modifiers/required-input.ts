import Modifier, { type ArgsFor } from 'ember-modifier';
import { registerDestructor } from '@ember/destroyable';

interface RequiredInputSignature {
  Element: HTMLElement;
}

export default class RegisterFormField extends Modifier<RequiredInputSignature> {
  declare targetElement: HTMLElement;
  markerElement?: HTMLSpanElement;

  constructor(owner: unknown, args: ArgsFor<RequiredInputSignature>) {
    super(owner, args);
    registerDestructor(this, () => this.cleanup());
  }

  modify(element: HTMLElement): void {
    this.targetElement = element;

    this.cleanup();

    const span = document.createElement('span');
    span.classList.add('font-color-error-500');
    span.textContent = '*';
    this.markerElement = span;

    element.appendChild(span);
  }

  private cleanup(): void {
    this.markerElement?.remove();
    this.markerElement = undefined;
  }
}
