import Component from '@glimmer/component';
import { assert } from '@ember/debug';
import { htmlSafe } from '@ember/template';
import { helper } from '@ember/component/helper';
import { tracked } from '@glimmer/tracking';

type ProgressBarSkins = 'warning' | 'success' | 'danger';
type ProgressBarSizes = 'xs' | 'sm';

interface OSSProgressBarArgs {
  value: number;
  label?: string;
  displayValue?: boolean;
  skin?: ProgressBarSkins;
  size?: ProgressBarSizes;
  coloredBackground?: boolean;
  secondarySkin?: ProgressBarSkins;
  skins?: Record<ProgressBarSkins, number>;
}

export default class OSSProgressBar extends Component<OSSProgressBarArgs> {
  @tracked private isInitialRender = true;

  constructor(owner: unknown, args: OSSProgressBarArgs) {
    super(owner, args);

    if (args.skins) {
      const total = Object.values(args.skins).reduce((sum, v) => sum + v, 0);
      assert(
        '[component][OSS::ProgressBar] The sum of all skins values must be between 0 and 100',
        total >= 0 && total <= 100
      );
    } else {
      assert(
        '[component][OSS::ProgressBar] You must pass a numbered value between 0 and 100',
        args.value >= 0 && args.value <= 100
      );
    }

    setTimeout(() => {
      this.isInitialRender = false;
    }, 1000);
  }

  get hasSkins(): boolean {
    return !!this.args.skins && Object.keys(this.args.skins).length > 0;
  }

  get progressSegments(): ProgressBarSkins[] {
    return this.hasSkins ? (Object.keys(this.args.skins!) as ProgressBarSkins[]) : [];
  }

  isSegmentVisible = helper((_, { skin }: { skin: ProgressBarSkins }): boolean => {
    return this.hasSkins && (this.args.skins![skin] || 0) > 0;
  });

  getSegmentValue = helper((_, { skin }: { skin: ProgressBarSkins }): number => {
    return this.hasSkins ? this.args.skins![skin] || 0 : 0;
  });

  progressBarStyle = helper((_, { value }: { value: number }): ReturnType<typeof htmlSafe> => {
    const styles = [`width: ${value}%`];
    if (this.isInitialRender) {
      styles.push(`--progress-bar-animation-width: ${value}%`);
    }
    return htmlSafe(styles.join('; '));
  });

  get computedStyles(): string {
    const classes = ['oss-progress-bar'];

    if (this.args.size) classes.push(`oss-progress-bar--${this.args.size}`);
    if (this.args.skin && !this.hasSkins) classes.push(`oss-progress-bar--${this.args.skin}`);
    if (this.args.coloredBackground) classes.push('oss-progress-bar--colored-background');
    if (this.args.secondarySkin) classes.push(`oss-progress-bar--secondary-skin--${this.args.secondarySkin}`);
    if (this.hasSkins) classes.push('oss-progress-bar--multi-skin');

    return classes.join(' ');
  }

  get progressBarWidthStyle(): ReturnType<typeof htmlSafe> {
    const styles = [`width: ${this.args.value}%`];
    if (this.isInitialRender) {
      styles.push(`--progress-bar-animation-width: ${this.args.value}%`);
    }
    return htmlSafe(styles.join('; '));
  }

  get progressBarInnerClasses(): string {
    const classes = ['oss-progress-bar__inner'];
    if (this.isInitialRender) {
      classes.push('oss-progress-bar__inner--initial');
    }
    return classes.join(' ');
  }

  getSegmentClasses = helper((_, { skin }: { skin: ProgressBarSkins }): string => {
    const classes = ['oss-progress-bar__inner', `oss-progress-bar__inner--${skin}`];
    if (this.isInitialRender) {
      classes.push('oss-progress-bar__inner--initial');
    }
    return classes.join(' ');
  });

  get totalProgress(): number {
    return this.hasSkins ? Object.values(this.args.skins!).reduce((sum, v) => sum + v, 0) : this.args.value;
  }
}
