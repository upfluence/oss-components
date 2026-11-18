import { module, test } from 'qunit';

import { sanitizeHtml } from '@upfluence/oss-components/utils/sanitize-config';

module('Unit | Utility | sanitize-config', function () {
  module('sanitizeHtml', function () {
    test('it protects links opening in a new tab', function (assert) {
      const html = sanitizeHtml('<a href="https://upfluence.com" target="_blank">Upfluence</a>');

      assert.true(html.includes('target="_blank"'));
      assert.true(html.includes('rel="noopener noreferrer"'));
    });

    test('it removes style attributes that load external resources', function (assert) {
      const html = sanitizeHtml(
        '<div style="background: url(https://example.com/pixel.png)">a</div><span style="color: red">b</span>'
      );

      assert.false(html.includes('url('));
      assert.true(html.includes('style="color: red"'));
    });

    test('it removes executable markup', function (assert) {
      const html = sanitizeHtml('<p>ok</p><script>alert(1)</script><a href="javascript:alert(1)">x</a>');

      assert.true(html.includes('<p>ok</p>'));
      assert.false(html.includes('<script'));
      assert.false(html.includes('javascript:'));
    });

    test('it applies the hooks with a custom config too', function (assert) {
      // No USE_PROFILES here: DOMPurify lets USE_PROFILES override ALLOWED_TAGS.
      const html = sanitizeHtml(
        '<p style="background: url(https://example.com/pixel.png)"><a href="https://upfluence.com" target="_blank">x</a></p><h1>t</h1>',
        { ALLOWED_TAGS: ['p', 'a'], ADD_ATTR: ['target'] }
      );

      assert.false(html.includes('<h1>'));
      assert.false(html.includes('url('));
      assert.true(html.includes('rel="noopener noreferrer"'));
    });
  });
});
