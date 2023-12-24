import { assert } from '@ember/debug';
import { action } from '@ember/object';
import Component from '@glimmer/component';

interface OSSTextAreaSignature {
  Args: {
    rows?: number;
    resize?: 'vertical' | 'horizontal' | 'none';
    value?: string;
    disabled?: boolean;
    errorMessage?: string;
    placeholder?: string;
    onChange?(value: string): void;
  };
  Element: HTMLDivElement;
}

export default class OSSTextAreaComponent extends Component<OSSTextAreaSignature> {
  constructor(owner: unknown, args: OSSTextAreaSignature['Args']) {
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

  get computedClass(): string {
    const classes: string[] = [];
    if (this.args.resize === 'vertical') classes.push('oss-textarea--resize-v');
    else if (this.args.resize === 'horizontal') classes.push('oss-textarea--resize-h');
    else if (this.args.resize === 'none') classes.push('oss-textarea--resize-none');

    return classes.join(' ');
  }

  @action
  _onChange(value: string): void {
    this.args.onChange?.(value);
  }
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'OSS::TextArea': typeof OSSTextAreaComponent;
    'o-s-s/text-area': typeof OSSTextAreaComponent;
  }
}
