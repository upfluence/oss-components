import { assert } from '@ember/debug';
import Component from '@glimmer/component';
import { action } from '@ember/object';

export type Toggle = {
  value: string;
  label: string;
};

interface OSSToggleButtonsArgs {
  toggles: Toggle[];
  selectedToggle?: string;
  onSelection(selectedToggle: string): void;
}

export default class OSSToggleButtons extends Component<OSSToggleButtonsArgs> {
  constructor(owner: unknown, args: OSSToggleButtonsArgs) {
    super(owner, args);

    assert(
      '[component][OSS::ToggleButtons] The @toggles parameter of type Toggle[] is mandatory',
      typeof this.args.toggles === 'object'
    );

    assert(
      '[component][OSS::ToggleButtons] The @onSelection parameter of type function is mandatory',
      typeof args.onSelection === 'function'
    );
  }

  get selectedToggle(): string {
    return (
      this.args.toggles.find((item: Toggle) => {
        return item.value === this.args.selectedToggle;
      })?.value || this.args.toggles[0].value
    );
  }

  @action
  onSelectToggle(selectedToggle: string): void {
    this.args.onSelection(selectedToggle);
  }
}
