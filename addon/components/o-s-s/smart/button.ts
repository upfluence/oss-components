import { assert } from '@ember/debug';
import OSSButton, { type OSSButtonArgs } from '../button';

type SmartSkinType = 'primary' | 'secondary';

type SmartSkinDefType = {
  [key in SmartSkinType]: string;
};

const SmartSkinDefinition: SmartSkinDefType = {
  primary: 'primary',
  secondary: 'secondary'
};

const SMART_BASE_CLASS = 'upf-smart-btn';
const SMART_SQUARE_CLASS = 'upf-smart-square-btn';

interface OSSSmartButtonArgs extends OSSButtonArgs {
  disabled?: boolean;
  circle?: boolean;
}

export default class OSSSmartButton extends OSSButton<OSSSmartButtonArgs> {
  constructor(owner: unknown, args: OSSSmartButtonArgs) {
    super(owner, args, true);

    assert(
      '[component][OSS::Smart::Button] You must pass either a @label, an @icon or an @iconUrl argument.',
      args.label || args.icon || args.iconUrl
    );
  }

  get isCircle(): boolean {
    return this.args.square || this.args.circle || false;
  }

  get smartSkin(): string {
    if (!this.args.skin) {
      return SmartSkinDefinition.primary;
    }
    return SmartSkinDefinition[this.args.skin as SmartSkinType] ?? SmartSkinDefinition.primary;
  }

  get computedSmartClasses(): string {
    let classes = [this.isCircle ? SMART_SQUARE_CLASS : SMART_BASE_CLASS, `upf-smart-btn--${this.smartSkin}`];

    if (this.size) {
      classes.push(this.isCircle ? `upf-smart-square-btn--${this.size}` : `upf-smart-btn--${this.size}`);
    }

    return classes.join(' ');
  }
}
