import { action } from '@ember/object';
import Component from '@glimmer/component';

interface OSSRadioButtonSignature {
  Args: {
    selected: boolean;
    disabled?: boolean;
    onChange?(newValue: boolean): void;
  };
  Element: HTMLButtonElement;
}

export default class OSSRadioButtonComponent extends Component<OSSRadioButtonSignature> {
  @action
  onSelection(): void {
    if (!this.args.disabled) {
      this.args.onChange?.(!this.args.selected);
    }
  }
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'OSS::RadioButton': typeof OSSRadioButtonComponent;
    'o-s-s/radio-button': typeof OSSRadioButtonComponent;
  }
}
