import { action } from '@ember/object';
import Component from '@glimmer/component';

interface OSSRadioButtonArgs {
  selected: boolean;
  disabled?: boolean;
  onChange?(newValue: boolean): void;
}

export default class OSSRadioButton extends Component<OSSRadioButtonArgs> {
  @action
  onSelection(): void {
    if (!this.args.disabled) {
      this.args.onChange?.(!this.args.selected);
    }
  }
}
