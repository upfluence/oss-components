import { hbs } from 'ember-cli-htmlbars';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { setupIntl } from 'ember-intl/test-support';
import { click, render, triggerEvent } from '@ember/test-helpers';
import sinon from 'sinon';

module('Integration | Component | o-s-s/attribute/removable-text', function (hooks) {
  setupRenderingTest(hooks);
  setupIntl(hooks);

  hooks.beforeEach(function () {
    this.onRemove = sinon.stub().resolves();
  });

  test('it renders', async function (assert) {
    await render(hbs`<OSS::Attribute::RemovableText @label="label" @onRemove={{this.onRemove}} />`);

    assert.dom('[data-control-name="attribute-removable-text"]').exists();
  });

  test('It displays the @label', async function (assert) {
    await render(hbs`<OSS::Attribute::RemovableText @label="city" @onRemove={{this.onRemove}} />`);

    assert.dom('.oss-attribute__label').hasText('city');
  });

  test('If the value is provided, it is displayed', async function (assert) {
    await render(hbs`<OSS::Attribute::RemovableText @label="city" @value="Lyon" @onRemove={{this.onRemove}} />`);

    assert.dom('.oss-attribute__value').hasText('Lyon');
  });

  test('If the value is not provided, it displays a dash', async function (assert) {
    await render(hbs`<OSS::Attribute::RemovableText @label="city" @onRemove={{this.onRemove}} />`);

    assert.dom('.oss-attribute__value').hasText('-');
  });

  module('Remove tooltip', () => {
    test('If the @removeTooltip paramater is passed, the string contents are used as tooltip for the lock icon', async function (assert) {
      await render(
        hbs`<OSS::Attribute::RemovableText @label="city" @onRemove={{this.onRemove}} @removeTooltip="Click to remove" />`
      );

      await triggerEvent('.oss-attribute', 'mouseenter');
      await assert.tooltip('.fa-trash').hasTitle('Click to remove');
    });

    test('If the @removeTooltip paramater is not passed, the default text is used', async function (assert) {
      await render(hbs`<OSS::Attribute::RemovableText @label="city" @onRemove={{this.onRemove}} />`);

      await triggerEvent('.oss-attribute', 'mouseenter');
      await assert.tooltip('.fa-trash').hasTitle('Remove');
    });
  });

  test('Clicking on the trash icon calls the @onRemove method', async function (assert) {
    await render(hbs`<OSS::Attribute::RemovableText @label="city" @value="Lyon" @onRemove={{this.onRemove}} />`);

    await triggerEvent('.oss-attribute', 'mouseenter');
    await click('.fa-trash');
    assert.true(this.onRemove.calledOnce);
  });

  test('Clicking on the trash icon displays a loader', async function (assert) {
    this.onRemove.returns(new Promise(() => {}));
    await render(hbs`<OSS::Attribute::RemovableText @label="city" @value="Lyon" @onRemove={{this.onRemove}} />`);

    await triggerEvent('.oss-attribute', 'mouseenter');
    await click('.fa-trash');
    assert.dom('.fa-circle-notch.fa-spin').exists();
  });
});
