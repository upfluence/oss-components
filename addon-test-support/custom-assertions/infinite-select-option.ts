import * as QUnit from 'qunit';
import { isEmpty } from '@ember/utils';

export type SelectionType = 'single' | 'multiple' | undefined;
export type PrefixType = 'avatar' | 'badge' | 'icon' | 'country';
export type SuffixType = 'hint' | 'tag' | 'icon';

export interface InfiniteSelectOptionAssertions {
  exists(message?: string): void;
  doesNotExist(message?: string): void;
  hasTitle(title: string, message?: string): void;
  hasSubtitle(subtitle: string, message?: string): void;
  doesNotHaveSubtitle(message?: string): void;
  isSelected(message?: string): void;
  isNotSelected(message?: string): void;
  isDisabled(message?: string): void;
  isNotDisabled(message?: string): void;
  hasSelectionType(selectionType: SelectionType, message?: string): void;
  hasPrefix(type: PrefixType, message?: string): void;
  doesNotHavePrefix(type: PrefixType, message?: string): void;
  hasIcon(message?: string): void;
  doesNotHaveIcon(message?: string): void;
  hasSuffix(type: SuffixType, value?: string, message?: string): void;
  doesNotHaveSuffix(type: SuffixType, message?: string): void;
}

const PREFIX_TYPE_CLASS_MAP: Record<PrefixType, string> = {
  avatar: '.oss-infinite-select-option__prefix-avatar',
  badge: '.oss-infinite-select-option__prefix-badge',
  icon: '.oss-infinite-select-option__prefix-icon',
  country: '.oss-infinite-select-option__prefix-country'
};

const SUFFIX_TYPE_CLASS_MAP: Record<SuffixType, string> = {
  hint: '.oss-infinite-select-option__suffix-hint',
  tag: '.oss-infinite-select-option__suffix-tag',
  icon: '.oss-infinite-select-option__suffix-icon'
};

const assertion = (selector: string): InfiniteSelectOptionAssertions => {
  const getElement = (): Element | null => {
    return document.querySelector(selector);
  };

  const assertElementExists = (methodName: string): boolean => {
    const element = getElement();
    if (element) return true;

    QUnit.assert.pushResult({
      result: false,
      actual: element !== null,
      expected: true,
      message: `[assert.infinite-select-option] Element with selector "${selector}" not found. Make sure the component is rendered before calling .${methodName}()`
    });
    return false;
  };

  return {
    exists: (message?: string): void => {
      const element = getElement();
      const result = element !== null && element.classList.contains('oss-infinite-select-option');

      QUnit.assert.pushResult({
        result,
        actual: element !== null,
        expected: true,
        message: message ?? `InfiniteSelect::Option exists at selector "${selector}"`
      });
    },

    doesNotExist: (message?: string): void => {
      const element = getElement();
      const result = element === null || !element.classList.contains('oss-infinite-select-option');

      QUnit.assert.pushResult({
        result,
        actual: element === null,
        expected: true,
        message: message ?? `InfiniteSelect::Option does not exist at selector "${selector}"`
      });
    },

    hasTitle: (title: string, message?: string): void => {
      if (!assertElementExists('hasTitle')) return;
      const element: Element = getElement()!;
      const titleElement = element.querySelector('.oss-infinite-select-option__title');
      const actual = titleElement ? (titleElement as HTMLElement).textContent?.trim() : '';
      const result = actual === title;

      QUnit.assert.pushResult({
        result,
        actual,
        expected: title,
        message: message ?? `InfiniteSelect::Option has title "${title}"`
      });
    },

    hasSubtitle: (subtitle: string, message?: string): void => {
      if (!assertElementExists('hasSubtitle')) return;
      const element: Element = getElement()!;
      const subtitleElement = element.querySelector('.oss-infinite-select-option__subtitle');
      const actual = subtitleElement ? (subtitleElement as HTMLElement).textContent?.trim() : '';
      const result = actual === subtitle;

      QUnit.assert.pushResult({
        result,
        actual,
        expected: subtitle,
        message: message ?? `InfiniteSelect::Option has subtitle "${subtitle}"`
      });
    },

    doesNotHaveSubtitle: (message?: string): void => {
      if (!assertElementExists('doesNotHaveSubtitle')) return;
      const element: Element = getElement()!;
      const subtitleElement = element.querySelector('.oss-infinite-select-option__subtitle');
      const actual = subtitleElement ? (subtitleElement as HTMLElement).textContent?.trim() : undefined;
      const result = isEmpty(actual);

      QUnit.assert.pushResult({
        result,
        actual,
        expected: undefined,
        message: message ?? 'InfiniteSelect::Option does not have a subtitle'
      });
    },

    isSelected: (message?: string): void => {
      if (!assertElementExists('isSelected')) return;
      const element: Element = getElement()!;
      const result = element.classList.contains('oss-infinite-select-option--selected');

      QUnit.assert.pushResult({
        result,
        actual: result,
        expected: true,
        message: message ?? 'InfiniteSelect::Option is selected'
      });
    },

    isNotSelected: (message?: string): void => {
      if (!assertElementExists('isNotSelected')) return;
      const element: Element = getElement()!;
      const result = !element.classList.contains('oss-infinite-select-option--selected');

      QUnit.assert.pushResult({
        result,
        actual: !result,
        expected: false,
        message: message ?? 'InfiniteSelect::Option is not selected'
      });
    },

    isDisabled: (message?: string): void => {
      if (!assertElementExists('isDisabled')) return;
      const element: Element = getElement()!;
      const result = element.classList.contains('oss-infinite-select-option--disabled');

      QUnit.assert.pushResult({
        result,
        actual: result,
        expected: true,
        message: message ?? 'InfiniteSelect::Option is disabled'
      });
    },

    isNotDisabled: (message?: string): void => {
      if (!assertElementExists('isNotDisabled')) return;
      const element: Element = getElement()!;
      const result = !element.classList.contains('oss-infinite-select-option--disabled');

      QUnit.assert.pushResult({
        result,
        actual: !result,
        expected: false,
        message: message ?? 'InfiniteSelect::Option is not disabled'
      });
    },

    hasSelectionType: (selectionType: SelectionType, message?: string): void => {
      if (!assertElementExists('hasSelectionType')) return;
      const element: Element = getElement()!;
      const type = selectionType ?? 'single';
      const result = element.classList.contains(`oss-infinite-select-option--${type}`);

      QUnit.assert.pushResult({
        result,
        actual: element.classList.contains('oss-infinite-select-option--single')
          ? 'single'
          : element.classList.contains('oss-infinite-select-option--multiple')
          ? 'multiple'
          : undefined,
        expected: type,
        message: message ?? `InfiniteSelect::Option has selectionType "${type}"`
      });
    },

    hasPrefix: (type: PrefixType, message?: string): void => {
      if (!assertElementExists('hasPrefix')) return;
      const element: Element = getElement()!;
      const prefixElement = element.querySelector(PREFIX_TYPE_CLASS_MAP[type]);
      const result = prefixElement !== null;

      QUnit.assert.pushResult({
        result,
        actual: result,
        expected: true,
        message: message ?? 'InfiniteSelect::Option has a prefix avatar'
      });
    },

    doesNotHavePrefix: (type: PrefixType, message?: string): void => {
      if (!assertElementExists('doesNotHavePrefix')) return;
      const element: Element = getElement()!;
      const prefixElement = element.querySelector(PREFIX_TYPE_CLASS_MAP[type]);
      const result = prefixElement === null;

      QUnit.assert.pushResult({
        result,
        actual: result,
        expected: true,
        message: message ?? 'InfiniteSelect::Option does not have a prefix avatar'
      });
    },

    hasIcon: (message?: string): void => {
      if (!assertElementExists('hasIcon')) return;
      const element: Element = getElement()!;
      const iconElement = element.querySelector('.oss-infinite-select-option__icon');
      const result = iconElement !== null;

      QUnit.assert.pushResult({
        result,
        actual: result,
        expected: true,
        message: message ?? 'InfiniteSelect::Option has an icon'
      });
    },

    doesNotHaveIcon: (message?: string): void => {
      if (!assertElementExists('doesNotHaveIcon')) return;
      const element: Element = getElement()!;
      const iconElement = element.querySelector('.oss-infinite-select-option__icon');
      const result = iconElement === null;

      QUnit.assert.pushResult({
        result,
        actual: result,
        expected: true,
        message: message ?? 'InfiniteSelect::Option does not have an icon'
      });
    },

    hasSuffix: (type: SuffixType, value?: string, message?: string): void => {
      if (!assertElementExists('hasSuffix')) return;
      const element: Element = getElement()!;
      const suffixElement = element.querySelector(SUFFIX_TYPE_CLASS_MAP[type]);

      if (type === 'hint') {
        const actualValue = suffixElement ? (suffixElement as HTMLElement).textContent?.trim() : '';
        const result = actualValue === value;
        QUnit.assert.pushResult({
          result,
          actual: actualValue,
          expected: value,
          message: message ?? `InfiniteSelect::Option has suffix hint "${value}"`
        });
      } else {
        const result = suffixElement !== null;
        QUnit.assert.pushResult({
          result,
          actual: result,
          expected: true,
          message: message ?? 'InfiniteSelect::Option has a prefix avatar'
        });
      }
    },

    doesNotHaveSuffix: (type: SuffixType, message?: string): void => {
      if (!assertElementExists('doesNotHaveSuffix')) return;
      const element: Element = getElement()!;
      const suffixElement = element.querySelector(SUFFIX_TYPE_CLASS_MAP[type]);
      const result = suffixElement === null;

      QUnit.assert.pushResult({
        result,
        actual: result,
        expected: true,
        message: message ?? 'InfiniteSelect::Option does not have a suffix hint'
      });
    }
  };
};

assertion.__name__ = 'infiniteSelectOption';

export default assertion;

declare global {
  interface Assert {
    infiniteSelectOption(_selector: string): InfiniteSelectOptionAssertions;
  }
}
