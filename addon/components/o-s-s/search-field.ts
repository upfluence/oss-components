import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import Component from '@glimmer/component';
import type IntlService from 'ember-intl/services/intl';

interface OSSSearchFieldArgs {
  value: string;
  placeholder?: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (value: string) => void;
}

export default class OSSSearchFieldComponent extends Component<OSSSearchFieldArgs> {
  @service declare intl: IntlService;
  @tracked value = this.args.value;

  get placeholder(): string {
    return this.args.placeholder || this.intl.t('oss-components.access-panel.search_placeholder');
  }

  @action
  onClearSearch(): void {
    this.value = '';
    this.args.onChange('');
  }

  @action
  onChange(value: string): void {
    this.value = value;
    this.args.onChange(value);
  }
}
