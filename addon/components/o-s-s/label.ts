import Component from '@glimmer/component';
import { assert } from '@ember/debug';

type SizeType = 'xs' | 'sm' | 'md' | 'lg';
type WeightType = 'normal' | 'medium' | 'semibold' | 'bold';

interface OSSLabelArgs {
  text?: string;
  size?: SizeType;
  weight?: WeightType;
  required?: boolean;
  disabled?: boolean;
  for?: string;
}

const SIZE_DEFINITION: Record<SizeType, string> = {
  xs: 'xs',
  sm: 'sm',
  md: 'md',
  lg: 'lg'
};

const WEIGHT_DEFINITION: Record<WeightType, string> = {
  normal: 'normal',
  medium: 'medium',
  semibold: 'semibold',
  bold: 'bold'
};

const BASE_CLASS = 'oss-label';

export default class OSSLabel extends Component<OSSLabelArgs> {
  constructor(owner: unknown, args: OSSLabelArgs) {
    super(owner, args);

    assert(
      '[component][OSS::Label] You must pass either a @text argument or provide content via a block.',
      args.text || this.hasBlock
    );
  }

  get hasBlock(): boolean {
    return this.args.text === undefined;
  }

  get size(): string {
    if (!this.args.size) {
      return SIZE_DEFINITION.md;
    }
    return SIZE_DEFINITION[this.args.size] ?? SIZE_DEFINITION.md;
  }

  get weight(): string {
    if (!this.args.weight) {
      return WEIGHT_DEFINITION.normal;
    }
    return WEIGHT_DEFINITION[this.args.weight] ?? WEIGHT_DEFINITION.normal;
  }

  get computedClass(): string {
    const classes = [
      BASE_CLASS,
      `${BASE_CLASS}--${this.size}`,
      `${BASE_CLASS}--${this.weight}`
    ];

    if (this.args.required) {
      classes.push(`${BASE_CLASS}--required`);
    }

    if (this.args.disabled) {
      classes.push(`${BASE_CLASS}--disabled`);
    }

    return classes.join(' ');
  }
}