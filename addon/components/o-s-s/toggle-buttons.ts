import { assert } from '@ember/debug';
import Component from '@glimmer/component';
import { action } from '@ember/object';

export type toggle = {
  value: string;
  label: string;
};

interface OSSToggleButtonsArgs {
  toggles: toggle[];
  selectedToggle?: string;
  onSelection(selectedToggle: string): void;
}

export default class OSSToggleButtons extends Component<OSSToggleButtonsArgs> {
  constructor(owner: unknown, args: OSSToggleButtonsArgs) {
    super(owner, args);

    assert('[component][OSS::ToggleButtons] The @toggles parameter of type object is mandatory', args.toggles);

    assert(
      '[component][OSS::ToggleButtons] The @onSelection parameter of type function is mandatory',
      typeof args.onSelection === 'function'
    );
  }

  get selectedToggle(): string {
    if (this.args.selectedToggle) {
      const find = this.args.toggles.find((item: toggle) => item.value == this.args.selectedToggle);
      if (find) {
        return find.value;
      }
    }

    return this.args.toggles[0].value;
  }

  @action
  onSelectToggle(selectedToggle: string): void {
    this.args.onSelection(selectedToggle);
  }
}
