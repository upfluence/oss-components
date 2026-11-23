import { triggerEvent, waitFor } from '@ember/test-helpers';
import { isEmpty } from '@ember/utils';

import * as QUnit from 'qunit';
import sinon from 'sinon';

import { ANIMATION_DURATION, RENDERING_DELAY } from '../../modifiers/enable-tooltip';

export type Placement = 'top' | 'bottom' | 'left' | 'right' | undefined;

type FakeClock = ReturnType<typeof sinon.useFakeTimers>;

async function withFakeClock(fn: (clock: FakeClock) => Promise<void>): Promise<void> {
  const installedClock = (globalThis.setTimeout as typeof setTimeout & { clock?: FakeClock }).clock;
  if (installedClock) {
    return fn(installedClock);
  }

  // ember-sinon-qunit throws when the shared sinon.useFakeTimers is called twice in a test.
  const sandbox = sinon.createSandbox();
  try {
    await fn(sandbox.useFakeTimers());
  } finally {
    sandbox.restore();
  }
}

async function triggerEventOnElement(selector: string, trigger: string = 'mouseover') {
  const element = document.querySelector(selector) as HTMLElement;

  await withFakeClock(async (clock) => {
    if (element?.hasAttribute('disabled')) {
      element.dispatchEvent(new MouseEvent(trigger, { bubbles: true }));
    } else {
      await triggerEvent(selector, trigger);
    }

    clock.tick(RENDERING_DELAY + ANIMATION_DURATION);
  });

  await waitFor('.upf-tooltip');
}

export interface TooltipAssertions {
  exists(trigger?: string, message?: string): Promise<void>;
  doesNotExist(trigger?: string, message?: string): Promise<void>;
  hasTitle(title: string, message?: string): Promise<void>;
  hasSubtitle(subtitle: string, message?: string): Promise<void>;
  doesNotHaveSubtitle(message?: string): Promise<void>;
  hasIcon(icon: string, message?: string): Promise<void>;
  doesNotHaveIcon(message?: string): Promise<void>;
  hasPlacement(placement: Placement, message?: string): Promise<void>;
  isHtmlSafe(message?: string): void;
  isNotHtmlSafe(message?: string): Promise<void>;
}

const assertion = (selector: string): TooltipAssertions => {
  return {
    exists: async (trigger?: string, message?: string): Promise<void> => {
      const result: boolean = true;
      const actual: Element | null = null;

      await triggerEventOnElement(selector, trigger);

      QUnit.assert.pushResult({
        result,
        actual,
        expected: null,
        message: message ?? 'Tooltip is rendered with success'
      });
    },

    doesNotExist: async (trigger: string = 'mouseover', message?: string): Promise<void> => {
      let result: boolean = false;
      let actual: Element | null = null;
      await withFakeClock(async (clock) => {
        await triggerEvent(selector, trigger);
        clock.tick(RENDERING_DELAY + ANIMATION_DURATION);
      });
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

    hasTitle: async (title: string, message?: string): Promise<void> => {
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

    hasSubtitle: async (subtitle: string, message?: string): Promise<void> => {
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

    doesNotHaveSubtitle: async (message?: string): Promise<void> => {
      await triggerEventOnElement(selector);

      const subtitleContainer = document.querySelector('.upf-tooltip .subtitle');
      const actual = (<HTMLElement>subtitleContainer)?.innerText;
      const result = isEmpty(actual);

      QUnit.assert.pushResult({
        result,
        actual,
        expected: undefined,
        message: message ?? "Tooltip doesn't have a subtitle"
      });
    },

    hasIcon: async (icon: string, message?: string): Promise<void> => {
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

    doesNotHaveIcon: async (message?: string): Promise<void> => {
      await triggerEventOnElement(selector);

      const iconI = document.querySelector('.upf-tooltip .title-container i');
      const actual = iconI?.className;
      const result = isEmpty(actual);

      QUnit.assert.pushResult({
        result,
        actual,
        expected: undefined,
        message: message ?? "Tooltip doesn't have an icon"
      });
    },

    hasPlacement: async (placement: Placement, message?: string): Promise<void> => {
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

    isHtmlSafe: async (message?: string): Promise<void> => {
      await triggerEventOnElement(selector);

      const titleContainer = document.querySelector('.upf-tooltip .title-container .title');
      const actual = (<HTMLElement>titleContainer)?.dataset.htmlSafe;
      const result = actual === 'true';

      QUnit.assert.pushResult({
        result,
        actual,
        expected: 'true',
        message: message ?? 'Tooltip supports html safe mode'
      });
    },

    isNotHtmlSafe: async (message?: string): Promise<void> => {
      await triggerEventOnElement(selector);

      const titleContainer = document.querySelector('.upf-tooltip .title-container .title');
      const actual = (<HTMLElement>titleContainer)?.dataset.htmlSafe;
      const result = actual === undefined;

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
