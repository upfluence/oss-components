import DOMPurify, { type Config } from 'dompurify';

export type SanitizeConfig = Config;

/**
 * Configure DOMPurify hooks.
 */
DOMPurify.addHook('afterSanitizeAttributes', (node: Element) => {
  // Fix Reverse Tabnabbing for standard links
  if (node.tagName === 'A' && node.getAttribute('target') === '_blank') {
    node.setAttribute('rel', 'noopener noreferrer');
  }

  // Block url(), @import, @font-face and hex-encoded variants in style attributes
  if (node.hasAttribute('style')) {
    const styleValue = node.getAttribute('style') || '';
    if (/(\burl\s*\(|\\75\\72\\6[cC]|@import|@font-face)/i.test(styleValue)) {
      node.removeAttribute('style');
    }
  }
});

/**
 * Strict configuration allowing Rich Text and Inline SVGs (No <use> tags).
 */
export const RICH_TEXT_SVG_CONFIG: Config = {
  ALLOWED_URI_REGEXP: /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms):|[^a-z]|[a-z+.-]+(?:[^a-z+.-:]|$))/i,
  USE_PROFILES: { html: true, svg: false, mathMl: false },
  ADD_ATTR: ['target']
};

/**
 * Sanitizes `dirty` with OSS's own DOMPurify instance, so the hooks above (safe `target="_blank"` links, no
 * `url()`/`@import`/`@font-face` in `style`) always apply.
 *
 * Consumers must use this instead of importing `dompurify` themselves: OSS's ES module build and an app's
 * CommonJS imports of `dompurify` resolve to two separate DOMPurify instances, and hooks only exist on the
 * instance they were added to.
 */
export function sanitizeHtml(dirty: string, config: SanitizeConfig = RICH_TEXT_SVG_CONFIG): string {
  return DOMPurify.sanitize(dirty, {
    ...config,
    RETURN_DOM: false,
    RETURN_DOM_FRAGMENT: false,
    RETURN_TRUSTED_TYPE: false
  }) as string;
}
