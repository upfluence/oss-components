import { run } from '@ember/runloop';
import { click, settled, waitUntil } from '@ember/test-helpers';

import { setupTest } from 'ember-qunit';
import { module, test } from 'qunit';
import sinon from 'sinon';

import { type ToastType, TOAST_TYPES } from '@upfluence/oss-components/components/o-s-s/toast';
import ToastService from '@upfluence/oss-components/services/toast';

function findToast(selector: string = ''): HTMLElement | null {
  return document.querySelector(`.toasts-container .toast${selector}`);
}

module('Unit | Service | toast', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(function () {
    this.service = this.owner.lookup('service:toast');
  });

  test('it exists', function (assert) {
    assert.ok(this.service);
    assert.ok(this.service instanceof ToastService);

    assert.strictEqual(typeof this.service.info, 'function');
    assert.strictEqual(typeof this.service.success, 'function');
    assert.strictEqual(typeof this.service.warning, 'function');
    assert.strictEqual(typeof this.service.error, 'function');
  });

  module('public methods', function () {
    TOAST_TYPES.forEach((type: ToastType) => {
      test(`${type}`, async function (assert: Assert) {
        this.service[type](`Message of ${type}`, `Title ${type}`, { timeout: 'none' });
        await settled();

        const toast = findToast(`.toast--${type}`);
        assert.dom(toast).exists();
        assert.dom(toast).hasClass('toast--visible');
        assert.dom(toast?.querySelector('.subtitle')).hasText(`Message of ${type}`);
        assert.dom(toast?.querySelector('.title')).hasText(`Title ${type}`);
      });
    });
  });

  test('it adds nothing when both the message and the title are empty', async function (assert: Assert) {
    assert.strictEqual(this.service.info('', ''), undefined);
    await settled();

    assert.strictEqual(this.service.toasts.length, 0);
    assert.dom('.toasts-container', document.body).doesNotExist();
  });

  test('it renders every toast in a single container', async function (assert: Assert) {
    this.service.info('First', 'Title', { timeout: 'none' });
    this.service.success('Second', 'Title', { timeout: 'none' });
    this.service.error('Third', 'Title', { timeout: 'none' });
    await settled();

    assert.dom('.toasts-container', document.body).exists({ count: 1 });
    assert.dom('.toasts-container .toast', document.body).exists({ count: 3 });
  });

  test('it should close the toast when clicking on the button', async function (assert: Assert) {
    this.service.error('Message', 'Title', { timeout: 'none' });
    await settled();

    const button = findToast()?.querySelector('button');
    assert.dom(button).exists({ count: 1 });
    await click(button as Element);

    await waitUntil(() => !findToast());
    assert.strictEqual(this.service.toasts.length, 0);
  });

  test('the toast is removed once the timeout is over', async function (assert: Assert) {
    this.service.info('Message', 'Title', { timeout: 100 });
    await settled();
    assert.dom(findToast()).exists();

    await waitUntil(() => !findToast());
    assert.strictEqual(this.service.toasts.length, 0);
  });

  test('the onclick function is called when the toast is clicked', async function (assert: Assert) {
    const onclickSpy = sinon.spy();
    this.service.error('Message', 'Title', { timeout: 'none', onclick: onclickSpy });
    await settled();

    await click(findToast() as Element);

    assert.ok(onclickSpy.calledOnce);
    assert.strictEqual(onclickSpy.firstCall.args[0].type, 'click');
  });

  test('it removes the container when the service is destroyed', async function (assert: Assert) {
    this.service.info('Message', 'Title', { timeout: 'none' });
    await settled();
    assert.dom('.toasts-container', document.body).exists();

    run(() => this.service.destroy());
    await settled();

    assert.dom('.toasts-container', document.body).doesNotExist();
  });

  module('badge options', function () {
    test('it should display icon', async function (assert: Assert) {
      this.service.error('Message', 'Title', { timeout: 'none', badge: { icon: 'fab fa-jedi-order' } });
      await settled();

      const badge = findToast()?.querySelector('.upf-badge i');
      assert.dom(badge).hasClass('fab');
      assert.dom(badge).hasClass('fa-jedi-order');
    });

    test('it should display img', async function (assert: Assert) {
      const url = '/assets/images/upfluence-white-logo.svg';
      this.service.error('Message', 'Title', { timeout: 'none', badge: { image: url } });
      await settled();

      assert.dom(findToast()?.querySelector('.upf-badge img')).hasAttribute('src', url);
    });

    test('it should display text', async function (assert: Assert) {
      this.service.error('Message', 'Title', { timeout: 'none', badge: { text: '1' } });
      await settled();

      assert.dom(findToast()?.querySelector('.upf-badge span')).hasText('1');
    });

    test('it escapes the text', async function (assert: Assert) {
      this.service.error('Message', 'Title', { timeout: 'none', badge: { text: '<img src="x" />' } });
      await settled();

      assert.dom(findToast()?.querySelector('.upf-badge img')).doesNotExist();
      assert.dom(findToast()?.querySelector('.upf-badge span')).hasText('<img src="x" />');
    });
  });
});
