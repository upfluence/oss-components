import { assert } from '@ember/debug';
import OSSToggleButtons, { type OSSToggleButtonsArgs } from '../toggle-buttons';

interface OSSSmartToggleButtonsArgs extends OSSToggleButtonsArgs {}

export default class OSSSmartToggleButtons extends OSSToggleButtons<OSSToggleButtonsArgs> {
  constructor(owner: unknown, args: OSSSmartToggleButtonsArgs) {
    super(owner, args, true);

    assert(
      '[component][OSS::Smart::ToggleButtons] The @toggles parameter of type Toggle[] is mandatory',
      this.args.toggles instanceof Array
    );

    assert(
      '[component][OSS::Smart::ToggleButtons] The @onSelection parameter of type function is mandatory',
      typeof args.onSelection === 'function'
    );

    assert(
      '[component][OSS::Smart::ToggleButtons] The @selectedToggle parameter of type string or null is mandatory',
      args.selectedToggle === null || typeof args.selectedToggle === 'string'
    );

    assert(
      '[component][OSS::Smart::ToggleButtons] The @selectedToggle parameter should be null or a value of toggles',
      args.selectedToggle === null || args.toggles.map((item) => item.value).includes(args.selectedToggle)
    );
  }
}
