import { assert } from '@ember/debug';
import Component from '@glimmer/component';
import { action } from '@ember/object';

export type Toggle = {
  value: string;
  label: string;
  icon?: string;
};

export interface OSSToggleButtonsArgs {
  toggles: Toggle[];
  selectedToggle: string | null;
  disabled?: boolean;
  onSelection(selectedToggle: string): void;
}

export default class OSSToggleButtons<T extends OSSToggleButtonsArgs> extends Component<T> {
  constructor(owner: unknown, args: OSSToggleButtonsArgs, preventDefaultAssertions?: boolean) {
    super(owner, args);

    if (preventDefaultAssertions) return;

    assert(
      '[component][OSS::ToggleButtons] The @toggles parameter of type Toggle[] is mandatory',
      this.args.toggles instanceof Array
    );

    assert(
      '[component][OSS::ToggleButtons] The @onSelection parameter of type function is mandatory',
      typeof args.onSelection === 'function'
    );

    assert(
      '[component][OSS::ToggleButtons] The @selectedToggle parameter of type string or null is mandatory',
      args.selectedToggle === null || typeof args.selectedToggle === 'string'
    );

    assert(
      '[component][OSS::ToggleButtons] The @selectedToggle parameter should be null or a value of toggles',
      args.selectedToggle === null || args.toggles.map((item) => item.value).includes(args.selectedToggle)
    );
  }

  @action
  onSelectToggle(selectedToggle: string): void {
    if (this.args.disabled) return;
    if (this.args.selectedToggle !== selectedToggle) {
      this.args.onSelection(selectedToggle);
    }
  }
}
