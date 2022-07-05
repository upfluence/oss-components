import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { assert } from '@ember/debug';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { isEmpty } from '@ember/utils';

interface OSSSelectArgs {
  value: any;
  items: any[];
  placeholder?: string;
  disabled?: boolean;
  errorMessage?: string;
  successMessage?: string;
  onChange(value: any): void;
  onSearch?(keyword: string): void;
}

export default class OSSSelect extends Component<OSSSelectArgs> {
  @service declare intl: any;

  @tracked displaySelect: boolean = false;
  @tracked filteredItems: any[] = [];

  constructor(owner: unknown, args: OSSSelectArgs) {
    super(owner, args);

    assert(
      '[component][OSS::Select] The parameter @onChange of type function is mandatory',
      typeof this.args.onChange === 'function'
    );

    this.filteredItems = args.items;
  }

  get searchEnabled(): boolean {
    return typeof this.args.onSearch === 'function';
  }

  get placeholder(): string {
    return this.args.placeholder || this.intl.t('oss-components.select.placeholder');
  }

  get classNames(): string {
    const classes = ['oss-select-container'];

    if (this.args.disabled) {
      classes.push('oss-select-container--disabled');
    }

    if (typeof this.args.errorMessage === 'string' && !isEmpty(this.args.errorMessage)) {
      classes.push('oss-select-container--errorful');
    }

    if (typeof this.args.successMessage === 'string' && !isEmpty(this.args.successMessage)) {
      classes.push('oss-select-container--successful');
    }

    return classes.join(' ');
  }

  @action
  onSelect(value: any): void {
    this.args.onChange(value);
    this.hideSelector();
  }

  @action
  onSearch(keyword: any) {
    this.args.onSearch?.(keyword);
  }

  @action
  toggleSelector(e: any): void {
    e.stopPropagation();

    if (this.args.disabled) return;

    this.displaySelect = !this.displaySelect;
  }

  @action
  hideSelector(): void {
    this.displaySelect = false;
    this.filteredItems = this.args.items;
  }

  @action
  ensureBlockPresence(hasOptionItem: boolean): void | never {
    assert(`[component][OSS::PowerSelect] You must pass option-item named block`, hasOptionItem);
  }
}
