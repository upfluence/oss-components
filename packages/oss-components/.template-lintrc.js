'use strict';

module.exports = {
  extends: 'recommended',

  plugins: ['./linters/handlebars'],

  rules: {
    'u-template-lint/no-bare-button': 'error',
    // Disabled: in v3 this rule also flags `keydown`, which is a known false positive. The rule enforces WCAG F101,
    // which only covers pointer-down events (mousedown / pointerdown) and never the keyboard. Upstream narrowed it
    // accordingly and renamed it `no-pointer-down-event-binding` in v5.0.0 (PR ember-template-lint#2054), so the
    // current version of the rule reports nothing here.
    // Every violation in this repo is a `keydown` handler calling preventDefault, either to filter keystrokes
    // (currency, number and phone inputs) or to stop the page from scrolling on arrow keys (select navigation).
    // `keyup` fires once the character is inserted and the page has scrolled, so it cannot replace them.
    // Drop this entry when ember-template-lint is upgraded to v5 or later: the rule no longer exists under this name.
    'no-down-event-binding': false
  }
};
