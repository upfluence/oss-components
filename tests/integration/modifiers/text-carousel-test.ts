import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, setupOnerror } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import sinon from 'sinon';

module('Integration | Modifier | text-carousel', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.labels = ['Thinking...', 'Analyzing your request...', 'Putting it together...'];
    this.clock = sinon.useFakeTimers();
  });

  hooks.afterEach(function () {
    this.clock.restore();
  });

  test('it displays the first label immediately', async function (assert) {
    await render(hbs`<div data-control-name="carousel" {{text-carousel this.labels interval=30}}></div>`);

    assert.dcn('carousel').hasText('Thinking...');
  });

  test('it displays each label according to the interval and holds the final label', async function (assert) {
    await render(hbs`<div data-control-name="carousel" {{text-carousel this.labels interval=30}}></div>`);

    assert.dcn('carousel').hasText('Thinking...');

    this.clock.tick(30);
    assert.dcn('carousel').hasText('Analyzing your request...');

    this.clock.tick(30);
    assert.dcn('carousel').hasText('Putting it together...');

    this.clock.tick(6_000);
    assert.dcn('carousel').hasText('Putting it together...');
  });

  test('it updates when labels change', async function (assert) {
    await render(hbs`<div data-control-name="carousel" {{text-carousel this.labels interval=30}}></div>`);
    this.set('labels', ['Loading', 'Done']);

    assert.dcn('carousel').hasText('Loading');
  });

  test('it loops when loop=true', async function (assert) {
    await render(hbs`<div data-control-name="carousel" {{text-carousel this.labels interval=30 loop=true}}></div>`);

    assert.dcn('carousel').hasText('Thinking...');

    this.clock.tick(30);
    assert.dcn('carousel').hasText('Analyzing your request...');

    this.clock.tick(30);
    assert.dcn('carousel').hasText('Putting it together...');

    this.clock.tick(30);
    assert.dcn('carousel').hasText('Thinking...');
  });

  test('it throws when no labels are provided', async function (assert) {
    this.set('labels', []);

    setupOnerror((error: Error) => {
      assert.equal(error.message, 'TextCarouselModifier requires a non-empty labels array');
    });

    await render(hbs`<div data-control-name="carousel" {{text-carousel this.labels interval=30}}>Previous text</div>`);
  });
});
