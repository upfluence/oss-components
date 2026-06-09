import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import sinon from 'sinon';

module('Integration | Modifier | text-carousel', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.labels = ['Thinking...', 'Analyzing your request...', 'Putting it together...'];
  });

  test('it displays the first label immediately', async function (assert) {
    await render(hbs`<div data-control-name="carousel" {{text-carousel this.labels intervalMs=30}}></div>`);

    assert.dcn('carousel').hasText('Thinking...');
  });

  test('it displays each label according to the interval and holds the final label', async function (assert) {
    const clock = sinon.useFakeTimers();

    await render(hbs`<div data-control-name="carousel" {{text-carousel this.labels intervalMs=30}}></div>`);

    try {
      assert.dcn('carousel').hasText('Thinking...');

      clock.tick(30);
      assert.dcn('carousel').hasText('Analyzing your request...');

      clock.tick(30);
      assert.dcn('carousel').hasText('Putting it together...');

      clock.tick(6_000);
      assert.dcn('carousel').hasText('Putting it together...');
    } finally {
      clock.restore();
    }
  });

  test('it updates when labels change', async function (assert) {
    await render(hbs`<div data-control-name="carousel" {{text-carousel this.labels intervalMs=30}}></div>`);
    this.set('labels', ['Loading', 'Done']);

    assert.dcn('carousel').hasText('Loading');
  });

  test('it displays empty text when no labels are provided', async function (assert) {
    this.set('labels', []);

    await render(
      hbs`<div data-control-name="carousel" {{text-carousel this.labels intervalMs=30}}>Previous text</div>`
    );

    assert.dcn('carousel').hasText('');
  });
});
