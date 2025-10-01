import Component from '@glimmer/component';
import { assert } from '@ember/debug';
import { htmlSafe } from '@ember/template';

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
  // New property to support multiple skins with their respective values
  // Each skin key maps to its percentage value (0-100)
  skins?: Record<ProgressBarSkins, number>;
}

export default class OSSProgressBar extends Component<OSSProgressBarArgs> {
  constructor(owner: unknown, args: OSSProgressBarArgs) {
    super(owner, args);

    if (args.skins) {
      // Validate that the sum of all skin values doesn't exceed 100%
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
  }

  // Check if multi-skin mode is enabled
  get hasSkins(): boolean {
    return !!this.args.skins && Object.keys(this.args.skins).length > 0;
  }

  // Generate progress segments for multi-skin mode
  // Returns an array of segments with skin type, value, and calculated width
  get progressSegments(): { skin: ProgressBarSkins; value: number; width: string }[] {
    if (!this.hasSkins) return [];

    const skins = this.args.skins!;
    return (Object.entries(skins) as [ProgressBarSkins, number][])
      .filter(([, value]) => value > 0) // Only include segments with positive values
      .map(([skin, value]) => ({
        skin,
        value,
        width: `${value}%` // Convert value to CSS width percentage
      }));
  }

  get computedStyles(): string {
    const classes = ['oss-progress-bar'];

    if (this.args.size) {
      classes.push('oss-progress-bar--' + this.args.size);
    }

    if (this.args.skin && !this.hasSkins) {
      classes.push('oss-progress-bar--' + this.args.skin);
    }

    if (this.args.coloredBackground) {
      classes.push('oss-progress-bar--colored-background');
    }

    if (this.args.secondarySkin) {
      classes.push('oss-progress-bar--secondary-skin--' + this.args.secondarySkin);
    }

    // Add multi-skin class when using multiple skins
    if (this.hasSkins) {
      classes.push('oss-progress-bar--multi-skin');
    }

    return classes.join(' ');
  }

  get progressBarWidthStyle(): ReturnType<typeof htmlSafe> {
    if (this.hasSkins) {
      // For multi-skin mode, width is handled per segment in the template
      return htmlSafe('width: 100%;');
    }
    return htmlSafe(`width: ${this.args.value + '%'}; --progress-bar-animation-width: ${this.args.value + '%'};`);
  }

  // Calculate total progress value for display purposes
  get totalProgress(): number {
    if (this.hasSkins) {
      // Sum all skin values when in multi-skin mode
      return Object.values(this.args.skins!).reduce((sum, v) => sum + v, 0);
    }
    // Return single value when in standard mode
    return this.args.value;
  }
}
