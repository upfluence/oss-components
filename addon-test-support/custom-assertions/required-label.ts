import { getRootElement } from '@ember/test-helpers';

const REQUIRED_MARKER_SELECTOR = 'span.font-color-error-500';

function isTextOrElement(node: Node): boolean {
  return node.nodeType === Node.TEXT_NODE || node.nodeType === Node.ELEMENT_NODE;
}

function isBlankText(node: Node): boolean {
  return node.nodeType === Node.TEXT_NODE && (node.textContent ?? '').trim() === '';
}

function findRequiredMarker(element: Element): Element | null {
  const lastNode = Array.from(element.childNodes)
    .reverse()
    .find((node) => isTextOrElement(node) && !isBlankText(node));

  return lastNode instanceof Element && lastNode.matches(REQUIRED_MARKER_SELECTOR) && lastNode.textContent === '*'
    ? lastNode
    : null;
}

function extractLabelText(element: Element, marker: Element | null): string {
  return Array.from(element.childNodes)
    .filter((node) => node !== marker && isTextOrElement(node))
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
