type HtmlTextContent =
  | string
  | {
      toString(): string;
    }
  | undefined
  | null;

const getTextFromHtml = (htmlText: HtmlTextContent): string => {
  const element = document.createElement('div');
  element.innerHTML = htmlText?.toString() ?? '';

  return element.textContent || element.innerText || '';
};

/**
 * Assert that an element has the text content represented by an HTML string.
 *
 * This is equivalent to parsing the HTML string and comparing the element's
 * visible text with the parsed text output.
 */
const assertion = function (this: Assert, selector: string, html: HtmlTextContent, message?: string): void {
  this.dom(selector).hasText(getTextFromHtml(html), message);
};

assertion.__name__ = 'hasHtmlText';

export default assertion;

declare global {
  interface Assert {
    /**
     * Shortcut for asserting an element text against an HTML string.
     *
     * @param selector Target element selector.
     * @param html HTML value to parse into visible text.
     * @param message Optional assertion message.
     */
    hasHtmlText(selector: string, html: HtmlTextContent, message?: string): void;
  }
}
