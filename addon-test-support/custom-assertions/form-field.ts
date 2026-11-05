import { getRootElement } from '@ember/test-helpers';

const REQUIRED_MARKER_SELECTOR = 'span.font-color-error-500';

export interface FormFieldAssertions {
  isRequired(message?: string): void;
  isNotRequired(message?: string): void;
  hasLabel(label: string, message?: string): void;
}

function isTextOrElement(node: Node): boolean {
  return node.nodeType === Node.TEXT_NODE || node.nodeType === Node.ELEMENT_NODE;
}

function isBlankText(node: Node): boolean {
  return node.nodeType === Node.TEXT_NODE && (node.textContent ?? '').trim() === '';
}

function findLabel(selector: string): Element | null {
  const labels = getRootElement().querySelector(selector)?.querySelectorAll('label');

  return labels?.length === 1 ? labels.item(0) : null;
}

function findRequiredMarker(label: Element): Element | null {
  const lastNode = Array.from(label.childNodes)
    .reverse()
    .find((node) => isTextOrElement(node) && !isBlankText(node));

  return lastNode instanceof Element && lastNode.matches(REQUIRED_MARKER_SELECTOR) && lastNode.textContent === '*'
    ? lastNode
    : null;
}

function extractLabelText(label: Element): string {
  const marker = findRequiredMarker(label);

  return Array.from(label.childNodes)
    .filter((node) => node !== marker && isTextOrElement(node))
    .map((node) => node.textContent ?? '')
    .join('')
    .replace(/\s+/g, ' ')
    .trim();
}

const assertion = function (this: Assert, selector: string): FormFieldAssertions {
  const pushRequiredResult = (expected: boolean, message: string): void => {
    const label = findLabel(selector);
    const actual = label ? findRequiredMarker(label) !== null : null;

    this.pushResult({ result: actual === expected, actual, expected, message });
  };

  return {
    isRequired: (message?: string): void => {
      pushRequiredResult(true, message ?? `${selector} is a required field`);
    },

    isNotRequired: (message?: string): void => {
      pushRequiredResult(false, message ?? `${selector} is not a required field`);
    },

    hasLabel: (label: string, message?: string): void => {
      const labelElement = findLabel(selector);
      const actual = labelElement ? extractLabelText(labelElement) : null;

      this.pushResult({
        result: actual === label,
        actual,
        expected: label,
        message: message ?? `${selector} has the label "${label}"`
      });
    }
  };
};

assertion.__name__ = 'formField';

export default assertion;

declare global {
  interface Assert {
    formField(selector: string): FormFieldAssertions;
  }
}
