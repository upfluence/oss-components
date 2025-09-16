import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, setupOnerror } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | OSS::Label', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders with text argument', async function (assert) {
    await render(hbs`<OSS::Label @text="Test Label" />`);

    assert.dom('.oss-label').exists();
    assert.dom('.oss-label').hasText('Test Label');
  });

  test('it renders with block content', async function (assert) {
    await render(hbs`
      <OSS::Label>
        Block Label Content
      </OSS::Label>
    `);

    assert.dom('.oss-label').exists();
    assert.dom('.oss-label').hasText('Block Label Content');
  });

  test('it applies correct size classes', async function (assert) {
    await render(hbs`<OSS::Label @text="Test" @size="lg" />`);

    assert.dom('.oss-label').hasClass('oss-label--lg');
  });

  test('it applies correct weight classes', async function (assert) {
    await render(hbs`<OSS::Label @text="Test" @weight="bold" />`);

    assert.dom('.oss-label').hasClass('oss-label--bold');
  });

  test('it shows required indicator when required', async function (assert) {
    await render(hbs`<OSS::Label @text="Test" @required={{true}} />`);

    assert.dom('.oss-label__required-indicator').exists();
    assert.dom('.oss-label__required-indicator').hasText('*');
    assert.dom('.oss-label').hasClass('oss-label--required');
  });

  test('it applies disabled class when disabled', async function (assert) {
    await render(hbs`<OSS::Label @text="Test" @disabled={{true}} />`);

    assert.dom('.oss-label').hasClass('oss-label--disabled');
  });

  test('it sets for attribute when provided', async function (assert) {
    await render(hbs`<OSS::Label @text="Test" @for="input-id" />`);

    assert.dom('.oss-label').hasAttribute('for', 'input-id');
  });

  test('it uses default size when not specified', async function (assert) {
    await render(hbs`<OSS::Label @text="Test" />`);

    assert.dom('.oss-label').hasClass('oss-label--md');
  });

  test('it uses default weight when not specified', async function (assert) {
    await render(hbs`<OSS::Label @text="Test" />`);

    assert.dom('.oss-label').hasClass('oss-label--normal');
  });

  test('it applies multiple classes correctly', async function (assert) {
    await render(hbs`<OSS::Label @text="Test" @size="sm" @weight="semibold" @required={{true}} @disabled={{true}} />`);

    assert.dom('.oss-label').hasClass('oss-label--sm');
    assert.dom('.oss-label').hasClass('oss-label--semibold');
    assert.dom('.oss-label').hasClass('oss-label--required');
    assert.dom('.oss-label').hasClass('oss-label--disabled');
  });

  test('it renders without content', async function (assert) {
    await render(hbs`<OSS::Label />`);

    assert.dom('.oss-label').exists();
  });
});
