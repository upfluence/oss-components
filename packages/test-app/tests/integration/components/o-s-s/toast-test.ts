import { htmlSafe } from '@ember/template';
import { click, find, render, triggerEvent, waitUntil } from '@ember/test-helpers';
import { TOAST_TYPES, type ToastType } from '@upfluence/oss-components/components/o-s-s/toast';

import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';
import sinon from 'sinon';

const ICONS: Record<ToastType, string> = {
  info: 'fa-info-circle',
  success: 'fa-check-circle',
  warning: 'fa-exclamation-circle',
  error: 'fa-exclamation-triangle'
};

function animation(selector: string, id: string): Animation | undefined {
  return find(selector)
    ?.getAnimations()
    .find((animation: Animation) => animation.id === id);
}

module('Integration | Component | o-s-s/toast', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.onClick = sinon.spy();
    this.onClear = sinon.spy();
  });

  TOAST_TYPES.forEach((type: ToastType) => {
    test(`it renders the ${type} type`, async function (assert) {
      this.type = type;
      await render(hbs`<OSS::Toast @type={{this.type}} @title="Title" @subtitle="Subtitle" @timeout="none" />`);

      assert.dom('.toast').hasClass(`toast--${type}`);
      assert.dom('.toast').hasClass('toast--visible');
      assert.dom('.toast .icon i').hasClass('far');
      assert.dom('.toast .icon i').hasClass(ICONS[type]!);
      assert.dom('.toast .title').hasText('Title');
      assert.dom('.toast .subtitle').hasText('Subtitle');
    });
  });

  test('the title is optional', async function (assert) {
    await render(hbs`<OSS::Toast @type="info" @subtitle="Subtitle" @timeout="none" />`);

    assert.dom('.toast .title').doesNotExist();
    assert.dom('.toast .subtitle').hasText('Subtitle');
  });

  module('subtitle', function () {
    test('a SafeString is rendered as HTML', async function (assert) {
      this.subtitle = htmlSafe('Go to <a href="#">the page</a>');
      await render(hbs`<OSS::Toast @type="info" @subtitle={{this.subtitle}} @timeout="none" />`);

      assert.dom('.toast .subtitle a').hasText('the page');
    });

    test('a plain string is escaped', async function (assert) {
      this.subtitle = 'Go to <a href="#">the page</a>';
      await render(hbs`<OSS::Toast @type="info" @subtitle={{this.subtitle}} @timeout="none" />`);

      assert.dom('.toast .subtitle a').doesNotExist();
      assert.dom('.toast .subtitle').hasText('Go to <a href="#">the page</a>');
    });
  });

  module('badge', function () {
    test('the image is used first', async function (assert) {
      this.badge = { image: '/assets/images/upfluence-white-logo.svg', icon: 'fab fa-jedi-order', text: '1' };
      await render(hbs`<OSS::Toast @type="info" @subtitle="Subtitle" @badge={{this.badge}} @timeout="none" />`);

      assert.dom('.toast .upf-badge img').hasAttribute('src', '/assets/images/upfluence-white-logo.svg');
      assert.dom('.toast .upf-badge i').doesNotExist();
      assert.dom('.toast .icon').doesNotExist();
    });

    test('the icon is used before the text', async function (assert) {
      this.badge = { icon: 'fab fa-jedi-order', text: '1' };
      await render(hbs`<OSS::Toast @type="info" @subtitle="Subtitle" @badge={{this.badge}} @timeout="none" />`);

      assert.dom('.toast .upf-badge i').hasClass('fab');
      assert.dom('.toast .upf-badge i').hasClass('fa-jedi-order');
      assert.dom('.toast .upf-badge .upf-badge__text').doesNotExist();
    });

    test('it displays the text', async function (assert) {
      this.badge = { text: '1' };
      await render(hbs`<OSS::Toast @type="info" @subtitle="Subtitle" @badge={{this.badge}} @timeout="none" />`);

      assert.dom('.toast .upf-badge .upf-badge__text').hasText('1');
    });

    test('the text is escaped', async function (assert) {
      this.badge = { text: '<img src="x" />' };
      await render(hbs`<OSS::Toast @type="info" @subtitle="Subtitle" @badge={{this.badge}} @timeout="none" />`);

      assert.dom('.toast .upf-badge img').doesNotExist();
      assert.dom('.toast .upf-badge .upf-badge__text').hasText('<img src="x" />');
    });

    test('it falls back on the type icon when empty', async function (assert) {
      this.badge = {};
      await render(hbs`<OSS::Toast @type="error" @subtitle="Subtitle" @badge={{this.badge}} @timeout="none" />`);

      assert.dom('.toast .upf-badge').doesNotExist();
      assert.dom('.toast .icon i').hasClass('fa-exclamation-triangle');
    });
  });

  module('interactions', function () {
    test('it renders a single close button', async function (assert) {
      await render(hbs`<OSS::Toast @type="info" @subtitle="Subtitle" @timeout="none" />`);

      assert.dom('.toast button').exists({ count: 1 });
      assert.dom('.toast button').hasAttribute('data-control-name', 'toast-close-button');
    });

    test('@onClick is called on the first click only', async function (assert) {
      await render(hbs`<OSS::Toast @type="info" @subtitle="Subtitle" @timeout="none" @onClick={{this.onClick}} />`);

      await click('.toast');
      await click('.toast');

      assert.ok(this.onClick.calledOnce);
      assert.strictEqual(this.onClick.firstCall.args[0].type, 'click');
    });

    test('the close button calls @onClear once the exit animation is over', async function (assert) {
      await render(
        hbs`<OSS::Toast @type="info" @subtitle="Subtitle" @timeout="none"
                        @onClick={{this.onClick}} @onClear={{this.onClear}} />`
      );

      await click('.toast button');

      assert.ok(animation('.toast', 'destroy'));
      await waitUntil(() => this.onClear.calledOnce);
      assert.ok(this.onClick.notCalled);
    });

    test('it clears itself once the timeout is over', async function (assert) {
      await render(hbs`<OSS::Toast @type="info" @subtitle="Subtitle" @timeout={{100}} @onClear={{this.onClear}} />`);

      await waitUntil(() => this.onClear.calledOnce);
      assert.ok(this.onClear.calledOnce);
    });

    test('there is no counter animation when @timeout is "none"', async function (assert) {
      await render(hbs`<OSS::Toast @type="info" @subtitle="Subtitle" @timeout="none" />`);

      assert.strictEqual(find('.toast .counter')?.getAnimations().length, 0);
    });

    test('hovering the toast pauses the counter', async function (assert) {
      await render(hbs`<OSS::Toast @type="info" @subtitle="Subtitle" @timeout={{5000}} />`);

      assert.strictEqual(animation('.toast .counter', 'counter')?.playState, 'running');

      await triggerEvent('.toast', 'mouseenter');
      assert.strictEqual(animation('.toast .counter', 'counter')?.playState, 'paused');

      await triggerEvent('.toast', 'mouseleave');
      assert.strictEqual(animation('.toast .counter', 'counter')?.playState, 'running');
    });
  });
});
