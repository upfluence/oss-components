import { getRootElement } from '@ember/test-helpers';

const REQUIRED_MARKER_SELECTOR = 'span.font-color-error-500';

function findRequiredMarker(element: Element): Element | null {
  const marker = element.lastElementChild;

  return marker?.matches(REQUIRED_MARKER_SELECTOR) && marker.textContent === '*' ? marker : null;
}

function extractLabelText(element: Element, marker: Element | null): string {
  return Array.from(element.childNodes)
    .filter((node) => node !== marker)
    .map((node) => node.textContent ?? '')
    .join('')
    .replace(/\s+/g, ' ')
    .trim();
}

const assertion = function (this: Assert, selector: string, label: string, message?: string): void {
  const element = getRootElement().querySelector(selector);
  const marker = element ? findRequiredMarker(element) : null;
  const required = marker !== null;
  const actualLabel = element ? extractLabelText(element, marker) : null;

  this.pushResult({
    result: required && actualLabel === label,
    actual: { label: actualLabel, required },
    expected: { label, required: true },
    message: message ?? `${selector} is a required label with the text "${label}"`
  });
};

assertion.__name__ = 'requiredLabel';

export default assertion;

declare global {
  interface Assert {
    requiredLabel(selector: string, label: string, message?: string): void;
  }
}
