import { render, settled, type TestContext } from '@ember/test-helpers';

import * as QUnit from 'qunit';

// emberjs/ember.js#21767 (ember-source 6.12, fixed in 7.5 by emberjs/ember.js#21778): a component that throws
// during the *first* `render()` of a test leaves its renderer registered for the rest of the run, and every later
// run loop logs "Attempted to rerender, but the Ember application has had an unrecoverable error occur during
// render" (~350k log lines over this suite before the fix).

const RERENDER_WARNING = 'Attempted to rerender';

let expectingRenderError = false;

/**
 * Renders a template whose component is expected to throw (caught with `setupOnerror`), without leaking a broken
 * renderer into the following tests: the first render is empty, and the component only comes in on a re-render.
 *
 * The template must guard the component with `{{#if this.show}}`:
 *
 *   setupOnerror((error: Error) => assert.strictEqual(error.message, '…'));
 *   await renderExpectingError(this, hbs`{{#if this.show}}<OSS::Badge />{{/if}}`);
 */
export async function renderExpectingError(
  context: TestContext,
  template: Parameters<typeof render>[0]
): Promise<void> {
  expectingRenderError = true;
  context.set('show', false);
  await render(template);
  context.set('show', true);
  await settled();
}

/**
 * Fails the first test in which a leaked renderer shows up, names the test that caused it, and keeps the rest of
 * the log free of the warning. Called once from tests/test-helper.ts.
 */
export function setupLeakedRendererGuard(): void {
  const { error, warn } = console;
  let currentTest = '';
  let culprit: string | null = null;
  let warnedInTest = false;
  let reported = false;

  QUnit.testStart(({ module, name }) => {
    currentTest = `${module}: ${name}`;
    expectingRenderError = false;
    warnedInTest = false;
  });

  // Ember logs "Error occurred: - While rendering…" when a render throws: remember the test if it didn't go
  // through renderExpectingError(), it's the one that leaks.
  console.error = function (...args: unknown[]) {
    if (!expectingRenderError && typeof args[0] === 'string' && args[0].includes('While rendering')) {
      culprit = currentTest;
    }
    error.apply(console, args);
  };

  console.warn = function (...args: unknown[]) {
    if (typeof args[0] === 'string' && args[0].startsWith(RERENDER_WARNING)) {
      // Expected within a renderExpectingError() test: its broken root is destroyed with the test's owner.
      if (expectingRenderError) return;
      warnedInTest = true;
      if (reported) return;
    }
    warn.apply(console, args);
  };

  QUnit.hooks.afterEach(function (assert) {
    if (!warnedInTest || reported) return;
    reported = true;
    assert.pushResult({
      result: false,
      actual: `${RERENDER_WARNING}, but the Ember application has had an unrecoverable error occur during render`,
      expected: 'no broken renderer left behind',
      message:
        'A component threw during its first render() and left a broken renderer behind (emberjs/ember.js#21767). ' +
        `Culprit: "${culprit ?? 'this test or the one right before it'}". ` +
        'Render it with renderExpectingError() from test-app/tests/helpers/render-expecting-error.'
    });
  });
}
