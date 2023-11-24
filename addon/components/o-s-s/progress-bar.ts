import Component from '@glimmer/component';
import { assert } from '@ember/debug';

type ProgressBarSkins = 'primary' | 'warning' | 'success';
type ProgressBarSizes = 'sm' | 'lg';

interface OSSProgressBarArgs {
  value: number;
  label?: string;
  displayValue?: boolean;
  skin?: ProgressBarSkins;
  small?: boolean;
  size?: ProgressBarSizes;
}

export default class OSSProgressBar extends Component<OSSProgressBarArgs> {
  constructor(owner: unknown, args: OSSProgressBarArgs) {
    super(owner, args);

    assert(
      '[component][OSS::ProgressBar] You must pass a numbered value between 0 and 100',
      typeof args.value === 'number' && args.value >= 0 && args.value <= 100
    );

    document.documentElement.style.setProperty('--progress-bar-animation-width', `${args.value}%`);
  }

  get skin(): string {
    return this.args.skin || 'primary';
  }

  get size(): string {
    return this.args.size || 'lg';
  }

  get computedStyles(): string {
    return 'oss-progress-bar--inner--' + this.skin;
  }

  get progressBarInnerStyle(): string {
    return `width: ${this.args.value + '%'}`;
  }
}
