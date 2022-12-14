import { triggerEvent, waitFor } from '@ember/test-helpers';
import * as QUnit from 'qunit';

export type Placement = 'top' | 'bottom' | 'left' | 'right' | undefined;

async function hoverOnElement(selector: string) {
  await triggerEvent(selector, 'mouseover');
  await waitFor('.upf-tooltip');
}

export interface TooltipAssertions {
  hasTitle(title: string, message?: string): void;
  hasSubtitle(title: string, message?: string): void;
  hasPlacement(placement: Placement, message?: string): void;
}

const assertion = (selector: string) => {
  return {
    hasTitle: async (title: string, message?: string) => {
      await hoverOnElement(selector);

      let result: boolean = false;
      let actual: string = '';
      const titleContainer = document.querySelector('.upf-tooltip .title-container');

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
      await hoverOnElement(selector);

      let result: boolean = false;
      let actual: string = '';
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

    hasPlacement: async (placement: Placement, message?: string) => {
      await hoverOnElement(selector);

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
