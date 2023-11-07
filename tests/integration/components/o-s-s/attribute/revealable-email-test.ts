import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, triggerEvent, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import sinon from 'sinon';

module('Integration | Component | o-s-s/attribute/revealable-email', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.onRevealStub = sinon.stub().resolves();
  });

  test('It renders', async function (assert) {
    await render(hbs`<OSS::Attribute::RevealableEmail @onRevealEmail={{this.onRevealStub}} />`);

    assert.dom('[data-control-name="attribute-revealable-email"]').exists();
  });

  module('Label tooltip', () => {
    test('If the @tooltip paramater is passed, the info icon is displayed', async function (assert) {
      await render(
        hbs`<OSS::Attribute::RevealableEmail @tooltip="this is a tooltip" @onRevealEmail={{this.onRevealStub}} />`
      );

      await assert.tooltip('.oss-attribute__info').hasTitle('this is a tooltip');
    });

    test('If the @tooltip paramater is not passed, the info icon is not visible', async function (assert) {
      await render(hbs`<OSS::Attribute::RevealableEmail @onRevealEmail={{this.onRevealStub}} />`);

      await assert.dom('.oss-attribute__info').doesNotExist();
    });
  });

  module('Lock tooltip', () => {
    test('If the @lockTooltip paramater is passed, the string contents are used as tooltip for the lock icon', async function (assert) {
      await render(hbs`<OSS::Attribute::RevealableEmail @lockTooltip="locked" @onRevealEmail={{this.onRevealStub}} />`);

      await triggerEvent('.oss-attribute', 'mouseenter');
      await assert.tooltip('.fa-lock').hasTitle('locked');
    });

    test('If the @lockTooltip paramater is not passed, the default text is used', async function (assert) {
      await render(hbs`<OSS::Attribute::RevealableEmail @onRevealEmail={{this.onRevealStub}} />`);

      await triggerEvent('.oss-attribute', 'mouseenter');
      await assert.tooltip('.fa-lock').hasTitle('Reveal email');
    });
  });

  test('Clicking on the lock icon calls the @onRevealEmail method', async function (assert) {
    await render(hbs`<OSS::Attribute::RevealableEmail @onRevealEmail={{this.onRevealStub}} />`);

    await triggerEvent('.oss-attribute', 'mouseenter');
    await click('.fa-lock');
    assert.true(this.onRevealStub.calledOnce);
  });

  test('Clicking on the lock icon displays a loader', async function (assert) {
    this.onRevealStub.returns(new Promise(() => {}));
    await render(hbs`<OSS::Attribute::RevealableEmail @onRevealEmail={{this.onRevealStub}} />`);

    await triggerEvent('.oss-attribute', 'mouseenter');
    await click('.fa-lock');
    assert.dom('.fa-circle-notch.fa-spin').exists();
  });
});
