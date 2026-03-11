import DOMPurify from 'dompurify';

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
export const RICH_TEXT_SVG_CONFIG: DOMPurify.Config = {
  ALLOWED_URI_REGEXP: /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms):|[^a-z]|[a-z+.\-]+(?:[^a-z+.-:]|$))/i,
  USE_PROFILES: { html: true, svg: false, mathMl: false }
};
