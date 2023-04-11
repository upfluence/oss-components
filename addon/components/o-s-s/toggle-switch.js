import Component from '@glimmer/component';
import { assert } from '@ember/debug';
import { action } from '@ember/object';

export default class OSSToggleSwitchComponent extends Component {
  constructor(owner, args) {
    super(owner, args);

    assert('[component][OSS::ToggleSwitch] Please provide an onChange action', args.onChange);
    assert(
      `[component][OSS::ToggleSwitch] Please provide a boolean @value. @value is ${typeof args.value}`,
      typeof args.value === 'boolean'
    );
    assert(
      `[component][OSS::ToggleSwitch] Please provide a boolean @disabled. @disabled is ${typeof args.disabled}`,
      typeof args.disabled === 'undefined' ? true : typeof args.disabled === 'boolean'
    );
  }

  @action
  switchState(event) {
    if (!this.args.disabled) {
      this.args.onChange(!this.args.value, event);
    }
  }
}
