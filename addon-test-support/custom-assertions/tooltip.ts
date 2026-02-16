import { triggerEvent, waitFor } from '@ember/test-helpers';
import * as QUnit from 'qunit';
import { isEmpty } from '@ember/utils';
import sinon from 'sinon';
import { ANIMATION_DURATION, RENDERING_DELAY } from '@upfluence/oss-components/modifiers/enable-tooltip';

export type Placement = 'top' | 'bottom' | 'left' | 'right' | undefined;

async function triggerEventOnElement(selector: string, trigger?: string) {
  const element = document.querySelector(selector) as HTMLElement;
  const clock = sinon.useFakeTimers();

  if (element?.hasAttribute('disabled')) {
    element.dispatchEvent(new Event(trigger || 'mouseover', { bubbles: true }));
  } else {
    await triggerEvent(selector, trigger || 'mouseover');
  }

  clock.tick(RENDERING_DELAY + ANIMATION_DURATION);
  clock.restore();

  await waitFor('.upf-tooltip');
}

export interface TooltipAssertions {
  exists(trigger?: string, message?: string): void;
  doesNotExist(trigger?: string, message?: string): void;
  hasTitle(title: string, message?: string): void;
  hasSubtitle(subtitle: string, message?: string): void;
  doesNotHaveSubtitle(message?: string): void;
  hasIcon(icon: string, message?: string): void;
  doesNotHaveIcon(message?: string): void;
  hasPlacement(placement: Placement, message?: string): void;
  isHtmlSafe(message?: string): void;
  isNotHtmlSafe(message?: string): void;
}

const assertion = (selector: string) => {
  return {
    exists: async (trigger?: string, message?: string) => {
      let result: boolean = true;
      let actual: Element | null = null;

      await triggerEventOnElement(selector, trigger);

      QUnit.assert.pushResult({
        result,
        actual,
        expected: null,
        message: message ?? 'Tooltip is rendered with success'
      });
    },

    doesNotExist: async (trigger?: string, message?: string) => {
      let result: boolean = false;
      let actual: Element | null = null;
      const clock = sinon.useFakeTimers();

      await triggerEvent(selector, trigger || 'mouseover');
      clock.tick(RENDERING_DELAY + ANIMATION_DURATION);
      clock.restore();
      await waitFor('.upf-tooltip', { timeout: 50 })
        .catch((err) => {
          if (err.message === 'waitFor timed out waiting for selector ".upf-tooltip"') {
            result = true;
          }
        })
        .finally(() => {
          actual = document.querySelector('.upf-tooltip');
        });

      QUnit.assert.pushResult({
        result,
        actual,
        expected: null,
        message: message ?? "Tooltip isn't rendered with success"
      });
    },

    hasTitle: async (title: string, message?: string) => {
      await triggerEventOnElement(selector);

      let result: boolean = false;
      let actual: string = '';
      const titleContainer = document.querySelector('.upf-tooltip .title-container .title');

      if (titleContainer) {
        actual = (<HTMLElement>titleContainer).innerText;
        result = actual === title;
      }

      QUnit.assert.pushResult({
        result,
        actual,
        expected: title,
        message: message ?? 'Tooltip has the correct title'
      });
    },

    hasSubtitle: async (subtitle: string, message?: string) => {
      await triggerEventOnElement(selector);

      let result: boolean = false;
      let actual: string | undefined = undefined;
      const subtitleContainer = document.querySelector('.upf-tooltip .subtitle');

      if (subtitleContainer) {
        actual = (<HTMLElement>subtitleContainer).innerText;
        result = actual === subtitle;
      }

      QUnit.assert.pushResult({
        result,
        actual,
        expected: subtitle,
        message: message ?? 'Tooltip has the correct subtitle'
      });
    },

    doesNotHaveSubtitle: async (message?: string) => {
      await triggerEventOnElement(selector);

      let result = false;
      let actual = undefined;
      const subtitleContainer = document.querySelector('.upf-tooltip .subtitle');

      actual = (<HTMLElement>subtitleContainer)?.innerText;
      result = isEmpty(actual);

      QUnit.assert.pushResult({
        result,
        actual,
        expected: undefined,
        message: message ?? "Tooltip doesn't have a subtitle"
      });
    },

    hasIcon: async (icon: string, message?: string) => {
      await triggerEventOnElement(selector);

      let result: boolean = false;
      let actual: string = '';
      const iconI = document.querySelector('.upf-tooltip .title-container i');

      if (iconI) {
        actual = iconI.className;
        result = actual === icon;
      }

      QUnit.assert.pushResult({
        result,
        actual,
        expected: icon,
        message: message ?? 'Tooltip has the correct icon'
      });
    },

    doesNotHaveIcon: async (message?: string) => {
      await triggerEventOnElement(selector);

      const iconI = document.querySelector('.upf-tooltip .title-container i');
      let actual = iconI?.className;
      let result = isEmpty(actual);

      QUnit.assert.pushResult({
        result,
        actual,
        expected: undefined,
        message: message ?? "Tooltip doesn't have an icon"
      });
    },

    hasPlacement: async (placement: Placement, message?: string) => {
      await triggerEventOnElement(selector);

      let result: boolean = false;
      let actual: string = '';
      const tooltip = document.querySelector('.upf-tooltip');

      if (tooltip) {
        actual = (<HTMLElement>tooltip).dataset.placement || '';
        result = actual === placement;
      }

      QUnit.assert.pushResult({
        result,
        actual,
        expected: placement,
        message: message ?? `Tooltip is displayed with placement: ${placement}`
      });
    },

    isHtmlSafe: async (message?: string) => {
      await triggerEventOnElement(selector);

      const titleContainer = document.querySelector('.upf-tooltip .title-container .title');
      let actual = (<HTMLElement>titleContainer)?.dataset.htmlSafe;
      let result = actual === 'true';

      QUnit.assert.pushResult({
        result,
        actual,
        expected: 'true',
        message: message ?? 'Tooltip supports html safe mode'
      });
    },

    isNotHtmlSafe: async (message?: string) => {
      await triggerEventOnElement(selector);

      const titleContainer = document.querySelector('.upf-tooltip .title-container .title');
      let actual = (<HTMLElement>titleContainer)?.dataset.htmlSafe;
      let result = actual === undefined;

      QUnit.assert.pushResult({
        result,
        actual,
        expected: undefined,
        message: message ?? "Tooltip doesn't support html safe mode"
      });
    }
  };
};

assertion.__name__ = 'tooltip';

export default assertion;

declare global {
  interface Assert {
    tooltip(selector: string): TooltipAssertions;
  }
}
