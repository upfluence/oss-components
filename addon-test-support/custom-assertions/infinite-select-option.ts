import * as QUnit from 'qunit';
import { isEmpty } from '@ember/utils';

export type SelectionType = 'single' | 'multiple' | undefined;

export interface InfiniteSelectOptionAssertions {
  exists(_message?: string): void;
  doesNotExist(_message?: string): void;
  hasTitle(_title: string, _message?: string): void;
  hasSubtitle(_subtitle: string, _message?: string): void;
  doesNotHaveSubtitle(_message?: string): void;
  isSelected(_message?: string): void;
  isNotSelected(_message?: string): void;
  isDisabled(_message?: string): void;
  isNotDisabled(_message?: string): void;
  hasSelectionType(_selectionType: SelectionType, _message?: string): void;
  hasPrefixAvatar(_message?: string): void;
  doesNotHavePrefixAvatar(_message?: string): void;
  hasPrefixBadge(_message?: string): void;
  doesNotHavePrefixBadge(_message?: string): void;
  hasPrefixIcon(_message?: string): void;
  doesNotHavePrefixIcon(_message?: string): void;
  hasPrefixCountry(_countryCode: string, _message?: string): void;
  doesNotHavePrefixCountry(_message?: string): void;
  hasIcon(_message?: string): void;
  doesNotHaveIcon(_message?: string): void;
  hasSuffixHint(_hint: string, _message?: string): void;
  doesNotHaveSuffixHint(_message?: string): void;
  hasSuffixTag(_message?: string): void;
  doesNotHaveSuffixTag(_message?: string): void;
  hasSuffixIcon(_message?: string): void;
  doesNotHaveSuffixIcon(_message?: string): void;
}

const assertion = (selector: string) => {
  const getElement = (): Element | null => {
    return document.querySelector(selector);
  };

  const assertElementExists = (methodName: string): Element => {
    const element = getElement();
    if (!element) {
      throw new Error(
        `[assert.infinite-select-option] Element with selector "${selector}" not found. Make sure the component is rendered before calling .${methodName}()`
      );
    }
    return element;
  };

  return {
    exists: (message?: string) => {
      const element = getElement();
      const result = element !== null && element.classList.contains('oss-infinite-select-option');

      QUnit.assert.pushResult({
        result,
        actual: element !== null,
        expected: true,
        message: message ?? `InfiniteSelect::Option exists at selector "${selector}"`
      });
    },

    doesNotExist: (message?: string) => {
      const element = getElement();
      const result = element === null || !element.classList.contains('oss-infinite-select-option');

      QUnit.assert.pushResult({
        result,
        actual: element === null,
        expected: true,
        message: message ?? `InfiniteSelect::Option does not exist at selector "${selector}"`
      });
    },

    hasTitle: (title: string, message?: string) => {
      const element = assertElementExists('hasTitle');
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

    hasSubtitle: (subtitle: string, message?: string) => {
      const element = assertElementExists('hasSubtitle');
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

    doesNotHaveSubtitle: (message?: string) => {
      const element = assertElementExists('doesNotHaveSubtitle');
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

    isSelected: (message?: string) => {
      const element = assertElementExists('isSelected');
      const result = element.classList.contains('oss-infinite-select-option--selected');

      QUnit.assert.pushResult({
        result,
        actual: result,
        expected: true,
        message: message ?? 'InfiniteSelect::Option is selected'
      });
    },

    isNotSelected: (message?: string) => {
      const element = assertElementExists('isNotSelected');
      const result = !element.classList.contains('oss-infinite-select-option--selected');

      QUnit.assert.pushResult({
        result,
        actual: !result,
        expected: false,
        message: message ?? 'InfiniteSelect::Option is not selected'
      });
    },

    isDisabled: (message?: string) => {
      const element = assertElementExists('isDisabled');
      const result = element.classList.contains('oss-infinite-select-option--disabled');

      QUnit.assert.pushResult({
        result,
        actual: result,
        expected: true,
        message: message ?? 'InfiniteSelect::Option is disabled'
      });
    },

    isNotDisabled: (message?: string) => {
      const element = assertElementExists('isNotDisabled');
      const result = !element.classList.contains('oss-infinite-select-option--disabled');

      QUnit.assert.pushResult({
        result,
        actual: !result,
        expected: false,
        message: message ?? 'InfiniteSelect::Option is not disabled'
      });
    },

    hasSelectionType: (selectionType: SelectionType, message?: string) => {
      const element = assertElementExists('hasSelectionType');
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

    hasPrefixAvatar: (message?: string) => {
      const element = assertElementExists('hasPrefixAvatar');
      const avatarElement = element.querySelector('.oss-infinite-select-option__prefix-avatar');
      const result = avatarElement !== null;

      QUnit.assert.pushResult({
        result,
        actual: result,
        expected: true,
        message: message ?? 'InfiniteSelect::Option has a prefix avatar'
      });
    },

    doesNotHavePrefixAvatar: (message?: string) => {
      const element = assertElementExists('doesNotHavePrefixAvatar');
      const avatarElement = element.querySelector('.oss-infinite-select-option__prefix-avatar');
      const result = avatarElement === null;

      QUnit.assert.pushResult({
        result,
        actual: result,
        expected: true,
        message: message ?? 'InfiniteSelect::Option does not have a prefix avatar'
      });
    },

    hasPrefixBadge: (message?: string) => {
      const element = assertElementExists('hasPrefixBadge');
      const badgeElement = element.querySelector('.oss-infinite-select-option__prefix-badge');
      const result = badgeElement !== null;

      QUnit.assert.pushResult({
        result,
        actual: result,
        expected: true,
        message: message ?? 'InfiniteSelect::Option has a prefix badge'
      });
    },

    doesNotHavePrefixBadge: (message?: string) => {
      const element = assertElementExists('doesNotHavePrefixBadge');
      const badgeElement = element.querySelector('.oss-infinite-select-option__prefix-badge');
      const result = badgeElement === null;

      QUnit.assert.pushResult({
        result,
        actual: result,
        expected: true,
        message: message ?? 'InfiniteSelect::Option does not have a prefix badge'
      });
    },

    hasPrefixIcon: (message?: string) => {
      const element = assertElementExists('hasPrefixIcon');
      const iconElement = element.querySelector('.oss-infinite-select-option__prefix-icon');
      const result = iconElement !== null;

      QUnit.assert.pushResult({
        result,
        actual: result,
        expected: true,
        message: message ?? 'InfiniteSelect::Option has a prefix icon'
      });
    },

    doesNotHavePrefixIcon: (message?: string) => {
      const element = assertElementExists('doesNotHavePrefixIcon');
      const iconElement = element.querySelector('.oss-infinite-select-option__prefix-icon');
      const result = iconElement === null;

      QUnit.assert.pushResult({
        result,
        actual: result,
        expected: true,
        message: message ?? 'InfiniteSelect::Option does not have a prefix icon'
      });
    },

    hasPrefixCountry: (countryCode: string, message?: string) => {
      const element = assertElementExists('hasPrefixCountry');
      const countryElement = element.querySelector('.oss-infinite-select-option__prefix-country');
      const result = countryElement?.classList.contains(`fflag-${countryCode}`) ?? false;

      QUnit.assert.pushResult({
        result,
        actual: countryElement !== null ? countryCode : undefined,
        expected: countryCode,
        message: message ?? `InfiniteSelect::Option has prefix country "${countryCode}"`
      });
    },

    doesNotHavePrefixCountry: (message?: string) => {
      const element = assertElementExists('doesNotHavePrefixCountry');
      const countryElement = element.querySelector('.oss-infinite-select-option__prefix-country');
      const result = countryElement === null;

      QUnit.assert.pushResult({
        result,
        actual: result,
        expected: true,
        message: message ?? 'InfiniteSelect::Option does not have a prefix country'
      });
    },

    hasIcon: (message?: string) => {
      const element = assertElementExists('hasIcon');
      const iconElement = element.querySelector('.oss-infinite-select-option__icon');
      const result = iconElement !== null;

      QUnit.assert.pushResult({
        result,
        actual: result,
        expected: true,
        message: message ?? 'InfiniteSelect::Option has an icon'
      });
    },

    doesNotHaveIcon: (message?: string) => {
      const element = assertElementExists('doesNotHaveIcon');
      const iconElement = element.querySelector('.oss-infinite-select-option__icon');
      const result = iconElement === null;

      QUnit.assert.pushResult({
        result,
        actual: result,
        expected: true,
        message: message ?? 'InfiniteSelect::Option does not have an icon'
      });
    },

    hasSuffixHint: (hint: string, message?: string) => {
      const element = assertElementExists('hasSuffixHint');
      const hintElement = element.querySelector('.oss-infinite-select-option__suffix-hint');
      const actual = hintElement ? (hintElement as HTMLElement).textContent?.trim() : '';
      const result = actual === hint;

      QUnit.assert.pushResult({
        result,
        actual,
        expected: hint,
        message: message ?? `InfiniteSelect::Option has suffix hint "${hint}"`
      });
    },

    doesNotHaveSuffixHint: (message?: string) => {
      const element = assertElementExists('doesNotHaveSuffixHint');
      const hintElement = element.querySelector('.oss-infinite-select-option__suffix-hint');
      const result = hintElement === null;

      QUnit.assert.pushResult({
        result,
        actual: result,
        expected: true,
        message: message ?? 'InfiniteSelect::Option does not have a suffix hint'
      });
    },

    hasSuffixTag: (message?: string) => {
      const element = assertElementExists('hasSuffixTag');
      const tagElement = element.querySelector('.oss-infinite-select-option__suffix-tag');
      const result = tagElement !== null;

      QUnit.assert.pushResult({
        result,
        actual: result,
        expected: true,
        message: message ?? 'InfiniteSelect::Option has a suffix tag'
      });
    },

    doesNotHaveSuffixTag: (message?: string) => {
      const element = assertElementExists('doesNotHaveSuffixTag');
      const tagElement = element.querySelector('.oss-infinite-select-option__suffix-tag');
      const result = tagElement === null;

      QUnit.assert.pushResult({
        result,
        actual: result,
        expected: true,
        message: message ?? 'InfiniteSelect::Option does not have a suffix tag'
      });
    },

    hasSuffixIcon: (message?: string) => {
      const element = assertElementExists('hasSuffixIcon');
      const iconElement = element.querySelector('.oss-infinite-select-option__suffix-icon');
      const result = iconElement !== null;

      QUnit.assert.pushResult({
        result,
        actual: result,
        expected: true,
        message: message ?? 'InfiniteSelect::Option has a suffix icon'
      });
    },

    doesNotHaveSuffixIcon: (message?: string) => {
      const element = assertElementExists('doesNotHaveSuffixIcon');
      const iconElement = element.querySelector('.oss-infinite-select-option__suffix-icon');
      const result = iconElement === null;

      QUnit.assert.pushResult({
        result,
        actual: result,
        expected: true,
        message: message ?? 'InfiniteSelect::Option does not have a suffix icon'
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
