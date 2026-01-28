import { assert } from '@ember/debug';
import { action } from '@ember/object';
import Component from '@glimmer/component';

export type textAreaResizeOptions = 'vertical' | 'horizontal' | 'none';

export interface OSSTextAreaArgs {
  rows?: number;
  resize?: textAreaResizeOptions;
  value?: string;
  disabled?: boolean;
  errorMessage?: string;
  hasError?: boolean;
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

  get resize(): textAreaResizeOptions | undefined {
    return this.args.resize;
  }

  get hasError(): boolean {
    return this.args.hasError || !!this.args.errorMessage;
  }

  get computedClass(): string {
    const classes: string[] = [];
    if (this.resize === 'vertical') classes.push('oss-textarea--resize-v');
    else if (this.resize === 'horizontal') classes.push('oss-textarea--resize-h');
    else if (this.resize === 'none') classes.push('oss-textarea--resize-none');
    if (this.hasError) classes.push('oss-textarea--errored');

    return classes.join(' ');
  }

  @action
  _onChange(value: string): void {
    this.args.onChange?.(value);
  }
}
