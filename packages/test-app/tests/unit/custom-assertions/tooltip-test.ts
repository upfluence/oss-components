import { render, type TestContext } from '@ember/test-helpers';

import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';
import sinon from 'sinon';

module('Test Support | Custom Assertions | tooltip', (hooks) => {
  setupRenderingTest(hooks);

  hooks.beforeEach(async function () {
    await render(hbs`<div class="test-container" {{enable-tooltip title="Title" subtitle="Subtitle"}}></div>`);
  });

  test('it leaves the shared sinon.useFakeTimers alone', async function (this: TestContext, assert) {
    assert.expect(3);
    const useFakeTimers = sinon.spy(sinon, 'useFakeTimers');

    try {
      await assert.tooltip('.test-container').hasTitle('Title');
      await assert.tooltip('.test-container').hasSubtitle('Subtitle');

      assert.true(useFakeTimers.notCalled);
    } finally {
      useFakeTimers.restore();
    }
  });

  test('it reuses a clock the test already installed', async function (this: TestContext, assert) {
    assert.expect(2);
    const clock = sinon.useFakeTimers();

    try {
      await assert.tooltip('.test-container').hasTitle('Title');

      assert.strictEqual((globalThis.setTimeout as typeof setTimeout & { clock?: unknown }).clock, clock);
    } finally {
      clock.restore();
    }
  });
});
