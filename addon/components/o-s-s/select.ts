import { tracked } from '@glimmer/tracking';
import { assert } from '@ember/debug';
import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';
import { inject as service } from '@ember/service';
import { isEmpty } from '@ember/utils';
import { scheduleOnce } from '@ember/runloop';
import { isTesting } from '@embroider/macros';

import type IntlService from 'ember-intl/services/intl';
import attachDropdown from '@upfluence/oss-components/utils/attach-dropdown';
import BaseDropdown from './private/base-dropdown';

interface OSSSelectArgs {
  value: any;
  items: any[];
  targetLabel?: string;
  placeholder?: string;
  disabled?: boolean;
  errorMessage?: string;
  successMessage?: string;
  onChange(value: any): void;
  onSearch?(keyword: string): void;
}

export default class OSSSelect extends BaseDropdown<OSSSelectArgs> {
  @service declare intl: IntlService;

  @tracked displaySelect: boolean = false;

  cleanupDrodpownAutoplacement?: () => void;
  portalId: string = guidFor(this);

  declare portalTarget: HTMLElement;

  constructor(owner: unknown, args: OSSSelectArgs) {
    super(owner, args);

    assert(
      '[component][OSS::Select] The parameter @onChange of type function is mandatory',
      typeof this.args.onChange === 'function'
    );
  }

  get searchEnabled(): boolean {
    return typeof this.args.onSearch === 'function';
  }

  get placeholder(): string {
    return this.args.placeholder || this.intl.t('oss-components.select.placeholder');
  }

  get searchPlaceholder(): string {
    return this.intl.t('oss-components.select.search');
  }

  get targetValue(): string {
    return this.args.targetLabel || 'label';
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

  noop(event: Event): void {
    event.stopPropagation();
  }

  @action
  onSelect(value: any): void {
    this.args.onChange(value);
    this.hideSelector();
  }

  @action
  onSearch(keyword: string): void {
    this.args.onSearch?.(keyword);
  }

  @action
  toggleDropdown(event: PointerEvent): void {
    if (this.args.disabled) return;

    super.toggleDropdown(event);

    if (!this.isOpen) {
      this.args.onSearch?.('');
      return;
    }

    scheduleOnce('afterRender', this, () => {
      const referenceTarget = this.container.querySelector('.upf-input');
      const floatingTarget = document.querySelector(`#${this.portalId}`);

      if (referenceTarget && floatingTarget) {
        this.cleanupDrodpownAutoplacement = attachDropdown(
          referenceTarget as HTMLElement,
          floatingTarget as HTMLElement
        );
      }
    });
  }

  @action
  onClickOutside(_: Element, event: PointerEvent): void {
    event.stopPropagation();
    this.hideSelector();
  }

  @action
  hideSelector(): void {
    this.closeDropdown();
    this.args.onSearch?.('');
    this.cleanupDrodpownAutoplacement?.();
    document.querySelector(`#${this.portalId}`)?.remove();
  }

  @action
  handleSelectorClose(): void {
    this.hideSelector();
  }

  @action
  registerContainer(element: HTMLDetailsElement): void {
    super.registerContainer(element);
    this.portalTarget = isTesting() ? this.container : document.body;
  }

  @action
  ensureBlockPresence(hasOptionItem: boolean): void {
    assert(`[component][OSS::Select] You must pass option named block`, hasOptionItem);
  }
}
