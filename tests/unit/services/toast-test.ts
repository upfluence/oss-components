import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { click } from '@ember/test-helpers';
import ToastService from '@upfluence/oss-components/services/toast';

const TOAST_TYPES = ['info', 'success', 'warning', 'error'];

module('Unit | Service | toast', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(function () {
    this.service = this.owner.lookup('service:toast');
  });

  test('it exists', function (assert) {
    assert.ok(this.service);
    assert.ok(this.service instanceof ToastService);

    assert.ok(typeof this.service.info === 'function');
    assert.ok(typeof this.service.success === 'function');
    assert.ok(typeof this.service.warning === 'function');
    assert.ok(typeof this.service.error === 'function');
  });

  module('public methods', function () {
    TOAST_TYPES.forEach((type) => {
      test(`${type}`, async function (assert: Assert) {
        const toast = this.service[type](`Message of ${type}`, `Title ${type}`, { timeout: 100 });

        assert.dom(toast).exists();
        assert.dom(toast).hasClass(`toast--${type}`);
        assert.dom(toast).hasClass(`toast--visible`);
        assert.dom(toast.querySelector('.subtitle')).hasText(`Message of ${type}`);
        assert.dom(toast.querySelector('.title')).hasText(`Title ${type}`);
      });
    });
  });

  test('it should close the toast when clicking on the button', async function (assert: Assert) {
    const toast = this.service.error('Message', 'Title', { timeout: 100 });

    const buttonElement = toast.querySelector('button');
    assert.dom(buttonElement).exists({ count: 1 });
    await click(<Element>buttonElement);

    const animation = toast.getAnimations().filter((animation: Animation) => animation.id === 'destroy')[0];
    await animation.finished;
    assert.true(toast.parentElement === null);
  });

  test('the onclick function is called when the toast is clicked', async function (assert: Assert) {
    const toast = this.service.error('Message', 'Title', {
      timeout: 100,
      onclick: (event: MouseEvent) => {
        assert.equal(event.type, 'click');
      }
    });

    await click(toast);
    assert.expect(1);
  });

  module('badge options', function () {
    test('it should display icon', async function (assert: Assert) {
      const toast = this.service.error('Message', 'Title', { timeout: 100, badge: { icon: 'fab fa-jedi-order' } });

      const badge = toast.querySelector('.upf-badge i');
      assert.dom(badge).hasClass('fab');
      assert.dom(badge).hasClass('fa-jedi-order');
    });

    test('it should display img', async function (assert: Assert) {
      const url = '/assets/images/upfluence-white-logo.svg';
      const toast = this.service.error('Message', 'Title', {
        timeout: 100,
        badge: { image: url }
      });

      const badge = toast.querySelector('.upf-badge img');
      assert.dom(badge).hasAttribute('src', url);
    });

    test('it should display text', async function (assert: Assert) {
      const toast = this.service.error('Message', 'Title', {
        timeout: 100,
        badge: { text: '1' }
      });

      const badge = toast.querySelector('.upf-badge span');
      assert.dom(badge).hasText('1');
    });
  });
});
