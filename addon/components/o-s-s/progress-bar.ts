import Component from '@glimmer/component';
import { assert } from '@ember/debug';

type ProgressBarSkins = 'warning' | 'success';
type ProgressBarSizes = 'sm';

interface OSSProgressBarSignature {
  Args: {
    value: number;
    label?: string;
    displayValue?: boolean;
    skin?: ProgressBarSkins;
    size?: ProgressBarSizes;
  };
  Element: HTMLDivElement;
}

export default class OSSProgressBarComponent extends Component<OSSProgressBarSignature> {
  constructor(owner: unknown, args: OSSProgressBarSignature['Args']) {
    super(owner, args);

    assert(
      '[component][OSS::ProgressBar] You must pass a numbered value between 0 and 100',
      typeof args.value === 'number' && args.value >= 0 && args.value <= 100
    );
  }

  get computedStyles(): string {
    const classes = ['oss-progress-bar'];

    if (this.args.size) {
      classes.push('oss-progress-bar--' + this.args.size);
    }

    if (this.args.skin) {
      classes.push('oss-progress-bar--' + this.args.skin);
    }

    return classes.join(' ');
  }

  get progressBarWidthStyle(): string {
    return `width: ${this.args.value + '%'}; --progress-bar-animation-width: ${this.args.value + '%'};`;
  }
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'OSS::ProgressBar': typeof OSSProgressBarComponent;
    'o-s-s/progress-bar': typeof OSSProgressBarComponent;
  }
}
