import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@glimmer/component';
import type IntlService from 'ember-intl/services/intl';

interface OSSSearchFieldArgs {
  value: string;
  placeholder?: string;
  onChange(value: string): void;
}

export default class OSSSearchFieldComponent extends Component<OSSSearchFieldArgs> {
  @service declare intl: IntlService;

  get placeholder(): string {
    return this.args.placeholder ?? this.intl.t('oss-components.search_field.placeholder');
  }

  @action
  onClearSearch(): void {
    this.args.onChange('');
  }

  @action
  onChange(value: string): void {
    this.args.onChange(value);
  }
}
