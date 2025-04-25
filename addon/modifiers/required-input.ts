import Modifier from 'ember-modifier';

interface RequiredInputSignature {
  Element: HTMLElement;
}

export default class RegisterFormField extends Modifier<RequiredInputSignature> {
  declare targetElement: HTMLElement;

  modify(element: HTMLElement): void {
    this.targetElement = element;

    //const requiredIndicator = document.createElement('span');
    //requiredIndicator.classList.add('font-color-error-500');
    //requiredIndicator.textContent = '*';

    element.innerHTML = element.innerHTML.trim() + '<span class="font-color-error-500">*</span>';

    //element.appendChild(requiredIndicator);
  }
}
