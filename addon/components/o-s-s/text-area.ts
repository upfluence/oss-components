import { assert } from '@ember/debug';
import { action } from '@ember/object';
import Component from '@glimmer/component';

export interface OSSTextAreaArgs {
  rows?: number;
  resize?: 'vertical' | 'horizontal' | 'none';
  value?: string;
  disabled?: boolean;
  errorMessage?: string;
  placeholder?: string;
  onChange?(value: string): void;
}

export default class OSSTextArea<T extends OSSTextAreaArgs> extends Component<T> {
  constructor(owner: unknown, args: OSSTextAreaArgs) {
    super(owner, args);

    if (this.args.resize) {
      assert(
        '[component][OSS::TextArea] The @resize parameter should be a value of resize',
        ['vertical', 'horizontal', 'none'].includes(this.args.resize)
      );
    }
  }

  get rows(): number {
    return this.args.rows || 2;
  }

  get resize(): 'vertical' | 'horizontal' | 'none' | undefined {
    return this.args.resize;
  }

  get computedClass(): string {
    const classes: string[] = [];
    if (this.resize === 'vertical') classes.push('oss-textarea--resize-v');
    else if (this.resize === 'horizontal') classes.push('oss-textarea--resize-h');
    else if (this.resize === 'none') classes.push('oss-textarea--resize-none');

    return classes.join(' ');
  }

  @action
  _onChange(value: string): void {
    this.args.onChange?.(value);
  }
}
