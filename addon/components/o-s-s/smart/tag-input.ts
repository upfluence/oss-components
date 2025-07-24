import { action } from '@ember/object';
import { isBlank } from '@ember/utils';
import { inject as service } from '@ember/service';
import type { IntlService } from 'ember-intl';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import type { TagType } from './tag';

export type Keyword = {
  value: string;
  type: TagType;
};

interface OSSSmartTagInputArgs {
  value: string;
  onKeydown(keyword: Keyword): void;
  loading?: boolean;
  hasError?: boolean;
}

export default class OSSSmartTagInput extends Component<OSSSmartTagInputArgs> {
  @service declare intl: IntlService;

  @tracked inputValue: string = this.args.value || '';
  @tracked isInputFocused: boolean = false;
  @tracked declare element: HTMLElement;

  get keywordInputClasses(): string {
    const classes = ['tag-input'];
    if (this.isInputFocused) {
      classes.push('tag-input--focus');
    }
    if (isBlank(this.inputValue)) {
      classes.push('tag-input--empty');
    }
    if (this.args.hasError) {
      console.log('input has error');
      classes.push('tag-input--error');
    }
    return classes.join(' ');
  }

  get placeholder(): string {
    return this.intl.t('oss-components.smart.tag_input.placeholder');
  }

  @action
  registerElement(element: HTMLElement): void {
    this.element = element;
  }

  @action
  onClickQueryBuilder(): void {
    this.focusKeywordInput();
  }

  @action
  onFocusin(): void {
    this.isInputFocused = true;
  }

  @action
  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter' || event.key === 'Tab') {
      this.saveKeyword();
    }
  }

  @action
  onClickOutside(_: any, event: Event): void {
    if (!this.isInputFocused) return;
    this.isInputFocused = false;
    if (isBlank(this.inputValue)) return;
    event.stopImmediatePropagation();
    this.saveKeyword();
  }

  private saveKeyword(): void {
    if (this.inputValue.trim().length > 0) {
      let type: TagType = 'keyword';
      if (this.inputValue.startsWith('@')) {
        type = 'mention';
      } else if (this.inputValue.startsWith('#')) {
        type = 'hashtag';
      }
      let keyword = { value: this.inputValue.trim(), type };
      this.args.onKeydown(keyword);
      this.inputValue = '';
    }
  }

  private focusKeywordInput(): void {
    (this.element.querySelector('[data-control-name="tag-input"]') as HTMLInputElement)?.focus();
  }
}
