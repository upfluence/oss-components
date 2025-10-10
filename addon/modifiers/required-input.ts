import Modifier from 'ember-modifier';

interface RequiredInputSignature {
  Element: HTMLElement;
}

export default class RegisterFormField extends Modifier<RequiredInputSignature> {
  declare targetElement: HTMLElement;

  modify(element: HTMLElement): void {
    this.targetElement = element;

    const span = document.createElement('span');
    span.classList.add('font-color-error-500');
    span.textContent = '*';

    element.appendChild(span);
  }
}
