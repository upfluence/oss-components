import { assert } from '@ember/debug';
import Component from '@glimmer/component';
import { action } from '@ember/object';

export type Toggle = {
  value: string;
  label: string;
};

interface OSSToggleButtonsSignature {
  Args: {
    toggles: Toggle[];
    selectedToggle: string | null;
    onSelection(selectedToggle: string): void;
  };
  Element: HTMLDivElement;
}

export default class OSSToggleButtonsComponent extends Component<OSSToggleButtonsSignature> {
  constructor(owner: unknown, args: OSSToggleButtonsSignature['Args']) {
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
      '[component][OSS::ToggleButtons] The @selectedToggle parameter of type string or null is mandatory',
      args.selectedToggle === null || typeof args.selectedToggle === 'string'
    );

    assert(
      '[component][OSS::ToggleButtons] The @selectedToggle parameter should be null or a value of toggles',
      args.selectedToggle === null || args.toggles.map((item) => item.value).includes(args.selectedToggle)
    );
  }

  @action
  onSelectToggle(selectedToggle: string, event: PointerEvent): void {
    event.stopPropagation();
    if (this.args.selectedToggle !== selectedToggle) {
      this.args.onSelection(selectedToggle);
    }
  }
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'OSS::ToggleButtons': typeof OSSToggleButtonsComponent;
    'o-s-s/toggle-buttons': typeof OSSToggleButtonsComponent;
  }
}
