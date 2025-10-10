import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, settled } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | required-input', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders nothing', async function (assert) {
    await render(hbs`<label>Name</label>`);
    assert.dom('label span').doesNotExist();
    assert.dom('label').hasText('Name');
  });

  test('it renders the required input indicator', async function (assert) {
    await render(hbs`<label {{required-input}}>Name</label>`);
    assert.dom('label span').exists();
    assert.dom('label span').hasClass('font-color-error-500');
    assert.dom('label').hasText('Name*');
  });

  test('it works with the Ember tracking', async function (assert) {
    this.title = 'Name';
    await render(hbs`<label {{required-input}}>{{this.title}}</label>`);
    assert.dom('label').hasText('Name*');

    this.set('title', 'New name');
    await settled();
    assert.dom('label').hasText('New name*');
  });

  test('it handles empty strings', async function (assert) {
    await render(hbs`<label {{required-input}}></label>`);
    assert.dom('label').hasText('*');
  });

  test('it handles multiple elements with the modifier', async function (assert) {
    await render(hbs`
        <label {{required-input}}>First</label>
        <label {{required-input}}>Second</label>
    `);
    assert.dom('label:nth-child(1)').hasText('First*');
    assert.dom('label:nth-child(2)').hasText('Second*');
  });

  test('it preserves existing content structure', async function (assert) {
    await render(hbs`
      <label {{required-input}}>
        <span class="existing">Name</span>
      </label>
    `);
    assert.dom('label span.existing').exists();
    assert.dom('label span.font-color-error-500').exists();
  });
});
