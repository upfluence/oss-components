import Component from '@glimmer/component';
import { assert } from '@ember/debug';

type ProgressBarSkins = 'warning' | 'success';
type ProgressBarSizes = 'sm';

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

  get computedSize(): string {
    return this.args.size ? 'oss-progress-bar__' + this.args.size : '';
  }

  get computedStyles(): string {
    return this.args.skin ? 'oss-progress-bar__' + this.args.skin : '';
  }

  get progressBarWidthStyle(): string {
    return `width: ${this.args.value + '%'}`;
  }
}
