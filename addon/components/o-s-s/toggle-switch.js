import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class OSSToggleSwitchComponent extends Component {
  constructor(owner, args) {
    super(owner, args);

    if (!args.onChange) {
      throw new Error('[component][OSS::ToggleSwitch] Please provide an onChange action');
    }

    if (typeof args.value !== 'boolean') {
      throw new Error('[component][OSS::ToggleSwitch] Please provide a value argument. @value must be a boolean');
    }
  }

  @action
  switchState() {
    this.args.onChange(!this.args.value);
  }
}
