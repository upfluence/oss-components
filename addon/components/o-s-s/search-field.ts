import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@glimmer/component';
import { onlyNumeric } from '@upfluence/oss-components/utils/keyboard';
import type IntlService from 'ember-intl/services/intl';

interface OSSSearchFieldArgs {
  value: string;
  placeholder?: string;
  type?: string;
  onChange(value: string): void;
}

export default class OSSSearchFieldComponent extends Component<OSSSearchFieldArgs> {
  @service declare intl: IntlService;

  get placeholder(): string {
    return this.args.placeholder ?? this.intl.t('oss-components.search_field.placeholder');
  }

  get type(): string {
    return this.args.type ?? 'text';
  }

  @action
  onClearSearch(event: Event): void {
    event.stopPropagation();
    this.args.onChange('');
  }

  @action
  onChange(event: Event): void {
    this.args.onChange((event.target as HTMLInputElement).value);
  }

  @action
  setupOnlyNumericListener(element: HTMLElement): void {
    if (this.type !== 'number') return;
    const input: HTMLInputElement | null = element.querySelector('input');
    input?.addEventListener('keydown', onlyNumeric);
  }

  @action
  teardownOnlyNumericListener(element: HTMLElement): void {
    if (this.type !== 'number') return;
    const input: HTMLInputElement | null = element.querySelector('input');
    input?.removeEventListener('keydown', onlyNumeric);
  }
}
