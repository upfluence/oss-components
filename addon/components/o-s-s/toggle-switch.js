import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class OSSToggleSwitchComponent extends Component {
  isDisabled = false;

  constructor(owner, args) {
    super(owner, args);

    if (!args.onChange) {
      throw new Error('[component][OSS::ToggleSwitch] Please provide an onChange action');
    }

    if (typeof args.value !== 'boolean') {
      throw new Error(`[component][OSS::ToggleSwitch] Please provide a boolean @value. @value is ${typeof args.value}`);
    }

    if (typeof args.disabled !== 'undefined' && typeof args.disabled !== 'boolean') {
      throw new Error(
        `[component][OSS::ToggleSwitch] Please provide a boolean @disabled. @disabled is ${typeof args.disabled}`
      );
    } else {
      this.isDisabled = this.args.disabled;
    }
  }

  @action
  switchState() {
    if (!this.isDisabled) {
      this.args.onChange(!this.args.value);
    }
  }
}
