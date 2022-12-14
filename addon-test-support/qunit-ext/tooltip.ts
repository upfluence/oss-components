// @ts-nocheck
import { triggerEvent, waitFor } from '@ember/test-helpers';

async function hoverOnElement(selector) {
  await triggerEvent(selector, 'mouseover');
  await waitFor('.tooltip');
}

export interface TooltipAssertions {
  hasTitle(title: string, message?: string);
  hasPlacement(placement: 'top' | 'bottom' | 'left' | 'right', message?: string);
}

const assertion = (selector: string) => {
  return {
    hasTitle: async (title: string, message?: string) => {
      await hoverOnElement(selector);

      let result: boolean;
      let actual: string;
      const tooltip = document.querySelector('.tooltip');

      if (tooltip) {
        actual = tooltip.innerText;
        result = actual === title;
      } else {
        result = false;
      }

      QUnit.assert.pushResult({
        result,
        actual,
        expected: title,
        message: message ?? 'Tooltip is displayed on the element'
      });
    },

    hasPlacement: async (placement: 'top' | 'bottom' | 'left' | 'right', message?: string) => {
      await hoverOnElement(selector);

      let result: boolean;
      let actual: string;
      const tooltip = document.querySelector('.tooltip');

      const _extractActualPlacement = () => {
        let _placement = 'bottom';

        tooltip?.classList.forEach((klass) => {
          if (['bottom', 'top', 'left', 'right'].includes(klass)) {
            _placement = klass;
          }
        });

        return _placement;
      };

      if (tooltip) {
        actual = _extractActualPlacement();
        result = actual === placement;
      } else {
        result = false;
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
