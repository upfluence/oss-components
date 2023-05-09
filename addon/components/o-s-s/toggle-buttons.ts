import { assert } from '@ember/debug';
import Component from '@glimmer/component';
import { action } from '@ember/object';

export type Toggle = {
  value: string;
  label: string;
};

interface OSSToggleButtonsArgs {
  toggles: Toggle[];
  selectedToggle: string;
  onSelection(selectedToggle: string): void;
}

export default class OSSToggleButtons extends Component<OSSToggleButtonsArgs> {
  constructor(owner: unknown, args: OSSToggleButtonsArgs) {
    super(owner, args);

    assert(
      '[component][OSS::ToggleButtons] The @toggles parameter of type Toggle[] is mandatory',
      this.args.toggles instanceof Array
    );

    assert(
      '[component][OSS::ToggleButtons] The @onSelection parameter of type function is mandatory',
      typeof args.onSelection === 'function'
    );

    assert(
      '[component][OSS::ToggleButtons] The @selectedToggle parameter of type string is mandatory',
      typeof args.selectedToggle === 'string'
    );

    assert(
      '[component][OSS::ToggleButtons] The @selectedToggle parameter should be a value of toggles',
      args.toggles.map((item) => item.value).includes(args.selectedToggle)
    );
  }

  @action
  onSelectToggle(selectedToggle: string): void {
    this.args.onSelection(selectedToggle);
  }
}
