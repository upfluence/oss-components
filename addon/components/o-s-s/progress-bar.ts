import Component from '@glimmer/component';
import { assert } from '@ember/debug';

enum ProgressBarSkins {
  'primary',
  'warning',
  'success'
}

interface OSSProgressBarArgs {
  value: number;
  label?: string;
  valueIsVisible?: boolean;
  skin?: ProgressBarSkins;
  small?: boolean;
}

export default class OSSProgressBar extends Component<OSSProgressBarArgs> {
  constructor(owner: unknown, args: OSSProgressBarArgs) {
    super(owner, args);

    assert(
      '[component][OSS::ProgressBar] You must pass a numbered value between 0 and 100',
      0 <= args.value && args.value <= 100
    );

    const stylesheet = document.styleSheets[0];
    const keyframesRule = `@keyframes oss-progress-bar-animation {
      from {
        width: 0;
      }
      to {
        width: ${this.args.value}%;
      }
    }`;
    stylesheet.insertRule(keyframesRule, stylesheet.cssRules.length);
  }

  get skin() {
    return this.args.skin || 'primary';
  }

  get computedStyles() {
    return 'oss-progress-bar--inner--' + this.skin;
  }

  get progressBarInnerStyle() {
    return `width: ${this.args.value + '%'}`;
  }
}
